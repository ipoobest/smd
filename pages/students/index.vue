<template>
  <v-layout>
    <v-row align="center">
      <v-col cols="12">
        <v-card>
          <v-card-title>
            {{ title }}
            <v-btn class="success ml-5" @click="createStudent">เพิ่ม</v-btn>
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
      title: `นักเรียน`
    }
  },
  methods: {
    async getDataFromApi(limit = 50, skip = 0) {
      const variable = await this.$store.dispatch(`students/getStudents`)

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
    createStudent() {
      console.log('create')
    },
    mounted() {
      this.getDataFromApi().then((result) => (this.items = result))
    }
  }
}
</script>
