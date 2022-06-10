<template>
  <q-dialog v-model="showDialog" position="right" full-height>
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">{{ $t('addUser') }}</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section style="width: 300px">
        <!-- First Name -->
        <q-input
          filled
          v-model="form.firstName"
          :label="$t('firstName')"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
        <!-- Last Name -->
        <q-input
          filled
          v-model="form.lastName"
          :label="$t('lastName')"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <!-- Email -->
        <q-input
          filled
          type="email"
          v-model="form.email"
          :label="$t('email')"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <!-- Password -->
        <q-input
          filled
          type="password"
          v-model="form.password"
          :label="$t('password')"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <!-- Phone -->
        <q-input
          filled
          v-model="form.phone"
          :label="$t('phone')"
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

        <!-- DOB -->
        <q-input
          filled
          v-model="form.dob"
          :label="$t('dateOfBirth')"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />


      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn @click="createUser">Create</q-btn>
      </q-card-actions>



    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { CreateUserDto } from 'components/Users/create-user.dto'
import { api } from 'boot/axios'
import { routes } from 'src/utils/ApiRoutes'

export default defineComponent({
  // name: 'ComponentName'
  data () {
    return {
      showDialog: false,
      form: {} as Partial<CreateUserDto>
    }
  },
  methods: {
    createUser () {
      let formData = Object.assign(this.form, CreateUserDto)

      api.post(routes.user, formData).then(res => {
        console.log(res)
        this.$emit('UserCreated')
        this.clearForm()
        this.showDialog = false
        this.$q.notify({
          message: 'Success',
          color: 'green-5'
        })
      }, err => {
        console.log(err)
        const {response} = err
        console.log(response)
        this.$q.notify({
          message: response.data.message[0],
          color: 'red-4'
        })
      })
    },
    clearForm () {
      this.form = {} as Partial<CreateUserDto>
    }
  }
})
</script>
