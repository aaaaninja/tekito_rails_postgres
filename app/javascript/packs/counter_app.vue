<template>
  <div>
    <div>Counter = {{ counter }}</div>
    <button v-on:click="increment">おせ!! 私を！！</button>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return { counter: 0 }
  },

  methods: {
    increment: function() {
      this.counter++
    }
  }
}
</script>
