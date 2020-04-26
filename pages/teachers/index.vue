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
            @pagination="handlePagination"
            :search="search"
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
      headers: [],
      items: [],
      search: ``,
      title: `ครู`
    }
  },
  methods: {
    async getDataFromApi(limit = 50, skip = 0) {
      const variable = await this.$store.dispatch(`teachers/getTeachers`)

      return variable.results
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
  },
  mounted() {
    this.getDataFromApi().then((result) => (this.items = result))
  }
}
</script>
