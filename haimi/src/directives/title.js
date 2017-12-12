
export default {
  bind (el, binding) {
    document.title = binding.value
  },
  componentUpdated (el, binding) {
    document.title = binding.value
  }
}
