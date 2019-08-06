<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group
                    label="Username:"
                    label-for="username"
                    description="">
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
      <b-button type="submit" variant="primary" block>Login</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      // alert(JSON.stringify(this.form))
      this.$socket.emit('authentication', this.form)
    }
  },
  sockets: {
    authenticated () {
      console.log('ok, we\'re in')
    }
  }
}
</script>
