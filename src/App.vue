<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import BackgroundVideo from './components/BackgroundVideo.vue' // New Component
import { categoryTitles } from './categories.js'

const contentVisible = ref(false) // Start hidden

onMounted(() => {
  // Enforce Space Theme (Dark Mode variables)
  document.documentElement.classList.add('dark-theme')

  // Fade in content after 3 seconds
  setTimeout(() => {
    contentVisible.value = true
  }, 3000)
})
</script>

<template>
  <BackgroundVideo />
  
  <div class="content-wrapper" :class="{ 'visible': contentVisible }">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="स्वागत है :)" />

        <nav>
          <RouterLink
            v-for="(title, key) in categoryTitles"
            :key="key"
            :to="`/category/${key}`"
            >{{ title }}</RouterLink
          >
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
/* Content Fade In Logic */
.content-wrapper {
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
}

.content-wrapper.visible {
  opacity: 1;
}

header {
  line-height: 1.5;
  max-height: 100vh;  
  /* background-color: ;  */
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  /* Move Layout to Context Wrapper */
  .content-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    position: relative; 
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
