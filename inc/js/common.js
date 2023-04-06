$(function(){
  //menu
  function checkCurrentGnb () {
    var _className = $('#wrap').attr('class'),
      _afterStr = _className ? _className.split(" ") : '',
      _gnbMenuLink = $('.nav > ul > li');
      _gnbMenuLinkDepth02 = $('.depth2').find('li');
      _gnbMenuLinkMo = $('.menu-list > li');

    switch (_afterStr[0]) {
      case 'admin01_01':
        _gnbMenuLink.eq(0).addClass('active');
        _gnbMenuLink.eq(0).find(_gnbMenuLinkDepth02).eq(0).addClass('active');
        
        _gnbMenuLinkMo.eq(0).find('> a').addClass('active');
        _gnbMenuLinkMo.eq(0).find('> a').find('em').text('-');
        _gnbMenuLinkMo.eq(0).find('.depth2').slideDown();
        _gnbMenuLinkMo.eq(0).find(_gnbMenuLinkDepth02).eq(0).addClass('active');

        break;
    }
  }
  $(document).ready(function(){
    checkCurrentGnb();
  })
})