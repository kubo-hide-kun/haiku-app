<template>
  <div class="send">
    <div class="input-word">
    単語: <input v-model="haiku" />
    </div>

    <div class="input-img">
    <label class="input-item__label" v-show="!uploadedImage">
      画像を選択
      <input type="file" @change="onFileChange" />
    </label>
    </div>

    <div class="show-img" v-show="uploadedImage">
      <img :src="uploadedImage"/>
    </div>


    <div v-show="uploadedImage" @click="remove" key="send-img"><p>{{img_name}} x </p></div>
    <div v-show="uploadedImage && haiku"><button>投句</button></div>
  </div>
</template>

<script>
export default {
  name: "send",
  data() {
    return {
      uploadedImage: false,
      img_name: '',
      haiku: ''
    };
  },
  methods: {
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      this.createImage(files[0]);
      this.img_name = files[0].name;
    },
    createImage(file) {
      let reader = new FileReader();
      reader.onload = e => {
        this.uploadedImage = e.target.result;
        
      };
      reader.readAsDataURL(file);
    },
    remove(event) {
      this.uploadedImage = '';
    }
  }
};
</script>
<style scoped>
.send {
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 60;
  position: absolute;
}
label > input {
  display: none;
}
</style>