<template>
  <div class="splash-page" @mousemove="handleMouseMove">
    <video class="video" loop autoplay muted>
      <source src="../../public/background.mp4" type="video/mp4">
    </video>

    <audio id="background-audio" loop>
      <source src="../../public/background-music.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>

    <button v-if="showAudioButton" @click="playAudio" class="audio-button">
      Play Music
    </button>
    <button v-if="isPlaying" @click="toggleMute" class="mute-button">
      <i :class="isMuted ? 'fa-solid fa-volume-mute' : 'fa-solid fa-volume-up'"></i>
    </button>

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
        <router-link to="/home" class="join-button" ref="joinButton">
          <span class="button-text">JOIN NOW</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplashPage',
  data() {
    return {
      showAudioButton: false,
      isPlaying: false,
      isMuted: false,
    };
  },
  methods: {
    handleMouseMove(event) {
      const x = event.clientX;
      const y = event.clientY;
      const elements = [this.$refs.tree1, this.$refs.tree2, this.$refs.logo, this.$refs.joinButton];
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
      this.isPlaying = true;
      this.showAudioButton = false;
    },
    toggleMute() {
      const audio = document.getElementById('background-audio');
      this.isMuted = !this.isMuted;
      audio.muted = this.isMuted;
    },
    attemptAutoplay() {
      const audio = document.getElementById('background-audio');
      audio.play().then(() => {
        this.isPlaying = true;
      }).catch(() => {
        this.showAudioButton = true;
      });
    }
  },
  mounted() {
    this.attemptAutoplay();
  }
}
</script>

<style scoped>
template {
  overflow: hidden; 
}

.splash-page {
  height: 100vh;
  width: 100vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  overflow-x: hidden;
  position: relative;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.backdrop {
  width: 100%;
  height: 100%;
  position: relative;
}

img {
  position: absolute;
  width: 100%;
  height: auto;
}

.top {
  top: 0;
  left: 0;
  opacity: 0.5;
}

.bottom {
  bottom: 0;
  left: 0;
  transform: rotate(180deg);
  opacity: 0.5;
}

.dark {
  filter: brightness(0.5);
}

.tree {
  position: absolute;
  overflow: hidden;
  height: 100%;
  top: 0px;
  object-fit: cover;
  filter: brightness(0.5);
  filter: blur(10px);
  z-index: 1;
}

.left-1 {
  left: -400px;
  opacity: 1;
}

.right-2 {
  right: -550px;
}

@keyframes blurIn {
  from {
    filter: blur(10px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
}

.blur-in {
  animation: blurIn 1.5s ease-in-out;
}

.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.logo {
  width: 500px;
  margin-bottom: 150px;
  filter: drop-shadow(0px 5px 24px #000000);
}

.join-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  position: relative;
  cursor: pointer;
  width: 300px;
  height: 100px;
  background-image: url('../../public/gai_1_30.png');
  background-size: cover;
  background-position: center;
  transition: filter 0.3s ease;
}

.join-button:hover {
  filter: brightness(1.75);
}

.button-text {
  color: #ffffff;
  font-size: 20px;
  font-family: 'Cinzel', serif;
  text-transform: uppercase;
  z-index: 3;
}

.audio-button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  cursor: pointer;
  font-family: 'Cinzel', serif;
  z-index: 3;
}

.audio-button,
.mute-button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  cursor: pointer;
  font-family: 'Cinzel', serif;
  z-index: 4;
}

.mute-button {
  right: 10px;
}
</style>

