<template>
  <el-button link :type="data?.type ?? 'primary'" size="small" @click="handleClick">{{ state.title }}</el-button>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';

defineOptions({
  inheritAttrs: false,
  components: { ...ElementPlus },
})

const { inputs, outputs, data } = defineProps(['inputs', 'outputs', 'data'])

const state = reactive({
  title: '普通按钮'
});

const handleClick = () => {
  outputs?.['click'](true)
}

onMounted(() => {
  inputs['dynamicTitle']?.((title) => {
    state.title = title
  })
})

</script>

<style scoped>
</style>