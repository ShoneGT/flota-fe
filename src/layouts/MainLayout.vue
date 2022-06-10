<template>
  <q-layout view="lHh lpR fFf">
    <!-- <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header> -->

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <div>
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Dashboard',
    caption: 'quasar.dev',
    icon: 'school',
    link: '/dashboard'
  },
  {
    title: 'Users',
    icon: 'people',
    link: '/users'
  },
  {
    title: 'Drivers',
    caption: 'Drivers stats and accounts',
    icon: 'code',
  link: '/drivers'
  },
  {
    title: 'Trucks',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: '/trucks'
  },
  {
    title: 'Loads',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: '/loads'
  },
  {
    title: 'Clients',
    caption: '@QuasarFramework',
    icon: 'public',
    link: '/clients'
  },
  {
    title: 'Settings',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: '/settings'
  }
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksList
    }
  },

  methods: {
    toggleLeftDrawer () {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
});
</script>
