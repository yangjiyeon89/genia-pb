$(function () {
  //menu
  function checkCurrentGnb() {
    var _className = $("#wrap").attr("class"),
      _afterStr = _className ? _className.split(" ") : "",
      _gnbMenuLink = $(".nav-list");
    _gnbMenuLinkMo = $(".mo-cnt .nav-list");
    _gnbDepth02 = $(".depth2-wrap");
    _gnbDepth02Item = $(".depth2-list");

    switch (_afterStr[0]) {
      case "admin01_01":
        _gnbMenuLink.eq(0).find("> a").addClass("active");
        _gnbMenuLink.eq(0).find(_gnbDepth02).addClass("on");
        _gnbMenuLink
          .eq(0)
          .find(_gnbDepth02)
          .find(_gnbDepth02Item)
          .eq(0)
          .find("> a")
          .addClass("active");
        break;
      case "admin01_02":
        _gnbMenuLink.eq(0).find("> a").addClass("active");
        _gnbMenuLink.eq(0).find(_gnbDepth02).addClass("on");
        _gnbMenuLink
          .eq(0)
          .find(_gnbDepth02)
          .find(_gnbDepth02Item)
          .eq(2)
          .find("> a")
          .addClass("active");
        break;
        // s: 20230425 추가
      case "admin01_03":
        _gnbMenuLink.eq(0).find("> a").addClass("active");
        _gnbMenuLink.eq(0).find(_gnbDepth02).addClass("on");
        _gnbMenuLink
          .eq(0)
          .find(_gnbDepth02)
          .find(_gnbDepth02Item)
          .eq(1)
          .find("> a")
          .addClass("active");
        break;
        // e: 20230425 추가
      case "admin02_01":
        _gnbMenuLink.eq(1).find("> a").addClass("active");
        _gnbMenuLink.eq(1).find(_gnbDepth02).addClass("on");
        _gnbMenuLink
          .eq(1)
          .find(_gnbDepth02)
          .find(_gnbDepth02Item)
          .eq(0)
          .find("> a")
          .addClass("active");
        break;
      case "admin02_02":
        _gnbMenuLink.eq(1).find("> a").addClass("active");
        _gnbMenuLink.eq(1).find(_gnbDepth02).addClass("on");
        _gnbMenuLink
          .eq(1)
          .find(_gnbDepth02)
          .find(_gnbDepth02Item)
          .eq(1)
          .find("> a")
          .addClass("active");
        break;
      case "admin02_03":
        _gnbMenuLink.eq(1).find("> a").addClass("active");
        _gnbMenuLink.eq(1).find(_gnbDepth02).addClass("on");
        _gnbMenuLink
          .eq(1)
          .find(_gnbDepth02)
          .find(_gnbDepth02Item)
          .eq(2)
          .find("> a")
          .addClass("active");
        break;
      case "admin03_01":
        _gnbMenuLink.eq(2).find("> a").addClass("active");
        _gnbMenuLink.eq(2).find(_gnbDepth02).addClass("on");
        _gnbMenuLink
          .eq(2)
          .find(_gnbDepth02)
          .find(_gnbDepth02Item)
          .eq(0)
          .find("> a")
          .addClass("active");
        break;
      case "admin03_02":
        _gnbMenuLink.eq(2).find("> a").addClass("active");
        _gnbMenuLink.eq(2).find(_gnbDepth02).addClass("on");
        _gnbMenuLink
          .eq(2)
          .find(_gnbDepth02)
          .find(_gnbDepth02Item)
          .eq(1)
          .find("> a")
          .addClass("active");
        break;
      case "admin03_03":
        _gnbMenuLink.eq(2).find("> a").addClass("active");
        _gnbMenuLink.eq(2).find(_gnbDepth02).addClass("on");
        _gnbMenuLink
          .eq(2)
          .find(_gnbDepth02)
          .find(_gnbDepth02Item)
          .eq(2)
          .find("> a")
          .addClass("active");
        break;
      case "admin03_04":
        _gnbMenuLink.eq(2).find("> a").addClass("active");
        _gnbMenuLink.eq(2).find(_gnbDepth02).addClass("on");
        _gnbMenuLink
          .eq(2)
          .find(_gnbDepth02)
          .find(_gnbDepth02Item)
          .eq(3)
          .find("> a")
          .addClass("active");
        break;

        // 사용자 학생
      case "s_sub01":
        _gnbMenuLink.eq(0).find("> a").addClass("active");
        _gnbMenuLinkMo.eq(0).find("> a").addClass("active");
        break;

      case "s_sub02":
        _gnbMenuLink.eq(1).find("> a").addClass("active");
        _gnbMenuLinkMo.eq(1).find("> a").addClass("active");
        break;

        // 초등 교사
      case "t_sub01":
        _gnbMenuLink.eq(0).find("> a").addClass("active");
        _gnbMenuLinkMo.eq(0).find("> a").addClass("active");
        break;

        // 중학 교사
      case "t_sub02":
        _gnbMenuLink.eq(1).find("> a").addClass("active");
        _gnbMenuLinkMo.eq(1).find("> a").addClass("active");
        break;

        // 고교 교사
      case "t_sub03":
        _gnbMenuLink.eq(2).find("> a").addClass("active");
        _gnbMenuLinkMo.eq(2).find("> a").addClass("active");
        break;

        // 리포트 교사
      case "t_report":
        _gnbMenuLink.eq(3).find("> a").addClass("active");
        _gnbMenuLinkMo.eq(3).find("> a").addClass("active");
        break;

        // 소개페이지
      case "sub":
        _gnbMenuLink.eq(4).find("> a").addClass("active");
        _gnbMenuLinkMo.eq(4).find("> a").addClass("active");
        break;
    }
  }
  $(document).ready(function () {
    checkCurrentGnb();
  });

  //header
  let _navItem = $(".nav li");
  let _dep1Item = $(".nav-item");
  let _dep2List = $(".depth2-wrap");

  function inMenu() {
    let _this = $(this).find("> a");

    if (!_this.hasClass("active")) {
      $(".depth2-item").removeClass("active");
      _dep1Item.removeClass("active");
      _this.addClass("active");
      _dep2List.removeClass("on");
      _this.next(_dep2List).addClass("on");
    }

    _this.on("mouseout", function () {
      _dep1Item.removeClass("active");
      _dep2List.removeClass("on");
      checkCurrentGnb();
    });
  }

  _navItem.on("mouseover", inMenu);

  // mobile menu
  let menuBtn = $(".ui-menu-btn");
  let _menudim = $(".dim");
  let _menuhtml = $("html , body");
  let _menucnt = $(".ui-menu-cnt");

  function menuFunc() {
    let _this = $(this);

    if (_this.parents().hasClass("header")) {
      if (!_this.hasClass("active")) {
        $(".header").find(_menucnt).css("right", "0");
        _menudim.fadeIn();
        _menudim.css("z-index", "3");
      } else {
        $(".header").find(_menucnt).css("right", "-50%");
        _menudim.fadeOut();
      }
    }
    if (_this.parents().hasClass("filter-menu-wrap")) {
      if (!_this.hasClass("active")) {
        $(".filter-menu-wrap").find(_menucnt).css("right", "0");
        _menudim.fadeIn();
        _menudim.css("z-index", "1");
      } else {
        $(".filter-menu-wrap").find(_menucnt).css("right", "-80%");
        _menudim.fadeOut();
      }
    }

    if (!_this.hasClass("active")) {
      _this.addClass("active");
      _menuhtml.css("overflow", "hidden");      
    } else {
      _this.removeClass("active");
      _menuhtml.css("overflow", "auto");      
    }
  }

  function menuCloseFunc(){
    if(menuBtn.hasClass("active")) {
      $(".header").find(_menucnt).css("right", "-50%");
      _menudim.fadeOut();
      menuBtn.removeClass("active");
      _menuhtml.css("overflow", "auto");     
    }
  }

  menuBtn.on("click", menuFunc);
  _menudim.on("click", menuCloseFunc);

  // tab
  let tabBtn = $(".ui-tab-btn");

  function tabUI() {
    let _this = $(this);
    let _cnt = $(this).parents(".tab-wrap").find(".contents");
    let _idx = $(this).index();

    if (_this.parents("div").hasClass("contents")) {
      if (!_this.hasClass("active")) {
        _this.siblings().removeClass("active");
        _this.addClass("active");
        _this.parents(".contents").find(".content").removeClass("on");
        _this.parents(".contents").find(".content").eq(_idx).addClass("on");
      }
    } else {
      if (!_this.hasClass("active")) {
        _this.siblings().removeClass("active");
        _this.addClass("active");
        _cnt.removeClass("on");
        _cnt.eq(_idx).addClass("on");
      }
    }
  }

  tabBtn.on("click", tabUI);

  // select
  let selectBtn = $(".select-btn");

  function selectUI() {
    let _this = $(this);
    let _cnt = $(this).next();

    if (!_this.hasClass("active")) {
      _this.parents('div').find('.select-wrap .select-btn').removeClass('active');
      _this.parents('div').find('.select-wrap .select-list').slideUp('fast');

      _this.addClass("active");
      _cnt.stop().slideDown("fast");
      
    } else {
      _cnt.stop().slideUp("fast", function () {
        _this.removeClass("active");
      });
    }
  }
  selectBtn.on("click", selectUI);

  // paging
  let pageBtn = $(".page");

  function pageFunc() {
    let _this = $(this);

    if (!_this.hasClass("active")) {
      pageBtn.removeClass("active");
      _this.addClass("active");
    }
  }

  pageBtn.on("click", pageFunc);

  // popup
  let _dim = $(".dim");
  let _html = $("html , body");
  let popBtn = $(".pop-btn");
  let closePop = $(".pop-close");
  let openPopups = 0;

  function popFunc() {
    let _this = $(this);
    let popData = _this.data("pop");

    console.log(openPopups)

    _html.css("overflow", "hidden");
    _dim.fadeIn();
    openPopups++;

    if(openPopups > 1) {
      $(".pop-wrap[data-pop='" + popData + "']").css("z-index", "12");
      $('.dim').css("z-index","11");
    } else {
      $(".pop-wrap[data-pop='" + popData + "']").css("z-index", "10");
      $('.dim').css("z-index","5");
    }

    $(".pop-wrap[data-pop='" + popData + "']").show();

    console.log($(".pop-wrap[data-pop='" + popData + "']"));
  }

  function popClose() {
    let _this = $(this);
    var popupData = _this.parents(".pop-wrap").data("pop");

    closePopup(popupData);
    openPopups--;
    
    if(openPopups > 0) {      
      $('.dim').css("z-index","5");
    } else {      
      _dim.fadeOut();
      _html.css("overflow", "auto");
    }
  }

  function closePopup(popupData) {
    $(".pop-wrap[data-pop='" + popupData + "']").hide();
  }

  popBtn.on("click", popFunc);
  closePop.on("click", popClose);

  //left nav
  let classArea = $(".class-area");
  let classList = $(".class-list");
  let classItem = $(".class-item");

  function classNavFunc() {
    let _this = $(this);
    if (!_this.hasClass("active")) {
      _this.addClass("active");
      _this.find(".arrow").text("▲");
      _this.next(classArea).show();
    } else {
      _this.removeClass("active");
      _this.find(".arrow").text("▼");
      _this.next(classArea).hide();
      _this.next(classArea).find(classArea).hide();
      _this.next(classArea).find(classItem).removeClass("active");
      _this.next(classArea).find(classItem).find(".arrow").text("▼");
    }

    if (_this.parents(classArea).hasClass("last-area")) {
      _this
        .parent(classList)
        .siblings(classList)
        .find(classItem)
        .removeClass("active");
      _this.addClass("active");
    }
  }

  classItem.on("click", classNavFunc);

  // checkbox on
  let tblChk = $(".table-wrap.type02 input[type=checkbox]");
  let toggleBtnChk = $(".toggle-btn input[type=checkbox]");

  function tblchkFunc() {
    let _this = $(this);
    _this.parents("tr").toggleClass("on");
  }

  tblChk.on("click", tblchkFunc);
  toggleBtnChk.off("click", tblchkFunc);

  // all checkbox
  let chkAll = $(".allCheck");

  function checkFunc(e) {
    let _this = $(this);

    if (_this.prop("checked")) {
      _this
        .parents("table")
        .find("tr td:first-child > input[type=checkbox]")
        .prop("checked", true);
      _this.parents("table").find("tr").addClass("on");
    } else {
      _this
        .parents("table")
        .find("tr td:first-child > input[type=checkbox]")
        .prop("checked", false);
      _this.parents("table").find("tr").removeClass("on");
    }
  }

  chkAll.on("click", checkFunc);

  // accordion
  let accArea = $(".ui-acc-area");
  let accBtn = $(".ui-acc-btn");

  function accFunc() {
    let _this = $(this);

    _this.toggleClass("active");
    _this.parents("li").toggleClass("active");

    if (_this.parents("*").hasClass("ui-acc-area")) {
      if (_this.hasClass("active")) {
        _this.text("▲");
        _this.parents(accArea).next(".ui-acc-cnt").stop().slideDown("fast");
      } else {
        _this.text("▼");
        _this.parents(accArea).next(".ui-acc-cnt").stop().slideUp("fast");
      }
    } else {
      if (_this.hasClass("active")) {
        _this.find(".arrow").text("▲");
        _this.next(".ui-acc-cnt").stop().slideDown("fast");
      } else {
        _this.find(".arrow").text("▼");
        _this.next(".ui-acc-cnt").stop().slideUp("fast");
      }
    }
  }

  $(document).on("click", ".ui-acc-btn", accFunc);

  // filter arrow
  let filterArr = $(".ui-arr");

  filterArr.on("click", function () {
    let _this = $(this);

    if (!_this.hasClass("on")) {
      _this.addClass("on");
      _this.text("▲");
    } else {
      _this.removeClass("on");
      _this.text("▼");
    }
  });

  // input file
  let fileTarget = $(".file-area .upload-hidden");

  fileTarget.on("change", function () {
    if (window.FileReader) {
      var filename = $(this)[0].files[0].name;
    } else {
      var filename = $(this).val().split("/").pop().split("\\").pop();
    }

    $(this).siblings(".upload-name").val(filename);
    $(this).siblings(".upload-name").text(filename);
  });

  // radio tab
  let radioWrap = $(".ui-radio-wrap");
  let radioSelect = $(".ui-radio-sel");
  let radioSelectCnt = $(".ui-radio-cnt");

  function radioSelFunc() {
    let _this = $(this);
    let radioData = _this.data("tab");

    _this.parents(radioWrap).find(radioSelectCnt).hide();
    $(".ui-radio-cnt[data-tab='" + radioData + "']").show();
  }

  radioSelect.on("click", radioSelFunc);

  // table drag
  $("#table-1").sortable({
    handle: ".dragHandle",
  });
  $(".table-1").disableSelection();

  // $(".unit-list").sortable({
  //   handle: ".dragHandle",
  // });
  // $("#unit-list").disableSelection();

  // toggle button
  let numberBtn = $(".btn-number");
  let commentBtn = $(".btn-comment");

  function toggleBtnFunc() {
    let _this = $(this);
    _this.toggleClass("active");

    // comment button
    if (_this.hasClass("active")) {
      _this.find('.arrow').text("▲");
      _this.siblings(".cmt-area").addClass("active");
    } else {
      _this.find('.arrow').text("▼");
      _this.siblings(".cmt-area").removeClass("active");
    }

  }

  numberBtn.on("click", toggleBtnFunc);
  // commentBtn.on("click", toggleBtnFunc);
  $(document).on("click", ".btn-comment", toggleBtnFunc);

  // click button
  let lineBtn = $(".btn-line");
  let unitBtn = $(".unit-list li");
  let rotateBtn = $(".que-box .btn-icon-type03");

  function btnClickFunc() {
    let _this = $(this);

    if (!_this.hasClass("active")) {
      _this.parents(".btn-wrap").find("button").removeClass("active");
      _this.parents(".unit-list").find("li").removeClass("active");
      _this.addClass("active");
    }
    
    let queBox = _this.closest(".que-box");
    if (!queBox.hasClass("active")) {
      $(".que-box").removeClass("active");
      queBox.addClass("active");
    }
  }

  lineBtn.on("click", btnClickFunc);
  unitBtn.on("click", btnClickFunc);
  rotateBtn.on("click", btnClickFunc);

  //share버튼 클릭시 open-select-list 열기

  let shareBtn = $(".btn-share");

  shareBtn.on("click", function () {
    let _this = $(this);
    //let _position = _this.parents("a").position().left;

    if (!_this.hasClass("active")) {
      shareBtn.removeClass("active");
      _this.addClass("active");
      // _this.parents('.test').find('.btn-share').removeClass('active');
      // _this.addClass('active');
    } else {
      _this.removeClass("active");
    }

    // if (_position > 500) {
    //   _this.find(".open-select-list").css("left", "-190px");
    // }
  });

  let shareAll = $(".all-share");

  function allShareFunc(e) {
    let _this = $(this);

    if (_this.prop("checked")) {
      _this
        .parents(".open-select-list")
        .find("li input[type=checkbox]")
        .prop("checked", true);
    } else {
      _this
        .parents(".open-select-list")
        .find("li input[type=checkbox]")
        .prop("checked", false);
    }
  }

  shareAll.on("click", allShareFunc);

  // 230622 추가 :: text 더블 클릭 시 input으로 바뀌도록
  let changeText = $('.ui-change-text');
  
  function changeTextFunc() {
    let currentText = $(this).text();
    $(this).html('<input type="text" class="full" value="' + currentText + '">');
  };

  changeText.on("dblclick", changeTextFunc);

});