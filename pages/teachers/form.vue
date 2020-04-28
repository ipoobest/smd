<template>
  <v-app>
    <v-container fluid>
      <v-row align="start" justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class="elevation-12">
            <v-toolbar color="success" dark flat>
              <v-toolbar-title>Create Teacher</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form ref="form" lazy-validation>
                <v-text-field
                  v-model="username"
                  label="ชื่อผู้ใช้งาน"
                  prepend-icon="mdi-account"
                  required
                  :rules="[(v) => !!v || 'กรุณาระบุชื่อผู้ใช้งาน']"
                  type="text"
                />
                <v-text-field
                  v-model="password"
                  label="รหัสการใช้งาน"
                  prepend-icon="mdi-account"
                  required
                  :rules="[(v) => !!v || 'กรุณาระบุรหัสผ่านการใช้งาน']"
                  type="password"
                />
                <v-text-field
                  v-model="teacherId"
                  label="หมายเลขประจำตัว"
                  prepend-icon="mdi-account"
                  required
                  :rules="[(v) => !!v || 'กรุณาระบุหมายเลขประจำตัว']"
                  type="text"
                />
                <v-text-field
                  v-model="teacherPosition"
                  label="ตำแหน่ง"
                  prepend-icon="mdi-account"
                  required
                  :rules="[(v) => !!v || 'กรุณาระบุตำแหน่ง']"
                  type="text"
                />

                <v-text-field
                  v-model="teacherTitle"
                  label="คำนำหน้า"
                  prepend-icon="mdi-account"
                  required
                  :rules="[(v) => !!v || 'กรุณาระบุคำนำหน้าชื่อ']"
                  type="text"
                />

                <v-text-field
                  v-model="firstName"
                  label="ชื่อ"
                  prepend-icon="mdi-account"
                  required
                  :rules="[(v) => !!v || 'กรุณาระบุชื่อ']"
                  type="text"
                />
                <v-text-field
                  v-model="lastName"
                  label="นามสกุล"
                  prepend-icon="mdi-account"
                  required
                  :rules="[(v) => !!v || 'กรุณาระบุนามสกุล']"
                  type="text"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="success" type="button" @click="hendleLogin"
                >Create</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      teacherId: '',
      teacherPosition: '',
      teacherTitle: '',
      firstName: '',
      lastName: ''
    }
  },
  methods: {
    async hendleLogin() {
      console.log('xxxx', this.teacherId)
      const urls = 'http://27.254.156.3:1337/parse/users'
      const datas = {
        username: this.username,
        password: this.password,
        teacherId: this.teacherId,
        teacherPosition: this.teacherPosition,
        title: this.teacherTitle,
        firstName: this.firstName,
        lastName: this.lastName,
        type: 'teacher'
      }
      const headers = {
        'X-Parse-Application-Id': '37151b935e618517d2467aaa4e10f8ed'
      }
      const response = await this.$axios.$post(urls, datas, { headers })
      console.log('response : ', response)
      if (response.objectId != null) {
        this.$router.replace({ name: 'teachers' })
      }
    }
  }
}
</script>
