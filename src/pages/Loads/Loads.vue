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

      <create
        @formData="saveData(routes.load, $event)"
        ref="createTruck"
      />

    </q-page>
  </data-provider>
</template>

<script>
import DataProvider from 'src/components/DataProvider'
import DataTable from 'src/components/DataTable.vue';
import Create from 'src/components/Loads/CreateLoad.vue'
import { routes } from 'src/utils/ApiRoutes'

export default {
  name: 'DriversView',
  components: {
    DataProvider,
    DataTable,
    Create
  },
  data () {
    return {
      dataModel: [
        {
          url: 'load',
          dataValue: 'row'
        },
      ],
      routes,
      columns: [
        {
          name: 'loadId',
          field: 'load_id',
          label: this.$t('loadId'),
          align: 'center',
          sortable: true
        },
        {
          name: 'pickupAddress',
          field: 'pickup_address',
          label: this.$t('pickupAddress'),
          align: 'center',
          sortable: true
        },
        {
          name: 'deliveryAddress',
          field: 'delivery_address',
          label: this.$t('deliveryAddress'),
          align: 'center',
          sortable: true
        },
        {
          name: 'pickupDate',
          field: 'pickup_date',
          label: this.$t('pickupDate'),
          align: 'center',
          sortable: true
        },
        {
          name: 'deliveryDate',
          field: 'delivery_date',
          label: this.$t('deliveryDate'),
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
