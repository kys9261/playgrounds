module.exports = function (app) {
  let oneTimeFlag = false;
  let message = "";

  // page open
  app.get("/polling", function (req, res) {
    res.render("polling.html");
  });

  // polling api
  app.get("/xhr_polling", function (req, res) {
    res.json({ msg: message, status: 200 });
    healthCheck();
  });

  function healthCheck() {
    if (oneTimeFlag) {
      // API가 최초 호출시 해당 함수가 1번만 실행되게 한다.
      return;
    }
    oneTimeFlag = true;

    // 10초 뒤에 서버에 변경사항이 생긴다.
    setTimeout(function () {
      message = "Server update!!!!";
    }, 10000);
  }
};
