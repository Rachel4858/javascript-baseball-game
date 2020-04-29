const baseball = {}; // Q. object이므로 const로 선언했는데 적절한지 모르겠다.

baseball.currentScore = {
  strike: 2,
  ball: 0,
  hit: 0,
  out: 0
};

baseball.getStrike = function () {
  this.showMessage.strikeMessage();
  this.currentScore.strike++;

  if (this.currentScore.strike === 3) {
    // todo 스트라이크와 볼은 초기화 함수 넣기
    this.currentScore.out++; // Q. 15,16 이 둘은 과연 동시에 일어날까?

    if (this.currentScore.out === 3) {
      // todo 3아웃인지 조건걸고 3아웃이면 경기종료!
    } else {
      this.showMessage.outMessage();
      this.showMessage.nextPayerMessage();
    }
  }

  this.showMessage.currentScoreMessage()
};



baseball.showMessage = {
  startMessage: function () {
    console.log("첫 번째 타자가 타석에 입장했습니다.")
  },
  strikeMessage: function () {
    console.log("스트라이크!")
  },
  ballMessage: function () {
    console.log("볼!")
  },
  hitMessage: function () {
    console.log("안타!")
  },
  outMessage: function () {
    console.log("아웃!")
  },
  nextPayerMessage: function () {
    console.log("다음 타자가 타석에 입장했습니다.")
  },
  currentScoreMessage: function () {
    let strike = baseball.currentScore.strike;
    let ball = baseball.currentScore.ball;
    let out = baseball.currentScore.out;
    console.log(`[ 현재스코어 = ${strike}S ${ball}B ${out}O ]`);
  },
  gameOverMessage: function () {
    let hit = baseball.currentScore.hit;
    console.log(`[ 최종 안타수 = ${hit} ] \n\ -GAME OVER-`);
  }
};


baseball.playGame = function () {
  this.getStrike();


};


baseball.playGame();

