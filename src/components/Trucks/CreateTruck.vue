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
          v-model="form.model"
          :label="$t('model')"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
        <!-- Make -->
        <q-input
          filled
          v-model="form.make"
          :label="$t('make')"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <!-- Year -->
        <q-input
          filled
          type="email"
          v-model="form.year"
          :label="$t('year')"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <!-- Miles -->
        <q-input
          filled
          type="number"
          v-model="form.miles"
          :label="$t('miles')"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <!-- Vin -->
        <q-input
          filled
          v-model="form.vin"
          :label="$t('vin')"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <!-- Address -->
        <q-input
          filled
          v-model="form.address"
          :label="$t('address')"
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

      <q-card-actions align="right" class="bg-white text-orange-5">
        <q-btn  @click="create">Create</q-btn>
      </q-card-actions>



    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { CreateTruckDto } from 'components/Trucks/create-truck.dto'

export default defineComponent({
  // name: 'ComponentName'
  data () {
    return {
      showDialog: false,
      form: {} as Partial<CreateTruckDto>
    }
  },
  methods: {
    create () {
      let formData = Object.assign(this.form, CreateTruckDto)
      this.$emit('formData', formData)
    },
    clearForm () {
      this.form = {} as Partial<CreateTruckDto>
    }
  }
})
</script>
