<template>
  <div class="main">
    <b-row class="mt-5">
      <b-col class="text-center">
        <Logo />
      </b-col>
    </b-row>

    <b-row class="mt-5">
      <b-col md="1">
      </b-col>

      <b-col md="2">
        <Money />
      </b-col>

      <b-col md="2">
      </b-col>

      <b-col md="2">
        <Revenue />
      </b-col>

      <b-col md="2">
      </b-col>

      <b-col md="2">
        <Potions />
      </b-col>

      <b-col md="1">
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Logo from './Logo.vue'
import Money from './Money.vue'
import Potions from './Potions.vue'
import Revenue from './Revenue.vue'

export default {
  name: 'MainComponent',
  components: {
    Logo,
    Money,
    Potions,
    Revenue
  }
}
</script>
