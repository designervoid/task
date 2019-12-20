<template>
  <div id="app">
    <MainView/>
    <router-view/>
  </div>
</template>

<script>
  import MainView from '@/views/MainView'
  export default {
    name: 'App',
    components: {
      MainView
    }
  }
</script>

<style lang="scss">

</style>
