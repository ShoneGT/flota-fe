<template>
  <q-dialog v-model="showDialog" position="right" full-height>
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">{{ $t('createTruck') }}</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section style="width: 400px">
        <!-- Model -->
        <q-input
          filled
          v-model="form.load_id"
          :label="$t('loadId')"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
        <!-- Make -->
        <q-input
          filled
          v-model="form.pickup_address"
          :label="$t('pickupAddress')"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <!-- Year -->
        <q-input
          filled
          type="email"
          v-model="form.delivery_address"
          :label="$t('deliveryAddress')"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <!-- Pickup date -->
        <q-input
          filled
          v-model="form.pickup_date"
          :label="$t('pickupDate')"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <!-- Delivery date -->
        <q-input
          filled
          v-model="form.delivery_date"
          :label="$t('deliveryDate')"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <!-- Note -->
        <q-input
          filled
          v-model="form.note"
          :label="$t('note')"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn @click="create">Create</q-btn>
      </q-card-actions>



    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { CreateLoadDto } from 'components/Loads/create-load.dto'

export default defineComponent({
  // name: 'ComponentName'
  data () {
    return {
      showDialog: false,
      form: {} as Partial<CreateLoadDto>
    }
  },
  methods: {
    create () {
      let formData = Object.assign(this.form, CreateLoadDto)
      this.$emit('formData', formData)
    },
    clearForm () {
      this.form = {} as Partial<CreateLoadDto>
    }
  }
})
</script>
