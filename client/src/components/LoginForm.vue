<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
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
      alert(JSON.stringify(this.form))
    }
  }
}
</script>
