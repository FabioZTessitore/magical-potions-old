<template>
  <b-card @click="makePotions">
    <p class="card-text text-center">
      <font-awesome-icon icon="wine-bottle" /> {{ potions }}
    </p>
  </b-card>
</template>

<script>
export default {
  name: 'potions',
  computed: {
    potions () {
      return this.$store.state.potions.toFixed(0)
    }
  },
  methods: {
    makePotions () {
      this.$store.commit('incrementPotions')
    }
  }
}
</script>
