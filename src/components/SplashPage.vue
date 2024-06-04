<template>
    <div class="splash-page" @mousemove="handleMouseMove">
      <video class="video" loop autoplay muted>
        <source src="../../public/background.mp4" type="video/mp4">
      </video>
  
      <audio id="background-audio" loop>
        <source src="../../public/background-music.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
  
      <button v-if="showAudioButton" @click="playAudio" class="audio-button">Enable Audio</button>
  
      <div class="wrapper">
        <div class="backdrop">
          <img src="../../Poliage.png" class="top blur-in" alt="Top Image">
          <img src="../../Poliage.png" class="bottom blur-in" alt="Bottom Image">
          <img src="../../Poliage.png" class="bottom dark blur-in" alt="Bottom Image">
          <img src="../../Tree 1.png" class="tree left-1 blur-in" ref="tree1" alt="">
          <img src="../../Tree 4.png" class="tree right-2 blur-in" ref="tree2" alt="">
        </div>
  
        <div class="center-container blur-in" ref="centerContainer">
          <img src="../../public/boolgard logo white.svg" alt="Logo" class="logo" ref="logo">
          <a href="#" class="join-button" ref="button">
            <img src="../../public/gai_1_30.png" alt="Button Image">
            <span class="button-text">JOIN US</span>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SplashPage',
    data() {
      return {
        showAudioButton: false
      };
    },
    methods: {
      handleMouseMove(event) {
        const x = event.clientX;
        const y = event.clientY;
        const elements = [this.$refs.tree1, this.$refs.tree2, this.$refs.logo, this.$refs.button];
        elements.forEach((element, index) => {
          const speed = index < 2 ? 0.03 : 0.1;
          const xOffset = (window.innerWidth / 2 - x) * speed;
          const yOffset = (window.innerHeight / 2 - y) * speed;
          element.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
      },
      playAudio() {
        const audio = document.getElementById('background-audio');
        audio.play();
        this.showAudioButton = false; 
      },
      attemptAutoplay() {
        const audio = document.getElementById('background-audio');
        audio.play().catch(() => {
          this.showAudioButton = true; 
        });
      }
    },
    mounted() {
      this.attemptAutoplay(); 
    }
  }
  </script>
  <style>
  </style>
  