(function(doc, win, designWidth){
  const html = doc.documentElement;

  // 设置rem单位
  function refreshRem() {
    console.log('refresh rem.')
    const clientWidth = html.clientWidth;

    if (clientWidth >= designWidth) {
      html.style.fontSize = '100px';
    } else {
      html.style.fontSize = 100 * (clientWidth / designWidth) + 'px';
    }
  }
  doc.addEventListener('DOMContentLoaded', refreshRem)

  function resetViewHeight() {
    console.log('reset view height.')
    // var windowVH = window.innerHeight / 100
    const vh = html.clientHeight/100;
    document.documentElement.style.setProperty('--vh', vh + 'px')
  }
  doc.addEventListener('DOMContentLoaded', resetViewHeight)
  
  // const resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize'
  // document.addEventListener('DOMContentLoaded', resetViewHeight)
  // window.addEventListener(resizeEvent, resetViewHeight)


  // 禁止touchstart事件的默认行为
  doc.addEventListener('touchstart', function(event) {
    event.preventDefault()
  }, {
    passive: false
  });
})(document, window, 828);


/*
下拉加载的实现原理?


*/