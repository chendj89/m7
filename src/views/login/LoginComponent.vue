<template>
  <n-el style="padding:50px">
    <NButton size="small" @click="run">按钮</NButton>
  </n-el>
</template>

<script setup lang="ts" name="Login">
import { usePluginDialog } from '@/plugins/usePluginDialog'
import UMsg from './tpl/msg.vue'
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
  console.log('result=>',result)
  console.log('2')
}
</script>

<style lang="scss" scoped></style>
