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
                    label="Login"
                    prepend-icon="mdi-account"
                    required
                    :rules="[(v) => !!v || 'Username is required']"
                    type="text"
                    v-model="username"
                  />

                  <v-text-field
                    @keypress="(e) => e.keyCode === 13 && handleLogin()"
                    label="Password"
                    prepend-icon="mdi-key"
                    required
                    :rules="[(v) => !!v || 'Password is required']"
                    type="password"
                    v-model="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="handleLogin" type="button"
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
export default {
  data() {
    return {
      overlay: false,
      password: ``,
      username: ``
    }
  },
  layout: 'blank',
  methods: {
    async handleLogin() {
      if (!!this.username && !!this.password) {
        try {
          await this.$store.dispatch(`auth/login`, {
            username: this.username,
            password: this.password
          })
        } catch (error) {}
      }
    },
    reset() {
      this.$refs.form.reset()
    }
  }
}
</script>
