<template>

  <div class="signin">
    <h2>Sign in</h2>
    <input type="text" placeholder="Username" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="signIn">Signin</button>
    <p> 
      <router-link to="/signup">create account now!!</router-link>
    </p>
  </div>

</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Signin',
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
        user => {
          alert('Success!')
          this.$router.push('/')
          //console.log(user)
        },
        err => {
          alert(err.message)
        }
      )
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.signin {
  top: 20%;
  left: 50%;
  right: 50%;
  z-index: 60;
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: 0;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.2);
  width: 250px;
  border-radius: 3px;
  padding: 10px 15px;

  display: block;
  text-align: center;
  font-size: 18px;
  color: white;
  cursor: pointer;
  -webkit-transition-duration: 0.25s;
          transition-duration: 0.25s;
  
}
button {
    -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: 0;
  background-color: white;
  border: 0;
  padding: 10px 15px;
  color: #53e3a6;
  border-radius: 3px;
  width: 250px;
  cursor: pointer;
  font-size: 18px;
  -webkit-transition-duration: 0.25s;
          transition-duration: 0.25s;
}

</style>