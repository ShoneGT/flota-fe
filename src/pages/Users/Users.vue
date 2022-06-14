<template>
  <data-provider
    ref="dataProvider"
    :data-model="dataModel"
    v-slot="{ data, loading, saveData }"
    @SavedData="handleCreate"
  >
    <div class="q-pa-md">
      <q-btn color="orange-5" no-caps @click="handleCreateForm(saveData)">{{ $t('addNew') }}</q-btn>
    </div>
    <q-separator/>
    <q-page padding>
      <!-- content -->
      <data-table :columns="columns" :rows="data.users" :loading="loading" />

      <create-user
        @formData="saveData(routes.user, $event)"
        ref="createUser"
      />

    </q-page>
  </data-provider>
</template>

<script>
import DataProvider from 'src/components/DataProvider'
import DataTable from 'src/components/DataTable.vue';
import CreateUser from 'src/components/Users/CreateUser.vue'
import { routes } from 'src/utils/ApiRoutes'

export default {
  name: 'DriversView',
  components: {
    DataProvider,
    DataTable,
    CreateUser
  },
  data () {
    return {
      dataModel: [
        {
          url: 'user',
          dataValue: 'users'
        },
      ],
      users: [],
      routes,
      columns: [
        {
          name: 'firstName',
          field: 'firstName',
          label: this.$t('firstName'),
          align: 'center',
          sortable: true
        },
        {
          name: 'lastName',
          field: 'lastName',
          label: this.$t('lastName'),
          align: 'center',
          sortable: true
        },
        {
          name: 'email',
          field: 'email',
          label: this.$t('email'),
          align: 'center',
          sortable: true
        },
        {
          name: 'phone',
          field: 'phone',
          label: this.$t('phone'),
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
          name: 'dob',
          field: 'dob',
          label: this.$t('dob'),
          align: 'center',
          sortable: true
        },
        {
          name: 'state',
          field: 'state',
          label: this.$t('state'),
          align: 'center',
          sortable: true
        },
        {
          name: 'city',
          field: 'city',
          label: this.$t('city'),
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
      this.$refs.createUser.showDialog = true
    },
    handleCreate () {
      this.$refs.createUser.showDialog = false
      this.$refs.createUser.clearForm()
      this.$refs.dataProvider.renderData(this.dataModel)
    }
  },
}
</script>
