<template>
  <!-- Public Layout, Not Registered,  -->
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above>
      <q-list>
        <q-item-label header> Navigation </q-item-label>

        <ul v-for="obj in thetree" :key="obj.id">
          <router-link to="#">Page Heading {{}}</router-link>

          <li v-for="link in obj" :key="link.id">
            <EssentialLink v-bind="link" />
          </li>
        </ul>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import thetree from "assets/lorem.ipsum/thetree.json";

defineOptions({
  name: "MainLayout",
});

const treeKeys = Object.keys(thetree);

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
