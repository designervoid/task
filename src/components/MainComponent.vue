<template>
    <section>
      {{ clientside_data[0] }} <br><hr>
      {{ clientside_data[1] }} <br><hr>
      {{ clientside_data[2] }} <br><hr>
        <b-tabs>
            <b-tab-item label="Table">
                <b-table
                    :data="data"
                    :columns="columns"
                    :selected.sync="selected"
                    focusable>
                </b-table>
            </b-tab-item>

            <b-tab-item label="Selected">
                <pre>{{ selected }}</pre>
            </b-tab-item>
        </b-tabs>
    </section>
</template>

<script>
  import axios from 'axios'
    export default {
        data() {
            const data = [
                { 'id': 1, 'address': 'test', 'title': 'test', 'previewImage': 'link-img', 'price': 'Male' },
            ]

            return {
                data,
                clientside_data: [],
                selected: data[1],
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'address',
                        label: 'Address',
                    },
                    {
                        field: 'title',
                        label: 'Title',
                    },
                    {
                        field: 'previewImage',
                        label: 'previewImage',
                        centered: true
                    },
                    {
                        field: 'price',
                        label: 'Price',
                        width: '100',
                        numeric: true
                    }
                ]
            }
        },
        created() {
          this.apiGet('http://134.209.138.34/')
          this.apiGet('http://134.209.138.34/items')
          this.apiGet('http://134.209.138.34/item/1849621339')
        },
        methods: {
          apiGet(link) {
            axios
              .get(link)
              .then(response => {
                this.clientside_data.push(response.data);
              })
              .catch(error => {
                alert(error);
                this.errored = true;
              })
              .finally(() => (this.loading = false));
          }
        }
    }
</script>
