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
        <div v-if="!isLoading && isNotSelected && !isImageSelected">
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
              <div class="columns is-mobile columns-declaration" v-for="(declaration, index) in data" :key="index" @click="saveState(JSON.stringify(declaration)); selectData(); getMoreData(declaration.id);">
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
                    <img :src="declaration.previewImage" alt="" @click="clickImage()">
                  </div>
                  <div class="column">
                    {{ declaration.price }}
                  </div>
                </div>
              </div>
            </section>
        </div>
        <div class="columns text-center" style="margin-top: 20px;" v-else-if="!isNotSelected">
          <div class="" @click="isNotSelected = !isNotSelected">
            <b-icon
                  icon="angle-left"
                  size="is-large"
                  type="is-primary"
                  >
            </b-icon>
          </div>
          <MoreInfoComponent :id="selected.id" :obj="extended_data"/>
        </div>
        <div class="" v-else-if="isImageSelected">
            <div class="" @click="isImageSelected = !isImageSelected">
              <b-icon
                    icon="angle-left"
                    size="is-large"
                    type="is-primary"
                    >
              </b-icon>
            </div>
            <img :src="selected.previewImage" alt="">
        </div>
      </section>

      <footer>

      </footer>
  </div>
</template>

<script>
    import axios from 'axios'
    import MoreInfoComponent from './MoreInfoComponent'

    export default {
        data() {
            return {
                data: null,
                extended_data: null,
                isLoading: true,
                errored: false,
                selected: [],
                isNotSelected: true,
                searchedById: null,
                isImageSelected: false
            }
        },
        components: {
          MoreInfoComponent
        },
        created() {
          this.apiGet('http://134.209.138.34/items', false);
        },
        methods: {
          apiGet(link, extended_data_request) {
            axios
              .get(link)
              .then(response => {
                if (!extended_data_request) {
                  this.data = response.data;
                } else {
                  this.extended_data = response.data;
                }
              })
              .catch(error => {
                alert(error);
                this.errored = true;
              })
              .finally(() => (this.isLoading = false));
          },
          sliceData() {

          },
          saveFavoriteData() {

          },
          saveState(payload) {
            this.selected = JSON.parse(payload)
          },
          selectData() {
              if (!this.isImageSelected) {
                  this.isNotSelected = !this.isNotSelected;
              }
          },
          getMoreData(id) {
            this.apiGet(`http://134.209.138.34/item/${id}`, true);
          },
          clickImage() {
              this.isImageSelected = true
          }
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
