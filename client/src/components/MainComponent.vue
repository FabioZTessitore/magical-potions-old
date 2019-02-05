<template>
  <div class="main">
    <Logo />
  </div>
</template>

<script>
import Logo from './Logo.vue'

export default {
  name: 'MainComponent',
  components: {
    Logo
  },
  sockets: {
    connect: function () {
      console.log('socket connected')
    },

    hello: function (data) {
      console.log(data.msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
