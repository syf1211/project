import utils from '@/utils/getStyle'

export default {
  inserted (el, binding) {
    const defOffset = {
      top: el.offsetTop,
      height: el.offsetHeight
    }
    el.parentNode.addEventListener('scroll', function (e) {
      let scrollTop = e.target.scrollTop
      if (scrollTop >= defOffset.top) {
        utils.css(el, {
          position: 'fixed',
          top: binding.value
        })
        utils.css(el.parentNode.childNodes[4], {
          'padding-top': defOffset.top + 5
        })
      } else {
        utils.css(el, {
          position: 'relative',
          top: 0
        })
        utils.css(el.parentNode.childNodes[4], {
          'padding-top': 0
        })
      }
    }, false)
  }
}
