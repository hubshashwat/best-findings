<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <template v-if="jsonData">
    <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{ jsonData.phones.best_performance.detailed_heading }}-</template>
    <ul>
    <li v-for="model in jsonData.phones.best_performance.models" :key="model">{{ model }}</li>
  </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>{{ jsonData.phones.non_chinese.detailed_heading }}-</template>
    <ul>
    <li v-for="model in jsonData.phones.non_chinese.models" :key="model">{{ model }}</li>
  </ul>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>{{ jsonData.phones.best_camera.detailed_heading }}-</template>
    <ul>
    <li v-for="model in jsonData.phones.best_camera.models" :key="model">{{ model }}</li>
  </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>{{ jsonData.phones.dust_resistance.detailed_heading }}-</template>
    <ul>
    <li v-for="model in jsonData.phones.dust_resistance.models" :key="model">{{ model }}</li>
  </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>{{ jsonData.phones.zero_bloatware.detailed_heading }}-</template>
    <ul>
    <li v-for="model in jsonData.phones.zero_bloatware.models" :key="model">{{ model }}</li>
  </ul>
  </WelcomeItem>


  </template>


  <template v-else>
  Loading..
</template>

</template>




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
    const githubUrl = 'https://raw.githubusercontent.com/torpidsnake/json-api/master/test.json';

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