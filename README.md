2020 코드스쿼드 마스터즈 코스 기출문제 - 루빅스큐브

## Step 1  : 단어 밀어내기 구현하기

### 1단계 구현 요구사항

1. 입력: 사용자로부터 단어 하나, 정수 숫자 하나( -100 <= N < 100) , L 또는 R을 입력받는다. 
**(이때, L 또는 R은 대소문자 모두 입력 가능하다.)**
2. 주어진 단어를 L이면 주어진 숫자 갯수만큼 왼쪽으로, R이면 오른쪽으로 밀어낸다.
3. 밀려나간 단어는 반대쪽으로 채워진다.


### 1단계 코딩 요구사항

- 컴파일 및 실행되지 않을 경우 불합격
- 자신만의 기준으로 최대한 간결하게 코드 작성

----------------------------------------

## 1단계 구현 과정

1. setprompt() : 사용자로부터 입력받기 위한 함수
  - this.command : 입력값 변수화
  - analysisCommand() : 실행
  - this.readline.prompt() : 다시 입력 prompt 실행

2. exitPrompt() : 실행된 프롬프트 종료조건
  - 사용자로부터 q 입력받으면 종료 

3. analysisCommand(): prompt로 입력 받은 commandLine 분석
  
  - splitCommand() 실행
  - constraintsError() 실행
    
4. splitCommand(): 문자열인 commandline을 배열로 변환 - split(' ') 사용해서 단어별로 구분.
  
  - 단어: commandline[0] 변수화
  - 숫자: commandline[1] 변수화
  - 방향: commandline[2] 변수화
  
5. constraintsError(): 입력된 단어, 숫자, 방향이 아래 각 조건에 충족하는지 확인 후, 조건에 맞지 않으면 에러문자 출력.
  
  - 단어: 단어가 아니면 경고 메세지 ------------------------------------> 구현 실패, 더 고민 예정
  - 숫자: -100 <= N < 100이 아니거나, 혹은 숫자가 아니면 경고 메시지
  - 방향: or R or l or r 이 아닌 다른 문자열 입력시 경고 메세지 
  
  -> 조건을 모두 통과하면 moveWord() 실행

6. moveWord(): 
   
  - wordInArray : 1.1의 단어를 우선 split('')을 이용해 배열로 변환해서 변수화
    - 입력된 단어가 L 혹은 l 이면 moveWordLeft() 실행
    - 입력된 단어가 R 혹은 r 이면 movdWordRigth() 실행
  - 실행이 끝나면 printOutput() 실행해서 결과 화면 출력. 끝 !

7. moveWordLeft :
  
  - 입력된 숫자의 절대값 만큼 for문 실행
    - for문 : 
      - 입력된 숫자가 0보다 크면,
        wordInArray의 마지막 요소를 splice해서, 
        splice한 마지막요소를 wordInArray의 0번째 index에 다시 splice
      - 입력된 숫자가 0보다 작으면,
        wordInArray의 첫번째 요소를 splice해서,
        splice한 첫번쨰 요소를 wordInArray의 마지막 index에 다시 splce

8. moveWordRift :
  
  - 입력된 숫자의 절대값 만큼 for문 실행
    - for문 : 
      - 입력된 숫자가 0보다 크면,
      wordInArray의 첫번째 요소를 splice해서,
      splice한 첫번쨰 요소를 wordInArray의 마지막 index에 다시 splce

      - 입력된 숫자가 0보다 작으면,
      wordInArray의 마지막 요소를 splice해서, 
      splice한 마지막요소를 wordInArray의 0번째 index에 다시 splice