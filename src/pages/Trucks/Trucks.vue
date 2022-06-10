<template>
  <data-provider
    ref="dataProvider"
    :data-model="dataModel"
    v-slot="{ data, loading, saveData }"
    @SavedData="handleCreate"
  >
    <div class="q-pa-md">
      <q-btn color="grey-5" no-caps @click="handleCreateForm(saveData)">Add new</q-btn>
    </div>
    <q-separator/>
    <q-page padding>
      <!-- content -->
      <data-table :columns="columns" :rows="data.row" :loading="loading" />

      <create-truck
        @formData="saveData(routes.truck, $event)"
        ref="createTruck"
      />

    </q-page>
  </data-provider>
</template>

<script>
import DataProvider from 'src/components/DataProvider'
import DataTable from 'src/components/DataTable.vue';
import CreateTruck from 'src/components/Trucks/CreateTruck.vue'
import { routes } from 'src/utils/ApiRoutes'

export default {
  name: 'DriversView',
  components: {
    DataProvider,
    DataTable,
    CreateTruck
  },
  data () {
    return {
      dataModel: [
        {
          url: 'truck',
          dataValue: 'row'
        },
      ],
      routes,
      columns: [
        {
          name: 'model',
          field: 'model',
          label: this.$t('model'),
          align: 'center',
          sortable: true
        },
        {
          name: 'make',
          field: 'make',
          label: this.$t('make'),
          align: 'center',
          sortable: true
        },
        {
          name: 'year',
          field: 'year',
          label: this.$t('year'),
          align: 'center',
          sortable: true
        },
        {
          name: 'miles',
          field: 'miles',
          label: this.$t('miles'),
          align: 'center',
          sortable: true
        },
        {
          name: 'vin',
          field: 'vin',
          label: this.$t('vin'),
          align: 'center',
          sortable: true
        },
        {
          name: 'address',
          field: 'address',
          label: this.$t('address'),
          align: 'center',
          sortable: true
        },
        {
          name: 'note',
          field: 'note',
          label: this.$t('note'),
          align: 'center',
          sortable: true
        },
        {
          name: 'actions',
          field: 'actions',
          label: this.$t('actions'),
          align: 'center',
        },
      ]
    }
  },
  methods: {
    handleCreateForm () {
      this.$refs.createTruck.showDialog = true
    },
    handleCreate () {
      this.$refs.createTruck.showDialog = false
      this.$refs.createTruck.clearForm()
      this.$refs.dataProvider.renderData(this.dataModel)
    }
  },
}
</script>
