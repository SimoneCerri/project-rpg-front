<template>
    <div class="splash-page" @mousemove="handleMouseMove">
      <div class="wrapper">
        <div class="backdrop">
          <img src="../../Poliage.png" class="top" alt="Top Image">
          <img src="../../Poliage.png" class="bottom" alt="Bottom Image">
          <img src="../../Poliage.png" class="bottom dark" alt="Bottom Image">
          <img src="../../Tree 1.png" class="tree left-1" ref="tree1" alt="">
          <img src="../../Tree 2.png" class="tree left-2" ref="tree2" alt="">
          <img src="../../Tree 3.png" class="tree right-1" ref="tree3" alt="">
          <img src="../../Tree 4.png" class="tree right-2" ref="tree4" alt="">
        </div>
      </div>
    </div>
  </template>
  
  <script>
export default {
  name: 'SplashPage',
  methods: {
    handleMouseMove(event) {
      const x = event.clientX;
      const y = event.clientY;
      const trees = [this.$refs.tree1, this.$refs.tree2, this.$refs.tree3, this.$refs.tree4];
      trees.forEach((tree, index) => {
        const speed = 0.05; 
        const xOffset = (window.innerWidth / 2 - x) * speed;
        const yOffset = (window.innerHeight / 2 - y) * speed;
        tree.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    }
  }
}
</script>

  
  <style>
  </style>
  