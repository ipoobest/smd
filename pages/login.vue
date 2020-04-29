<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" lazy-validation>
                  <v-text-field
                    v-model="username"
                    label="Login"
                    prepend-icon="mdi-account"
                    required
                    :rules="[(v) => !!v || 'Username is required']"
                    type="text"
                  />

                  <v-text-field
                    v-model="password"
                    label="Password"
                    prepend-icon="mdi-key"
                    required
                    :rules="[(v) => !!v || 'Password is required']"
                    type="password"
                    @keypress="(e) => e.keyCode === 13 && handleLogin()"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" type="button" @click="handleLogin"
                  >Login</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-overlay :value="overlay">
      <v-progress-circular :size="50" color="primary" indeterminate />
    </v-overlay>
  </v-app>
</template>

<script>
import * as LoginsApi from '@/utils/login'
export default {
  data() {
    return {
      overlay: false,
      password: '',
      username: '',
      session: ''
    }
  },
  layout: 'blank',
  methods: {
    async handleLogin() {
      console.log('xlikx')
      const data = {
        username: this.username,
        password: this.password
      }
      // const headers = {
      //   'X-Parse-Application-Id': '37151b935e618517d2467aaa4e10f8ed'
      // }
      const response = await LoginsApi.login(data)
      console.log('response ', response)
      if (response.data.sessionToken != null) {
        console.log('sss ', response.data)
        this.$nuxt.$store.commit('setSessionToken', response.data.sessionToken)
        this.$router.replace({ name: 'index' })
      }
    },
    setSession(data) {
      this.$nuxt.$store.commit('setSessionToken', data)
    },
    reset() {
      this.$refs.form.reset()
    }
  }
}
</script>
