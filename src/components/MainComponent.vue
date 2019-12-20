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
              <div class="columns is-mobile columns-declaration" v-for="(declaration, index) in data" :key="index" @click="saveState(JSON.stringify(declaration));">
                <div class="column column-declaration" >
                  {{ declaration.id }}
                </div>
                <div class="column column-declaration">
                  {{ declaration.address }}
                </div>
                <div class="column column-declaration">
                  {{ declaration.title }}
                </div>
                <div class="column column-declaration">
                  {{ declaration.previewImage }}
                </div>
                <div class="column">
                  {{ declaration.price }}
                </div>
              </div>
              <div class="columns text-center" style="margin-top: 20px;">
                {{ selected }}
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
          let is_not_extended_data_request = true;
          this.apiGet('http://134.209.138.34/items', 'SET_NOT_EXTENDED_DATA', is_not_extended_data_request);

          let is_extended_data_request = false;
          this.apiGet('http://134.209.138.34/item/1849621339', 'SET_EXTENDED_DATA', is_extended_data_request);
          // this.apiGet('http://134.209.138.34/item/1849621339')
        },
        methods: {
          apiGet(link, store_mutation, is_extended_data_request) {
            axios
              .get(link)
              .then(response => {
                if (is_extended_data_request) {
                  this.data = response.data;
                }
                this.$store.commit(store_mutation, JSON.stringify(response.data));

                // debug
                // alert(this.$store.state.not_extended_data)
                // alert(this.$store.state.extended_data)
              })
              .catch(error => {
                alert(error);
                this.errored = true;
              })
              .finally(() => (this.isLoading = false));
          },
          sliceData() {

          },
          saveState(payload) {
            this.selected = payload
          },
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
