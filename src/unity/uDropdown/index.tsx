import {
  defineComponent,
  h,
  ref,
  type Ref,
  Fragment,
  watch,
  nextTick,
  type PropType
} from 'vue'
import { NAvatar, NButton, NDropdown, NText } from 'naive-ui'
import type { IInfo, IUser, IUserMenu, userInfo } from '@/types/users'
function renderCustomHeader(user: IUser) {
  return h(
    'div',
    {
      style: 'display: flex; align-items: center; padding: 0px 8px;',
      size: 'small'
    },
    [
      h(NAvatar, {
        style: 'margin-right: 12px;',
        src: user.icon,
        color: '#fff'
      }),
      h('div', null, [
        h('div', null, [h(NText, { depth: 2 }, { default: () => user.name })]),
        h('div', { style: 'font-size: 12px;' }, [
          h(NText, { depth: 3 }, { default: () => user.desc })
        ])
      ])
    ]
  )
}
/**
 * 判断对象数组中指定属性是否重复
 * @param arr 对象数组
 * @param keyName 指定属性名称，默认为 'key'
 * @returns 如果有重复返回 true，否则返回 false
 */
function hasDuplicateKeys<T extends Record<string, any>>(
  arr: T[],
  keyName: string = 'key'
): boolean {
  const keys = new Set<string>()
  for (const obj of arr) {
    const key = obj[keyName]
    if (keys.has(key)) {
      return true
    }
    keys.add(key)
  }
  return false
}

const renderIcon = (item: any) => {
  return () => {
    return h(
      NButton,
      {
        style: `
        --n-width: 20px;
        --n-height: 20px;
        --n-padding:0;`,
        bordered: false,
        tag: 'a',
        href: item.url || 'javascript:void(0);',
        target: '_blank'
      },
      {
        default: () =>
          h('img', {
            src: item.icon,
            style: `
              width:100%;
              height:100%;
            `
          })
      }
    )
  }
}
export default defineComponent({
  name: 'UDropDown',
  props: {
    user: {
      type: Object as PropType<IUser>
    },
    info: {
      type: Object as PropType<IInfo>
    },
    options: {
      type: Object,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const x: Ref<number> = ref(0)
    const y: Ref<number> = ref(0)
    const show: Ref<boolean> = ref(false)
    let defaultOptions: any[] = [
      {
        key: 'header',
        type: 'render',
        render: () => renderCustomHeader(props.user as IUser)
      },
      {
        key: 'header-divider',
        type: 'divider'
      }
    ]

    props?.options?.map((item: any) => {
      defaultOptions.push({
        label: item.name,
        key: item.url,
        icon: renderIcon(item)
      })
    })
    const options: any = ref([...defaultOptions])
    const select = (key: any) => {
      show.value = false
      nextTick(()=>{
        window.open(key)
      })
    }
    const outside = () => {
      show.value = false
    }
    const contextMenu = (e: MouseEvent) => {
      e.preventDefault()
      show.value = false
      nextTick().then(() => {
        show.value = true
        x.value = e.clientX
        y.value = e.clientY
      })
    }
    return {
      x,
      y,
      show,
      options,
      select,
      outside,
      contextMenu
    }
  },
  render() {
    return h(Fragment, null, [
      h(
        'div',
        {
          onContextmenu: this.contextMenu,
          style: 'display: inline-block;'
        },
        this.$slots.default?.()
      ),
      h(NDropdown, {
        ...this.$props,
        trigger: 'manual',
        x: this.x,
        y: this.y,
        show: this.show,
        options: this.options,
        onClickoutside: this.outside,
        onSelect: this.select
      })
    ])
  }
})
