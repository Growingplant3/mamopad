<template>
  <div class="home">
    <ul v-if="hasMemos">
      <li v-for="memo in memos" :key="memo.id">
        {{ memo.title }}
      </li>
    </ul>
    <p v-else>
      メモが何もありません。
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  // data()と似てる
  computed: {
    hasMemos() {
      return this.$store.state.memos.length
    },
    memos () {
      return this.$store.state.memos
    }
  }
}
</script>