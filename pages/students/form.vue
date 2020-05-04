<template>
  <v-layout>
    <v-row align="center">
      <v-col cols="12">
        <v-card>
          <v-card-title>{{ title }}</v-card-title>
          <v-tabs v-model="tab" fixed-tabs>
            <v-tab href="#personalData">ข้อมูลส่วนตัว</v-tab>
            <v-tab href="#addressData">ที่อยู่อาศัย</v-tab>
            <v-tab href="#familyData">ข้อมูลครอบครัว</v-tab>
            <v-tab href="#withdrawData">สิทธิการเบิกค่าเล่าเรียน</v-tab>
            <v-tab href="#healthData">ข้อมูลสุขภาพ</v-tab>

            <v-tab-item value="personalData"
              ><Personal @savePersonal="handlePersonalData"
            /></v-tab-item>
            <v-tab-item value="addressData"
              ><Address @saveAddress="handleAddressData"
            /></v-tab-item>
            <v-tab-item value="familyData"
              ><Family @saveFamily="handleFamilyData"
            /></v-tab-item>
            <v-tab-item value="withdrawData"
              ><Withdraw @saveWithdraw="handleWithdrawData"
            /></v-tab-item>
            <v-tab-item value="healthData"
              ><Health @saveHealth="handleHealthData"
            /></v-tab-item>
          </v-tabs>
          <!-- <v-btn @click="changeTab('tab-2')">Go to item2</v-btn> -->
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import Address from '@/components/students/AddressForm.vue'
import Family from '@/components/students/FamilyForm.vue'
import Health from '@/components/students/HealthForm.vue'
import Personal from '@/components/students/PersonalForm.vue'
import Withdraw from '@/components/students/WithdrawForm.vue'

export default {
  components: {
    Address,
    Family,
    Health,
    Personal,
    Withdraw
  },
  async asyncData() {},
  data() {
    return {
      tab: '',
      title: 'ข้อมูลส่วนตัวนักเรียน',
      personal: {
        tth: '',
        namet: '',
        snamet: '',
        nickName: '',
        sex: '',
        idstd: '',
        course: '',
        class: '',
        study: '',
        ten: '',
        namee: '',
        snamee: '',
        idCard: '',
        stage: '',
        stmonth: '',
        nation: '',
        race: '',
        religian: '',
        bday: '',
        badd: '',
        bprovince: ''
      },
      family: {
        father: {
          fname: '',
          fsername: '',
          fage: '',
          feducation: '',
          fwork: '',
          fcareer: '',
          fpost: '',
          fbeloin: '',
          officeAddress: {
            fatwork: '',
            ftell: ''
          },
          fphone: '',
          fsalary: ''
        },
        mather: {
          mname: '',
          msername: '',
          mage: '',
          meducation: '',
          mwork: '',
          mcareer: '',
          mpost: '',
          mbeloin: '',
          officeAddress: {
            matwork: '',
            mtell: ''
          },
          mphone: '',
          msalary: ''
        }
      },
      address: {
        residential: '',
        domicile: '',
        dormitory: '',
        addres: '',
        dorm: '',
        stell: ''
      },
      withdraw: {
        privileage: '',
        welfare: ''
      },
      health: {
        blood: '',
        disease: '',
        treatment: '',
        healthpb: ''
      }
    }
  },
  mounted() {},
  methods: {
    saveData() {
      const data = [
        this.personal,
        this.family,
        this.address,
        this.withdraw,
        this.health
      ]
      console.log('data xxx', data)
    },
    handlePersonalData(PersonalForm, tab) {
      this.personal = PersonalForm
      this.changeTab(tab)
      console.log('main ', this.personal)
    },
    handleAddressData(AdderessData, tab) {
      this.address = AdderessData
      console.log('tab address ', this.address)
      this.changeTab(tab)
    },
    handleFamilyData(FamilyData, tab) {
      this.family = FamilyData
      console.log('tab FamilyData ', this.family)
      this.tab = tab
      this.changeTab(this.tab)
    },
    handleWithdrawData(FamilyData, tab) {
      this.changeTab(tab)
    },
    handleHealthData(HealthData, tab) {
      console.log('main handleHealthData ', this.HealthData)
      this.changeTab(tab)
    },
    changeTab(tab) {
      this.tab = tab
    }
  }
}
</script>
