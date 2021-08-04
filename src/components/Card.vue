<template>
  <div>
    <div v-if="loading"> loading ... </div>
    <div v-else>
      card {{this.$route.params.cid}}
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      loading: true,
      cid: 0,
    }
  },
  watch: {
    '$route': {
      handler: 'fetchData',
      immediate: true
    }
  },
  methods: {
    fetchData() {
      setTimeout(() => {
        this.cid = this.$route.params.cid;
        this.loading = false;
      }, 500)
    }
  }
}
</script>

<style>

</style>