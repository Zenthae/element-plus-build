<template>
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
import AppHeader from './components/App/AppHeader.vue';

export default defineComponent({
  components: {
    RouterView,
  },
});
</script>
