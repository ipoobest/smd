<template>
  <v-card-text>
    <h3>ข้อมูลผู้ปกครอง</h3>
    <v-row>
      <v-col cols="6">
        <v-row>
          <v-col class="pt-0 pb-0" cols="5">
            <v-text-field
              v-model="father.name"
              dense
              outlined
              label="ชื่อ (บิดา)"
            />
          </v-col>
          <v-col class="pt-0 pb-0" cols="5">
            <v-text-field
              v-model="father.lastName"
              dense
              outlined
              label="นามสกุล (บิดา)"
            />
          </v-col>
          <v-col class="pt-0 pb-0" cols="2">
            <v-text-field v-model="father.age" dense outlined label="อายุ" />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pt-0 pb-0" cols="6">
            <v-select
              v-model="homereciv"
              dense
              outlined
              label="สถานะภาพ (*หากเสียชีวิตแล้วไม่ต้องตอบเรื่องอาชีพ)"
            />
          </v-col>
          <v-col class="pt-0 pb-0" cols="6">
            <v-select
              v-model="father.education"
              dense
              outlined
              label="คุณวุติทางการศึกษา"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pt-0 pb-0" cols="7">
            <v-select v-model="father.job" dense outlined label="อาชีพ" />
          </v-col>
          <v-col class="pt-0 pb-0" cols="5">
            <v-text-field
              v-model="father.position"
              dense
              outlined
              label="ตำแหน่ง"
            />
          </v-col>
          <v-col class="pt-0 pb-0" cols="12">
            <v-textarea
              v-model="father.officeAddress.addressData"
              label="สถานที่ทำงานของบิดา"
              auto-grow
              outlined
              rows="3"
              row-height="40"
            ></v-textarea
          ></v-col>
          <v-col class="pt-0 pb-0" cols="6">
            <v-text-field
              v-model="father.officeAddress.tel"
              dense
              outlined
              label="เบอร์โทรศัพท์ที่ทำงาน"
            />
          </v-col>
          <v-col class="pt-0 pb-0" cols="6">
            <v-text-field
              v-model="father.telephone"
              dense
              outlined
              label="เบอร์โทรศัพท์มือถือ"
            />
          </v-col>
          <v-col class="pt-0 pb-0" cols="6">
            <v-text-field
              v-model="father.monthlyIncome"
              dense
              outlined
              label="รายได้เฉลี่ย/เดือน"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row>
          <v-col class="pt-0 pb-0" cols="5">
            <v-text-field
              v-model="mather.name"
              dense
              outlined
              label="ชื่อ (มารดา)"
            />
          </v-col>
          <v-col class="pt-0 pb-0" cols="5">
            <v-text-field
              v-model="mather.lastName"
              dense
              outlined
              label="นามสกุล (มารดา)"
            />
          </v-col>
          <v-col class="pt-0 pb-0" cols="2">
            <v-text-field v-model="mather.age" dense outlined label="อายุ" />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pt-0 pb-0" cols="6">
            <v-select
              v-model="mather.education"
              dense
              outlined
              label="คุณวุติทางการศึกษา"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pt-0 pb-0" cols="7">
            <v-select v-model="mather.job" dense outlined label="อาชีพ" />
          </v-col>
          <v-col class="pt-0 pb-0" cols="5">
            <v-text-field
              v-model="mather.position"
              dense
              outlined
              label="ตำแหน่ง"
            />
          </v-col>
          <v-col class="pt-0 pb-0" cols="12">
            <v-textarea
              v-model="mather.officeAddress.addressData"
              label="สถานที่ทำงานของมารดา"
              auto-grow
              outlined
              rows="3"
              row-height="40"
            ></v-textarea
          ></v-col>
          <v-col class="pt-0 pb-0" cols="6">
            <v-text-field
              v-model="mather.officeAddress.tel"
              dense
              outlined
              label="เบอร์โทรศัพท์ที่ทำงาน"
            />
          </v-col>
          <v-col class="pt-0 pb-0" cols="6">
            <v-text-field
              v-model="mather.telephone"
              dense
              outlined
              label="เบอร์โทรศัพท์มือถือ"
            />
          </v-col>
          <v-col class="pt-0 pb-0" cols="6">
            <v-text-field
              v-model="mather.monthlyIncome"
              dense
              outlined
              label="รายได้เฉลี่ย/เดือน"
            />
          </v-col>
        </v-row>
        <v-row justify="end">
          <div class="mb-5 mr-7">
            <v-btn color="orange" depressed large @click="back">ย้อนกลับ</v-btn>
            <v-btn color="primary" depressed large @click="save">ถัดไป</v-btn>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script>
export default {
  name: 'FamilyForm',
  data() {
    return {
      tab: '',
      FamilyData: {
        father: {
          name: '',
          lastName: '',
          age: '',
          education: '',
          job: '',
          position: '',
          officeAddress: {
            addressData: '',
            tel: ''
          },
          telephone: '',
          monthlyIncome: ''
        }
      },
      mather: {
        name: '',
        lastName: '',
        age: '',
        education: '',
        job: '',
        position: '',
        officeAddress: {
          addressData: '',
          tel: ''
        },
        telephone: '',
        monthlyIncome: ''
      },
      homereciv: ''
    }
  },
  methods: {
    back() {
      this.tab = 'addressData'
      console.log('black', this.tab)
      this.$emit('saveFamily', this.FamilyData, this.tab)
    },
    save() {
      console.log('go')
      this.tab = 'withdrawData'
      this.$emit('saveFamily', this.FamilyData, this.tab)
    }
  }
}
</script>

<style lang="scss" scoped></style>
