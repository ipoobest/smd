<template>
  <div>
    <h2>add students</h2>
    <h3>{{ id }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      id: ''
    }
  },
  mounted() {
    const id = this.$route.params.id
    this.id = id
    console.log('id', id)
  }
}
</script>

<style lang="scss" scoped></style>
