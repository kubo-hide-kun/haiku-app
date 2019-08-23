<template>
<div id="haiku-show" class="haiku-show">
  <img src="../assets/logo.png" class="haiku-list">
  <img src="../assets/logo.png" class="haiku-list">
  <img src="../assets/logo.png" class="haiku-list">
</div>
</template>

<script>
export default {
  name: 'recieve',
  data() {
    return{
      index: 0,
    }
  },
  mounted() {
    const images = document.getElementsByClassName('haiku-list');
    this.haikuShow(images);
    setInterval(()=>{
      this.index = this.index < images.length-1 ? this.index+1 : 0;
      this.haikuShow(images);
    },3000);
  },
  methods: {
    haikuShow(images) {
      const current = images[this.index];
      const prev = images[this.index-1] ? images[this.index-1] : images[images.length-1];
      current.classList.add('feedin');
      current.classList.remove('feedout');
      prev.classList.remove('feedin');
      prev.classList.add('feedout');
    }
  }
}
</script>
<style scoped>
.haiku-list {
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 60;
  position: absolute;
}

.feedin {
  opacity: 1;
  transition: opacity 0.5s;
}


.feedout {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>