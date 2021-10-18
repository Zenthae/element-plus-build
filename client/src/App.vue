<template>
  Hello
  <ElContainer direction="vertical">
    <ElHeader></ElHeader>
    <ElMain>
      <RouterView />
    </ElMain>
  </ElContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import { ElContainer, ElHeader, ElMain } from 'element-plus';

export default defineComponent({
  components: {
    RouterView,
    ElContainer,
    ElHeader,
    ElMain,
  },
});
</script>
