<template>
  <b-card>
    <h3 class="card-text text-center">
      <font-awesome-icon icon="funnel-dollar" /> {{ revenue }}
    </h3>
  </b-card>
</template>

<script>
export default {
  name: 'revenue',
  computed: {
    revenue () {
      return (this.$store.state.potions / this.$store.state.potionsToMoney).toFixed(2)
    }
  }
}
</script>
