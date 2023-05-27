// @ts-ignore
import a1 from '@/assets/imgs/a1.webp'
import Docker from '../docker'
export default defineComponent({
  setup() {},
  render() {
    return h(
      Docker,
      {},
      {
        default: () =>
          h(
            'div',
            {
              style: `
                flex:1;
                background-size:100% auto;
                color:#000;
                font-size:18px;
                overflow: hidden;
                font-weight:bold;
                padding:var(--padding);
                border-radius:var(--radius);
                `
            },
            '开发者工具'
          )
      }
    )
  }
})
