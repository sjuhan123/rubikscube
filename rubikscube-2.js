/*
초기화면 불러오기.
초기화면 이중 배열화

readline 으로 프롬프트 사용자 입력값 가져오기
입력값 분석하기
*/

class Rubikscube {
  constructor(){
    this.readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: 'CUBE> ',
    });
    this.map = `R R W\nG C W\nG B B`;
    this.arrayIn2d = [];
  }

  setPrompt(){
    console.log(this.map);
    this.readline.prompt();
    this.readline.on('line', (command) => {
      if(command == 'q') {
        this.readline.close();
      }
      this.command = command;
      this.init();
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
  
  init(){
    this.convertMapInArray();
    this.splitCommand();
    this.gameStart();
  }

  convertMapInArray(){
    this.array = this.map.split("\n");
    for(let value of this.array){
      this.arrayIn2d.push(value.split(" "));
    }
  }

  splitCommand(){
    this.commandInArray = this.command.split("");
  }

  gameStart(){
    this.print = [];

    for(let i = 0; i < this.commandInArray.length; i++){
      if(this.commandInArray[i] === `'`){continue;}
      if(this.commandInArray[i] === `U`){
        this.index = i;
        this.topLineMove();
      }
      this.print.push(this.arrayIn2d);
    }

    this.gameEnd();
  }
  
  topLineMove(){
    if(this.commandInArray[this.index + 1] === `'`){
      this.topLineMoveRight();
    } else {
      this.topLineMoveLeft();
    }
  }

  topLineMoveLeft(){
    this.topLine = this.arrayIn2d[0];
    
    this.headElement = this.topLine.splice(0,1);
    this.topLine.splice(this.topLine.length, 0, this.headElement[0]);
    
    this.arrayIn2d.splice(0, 1, this.topLine);
  }
  
  topLineMoveRight(){
    this.topLine = this.arrayIn2d[0];
    
    this.tailElement = this.topLine.splice(this.topLine.length -1, 1);
    this.topLine.splice(0, 0, this.tailElement[0]);
    
    this.arrayIn2d.splice(0, 1, this.topLine);
  }
  
  gameEnd(){
    console.log(this.print);
  }
}

const rubikscube = new Rubikscube();
rubikscube.setPrompt();


