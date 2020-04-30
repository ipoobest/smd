<template>
  <v-card-text>
    <h3>ข้อมูลที่อยู่อาศัย</h3>
    <v-row>
      <v-col cols="6">
        <v-row>
          <v-col class="pt-0 pb-0" cols="12">
            <v-select dense outlined label="ประเภทที่อยู่อาศัย" />
          </v-col>
          <v-col class="pt-0 pb-0" cols="12">
            <v-textarea
              label="ภูมิลำเนา"
              auto-grow
              outlined
              rows="3"
              row-height="25"
            ></v-textarea>
            <v-textarea
              label="หอพัก"
              auto-grow
              outlined
              rows="3"
              row-height="25"
            ></v-textarea>
            <v-text-field dense outlined label="หมายเลขโทรศัพท์" />
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="6">
        <v-row>
          <v-col class="pt-0 pb-0" cols="12">
            <v-text-field
              dense
              outlined
              label="พี่น้องร่วมบิดา/มารดาที่เรียนโรงเรียนสาธิต(มอดินแดง)"
            />
          </v-col>
          <v-col class="pt-0 pb-0" cols="8">
            <v-text-field dense outlined label="ประกอบกด้วย 1" />
            <v-text-field dense outlined label="ประกอบกด้วย 2" />
            <v-text-field dense outlined label="ประกอบกด้วย 2" />
          </v-col>
          <v-col class="pt-0 pb-0" cols="4">
            <v-text-field dense outlined label="จำนวน" />
            <v-text-field dense outlined label="จำนวน" />
            <v-text-field dense outlined label="จำนวน" />
          </v-col>
          <v-col class="pt-0 pb-0" cols="12">
            <v-text-field dense outlined label="กรณีฉุกเฉินติดต่อ" />
            <v-text-field dense outlined label="เกี่ยวข้องเป็น" />
            <v-text-field dense outlined label="หมายเลขโทรศัพท์" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script>
export default {
  name: 'AddressForm',
  components: {}
}
</script>

<style lang="scss" scoped></style>
