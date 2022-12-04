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
    this.map = [["R", "R", "W"],
                ["G", "C", "W"],
                ["G", "B", "B"]];
  }
  
  setPrompt(){
    console.log(`${this.map.map((element) => element.join(" ")).join("\n")}
    `);
    
    this.readline.prompt();
    this.readline.on('line', (command) => {
      if(command == 'Q') {
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
      console.log("Bye~");
      if(command = 'q'){
        process.exit();
      }
    });
  }
  
  init(){
    this.splitCommand();
    this.gameStart();
  }
  
  splitCommand(){
    this.commandInArray = this.command.split("");
  }
  
  gameStart(){
    for(let i = 0; i < this.commandInArray.length; i++){
      this.index = i;
      if(this.commandInArray[i] === `U`){
        this.topLineMove();
      }
      if(this.commandInArray[i] === 'R'){
        this.rightLineMove();
      }
      if(this.commandInArray[i] === 'L'){
        this.leftLineMove();
      }
      if(this.commandInArray[i] === 'B'){
        this.bottomLineMove();
      }
    }
  }
  
  topLineMove(){
    if(this.commandInArray[this.index + 1] === `'`){
      this.topLineMoveRight();
    } else {
      this.topLineMoveLeft();
    }
  }
  
  topLineMoveLeft(){
    var leftElement = this.map[0][0];
    this.map[0][0] = this.map[0][1];
    this.map[0][1] = this.map[0][2];
    this.map[0][2] = leftElement;
    this.print();
  }
  
  topLineMoveRight(){
    var rigthElement = this.map[0][2];
    this.map[0][2] = this.map[0][1];
    this.map[0][1] = this.map[0][0];
    this.map[0][0] = rigthElement;
    this.print();
  }
  
  rightLineMove(){
    if(this.commandInArray[this.index + 1] === `'`){
      this.rightLineMoveDown();
    } else {
      this.rightLineMoveUp();
    }
  }

  rightLineMoveUp(){
    var topElement = this.map[0][2]
    this.map[0][2] = this.map[1][2];
    this.map[1][2] = this.map[2][2];
    this.map[2][2] = topElement;
    this.print();
  }

  rightLineMoveDown(){
    var bottomElement = this.map[2][2]
    this.map[2][2] = this.map[1][2];
    this.map[1][2] = this.map[0][2];
    this.map[0][2] = bottomElement
    this.print();
  }

  leftLineMove(){
    if(this.commandInArray[this.index + 1] === `'`){
      this.leftLineMoveUp();
    } else {
      this.leftLineMoveDown();
    }
  }

  leftLineMoveUp(){
    var topElement = this.map[0][0]
    this.map[0][0] = this.map[1][0];
    this.map[1][0] = this.map[2][0];
    this.map[2][0] = topElement;
    this.print();
  }

  leftLineMoveDown(){
    var bottomElement = this.map[2][0]
    this.map[2][0] = this.map[1][0];
    this.map[1][0] = this.map[0][0];
    this.map[0][0] = bottomElement
    this.print();
  }

  bottomLineMove(){
    if(this.commandInArray[this.index + 1] === `'`){
      this.bottomLineMoveLeft();
    } else {
      this.bottomLineMoveRight();
    }
  }
  
  bottomLineMoveLeft(){
    var leftElement = this.map[2][0];
    this.map[2][0] = this.map[2][1];
    this.map[2][1] = this.map[2][2];
    this.map[2][2] = leftElement;
    this.print();
  }
  
  bottomLineMoveRight(){
    var rigthElement = this.map[2][2];
    this.map[2][2] = this.map[2][1];
    this.map[2][1] = this.map[2][0];
    this.map[2][0] = rigthElement;
    this.print();
  }

  print(){
    if(this.commandInArray[this.index + 1] === `'`){
      this.printCommand = [];
      this.printCommand.push(this.commandInArray[this.index]);
      this.printCommand.push(this.commandInArray[this.index + 1]);
      this.command = this.printCommand.join("");
    } else {
      this.command = this.commandInArray[this.index];
    }

    console.log(`${this.command}\n${this.map.map((element) => element.join(" ")).join("\n")}\n`)
  }
}

const rubikscube = new Rubikscube();
rubikscube.setPrompt();


