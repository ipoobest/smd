<template>
  <v-layout>
    <v-row align="center">
      <v-col cols="12">
        <v-card>
          <v-card-title>{{ title }}</v-card-title>
          <v-tabs fixed-tabs>
            <v-tab>ข้อมูลส่วนตัว</v-tab>
            <v-tab>ข้อมูลสุขภาพ</v-tab>
            <v-tab>ที่อยู่อาศัย</v-tab>
            <v-tab>สิทธิการเบิกค่าเล่าเรียน</v-tab>
            <v-tab>ช้อมูลครอบครัว</v-tab>

            <v-tab-item><Personal /></v-tab-item>
            <v-tab-item><Health /></v-tab-item>
            <v-tab-item><Address /></v-tab-item>
            <v-tab-item><Withdraw /></v-tab-item>
            <v-tab-item><Family /></v-tab-item>
          </v-tabs>
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
      title: ``
    }
  },
  methods: {},
  mounted() {}
}
</script>
