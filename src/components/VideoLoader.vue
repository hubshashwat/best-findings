<script setup>
</script>

<template>
  <div class="video-loader">
    <video autoplay muted playsinline loop>
      <source src="/loader.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<style scoped>
.video-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
