<template>
  <div>
    <div v-if="loading"> loading.... </div>
    <div v-else>
      bid: {{bid}}
      <br />
      <router-link :to="`/board/${bid}/card/1`">card1</router-link> | 
      <router-link :to="`/board/${bid}/card/2`">card2</router-link>
    </div>
    <hr />
    <router-view />
  </div>
</template>

<script>
import { board } from '../api';

export default {
  data(){
    return {
      loading: true,
      bid: 0
    }
  },
  created() {
    this.fetchData();
    this.bid = this.$route.params.bid;
  },
  methods: {
    fetchData() {
      board.fetch().then(res => { 
        console.log(res);
      }) 
    }
  }
}
</script>