<script>

import axios from 'axios';
import SplashPage from './components/SplashPage.vue'

export default {
  name: 'App',
  components: {
    SplashPage
  },
  data() {
    return {
      characters: [],
      base_api_url: 'http://127.0.0.1:8000',
      base_characters_url: '/api/characters',
    }
  },
}
</script>

<template>

  <AppHeader />
  <main>
    <SplashPage />
    <RouterView />
  </main>
  <AppFooter />

</template>

<style></style>
