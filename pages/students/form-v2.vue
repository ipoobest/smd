<template>
  <v-card>
    <v-tabs
      v-model="tab"
      background-color="green"
      dark
      :grow="true"
      :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
      :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
    >
      <v-tab v-for="item in items" :key="item.tab">
        {{ item.tab }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <PersonalFrom></PersonalFrom> <AddressForm></AddressForm
          ></v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text><FamilyForm></FamilyForm> </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text><HealthForm></HealthForm> </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import PersonalFrom from '@/components/students/PersonalForm'
import AddressForm from '@/components/students/AddressForm'
import FamilyForm from '@/components/students/FamilyForm'
import HealthForm from '@/components/students/HealthForm'

export default {
  components: {
    PersonalFrom,
    AddressForm,
    FamilyForm,
    HealthForm
  },
  data() {
    return {
      tab: null,
      prevIcon: true,
      nextIcon: true,
      items: [
        { tab: 'ข้อมูลส่วนตัวนักเรียน' },
        { tab: 'ข้อมูลผู้ปกครอง' },
        { tab: 'ข้อมูลสุขภาพ' }
      ]
    }
  }
}
</script>
