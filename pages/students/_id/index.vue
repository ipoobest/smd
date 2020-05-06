<template>
  <div>Hello student info</div>
</template>

<script>
import * as StudentsApi from '@/utils/students'
export default {
  data() {
    return {
      items: []
    }
  },
  async mounted() {
    const id = this.$route.params.id
    const reponse = await StudentsApi.getById(id)
    this.items = reponse.data
    console.log('response data', this.items)
  }
}
</script>

<style lang="scss" scoped></style>
