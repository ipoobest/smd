<template>
  <v-card-text>
    <v-row>
      <v-col cols="6">
        <v-row>
          <v-col class="pt-0 pb-0" cols="2">
            <v-select dense outlined label="คำนำหน้า (ภาษาไทย)" />
          </v-col>
          <v-col class="pt-0 pb-0" cols="5">
            <v-text-field dense outlined label="ชื่อ (ภาษาไทย)" />
          </v-col>
          <v-col class="pt-0 pb-0" cols="5">
            <v-text-field dense outlined label="นามสกุล (ภาษาไทย)" />
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="6">
        <v-row>
          <v-col class="pt-0 pb-0" cols="2">
            <v-select dense outlined label="คำนำหน้า (ภาษาอังกฤษ)" />
          </v-col>
          <v-col class="pt-0 pb-0" cols="5">
            <v-text-field dense outlined label="ชื่อ (ภาษาอังกฤษ)" />
          </v-col>
          <v-col class="pt-0 pb-0" cols="5">
            <v-text-field dense outlined label="นามสกุล (ภาษาอังกฤษ)" />
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="6">
        <v-text-field dense outlined label="ชื่อเล่น" />
        <v-text-field
          dense
          outlined
          label="รหัสนักเรียน (* รหัสประจำตัวใหม่จากประกาศ 6 หลัก)"
        />

        <v-row>
          <v-col class="pt-0 pb-0" cols="6">
            <v-text-field dense outlined label="หลักสูตร" />
          </v-col>
          <v-col class="pt-0 pb-0" cols="6">
            <v-text-field dense outlined label="ระดับชั้น" />
          </v-col>
        </v-row>
        <v-text-field dense outlined label="จบชั้น ป.6 จากโรงเรียน" />
      </v-col>

      <v-col cols="6">
        <v-text-field dense outlined label="รหัสประจำตัวประชาชน" />
        <v-row>
          <v-col class="pt-0 pb-0" cols="3">
            <v-text-field dense outlined label="อายุ (ปี)" />
          </v-col>
          <v-col class="pt-0 pb-0" cols="3">
            <v-text-field dense outlined label="เดือน" />
          </v-col>
          <v-col class="pt-0 pb-0" cols="3">
            <v-text-field dense outlined label="สัญชาติ" />
          </v-col>
          <v-col class="pt-0 pb-0" cols="3">
            <v-text-field dense outlined label="เชื้อสาย" />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pt-0 pb-0" cols="6">
            <v-text-field dense outlined label="ศาสนา" />
          </v-col>
          <v-col class="pt-0 pb-0" cols="6">
            <v-text-field dense outlined label="วัน/เดือน/ปีเกิด (พ.ศ.)" />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pt-0 pb-0" cols="6">
            <v-text-field dense outlined label="สถานที่เกิด" />
          </v-col>
          <v-col class="pt-0 pb-0" cols="6">
            <v-text-field dense outlined label="จังหวัดที่เกิด" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script>
export default {}
</script>
