$(function(){
  //menu
  function checkCurrentGnb () {
    var _className = $('#wrap').attr('class'),
      _afterStr = _className ? _className.split(" ") : '',
      _gnbMenuLink = $('.nav-list');
      _gnbDepth02 = $('.depth2-wrap');
      _gnbDepth02Item = $('.depth2-list');

    switch (_afterStr[0]) {
      case 'admin01_01':
        _gnbMenuLink.eq(0).find('> a').addClass('active');
        _gnbMenuLink.eq(0).find(_gnbDepth02).addClass('on');
        _gnbMenuLink.eq(0).find(_gnbDepth02).find(_gnbDepth02Item).eq(0).find('> a').addClass('active');
        break;
      case 'admin03_01':
      _gnbMenuLink.eq(2).find('> a').addClass('active');
      _gnbMenuLink.eq(2).find(_gnbDepth02).addClass('on');
      _gnbMenuLink.eq(2).find(_gnbDepth02).find(_gnbDepth02Item).eq(0).find('> a').addClass('active');
        break;
    }
  }
  $(document).ready(function(){
    checkCurrentGnb();
  })

  //header
  let _navItem = $('.nav li');
  let _dep1Item = $('.nav-item')
  let _dep2List = $('.depth2-wrap');

  function inMenu(){
    let _this = $(this).find('> a');

    if(!_this.hasClass('active')){
      $('.depth2-item').removeClass('active');
      _dep1Item.removeClass('active');
      _this.addClass('active');
      _dep2List.removeClass('on');
      _this.next(_dep2List).addClass('on');
    }

    _this.on('mouseout', function(){
      _dep1Item.removeClass('active');
      _dep2List.removeClass('on');
      checkCurrentGnb();
    })
  }

  _navItem.on('mouseover', inMenu);


  // tab
  let tabBtn = $('.ui-tab-btn');

  function tabUI() {
    let _this = $(this);
    let _cnt = $(this).parents('.tab-wrap').find('.contents');
    let _idx = $(this).index();


    if (!_this.hasClass('active')) {
      _this.siblings().removeClass('active');
      _this.addClass('active');
      _cnt.removeClass('on');
      _cnt.eq(_idx).addClass('on');
    }
    console.log(_idx)
  }

  tabBtn.on('click', tabUI);


  // select
  let selectBtn = $('.select-btn');

  function selectUI() {
    let _this = $(this);
    let _cnt = $(this).next();

    if (!_this.hasClass('active')) {
      _this.addClass('active');
      _cnt.stop().slideDown('fast');
    } else {
      _cnt.stop().slideUp('fast', function () {
        _this.removeClass('active');
      })
    }
  }
  selectBtn.on('click', selectUI);


  // paging
  let pageBtn = $('.page');

  function pageFunc() {
    let _this = $(this);

    if (!_this.hasClass('active')) {
      pageBtn.removeClass('active');
      _this.addClass('active')
    }
  }

  pageBtn.on('click', pageFunc);
  
  
  // popup
  let _dim = $('.dim');
  let _html = $('html , body');
  let popBtn = $('.pop-btn');
  let closePop = $('.pop-close');

  function popFunc() {
    let _this = $(this);
    let popData = _this.data('pop');

    _html.css('overflow', 'hidden');
    _dim.fadeIn();

    $(".pop-wrap[data-pop='" + popData + "']").show();

    console.log($(".pop-wrap[data-pop='" + popData + "']"))
  }

  function popClose() {
    let _this = $(this);
    $('.pop-wrap').hide();
    _html.css('overflow', 'auto');
    _dim.fadeOut();
  }

  popBtn.on('click', popFunc);
  closePop.on('click', popClose);


  //left nav
  let classArea = $('.class-area');
  let classList = $('.class-list');
  let classItem = $('.class-item');

  function classNavFunc(){
    let _this = $(this);
    if(!_this.hasClass('active')) {
      _this.addClass('active');
      _this.find('.arrow').text('▲');
      _this.next(classArea).show();
    } else {
      _this.removeClass('active');
      _this.find('.arrow').text('▼');
      _this.next(classArea).hide();
      _this.next(classArea).find(classArea).hide();
      _this.next(classArea).find(classItem).removeClass('active');
      _this.next(classArea).find(classItem).find('.arrow').text('▼');
    }

    if(_this.parents(classArea).hasClass('last-area')) {
      _this.parent(classList).siblings(classList).find(classItem).removeClass('active');
      _this.addClass('active');
    }
  }

  classItem.on('click', classNavFunc);


  // checkbox
  let chkAll = $('.allCheck');

  function checkFunc() {
    let _this = $(this);

    if (_this.prop('checked')) {
      _this.parents('table').find('input[type=checkbox]').prop('checked', true);
    } else {
      _this.parents('table').find('input[type=checkbox]').prop('checked', false);
    }

  }

  chkAll.on('click', checkFunc);
  
});