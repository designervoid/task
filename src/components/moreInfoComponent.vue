<template lang="html">
  <div class="">
    {{ test_id }}<br>
    {{ test_obj }}
  </div>
</template>

<script>
export default {
  name: 'moreInfoComponent',
  props: {
    id: [Number, String],
    obj: [Array]
  },
  data() {
    return {
      test_id: this.id,
      test_obj: this.obj
    }
  },
  methods: {

  }
}
</script>

<style lang="css" scoped>
</style>
