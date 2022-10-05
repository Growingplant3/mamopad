<template>
  <div class="home">
    <ul v-if="hasMemos">
      <li v-for="memo in memos" :key="memo.id">
        <router-link :to="{ name: 'edit', params: { id: memo.id }}">
          {{ memo.title }}
        </router-link>
      </li>
    </ul>
    <p v-else>
      メモが何もありません。
    </p>
  </div>
</template>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

li a {
  color: #999;
  text-decoration: none;
  width: 100%;
  display: block;
}
</style>

<script>
export default {
  name: 'HomeView',
  // data()と似てる
  computed: {
    hasMemos() {
      // gettersを使わない場合
      // return this.$store.state.memos.length
      // gettersを使う場合
      return this.$store.getters.getCount
    },
    memos () {
      // gettersを使わない場合
      // return this.$store.state.memos
      // gettersを使う場合
      return this.$store.getters.getAll
    }
  }
}
</script>