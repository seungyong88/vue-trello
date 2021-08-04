<template>
  <div>
    bid: {{bid}}
    <hr />
    <router-link :to="`/board/${bid}/card/1`">card1</router-link> | 
    <router-link :to="`/board/${bid}/card/2`">card2</router-link>
    <router-view />
  </div>
</template>
<script>

export default {
  data(){
    return {
      bid: 0
    }
  },
  created() {
    this.bid = this.$route.params.bid;
  }
}
</script>

<style>

</style>