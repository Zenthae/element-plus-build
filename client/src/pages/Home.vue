<template>
  <div>
    <ElInput placeholder="Search..." prefix-icon="el-icon-search" />
    <div>
      <h2>Recently Added</h2>
      <ElSpace wrap :size="20">
        <ElCard v-for="(col, i) in 10" :key="col">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <h3>Menu title</h3>
          <p>little description</p>
          <p>time <time datetime="00:25">00:25</time></p>
        </ElCard>
      </ElSpace>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {},
});
</script>

<style lang="scss" scoped></style>
