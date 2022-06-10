<template>
  <q-page padding class="window-height window-width row justify-center items-center">
    <!-- content -->
    <div class="">
      <q-card  class="q-pa-md q-ma-none bg-white shadow-10" style="width:420px;">

        <!-- Logo & App Name -->
        <q-card-section class="q-mt-md q-mb-xl">
          <div class="row justify-center items-center">
            <img
              alt="App logo"
              width="180px"
              src="~assets/fns-logo.png"
            >
          </div>
          <p class="text-center q-mt-md q-mb-xs text-grey-8" style="font-size: 22px; margin-bottom: -10px">FLOTA</p>

        </q-card-section>
        <!-- END Logo & App Name -->

        <!-- Login Form -->
        <q-card-section class="text-grey-8">
          <q-form class="q-gutter-md">
            <q-input  square filled clearable v-model="email" type="email" label="Email">
              <template v-slot:prepend>
                <q-icon name="email" color="primary"/>
              </template>
            </q-input>
            <q-input  square filled clearable v-model="password"  type="password" label="Password">
              <template v-slot:prepend>
                <q-icon name="lock" color="primary"/>
              </template>
            </q-input>
          </q-form>
        </q-card-section>
        <!-- END Login Form -->

        <!-- Sign up and Forgot Password Actions -->
        <q-card-actions>
          <div class="row full-width items-center">
            <div class="col-12 text-center q-mb-xl">
              <q-btn size="md" color="primary" label="Sign In" class="q-pa-xs q-pl-xl q-pr-xl full-width" @click="login" />
            </div>
          </div>
        </q-card-actions>
        <!-- END Sign up and Forgot Password Actions -->

      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import {routes} from 'src/utils/ApiRoutes'
import { api } from 'src/boot/axios'

export default defineComponent({
  name: 'LoginView',
  data () {
    return {
      email: 's@s.com',
      password: 'test'
    }
  },
  methods: {
    login () {
      const formData = {
        username: this.email,
        password: this.password
      }

      api.post(routes.login, formData)
        .then(res => {
          this.$q.localStorage.set('auth', res.data.accessToken)
          this.$q.localStorage.set('currentUser', res.data.user)
          this.$router.push('/')
        })
        .catch(e => {
          // this.$q.notify(e.data.message)
          console.log(e)
          console.log(e.response)
        })
    }
  }
})
</script>
