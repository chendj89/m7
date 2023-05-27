import './index.scss'
export default defineComponent({
  setup() {},
  render() {
    return h(
      'div',
      {
        class: 'docker'
      },
      this.$slots.default?.()
    )
  }
})
