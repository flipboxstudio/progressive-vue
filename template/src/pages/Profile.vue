<template lang="html">
  <page-content page-title="Profile">
    <div class="main-content">
      <md-form novalidate @submit.stop.prevent="submit" :class="{loading: profile.form.loading}">
        <template slot="left">
          <md-form-content legend="Basic Information" @reset="resetBasic">
            <md-form-section>
              <md-input-container slot="left" :class="{'md-input-invalid': errors.has('first_name')}">
                <label>First Name</label>
                <md-input data-vv-name="first_name" v-validate="'required'" :value="profile.name.first" @input="setState({accessor: 'name.first', value: $event})" required></md-input>
                <span class="md-error" v-text="errors.first('first_name')"></span>
              </md-input-container>

              <md-input-container slot="right" :class="{'md-input-invalid': errors.has('last_name')}">
                <label>Last Name</label>
                <md-input data-vv-name="last_name" v-validate="'required'" :value="profile.name.last" @input="setState({accessor: 'name.last', value: $event})" required></md-input>
                <span class="md-error" v-text="errors.first('last_name')"></span>
              </md-input-container>
            </md-form-section>

            <md-form-section>
              <md-input-container slot="left" :class="{'md-input-invalid': errors.has('email')}">
                <label>Email</label>
                <md-input data-vv-name="email" v-validate="'required|email'" required type="email" :value="profile.email" @input="setState({accessor: 'email', value: $event})"></md-input>
                <span class="md-error" v-text="errors.first('email')"></span>
              </md-input-container>

              <md-input-container slot="right" :class="{'md-input-invalid': errors.has('phone')}">
                <label>Phone</label>
                <md-input data-vv-name="phone" v-validate="'required'" required :value="profile.phone" @input="setState({accessor: 'phone', value: $event})"></md-input>
                <span class="md-error" v-text="errors.first('phone')"></span>
              </md-input-container>
            </md-form-section>
          </md-form-content>

          <md-divider></md-divider>

          <md-form-content legend="Address" :readonly="true">
            <md-form-section>
              <md-input-container slot="left">
                <label>Street</label>
                <md-input disabled :value="profile.location.street"></md-input>
              </md-input-container>

              <md-input-container slot="right">
                <label>City</label>
                <md-input disabled :value="profile.location.city"></md-input>
              </md-input-container>
            </md-form-section>

            <md-form-section>
              <md-input-container slot="left">
                <label>State</label>
                <md-input disabled :value="profile.location.state"></md-input>
              </md-input-container>

              <md-input-container slot="right">
                <label>Postcode</label>
                <md-input disabled :value="profile.location.postcode"></md-input>
              </md-input-container>
            </md-form-section>
          </md-form-content>

          <md-divider></md-divider>

          <md-form-content legend="Picture" :readonly="true">
            <md-layout md-gutter="24" md-flex="100">
              <md-layout>
                <div class="profile-picture-wrapper">
                  <img :src="profile.picture.thumbnail" alt="Picture" />
                </div>
                <div class="profile-picture-wrapper">
                  <img :src="profile.picture.medium" alt="Picture" />
                </div>
                <div class="profile-picture-wrapper">
                  <img :src="profile.picture.large" alt="Picture" />
                </div>
              </md-layout>
            </md-layout>
          </md-form-content>

          <md-divider></md-divider>

          <md-form-content legend="Raw Data" :readonly="true">
            <pre v-text="profile"></pre>
          </md-form-content>
        </template>

        <template slot="right">
          <md-form-content>
            <md-form-section>
              <div slot="left" class="full-width">
                <md-button class="md-raised md-accent full-width" :disabled="!changed" @click.native="revert">Revert</md-button>
              </div>

              <div slot="right" class="full-width">
                <md-button class="md-raised md-primary full-width" @click.native="submit">Save</md-button>
              </div>
            </md-form-section>
          </md-form-content>

          <md-divider></md-divider>

          <md-form-content>
            <md-form-section>
              <span slot="left" class="md-body-1">Status: </span>

              <span slot="right" class="md-body-1" v-text="profile.registered ? 'Active' : ''"></span>
            </md-form-section>

            <md-form-section>
              <span slot="left" class="md-body-1">Registered at: </span>

              <span slot="right" class="md-body-1" v-text="profile.registered"></span>
            </md-form-section>
          </md-form-content>
        </template>
      </md-form>
    </div>
  </page-content>
</template>

<script>
import { Validator } from 'vee-validate'
import { mapState, mapMutations } from 'vuex'
import * as PROFILE_TYPES from '@/store/modules/profile/types'

export default {
  data () {
    return {
      original: {
        //
      }
    }
  },

  computed: {
    ...mapState({
      profile: ({ profile }) => profile
    }),

    changed () {
      return JSON.stringify(this.original) !== JSON.stringify(this.profile)
    }
  },

  created () {
    this.original = JSON.parse(JSON.stringify(this.profile))

    Validator.updateDictionary({
      en: {
        attributes: {
          first_name: 'First Name',
          last_name: 'Last Name',
          email: 'Email',
          phone: 'Phone'
        }
      }
    })
  },

  methods: {
    ...mapMutations({
      setState: PROFILE_TYPES.SET_STATE,
      resetBasic: PROFILE_TYPES.RESET_BASIC,
      setProfile: PROFILE_TYPES.SET_PROFILE
    }),

    submit () {
      this.$validator.validateAll().then(() => {
        // Submit your changes
      }, () => {
        // TODO: Show snackbar
      })
    },

    revert () {
      this.setProfile(this.original)
    }
  }
}
</script>

<style scoped>
.profile-picture-wrapper {
  margin-right: 24px;
}
</style>
