<template>
  <div>
    <b-row class="mt-5">
      <b-col class="text-center">
        <Logo />
      </b-col>
    </b-row>

    <b-row class="mt-5">
      <b-col class="text-center">
        <h2>Sign Up</h2>
      </b-col>
    </b-row>

    <div class="offset-md-3 col-md-6">
      <b-form @submit="onSubmit" class="mt-5" md="6">
        <b-form-group
                      label="Email address:"
                      label-for="useremail"
                      description="We'll never share your email with anyone else.">
          <b-form-input id="useremail"
                        type="email"
                        v-model="form.email"
                        required
                        placeholder="Enter email">
          </b-form-input>
        </b-form-group>
        
        <b-form-group
                      label="Username:"
                      label-for="username">
          <b-form-input id="username"
                        type="text"
                        v-model="form.username"
                        required
                        placeholder="Enter username">
          </b-form-input>
        </b-form-group>

        <b-form-group
                      label="Password:"
                      label-for="userpassword">
          <b-form-input id="userpassword"
                        type="password"
                        v-model="form.password"
                        required
                        placeholder="Enter Password">
          </b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" block>Sign Up</b-button>
      </b-form>

      <b-row class="mt-5" v-if="error">
        <b-col class="text-center">
          <h2>Error</h2>
          <p>{{ errorMessage }}</p>
        </b-col>
      </b-row>

    </div>
  </div>
</template>

<script>
import Logo from './Logo.vue'

export default {
  name: 'SignUp',
  data () {
    return {
      form: {
        username: '',
        email: '',
        password: ''
      },
      error: false,
      errorMessage: ''
    }
  },
  sockets: {
    signupResponse: function (res) {
      console.log(res)
      if (res.success) {
        this.error = false
        this.$router.push('/')
      } else {
        this.setError(res.message)
      }
      return false
    }
  },
  methods: {
    setError (message) {
      this.error = true
      this.errorMessage = message
    },
    onSubmit (evt) {
      evt.preventDefault()
      this.$socket.emit('signup', this.form)
    }
  },
  components: {
    Logo
  }
}
</script>
