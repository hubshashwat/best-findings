
<script setup>

</script>
<template>
<template v-if="jsonData">
  <div class="about">
    <br><br>
    <u><b><i>Laptops under your budget:</i></b></u>
    <br>
    <br>
    <div v-for="(section, key) in jsonData.laptops_with_prices" :key="key">
      {{ section.detailed_heading }}
      <ul>
        <li v-for="model in section.models" :key="model.name">
          <a :href="model.link" target="_blank">{{ model.name }} [{{model.model }}]</a> 
          <span v-if="model.speciality"> - {{ model.speciality.join(', ') }}</span>
        </li> 
 </ul> 

    </div>
  </div>
</template>
<template v-else>
loading...
</template>
</template>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: float;
    align-items: center;
  }
}
</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      jsonData: null
    };
  },
  mounted() {
    // Replace 'your-github-username' and 'your-repo' with your GitHub username and repository name
    const githubUrl = 'https://raw.githubusercontent.com/torpidsnake/json-api/master/gadgets.json';

    // Fetch data from GitHub URL
    axios.get(githubUrl)
      .then(response => {
        // Set fetched data to jsonData
        this.jsonData = response.data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
};
</script>