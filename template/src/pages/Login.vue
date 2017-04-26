<template lang="html">
  <md-layout class="login-card-wrapper" md-align="center">
    <md-card class="md-form login-card" :class="{loading: auth.form.loading}">
      <md-card-header>
        <img class="logo" src="/static/icons/icon-512x512.png" />
      </md-card-header>

      <md-card-content>
        <md-layout>
          <md-input-container class="md-has-value" :class="{'md-input-invalid': errors.has('email')}">
            <label>Email</label>
            <md-input :value="auth.email" @input="SET_EMAIL" data-vv-name="email" v-validate="'email|required'" placeholder="eg: johndoe@example.com" autofocus></md-input>
            <span class="md-error" v-text="errors.first('email')"></span>
          </md-input-container>
        </md-layout>

        <md-layout>
          <md-input-container class="md-has-value" :class="{'md-input-invalid': errors.has('password')}">
            <label>Password</label>
            <md-input :value="auth.password" @input="SET_PASSWORD" data-vv-name="password" v-validate="'required'" type="password" placeholder="Your password"></md-input>
            <span class="md-error" v-text="errors.first('password')"></span>
          </md-input-container>
        </md-layout>
      </md-card-content>

      <md-card-actions>
        <md-button class="md-raised md-primary" @click.native="submit">
          <md-icon>exit_to_app</md-icon>
          <span class="icon-label">Login</span>
        </md-button>
      </md-card-actions>
    </md-card>
  </md-layout>
</template>

<script>
import { Validator } from 'vee-validate'
import { mapState, mapActions, mapMutations } from 'vuex'
import { AUTHENTICATE, SET_EMAIL, SET_PASSWORD } from '@/store/modules/auth/types'

export default {
  computed: {
    ...mapState({
      auth: ({ auth }) => auth
    })
  },

  created () {
    Validator.updateDictionary({
      en: {
        attributes: {
          email: 'Email',
          password: 'Password'
        }
      }
    })
  },

  mounted () {
    document.title = 'Login'
  },

  methods: {
    ...mapMutations([
      SET_EMAIL,
      SET_PASSWORD
    ]),

    ...mapActions([
      AUTHENTICATE
    ]),

    submit () {
      this.$validator.validateAll().then(() => {
        this[AUTHENTICATE]().then(() => {
          this.$router.push({name: 'dashboard'})
        })
      }, () => {
        // TODO: Show snackbar
      })
    }
  }
}
</script>
