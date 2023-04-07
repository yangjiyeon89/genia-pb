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

    $(this).parents('.header').addClass('on');
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
});