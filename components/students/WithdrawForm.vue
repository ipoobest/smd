<template>
  <v-card-text>
    <h3>สิทธิ์การเบิกค่าเล่าเรียน</h3>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col class="pt-0 pb-0" cols="12">
            <v-select dense outlined label="สิทธิ์การเบิกค่าเล่าเรียน" />
            <v-select dense outlined label="ประเภท" />
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
  data() {
    return {
      tab: '',
      WithdrawData: {}
    }
  },
  methods: {
    back() {
      this.tab = 'familyData'
      console.log('black', this.tab)
      this.$emit('saveWithdraw', this.WithdrawData, this.tab)
    },
    save() {
      console.log('go')
      this.tab = 'healthData'
      this.$emit('saveWithdraw', this.WithdrawData, this.tab)
    }
  }
}
</script>

<style lang="scss" scoped></style>
