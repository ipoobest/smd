<template>
  <v-card-text>
    <h3>ข้อมูลสุขภาพ</h3>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col class="pt-0 pb-0" cols="2">
            <v-select dense outlined label="หมู่เลือด" />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pt-0 pb-0" cols="4">
            <v-textarea
              dense
              auto-grow
              outlined
              rows="3"
              row-height="40"
              label="โรคประจำตัว / แพ้ยา"
            />
          </v-col>
          <v-col class="pt-0 pb-0" cols="4">
            <v-textarea
              dense
              auto-grow
              outlined
              rows="3"
              row-height="40"
              label="วิธีบำบัดเมื่อเกิดอาการ"
            />
          </v-col>
          <v-col class="pt-0 pb-0" cols="4">
            <v-textarea
              dense
              auto-grow
              outlined
              rows="3"
              row-height="40"
              label="ปัญหาสุขภาพอื่นๆ"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script>
export default {
  name: 'AddressForm'
}
</script>

<style lang="scss" scoped></style>
