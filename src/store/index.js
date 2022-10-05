import { createStore } from 'vuex'

export default createStore({
  // 状態またはデータを置く
  state: {
    count: 0,
    memos: []
  },
  // storeからデータを取得
  getters: {
    getCount: (state) => {
      return state.memos.length
    },
    getAll: (state) => {
      return state.memos
    },
    getMemoById: (state) => (id) => {
      return state.memos.find(memo => memo.id === id)
    }
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
