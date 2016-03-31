(function () {
  'use strict'

  var wrapper = document.getElementsByClassName('sidebar')[0]
  var open = document.getElementsByClassName('open')[0]
  var close = document.getElementsByClassName('close')[0]

  open.addEventListener('click', function (e) {
    e.preventDefault()
    wrapper.className += ' visible'
  })

  close.addEventListener('click', function (e) {
    e.preventDefault()
    wrapper.className = wrapper.className.replace(/(?:^|\s)visible(?!\S)/, '')
  })

  window.onclick = function(e) {
    if (/visible/.test(wrapper.className) && e.target !== open && e.target !== wrapper) {
      wrapper.className = wrapper.className.replace(/(?:^|\s)visible(?!\S)/, '')
    }
  }
})();
