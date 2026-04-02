import { spawnSync } from 'child_process';
import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    shell: true,
  });

  if (result.status !== 0) {
    throw new Error(`Commande échouée: ${command} ${args.join(' ')}`);
  }
}

function runAndCapture(command, args) {
  const result = spawnSync(command, args, {
    encoding: 'utf-8',
    shell: true,
  });

  return {
    status: result.status ?? 1,
    stdout: result.stdout || '',
    stderr: result.stderr || '',
  };
}

async function ask(question) {
  const rl = readline.createInterface({ input, output });
  const answer = (await rl.question(question)).trim().toLowerCase();
  rl.close();
  return answer;
}

async function askRaw(question) {
  const rl = readline.createInterface({ input, output });
  const answer = (await rl.question(question)).trim();
  rl.close();
  return answer;
}

async function main() {
  const tokenPresent = Boolean(process.env.NPM_TOKEN && process.env.NPM_TOKEN.trim());

  console.log('--- Release @derroce/icons ---');
  console.log('Ce script va exécuter:');
  console.log('1) npm run build');
  console.log('2) npm version patch --no-git-tag-version');
  console.log('3) npm publish --access public');
  console.log(`NPM_TOKEN détecté: ${tokenPresent ? 'oui' : 'non'}`);
  console.log('');

  const shouldContinue = await ask('Continuer ? (y/n): ');
  if (shouldContinue !== 'y' && shouldContinue !== 'yes') {
    console.log('Release annulée.');
    return;
  }

  console.log('\n[1/3] Build en cours...');
  run('npm', ['run', 'build']);

  console.log('\n[2/3] Bump version patch (compatible repo dirty)...');
  run('npm', ['version', 'patch', '--no-git-tag-version']);

  const shouldPublish = await ask('\nPublier sur npm maintenant ? (y/n): ');
  if (shouldPublish !== 'y' && shouldPublish !== 'yes') {
    console.log('Publication annulée après bump version.');
    console.log('Tu peux publier plus tard avec: npm publish --access public');
    return;
  }

  console.log('\n[3/3] Publication npm...');
  let publishResult = runAndCapture('npm', ['publish', '--access', 'public']);
  if (publishResult.status !== 0) {
    const outputText = `${publishResult.stdout}\n${publishResult.stderr}`;
    const needsOtp = /EOTP|one-time password|--otp=/i.test(outputText);
    const is404Publish = /E404|404 Not Found|not in this registry/i.test(outputText);

    if (needsOtp) {
      const otp = await askRaw('Code OTP npm (6 à 8 chiffres): ');
      if (!/^\d{6,8}$/.test(otp)) {
        throw new Error('OTP invalide. Réessaie avec un code numérique (6 à 8 chiffres).');
      }

      publishResult = runAndCapture('npm', ['publish', '--access', 'public', `--otp=${otp}`]);
      if (publishResult.status !== 0) {
        process.stdout.write(publishResult.stdout);
        process.stderr.write(publishResult.stderr);
        throw new Error('Publication npm échouée après saisie OTP (code invalide/expiré).');
      }
    }

    if (publishResult.status === 0) {
      process.stdout.write(publishResult.stdout);
      process.stderr.write(publishResult.stderr);
      console.log('\nRelease terminée avec succès.');
      return;
    }

    if (is404Publish) {
      const whoamiResult = runAndCapture('npm', ['whoami']);
      const currentUser = whoamiResult.status === 0 ? whoamiResult.stdout.trim() : '(inconnu)';

      console.error('\nPublication npm refusée (E404).');
      console.error('Diagnostic probable:');
      console.error(`- Compte npm connecté: ${currentUser}`);
      console.error('- Le scope du package (@derroce) n\'existe pas sur npm, ou ton compte n\'a pas les droits dessus.');
      console.error('\nActions à faire:');
      console.error('1) Vérifie le compte: npm whoami');
      console.error('2) Si besoin, reconnecte-toi: npm login');
      console.error('3) Vérifie le nom dans package.json (name) et le scope ciblé.');
      console.error('4) Si @derroce est une org npm, ajoute ton user comme membre avec droit publish.');
      console.error('5) Sinon, publie avec un scope qui t\'appartient.');
      throw new Error('Publication npm échouée: droits/scope npm invalides.');
    }

    process.stdout.write(publishResult.stdout);
    process.stderr.write(publishResult.stderr);
    throw new Error('Commande échouée: npm publish --access public');
  }

  process.stdout.write(publishResult.stdout);
  process.stderr.write(publishResult.stderr);

  console.log('\nRelease terminée avec succès.');
}

main().catch((error) => {
  console.error('\nErreur release:', error.message);
  process.exit(1);
});
