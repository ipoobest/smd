<template>
  <div>Hello student info</div>
</template>

<script>
import * as StudentsApi from '@/utils/students'
export default {
  async mounted() {
    console.log('parsam', this.$route.params)
    const id = this.$route.params.id
    console.log('parmas', id)
    const reponse = await StudentsApi.getById(id)
    console.log('response ', reponse)
  }
}
</script>

<style lang="scss" scoped></style>
