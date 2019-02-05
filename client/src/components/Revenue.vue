<template>
  <b-card>
    <p class="card-text text-center">
      <font-awesome-icon icon="funnel-dollar" /> {{ revenue }}
    </p>
  </b-card>
</template>

<script>
export default {
  name: 'revenue',
  computed: {
    revenue () {
      return (this.$store.state.potions / 10.0).toFixed(2)
    }
  }
}
</script>
