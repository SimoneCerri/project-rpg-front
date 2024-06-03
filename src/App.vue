<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      characters: [],
      base_api_url: 'http://127.0.0.1:8000',
      base_characters_url: '/api/characters',
    }
  },
  methods: {
    callApi(url) {
      axios.get(url).then(response => {
        console.log(response.data.characters);
        this.characters = response.data.characters;
      })
    }
  },
  mounted() {
    this.callApi(this.base_api_url + this.base_characters_url)
  }
}
</script>

<template>
  <div v-for="character in characters.data">
    {{ character.name }}
  </div>
</template>

<style></style>
