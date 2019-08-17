<template>
<div class="form">
  <p>あなたの考えた俳句を入力してください</p>
  <input v-model="haiku">
  <button v-on:click="send">俳句で画像を生成</button>
</div>
</template>

<script>
export default {
  name: 'form',
}
</script>
<style scoped>
.form {
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 60;
  position: absolute;
}
</style>