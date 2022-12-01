class rubikscube {
  constructor(){
    this.readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: '> ',
    });
  }

  init(){
    this.setPrompt();
  }

  setPrompt(){
  this.readline.prompt();
    this.readline.on('line', (line) => {
      if(line == 'q') {
        this.readline.close();
      }
      console.log(line);
      this.readline.prompt()
    });
    this.exitPrompt();
  }

  exitPrompt(){
    this.readline.on('close', (line) => {
      console.log("bye~");
      if(line = 'q'){
        process.exit();
      }
    });
  }
}

const playRubiscube = new rubikscube();
playRubiscube.init();

