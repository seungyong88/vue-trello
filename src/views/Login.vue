<template>
  <div class="login">
    <h2>Log in to Trello</h2>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="email">Email</label>
        <input class="form-control" type="text" name="email" :value="'test@test.com'" />
      </div>
      <div>
        <label for="password">Passwrod</label>
        <input class="form-control" type="password" 
          v-model="password" placeholder="123123" />
      </div>
      <button  class="btn" :class="{'btn-success': !invalidForm}" type="submit" 
        :disabled="invalidForm">Log In</button>
    </form>
    <p class="error" v-if="error">{{error}}</p>
  </div>
</template>

<script>
import { auth, setAuthInHeader } from '../api';

import { board } from '../api'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
      rPath: '',
    }
  },
  computed: {
    invalidForm() {
      return !this.email || !this.password
    }
  },
  created() {
    this.rPath = this.$route.query.rPath || '/'
  },
  methods: {
    onSubmit() {
      auth.login(this.email, this.password)
      .then(data => {
        setAuthInHeader(data.accessToken);
        localStorage.setItem('token', data.accessToken);
        console.log(localStorage.getItem('token'));
        board.fetch().then(res => {
          console.log(res)
        }).catch(() => console.log('d'))
        // this.$router.push('/login');
      })
      .catch(err => {
        this.error = err;
      })
    }
  }
}
</script>

<style>
.login {
  width: 400px;
  margin: 0 auto; 
}
.error {
  color: #f00;
}

</style>
