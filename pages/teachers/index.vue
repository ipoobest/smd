<template>
  <v-layout>
    <v-row align="center">
      <v-col cols="12">
        <v-card>
          <v-card-title>
            {{ title }}
            <!-- <v-btn class="success ml-5" @click="createTeacher">เพิ่ม</v-btn> -->
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
            :search="search"
            @pagination="handlePagination"
          >
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="700px">
                  <template v-slot:activator="{ on }">
                    <v-btn color="success" dark class="mb-2" v-on="on"
                      >เพิ่ม</v-btn
                    >
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">สร้างบัญชีผู้ใช้สำหรับครู</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field label="username"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field label="password"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field label="รหัสประจำตัว"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field label="ตำแหน่ง"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field label="คำนำหน้า"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field label="ชื่อ"></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field label="นามสกุล"></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="close"
                        >Cancel</v-btn
                      >
                      <v-btn color="blue darken-1" text @click="save"
                        >Save</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-dialog>
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
            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import * as TeachersApi from '@/utils/teachers'
export default {
  data() {
    return {
      dialog: false,
      headers: [
        {
          text: 'หมายเลขประจำตัว',
          value: 'teacherId'
        },
        { text: 'ตำแหน่ง', value: 'teacherPosition' },
        { text: 'คำนำหน้า', value: 'title' },
        { text: 'ชื่อ', value: 'firstName' },
        { text: 'นามสกุล', value: 'lastName' },
        { text: 'Actions', value: 'actions', sortable: false }
      ],
      items: [],
      search: ``,
      title: `ครู`
    }
  },
  watch: {
    dialog(val) {
      val || this.close()
    }
  },
  mounted() {
    this.getDataFromApi().then((result) => (this.items = result))
  },
  methods: {
    async getDataFromApi(limit = 50, skip = 0) {
      const response = await TeachersApi.get()
      console.log('res ', response.data.results)
      this.items = response.data.results
    },
    async handlePagination(e) {
      if (e.page === e.pageCount) {
        const result = await this.getDataFromApi(50, e.itemsLength)

        if (result) {
          this.items = [...this.items, ...result]
        }
      }
    },
    initialize() {
      console.log('initialize')
    },
    createTeacher() {
      this.$router.push({
        name: 'teachers-form'
      })
    },
    editItem(itemId) {
      console.log('item id ', itemId)
      this.close()
    },
    delete(itemId) {
      console.log('item id ', itemId)
    },
    close() {
      console.log('closd')
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    save() {
      console.log('save')
      this.close()
    }
  }
}
</script>
