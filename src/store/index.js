import { createStore } from 'vuex'

export default createStore({
  // 状態またはデータを置く
  state: {
    count: 0,
    memos: []
  },
  // storeからデータを取得
  getters: {
  },
  // storeの変化変異を起こす
  mutations: {
    // メモを保存するメソッド
    save (state, newMemo) {
      newMemo.id = ++state.count
      state.memos.unshift(newMemo)
    }
  },
  // 非同期通信
  actions: {
  },
  // stateをまとめる
  modules: {
  }
})
