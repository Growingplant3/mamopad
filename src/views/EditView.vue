<template>
{{ memo.title }}
</template>

<script>
export default {
  name: 'EditView',
  computed: {
    memo() {
      const id = parseInt(this.$route.params.id)
      return this.$store.getters.getMemoById(id)
    }
  }
}
</script>