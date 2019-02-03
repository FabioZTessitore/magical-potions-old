<template>
  <div class="logo">
    <h1>{{ logoName }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  data () {
    return {
      logoName: 'Magical Potions'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
