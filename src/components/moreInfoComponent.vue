<template lang="html">
  <div class="">
    {{ this.id }}<br>
    {{ this.obj }}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MoreInfoComponent',
  props: {
    id: [Number, String],
    obj: [Array]
  },
  data() {
    return {
        
    }
  },
  mounted() {
    if (this.test_obj == null && this.test_id != undefined) {
      this.apiGet(`http://134.209.138.34/item/${this.test_id}`);
    }
  },
  methods: {
    apiGet(link) {
      axios
        .get(link)
        .then(response => {
          this.test_obj = response.data;
        })
        .catch(error => {
          alert(error);
          this.errored = true;
        })
        .finally(() => (this.isLoading = false));
    }
  }
}
</script>

<style lang="css" scoped>
</style>
