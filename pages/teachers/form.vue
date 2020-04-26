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
                  label="หมายเลขประจำตัว"
                  prepend-icon="mdi-account"
                  required
                  :rules="[(v) => !!v || 'กรุณาระบุหมายเลขประจำตัว']"
                  type="text"
                  v-model="teacherId"
                />
                <v-text-field
                  label="ตำแหน่ง"
                  prepend-icon="mdi-account"
                  required
                  :rules="[(v) => !!v || 'กรุณาระบุตำแหน่ง']"
                  type="text"
                  v-model="teacherPosition"
                />

                <v-text-field
                  label="คำนำหน้า"
                  prepend-icon="mdi-account"
                  required
                  :rules="[(v) => !!v || 'กรุณาระบุคำนำหน้าชื่อ']"
                  type="text"
                  v-model="teacherTitle"
                />

                <v-text-field
                  label="ชื่อ"
                  prepend-icon="mdi-account"
                  required
                  :rules="[(v) => !!v || 'กรุณาระบุชื่อ']"
                  type="text"
                  v-model="firstName"
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
      teacherId: '',
      teacherPosition: '',
      teacherTitle: '',
      firstName: '',
      lastName: ''
    }
  },
  methods: {
    hendleLogin() {
      console.log('xxxxxx')
    }
  }
}
</script>
