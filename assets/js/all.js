"use strict";

$(document).ready(function () {
  //Assignment 
  // 點擊reply按鈕後 回覆編輯區塊出現
  $(".reply-btn").on("click", function (event) {
    event.preventDefault();
    $(".reply-area").css({
      width: '97.2%',
      height: '289px'
    });
  }); // 點擊cancel按鈕 回覆編輯區塊消失

  $(".cancel-btn").on("click", function (event) {
    event.preventDefault();
    $(".reply-area").css({
      width: '0',
      height: '0'
    });
  }); // Admin
  // emir 女孩Modal裡的下拉選單

  $(".dropdown-btn").on("click", function (event) {
    event.preventDefault();
    $(".dropdown").toggleClass("active");
  });
});
//# sourceMappingURL=all.js.map
