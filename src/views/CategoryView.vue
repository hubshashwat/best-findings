<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { categoryTitles } from '../categories.js'

const route = useRoute()
const jsonData = ref(null)
const error = ref(null)
const loading = ref(true)

const categoryKey = computed(() => route.params.categoryKey)
const categoryTitle = computed(() => categoryTitles[categoryKey.value] || 'Recommended Items')
const categoryData = computed(() => {
  if (jsonData.value && categoryKey.value) {
    return jsonData.value[categoryKey.value]
  }
  return null
})

onMounted(async () => {
  try {
    const githubUrl = 'https://raw.githubusercontent.com/hubshashwat/best-findings/refs/heads/master/zhund.json'
    const response = await axios.get(githubUrl)
    jsonData.value = response.data
  } catch (err) {
    console.error('Error fetching data:', err)
    error.value = 'Failed to load data.'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="about">
    <div v-if="loading">loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="categoryData">
      <br /><br />
      <u><b><i>{{ categoryTitle }}:</i></b></u>
      <br />
      <br />
      <div v-for="(section, key) in categoryData" :key="key">
        {{ section.detailed_heading }}
        <ul>
          <li v-for="model in section.models" :key="model.name">
            <a :href="model.link" target="_blank">{{ model.name }}
              <span v-if="model.model">[{{model.model }}]</span> 
            </a>

            <span v-if="model.speciality"> - {{ model.speciality.join(', ') }}</span>
          </li>
        </ul>
        <br />
      </div>
    </div>
    <div v-else>
      Category not found.
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: block; /* Changed from float */
    padding-top: 2rem;
  }
}
</style>