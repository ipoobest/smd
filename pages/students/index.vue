<template>
  <v-layout>
    <v-row align="center">
      <v-col cols="12">
        <v-card>
          <v-card-title>
            {{ title }}
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table :headers="headers" :items="itemStu" :search="search">
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>

                <v-card-title>
                  <v-btn color="success" dark class="mb-2" to="/students/form"
                    >เพิ่ม</v-btn
                  >
                </v-card-title>
              </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item)">
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import * as StudentsApi from '@/utils/students'
export default {
  data() {
    return {
      dialog: false,
      headers: [
        { text: 'รหัสประจำตัว', value: 'badd' },
        { text: 'ชื่อ', value: 'namet' },
        { text: 'นามสกุล', value: 'snamet' },
        { text: 'หลักสูตร', value: 'course' },
        { text: 'ระดับชั้น', value: 'class' }
      ],
      itemStu: [],
      search: ``,
      title: `นักเรียน`,
      desserts: [],
      editedIndex: -1
    }
  },
  mounted() {
    this.getDataFromApi().then((result) => (this.items = result))
  },
  methods: {
    async getDataFromApi(limit = 50, skip = 0) {
      const response = await StudentsApi.get()
      this.itemStu = response.data.results
      console.log('data from server ', this.itemStu)
    }
  },
  async handlePagination(e) {
    if (e.page === e.pageCount) {
      const result = await this.getDataFromApi(50, e.itemsLength)

      if (result) {
        this.items = [...this.items, ...result]
      }
    }
  }
}
</script>
