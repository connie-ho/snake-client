const {connect} = require('./client');
console.log('Connecting ...');

const conn = connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  })

  return stdin;
}

setupInput()