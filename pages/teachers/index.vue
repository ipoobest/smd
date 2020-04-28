<template>
  <v-layout>
    <v-row align="center">
      <v-col cols="12">
        <v-card>
          <v-card-title>
            {{ title }}
            <v-btn class="success ml-5" @click="createTeacher">เพิ่ม</v-btn>
            <v-spacer></v-spacer>

            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="items"
            :items-per-page="20"
            :search="search"
            @pagination="handlePagination"
          ></v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'หมายเลขประจำตัว',
          value: 'teacherId'
        },
        { text: 'ตำแหน่ง', value: 'teacherPosition' },
        { text: 'คำนำหน้า', value: 'title' },
        { text: 'ชื่อ', value: 'firstName' },
        { text: 'นามสกุล', value: 'lastName' }
      ],
      items: [],
      search: ``,
      title: `ครู`
    }
  },
  mounted() {
    //  @pagination="handlePagination"
    this.getDataFromApi().then((result) => (this.items = result))
    // const url = 'http://27.254.156.3:1337/parse/users?where={"type":"teacher"}'
    // const headers = {
    //   'X-Parse-Application-Id': '37151b935e618517d2467aaa4e10f8ed'
    // }
    // const data = await this.$axios.$get(url, { headers })
    // this.items = data.results
    // console.log('result ', data.results)
  },
  methods: {
    async getDataFromApi(limit = 50, skip = 0) {
      // const variable = await this.$store.dispatch(`teachers/getTeachers`)

      // return variable.results
      const url =
        'http://27.254.156.3:1337/parse/users?where={"type":"teacher"}'
      const headers = {
        'X-Parse-Application-Id': '37151b935e618517d2467aaa4e10f8ed'
      }
      const data = await this.$axios.$get(url, { headers })
      this.items = data.results
      console.log('result ', data.results)
    },
    async handlePagination(e) {
      if (e.page === e.pageCount) {
        const result = await this.getDataFromApi(50, e.itemsLength)

        if (result) {
          this.items = [...this.items, ...result]
        }
      }
    },
    createTeacher() {
      this.$router.push({
        name: 'teachers-form'
      })
    }
  }
}
</script>
