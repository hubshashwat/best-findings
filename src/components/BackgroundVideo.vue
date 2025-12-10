<script setup>
import { ref, onMounted } from 'vue'

const videoRef = ref(null)

onMounted(() => {
  if (videoRef.value) {
    // Pause after 6 seconds
    setTimeout(() => {
      if (videoRef.value) videoRef.value.pause()
    }, 6000)
  }
})
</script>

<template>
  <div class="video-background">
    <video ref="videoRef" autoplay muted playsinline>
      <source src="/loader.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="overlay"></div>
  </div>
</template>

<style scoped>
.video-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1; /* Behind everything */
  overflow: hidden;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* Dark overlay for text readability */
}
</style>
