<template>
  <n-el style="padding: 50px">
    <Widget :data="user"></Widget>
  </n-el>
</template>

<script setup lang="ts" name="Login">
import { usePluginDialog } from '@/plugins/usePluginDialog'
import UMsg from './tpl/msg.vue'
import Menu from '@/unity/menu'
const dialog = usePluginDialog()

const run = async () => {
  console.log('1')
  const result = await dialog({
    tpl: UMsg,
    opts: {
      title: '叶少主',
      data: {
        ver: '1.0.0'
      }
    }
  })
  console.log('result=>', result)
  console.log('2')
}

import Widget from '@/unity/widget'
import type { IUserMenu } from '@/types/users'
const user: IUserMenu = {
  style: {
    width: 280,
    padding: 10,
    radius: 8,
    iconRadius: 10,
    gap: 10,
    theme: '#ec3f52',
    header: '#fb5971',
    cols: 6,
    color: '#fff',
    iconSize: 35
  },
  user: {
    name: '九转灵山',
    desc: '及你太美🍉👻',
    url: 'https://chendj89.github.io/v12/',
    icon: 'https://avatars.githubusercontent.com/u/105529957'
  },
  info: {
    url: 'https://space.bilibili.com/352318038/fans/follow',
    icon: 'https://api.iconify.design/fa6-brands:bilibili.svg?color=%23ffffff'
  },
  children: [
    {
      user: {
        name: '菜二代传记',
        desc: '专注沙雕动画！感谢大家的支持😁',
        url: 'https://www.douyin.com/user/MS4wLjABAAAAy_5Qqu7TuSqwSyuFNDS2aZ36Oun5447-DDCXdB46HN4?is_search=0&list_name=follow&nt=0',
        icon: 'https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-i-0813_20f39a49f8a142c6aa4c9a22cd209fb4~c5_300x300.jpeg?from=2956013662'
      },
      info: {
        
      },
      children: [{
        name:'《翔人修仙I》',
        desc:'',
        icon:'https://p9-sign.douyinpic.com/obj/tos-cn-i-dy/ed22df5e359e4e5b94ddafddff891887?x-expires=1686474000&x-signature=zMlWX9n7POcxSmZBNBaaiIWpHCQ%3D&from=4080365293',
        url:'https://www.douyin.com/user/MS4wLjABAAAAy_5Qqu7TuSqwSyuFNDS2aZ36Oun5447-DDCXdB46HN4?is_search=0&list_name=follow&modal_id=7066010785926991112&nt=0'
      }]
    }
  ]
}
// https://codegeex.cn 这个页面直接引用
</script>

<style lang="scss" scoped></style>
