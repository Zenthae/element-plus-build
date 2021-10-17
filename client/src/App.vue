<template>
  <div>
    <div>
      <AppHeader />
    </div>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import AppHeader from './components/App/AppHeader.vue';

export default defineComponent({
  components: {
    RouterView,
    AppHeader,
  },
});
</script>
