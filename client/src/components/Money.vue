<template>
  <b-card @click="makeMoney">
    <h3 class="card-text text-center">
      <font-awesome-icon icon="hand-holding-usd" /> {{ money }}
    </h3>
  </b-card>
</template>

<script>
export default {
  name: 'money',
  computed: {
    money () {
      return this.$store.state.money.toFixed(1)
    }
  },
  methods: {
    makeMoney () {
      this.$store.commit('increment')
    }
  }
}
</script>
