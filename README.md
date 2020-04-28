# javascript-baseball-game
javascript-baseball-game

## 1단계: 간단 야구 게임 구현하기
###  flow before coding (ver1 - 간략하게)
    - [ ] 게임이 시작되면 "첫 번째 타자가 타석에 입장했습니다." 메시지 출력
        - [ ] strike, ball, anta, out 중 랜덤하게 한가지가 선택되고 (출력되기)
            - [ ] 이때마다 strike, ball, anta, out 스코어(객체)가 업데이트 되기
            - [ ] 이때마다 (스코어 객체 중에서)strike, ball, out의 현황이 출력되기
                - [ ] if) strike 3회 =>  out 1회로 (스코어 객체가)업데이트 되기
                    - [ ] *a* 이때마다 "다음 타자가 타석에 입장했습니다." 메세지 출력하기
                    - [ ] *b* 이때마다 (스코어객체의)strike, ball 점수는 초기화되기
                - [ ] if) ball 4회 =>  anta 1회로 1회로 (스코어 객체가)업데이트 되기
                    - [ ] *a* 이때마다 "다음 타자가 타석에 입장했습니다." 메세지 띄우기
                    - [ ] *b* 이때마다 (스코어객체의)strike, ball 점수는 초기화되기
                - [ ] if) out이 3회가 되면 전체 "최종 안타수: x" 출력하고 & "GAME OVER" 메시지 출력하기

***

###  flow before coding (ver2 - 최대한 자세하게 다시 기록해보기)
    - [ ] 게임이 시작되면 "첫 번째 타자가 타석에 입장했습니다." 메시지 출력
    
    - [ ] strike, ball, anta, out 중 랜덤하게 한가지가 선택된다.
    
        - [ ] if) strike가 선택되면 
            - [ ] concole에 "스트라이크!" 출력되기
            - [ ] 스코어객체 strike 점수 +1 업데이트 되기
                - [ ] if) 스코어객체 strike가 3회 이면
                    - [ ] 스코어객체 strike, ball 점수는 초기화되기
                    - [ ] 스코어객체 out 점수 +1 업데이트 되기
                    - [ ] concole에 "아웃! 다음 타자가 타석에 입장했습니다." 메세지 출력하기
            - [ ] concole에 스코어 객체중 strike, ball, out의 현황이 출력되기
            
        - [ ] if) ball이 선택되면 
            - [ ] concole에 "볼!" 출력되기
            - [ ] 스코어객체 ball 점수가 +1 업데이트 되기
                - [ ] if) 스코어객체 ball이 4회 이면
                    - [ ] 스코어객체 strike, ball 점수는 초기화되기
                    - [ ] 스코어객체 anta 점수 +1 업데이트 되기
                    - [ ] concole에 "안타! 다음 타자가 타석에 입장했습니다." 메세지 출력하기
            - [ ] concole에 스코어 객체중 strike, ball, out의 현황이 출력되기
                
        - [ ] if) anta가 선택되면 
            - [ ] concole에 "안타! 다음 타자가 타석에 입장했습니다." 메세지 출력하기
            - [ ] 스코어객체 strike, ball 점수는 초기화되기
            - [ ] 스코어객체 anta 점수 +1 업데이트 되기
            - [ ] concole에 스코어 객체중 strike, ball, out의 현황이 출력되기

        - [ ] if) out이 선택되면 
            - [ ] 스코어객체 strike, ball 점수는 초기화되기
            - [ ] 스코어객체 out 점수 +1 업데이트 되기
                - [ ] if) out이 3회가 되면 
                    - [ ] concole에 "아웃!" 메세지 출력하기
                    - [ ] concole에 스코어 객체중 strike, ball, out의 현황이 출력되기
                    - [ ] concole에 "최종 안타수: (스코어객체의 안타수인) x" 출력하고 & "GAME OVER" 메시지 출력하기
                - [ ] else) 
                    - [ ] concole에 "아웃! 다음 타자가 타석에 입장했습니다." 메세지 출력하기
                    - [ ] concole에 스코어 객체중 strike, ball, out의 현황이 출력되기
                    
    - [ ] if) out이 3회가 되면 concole에 "최종 안타수: (스코어객체의 안타수인) x" 출력하고 & "GAME OVER" 메시지 출력하기 // 이 부분은 매번 검사가 필요할 것 같은데..!

*** 
    
### 필요한 객체
    - [ ] strike, ball, anta, out 의 현재 스코어를 관리하는 객체가 필요하다.!
        - 전반적으로 다 접근이 가능해야하니 넓은 스코프의 변수로 만들어야 할 것 같다.

*** 
    
### 생각해보기
    - 오류의 경우도 생각해보기!!
    - equal list는 동시에 고려해서 적절히 결정하며 코드짜기
    - 반복되는 기능들(행동들)은 최대한 묶어서 함수로 만들어보기
        - 일단 작은 기능들의 함수를 먼저 만들고 큰 단위로 나아가야 할까??
    - 게임 진행 flow : 게임시작메세지 출력 -> 랜덤으로 뽑기(등등진행) -> out체크하며 게임끝낼지 결정(끝내는 기준은 3이상)
        - 그렇다면 게임이 계속 이어지는 기준은 out에 달려있다.
        - while (out < 3) 로 감싸면 어떨까? 
    - 그렇다면 필요한 함수들은 뭐가 있을까? ( 만드는 우선순위는 좀 더 고려해 봐야겠다! )
        - strike,ball,anta,out각각의 기능 실행 함수 4개
        - 스코어 객체의 strike, ball 초기화하는 함수
        - 랜덤하게 한가지 고르는 함수
        - 함수랜덤 결과에 따른 실행 함수가 필요할 것 같다.
        - 아웃 현황에 따라서 게임을 진행하거나 마치는 함수가 필요할 것 같다.
        - 메세지 출력을 모아놓은 함수? 혹은 변수들? (어떤게 더 나을까? 그냥 그떄그떄 해주는게 console.log()로 출력해주는게 나으려나?)
            - nextPayer 메세지
            - strike 메세지 
            - ball 메세지
            - anta 메세지
            - out 메세지
            - gameOver 메세지 (이 부분은 점수를 넘겨 받아서 출력해야해서 인자가 필요하려나?)
            - currentScore 메세지 (이 부분은 점수를 넘겨 받아서 출력해야해서 인자가 필요하려나?)
        - 점수(+1) 업그레이드 함수도 필요할까?
            - (혹은 그떄그떄 스코어 객체에 접근해서 올려줘도 될 것 같다.)
