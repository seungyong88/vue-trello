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
      setTimeout(() => {
        this.loading = false;
      }, 1000)
    }
  }
}
</script>

<style>

</style>