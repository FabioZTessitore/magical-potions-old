<template>
  <div class="login">
    <b-row class="mt-5">
      <b-col class="text-center">
        <Logo />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-center">
        <router-link to="/home">(Go to Home)</router-link>
      </b-col>
    </b-row>

    <b-row class="mt-5 align-items-center">
      <b-col md="2"></b-col>
      <b-col>
        <h1 class="text-center"><font-awesome-icon icon="wine-bottle" /></h1>
      </b-col>
      <b-col>
        <LoginForm />
        <p class="mt-3">
          <div class="card-body">
            <p><small>New to <strong>Magical Potions</strong>? <router-link to="/signup">Create an account</router-link></small></p>
          </div>
        </p>
      </b-col>
      <b-col md="2"></b-col>
    </b-row>
  </div>
</template>

<script>
import Logo from './Logo.vue'
import LoginForm from './LoginForm.vue'

export default {
  name: 'Login',
  components: {
    Logo,
    LoginForm
  }
}
</script>
