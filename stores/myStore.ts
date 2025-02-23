// export const useCounterStore = defineStore('counter', {
//   // data
//   state: () => ({ count: 0, name: 'Eduardo' }),
//   // computed
//   getters: {
//     doubleCount: (state) => state.count * 2
//   },
//   // method
//   actions: {
//     increment() {
//       this.count++
//     }
//   }
// })

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})