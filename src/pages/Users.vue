<template>
<div class="q-pa-md">
  <q-btn color="grey-5" no-caps @click="$refs.createUser.showDialog = true">Add new</q-btn>
</div>
<q-separator/>
  <q-page padding>
    <!-- content -->
     <q-table
       flat
       separator="cell"
       :rows="users"
       :columns="columns"
       row-key="name"
    >
       <template v-slot:header="props">
         <q-tr :props="props">
           <q-th
             v-for="col in props.cols"
             :key="col.name"
             :props="props"
             class="text-italic text-purple"
           >
             {{ col.label }}
           </q-th>
         </q-tr>
       </template>

       <template v-slot:body-cell-actions="props">
         <q-td :props="props">
           <div>
             <q-badge color="purple" :label="props.value" />
           </div>
           <div class="my-table-details">
             {{ props.row.details }}
           </div>
         </q-td>
       </template>
     </q-table>

    <create-user @UserCreated="fetchUsers" ref="createUser" />

  </q-page>
</template>

<script>
import CreateUser from 'src/components/Users/CreateUser.vue'
import {api} from '../boot/axios';
import { routes } from 'src/utils/ApiRoutes'

export default {
  name: 'DriversView',
  components: {CreateUser},
  data () {
    return {
      users: [],
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
    fetchUsers () {
      console.log('fetch')
      api.get(routes.user).then(res => {
        console.log('users'. res)
        this.users = res.data
      }, err => {
        console.log(err)
        const { response } = err
        console.log(response)
      })
    }
  },
  created () {
    console.log('created')
    this.fetchUsers()
  }
}
</script>
