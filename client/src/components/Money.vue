<template>
  <b-card @click="makeMoney">
    <p class="card-text text-center">
      <font-awesome-icon icon="hand-holding-usd" /> {{ money }}
    </p>
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
