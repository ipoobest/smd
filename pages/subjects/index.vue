<template>
  <v-layout>
    <v-row align="center">
      <v-col cols="12">
        <v-card>
          <v-card-title>
            {{ title }}
            <v-spacer> </v-spacer>
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
                      <span class="headline">สร้าง/แก้ไข</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field
                              v-model="datas.subjectCode"
                              label="รหัสวิชา"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field
                              v-model="datas.subjectName"
                              label="ชื่อวิชา"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="datas.credit"
                              label="หน่วยกิต"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="4">
                            <v-text-field
                              v-model="datas.hour"
                              label="จำนวนชั่วโมงที่สอน"
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
import * as SubjectApi from '@/utils/subjects'
export default {
  data() {
    return {
      dialog: false,
      editedIndex: -1,
      headers: [
        { text: 'รหัสวิชา', value: 'subjectCode' },
        { text: 'ชื่อวิชา', value: 'subjectName' },
        { text: 'หน่วยกิต', value: 'credit' },
        { text: 'จำนวนชั่วโมงที่สอน', value: 'hour' },
        { text: 'อาจารย์ประจำวิชา', value: 'teatherId' },
        { text: 'Actions', value: 'actions', sortable: false }
      ],
      items: [],
      search: ``,
      title: `วิชา`,
      datas: {
        subjectCode: '',
        subjectName: '',
        credit: '',
        hour: '',
        teatherId: ''
      }
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'สร้างวิชา' : 'แก้ไขวิชา'
    }
  },
  watch: {
    dialog(val) {
      val || this.close()
    }
  },
  mounted() {
    this.getdataFromApi().then((result) => (this.items = result))
  },
  methods: {
    async getdataFromApi(limit = 50, skip = 0) {
      const response = await SubjectApi.get()
      // this.items = response
      console.log('subject', response)
      this.items = response.data.results
    },
    async createSubject(data) {
      const response = await SubjectApi.create(data)
      console.log('createSubject ', response)
    },
    async updateSubject(data) {
      console.log('data put subjest ', data.objectId)
      const response = await SubjectApi.update(data)
      console.log('updateSubject ', response)
    },
    async deleteSubject(data) {
      const response = await SubjectApi.deleteSubject(data)
      console.log('deleteSubject ', response)
    },
    async handlePagination(e) {
      if (e.page === e.pageCount) {
        const result = await this.getdataFromApi(50, e.itemsLength)

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
      this.datas = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem(item) {
      const index = this.items.indexOf(item)
      confirm('ยืนยีนการลบบัญชีผู้ใช้') &&
        this.deleteSubject(item.objectId) &&
        this.items.splice(index, 1)
    },
    close() {
      console.log('closd')
      this.dialog = false
      setTimeout(() => {
        this.datas = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.datas)
        console.log('put xx ', this.items)
        const editdatas = {
          objectId: this.datas.objectId,
          subjectCode: this.datas.subjectCode,
          subjectName: this.datas.subjectName,
          credit: this.datas.credit,
          hour: this.datas.hour,
          teatherId: this.datas.teatherId
        }
        this.updateSubject(editdatas)
      } else {
        this.createSubject(this.datas)
        this.items.push(this.datas)
      }
      this.close()
    }
  }
}
</script>
