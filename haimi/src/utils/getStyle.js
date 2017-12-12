function getStyle (obj, attr) {
  if (window.getComputedStyle) {
    return window.getComputedStyle(obj, null)[attr]
  } else {
    return obj.currentStyle[attr]
  }
}

export default {
  css (dom, ...reset) {
    if (reset.length === 1) {
      if (typeof reset[0] === 'string') {
        return getStyle(dom, reset[0])
      } else {
        for (let item in reset[0]) {
          if (typeof reset[0][item] === 'number') {
            dom.style[item] = reset[0][item] + 'px'
          } else {
            dom.style[item] = reset[0][item]
          }
        }
      }
    } else if (reset.length === 2) {
      dom.style[reset[0]] = reset[1]
    }
  }
}
