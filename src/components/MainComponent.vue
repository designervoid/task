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
        <div v-if="!isLoading && isNotSelected">
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
              <div class="columns is-mobile columns-declaration" v-for="(declaration, index) in data" :key="index" @click="saveState(JSON.stringify(declaration)); isNotSelected = !isNotSelected;">
                <div class="errored-block" v-if="errored">
                  Some troubles...
                </div>
                <div class="not-errored-block" v-else style="">
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
                    <img :src="declaration.previewImage" alt="">
                  </div>
                  <div class="column">
                    {{ declaration.price }}
                  </div>
                </div>
              </div>
            </section>
        </div>
        <div class="columns text-center" style="margin-top: 20px;" v-else>
          <div class="" @click="isNotSelected = !isNotSelected">
            <b-icon
                  icon="angle-left"
                  size="is-large"
                  type="is-primary"
                  >
            </b-icon>
          </div>
          {{ selected }}
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
                isLoading: true,
                errored: false,
                selected: [],
                isNotSelected: true
            }
        },
        created() {
          this.apiGet('http://134.209.138.34/items', 'SET_NOT_EXTENDED_DATA');
          // this.apiGet('http://134.209.138.34/item/1849621339', 'SET_EXTENDED_DATA');
        },
        methods: {
          apiGet(link, store_mutation) {
            axios
              .get(link)
              .then(response => {
                if (this.data == null) {
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
            this.selected = JSON.parse(payload)
          },
        }
    }
</script>

<style lang="scss" scoped>
  .column-declaration-header {
    padding: 0;
  }
  .columns-declaration-header,
  .columns-declaration {
    padding: 1rem;
  }
  .not-errored-block {
    display:flex;
    width: 100%;
  }
</style>
