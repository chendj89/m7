import type { IUserMenu } from '@/types/users'
import { NButton, NIcon, NSpin } from 'naive-ui'
import type { PropType } from 'vue'
import { h } from 'vue'
import UDropDown from '../uDropdown'
export default defineComponent({
  name: 'Widget',
  props: {
    data: {
      type: Object as PropType<IUserMenu>,
      required: true,
      defalut: () => {}
    }
  },
  setup(props) {
    function configToCSSVars() {
      const vars = Object.entries(props.data.style).map(([key, value]) => {
        if (typeof value === 'number') {
          value = value + 'px'
        }
        return `--${key}: ${value};`
      })
      return vars.join('\n')
    }
    const style = configToCSSVars()

    return {
      style
    }
  },
  render() {
    return h(
      'div',
      {
        style: `
        ${this.style}
        position:relative;
        display:inline-flex;
        flex-direction:column;
        width:var(--width);
      `
      },
      [
        h(
          'div',
          {
            style: `
              display:flex;
              align-items: flex-start;
              padding:var(--padding);
              border-radius:var(--radius) var(--radius) 0 0;
              background:var(--header);
            `
          },
          [
            h(
              NButton,
              {
                style: `
                --n-width: 54px;
                --n-height: 54px;
                --n-padding:0;`,
                bordered: false,
                tag: 'a',
                href: this.$props.data.user.url,
                target: '_blank'
              },
              () =>
                h('img', {
                  src: this.$props.data.user.icon,
                  style: `
              width:100%;
              height:100%;
              border-radius:var(--n-border-radius);
            `
                })
            ),
            h(
              'div',
              {
                style: `
                  margin-left:var(--padding);
                  color:var(--color);
                  text-align:left;
                `
              },
              [
                h(
                  'div',
                  {
                    style: `
                    font-size:16px;
                  `
                  },
                  this.$props.data.user.name
                ),
                h(
                  'div',
                  {
                    style: `
                    font-size:12px;
                  `
                  },
                  this.$props.data.user.desc
                )
              ]
            ),
            this.$props.data?.info
              ? h(
                  NButton,
                  {
                    style: `
                    --n-width: 20px;
                    --n-height: 20px;
                    --n-padding:0;
                    position:absolute;
                    right:var(--padding);
                    top:var(--padding);
                    `,
                    bordered: false,
                    tag: 'a',
                    href: this.$props.data.user.url,
                    target: '_blank'
                  },
                  () => h('img', { src: this.$props.data?.info?.icon })
                )
              : null
          ]
        ),
        h(
          NSpin,
          {
            description: '加载中...',
            stroke: '#fff',
            strokeWidth: 16,
            show: false,
            style: `
            background:var(--theme);
            border-radius:0 0 var(--radius) var(--radius);
            --n-text-color:#fff;
          `
          },
          {
            default: () =>
              h(
                'div',
                {
                  style: `
                display:grid;
                grid-gap:var(--gap);
                grid-template-columns: repeat(6, var(--iconSize));
                grid-template-rows: repeat(1, var(--iconSize));
                padding:var(--gap)
              `
                },
                this.$props.data?.children?.map((item) =>
                  h(
                    UDropDown,
                    {
                      user: item.user,
                      info: item.info,
                      options: item.children || []
                    },
                    () =>
                      h(
                        NButton,
                        {
                          style: `
                  --n-padding:0;
                  --n-width:var(--iconSize);
                  --n-height:var(--iconSize);
                  `,
                          color: '#fff',
                          bordered: true,
                          tag: 'a',
                          href: item.user.url || 'javascript:void(0);',
                          target:"_blank"
                        },
                        () =>
                          h('img', {
                            src: item.user.icon,
                            style: `
                    width:${item?.info?.size || 'var(--iconSize)'}; 
                    height:${item?.info?.size || 'var(--iconSize)'};
                    border-radius:var(--n-border-radius);
                  `
                          })
                      )
                  )
                )
              )
          }
        )
      ]
    )
  }
})
