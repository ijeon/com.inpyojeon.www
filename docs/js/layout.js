function pad(num) {
  return num.toString().padStart(2, "0");
}

function updateTime() {
  let now = new Date();
  let year = now.getFullYear();
  let month = pad(now.getMonth() + 1);
  let day = pad(now.getDate());
  let hour = pad(now.getHours());
  let minute = pad(now.getMinutes());
  let second = pad(now.getSeconds());

  let formatted = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  $("#timestamp").text(formatted);
}

$(function () {
  function toggleTheme() {
    $("body").toggleClass("blue");
  }

  // GNB 버튼 클릭 시
  $("#gnb button").on("click", function () {
    let idx = $(this).index(); // 몇 번째 버튼인지 가져오기

    // 버튼 active 처리
    $("#gnb button").removeClass("_active");
    $(this).addClass("_active");

    // 섹션 active 처리
    $("main section").removeClass("_active").hide();
    $("main section").eq(idx).addClass("_active").show();

    $("main").scrollTop(0);
  });

  // footerlink 클릭 시
  $("#footerlink").on("click", toggleTheme);

  // 키보드 입력 처리
  $(document).on("keydown", function (e) {
    let key = e.key.toLowerCase();

    if (key === "t") {
      toggleTheme();
    } else if (key === "b") {
      $("#gnb button").eq(0).trigger("click"); // Bio/About
    } else if (key === "w") {
      $("#gnb button").eq(1).trigger("click"); // Work
    } else if (key === "h") {
      $("#gnb button").eq(2).trigger("click"); // Contact
    }
  });

  // 초기 상태: 첫 번째 섹션만 보이게
  $("main section").hide();
  $("main section._active").show();

  updateTime();
  setInterval(updateTime, 1000);

  $("[data-tip]").hover(
    function () {
      let tip = $(this).data("tip");
      $("#hovertip").text(tip);
    },
    function () {
      $("#hovertip").text("");
    }
  );
});
