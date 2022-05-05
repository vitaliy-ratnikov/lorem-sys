<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseContainer",
};
</script>

<style lang="scss">
.container {
  width: vw(1200px);
  margin: 0 auto;
  padding: 0 vw(15px);
}
</style>
