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
                      <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field
                              v-model="editedItem.username"
                              label="username"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field
                              v-model="editedItem.password"
                              label="password"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="editedItem.teacherId"
                              label="รหัสประจำตัว"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="editedItem.teacherPosition"
                              label="ตำแหน่ง"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="editedItem.title"
                              label="คำนำหน้า"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field
                              v-model="editedItem.firstName"
                              label="ชื่อ"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field
                              v-model="editedItem.lastName"
                              label="นามสกุล"
                            ></v-text-field>
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
      title: `ครู`,
      desserts: [],
      editedIndex: -1,
      editedItem: {
        username: '',
        password: '',
        teacherId: '',
        teacherPosition: '',
        teacherTitle: '',
        firstName: '',
        lastName: '',
        type: 'teacher'
      }
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
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
    async createTeacher(data) {
      console.log('create teacher ', data)
      const response = await TeachersApi.create(data)
      console.log('res create', response)
    },
    async updateTeacher(data) {
      console.log('data update ', data)
      const response = await TeachersApi.update(data)
      console.log('res ', response)
    },
    async deteleTeacher(itemId) {
      console.log('delete update ', itemId)
      const response = await TeachersApi.deleteTeacher(itemId)
      console.log('res ', response)
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
    editItem(item) {
      console.log('item id ', item)
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)

      this.dialog = true
    },
    deleteItem(item) {
      const index = this.items.indexOf(item)
      confirm('ยืนยีนการลบบัญชีผู้ใช้') &&
        this.deteleTeacher(item.objectId) &&
        this.items.splice(index, 1)
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
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem)
        console.log('put xx ', this.editedItem)
        const editData = {
          objectId: this.editedItem.objectId,
          teacherId: this.editedItem.teacherId,
          teacherPosition: this.editedItem.teacherPosition,
          title: this.editedItem.title,
          firstName: this.editedItem.firstName,
          lastName: this.editedItem.lastName
        }
        this.updateTeacher(editData)
      } else {
        this.createTeacher(this.editedItem)
        this.items.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>
