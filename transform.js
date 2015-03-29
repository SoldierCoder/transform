var program = require('commander');

program
  .version('0.0.1')
  .option('-u, --user_id', 'filtering by userId.')
  .option('-c, --created_on', 'filtering by date created.')
  .parse(process.argv);

if (process.argv.slice(2).length) {
  console.log(' - %s User Id, created on %s \n', program.user_id, program.created_on);
}
program.outputHelp();

