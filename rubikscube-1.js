class Rubikscube {
  constructor(){
    this.readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: '> ',
    });
  }
  
  setPrompt(){
    this.readline.prompt();
    this.readline.on('line', (command) => {
      if(command == 'q') {
        this.readline.close();
      }
      this.command = command;
      this.analisysCommand();
      this.readline.prompt();
    });
    this.exitPrompt();
  }
  
  exitPrompt(){
    this.readline.on('close', (command) => {
      console.log("exit");
      if(command = 'q'){
        process.exit();
      }
    });
  }
  
  analisysCommand(){
    this.splitCommand();
    this.constraintsError();
  }
  
  splitCommand(){
    this.commandInArray = this.command.split(' ');
    this.input = {
      word : this.commandInArray[0],
      number : this.commandInArray[1],
      direction : this.commandInArray[2],
    };
  }
  
  constraintsError(){
    // 아스키코드 대문자 65 ~ 90, 소문자 97~122

    if(!Number(this.input.number)){
      return console.log(`경고: 숫자만 입력가능합니다.`);
    }
    if(-100 > this.input.number || 100 < this.input.number){
      return console.log(`경고: -100 <= N < 100 범위의 숫자만 입력 가능합니다.`)
    }
    if(!(this.input.direction === 'l' || this.input.direction === 'L' || this.input.direction === 'r' || this.input.direction === 'R')){
      return console.log(`경고: 세번째 단어는 l,L,r,R 만 입력 가능합니다.`);
    }
    this.moveWord();
  }
  
  moveWord(){
    this.wordInArray = this.input.word.split('');
    this.length = this.wordInArray.length;

    if(this.input.direction === 'L' || this.input.direction === 'l'){
      this.moveWordLeft();
    }
    if(this.input.direction === 'R' || this.input.direction === 'r'){
      this.moveWordRigth();
    }
    this.printOutput();
  }

  moveWordLeft(){
    for(let i = 0; i < Math.abs(this.input.number); i++){
      if(this.input.number > 0){
        const headElement = this.wordInArray.splice(0,1);
        this.wordInArray.splice(this.length, 0, headElement[0]);
      }
      if(this.input.number < 0){
        const tailElement = this.wordInArray.splice(this.length - 1, 1);
        this.wordInArray.splice(0,0, tailElement[0]);
      }
    }
  };

  moveWordRigth(){
    for(let i = 0; i < Math.abs(this.input.number); i++){
      if(this.input.number > 0){
        const tailElement = this.wordInArray.splice(this.length - 1, 1);
        this.wordInArray.splice(0,0, tailElement[0]);
      }
      if(this.input.number < 0){
        const headElement = this.wordInArray.splice(0,1);
        this.wordInArray.splice(this.length, 0, headElement[0]);
      }
    }
  };  

  printOutput(){
    console.log(this.wordInArray.join(""));
  }
}

const playRubiscube = new Rubikscube();
playRubiscube.setPrompt();

