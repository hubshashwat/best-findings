<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import IconSun from './components/icons/IconSun.vue'
import IconMoon from './components/icons/IconMoon.vue'
import { categoryTitles } from './categories.js'

const isDark = ref(false)

const applyTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark-theme')
  } else {
    document.documentElement.classList.remove('dark-theme')
  }
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  applyTheme() // Apply theme immediately after toggle
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    // Check system preference if no theme is saved
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  applyTheme() // Apply initial theme

  // Listen for system theme changes, but only if no explicit user preference is set
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (!localStorage.getItem('theme')) { // Only update if no explicit user preference
      isDark.value = event.matches
      applyTheme()
    }
  })
})
</script>

<template>
  <header>
    <button @click="toggleTheme" class="theme-toggle-button">
      <IconSun v-if="isDark" />
      <IconMoon v-else />
    </button>
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
</template>

<style scoped>
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

.theme-toggle-button {
  /* Style adjustments for a cleaner look */
  background-color: transparent;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  padding: 0.5rem;
  line-height: 1;
  border-radius: 50%;
  transition: color 0.3s, background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px; /* Set a fixed size */
  height: 40px; /* Set a fixed size */

  /* Mobile placement */
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.theme-toggle-button:hover {
  background-color: var(--color-background-soft);
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    position: relative; /* Needed for absolute positioning of the button */
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

  .theme-toggle-button {
    /* Desktop placement */
    position: absolute;
    top: 2rem;
    right: calc(var(--section-gap) / 2);
  }
}
</style>
