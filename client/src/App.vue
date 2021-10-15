<template>
  <div>
    <Dialog header="Header" :visible="true" :modal="true" :footer="'close'"> Hello </Dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Dialog from 'primevue/dialog';

export default defineComponent({
  components: {
    Dialog,
  },
});
</script>
