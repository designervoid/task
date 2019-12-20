<template>
  <div class="">
      <section>
        <b-loading  :active.sync="isLoading" :can-cancel="false">
            <b-icon
                pack="fas"
                icon="sync-alt"
                size="is-large"
                custom-class="fa-spin">
            </b-icon>
        </b-loading>
        <div v-if="!isLoading">
            <header>
              <div class="columns is-mobile columns-declaration-header">
                <div class="column is-text-left column-declaration-header">
                  ID
                </div>
                <div class="column is-text-left column-declaration-header">
                  Address
                </div>
                <div class="column is-text-left column-declaration-header">
                  Title
                </div>
                <div class="column is-text-left column-declaration-header">
                  PreviewImage
                </div>
                <div class="column is-text-left column-declaration-header">
                  Price
                </div>
              </div>
            </header>
            <section>
              <div class="columns is-mobile columns-declaration" v-for="(i, index) in data" :key="index">
                <div class="column column-declaration" >
                  {{ i.id }}
                </div>
                <div class="column column-declaration">
                  {{ i.address }}
                </div>
                <div class="column column-declaration">
                  {{ i.title }}
                </div>
                <div class="column column-declaration">
                  {{ i.previewImage }}
                </div>
                <div class="column">
                  {{ i.price }}
                </div>
              </div>
            </section>
        </div>
    </section>
      <footer>

      </footer>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        data() {
            return {
                data: null,
                selected: [],
                isLoading: true
            }
        },
        created() {
          // this.apiGet('http://134.209.138.34/')
          this.apiGet('http://134.209.138.34/items')
          // this.apiGet('http://134.209.138.34/item/1849621339')
        },
        methods: {
          apiGet(link) {
            axios
              .get(link)
              .then(response => {
                this.data = response.data;
                this.$store.commit('SET_DATA', JSON.stringify(this.data));
                // alert(this.$store.state.data)
              })
              .catch(error => {
                alert(error);
                this.errored = true;
              })
              .finally(() => (this.isLoading = false));
          },
          sliceData() {

          },
          saveState() {

          }
        }
    }
</script>

<style scoped>
  .column-declaration-header {
    padding: 0;
  }
  .columns-declaration-header,
  .columns-declaration {
    padding: 1rem;
  }
</style>
