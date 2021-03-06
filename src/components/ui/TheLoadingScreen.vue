<template>
  <div class="loader" :class="{ show: $store.state.isLoading }">
    <div class="loader__outer">
      <div class="loader__inner"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppLoadingScreen",
};
</script>
