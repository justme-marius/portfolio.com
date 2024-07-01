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

    <q-drawer v-model="leftDrawerOpen" show-if-above no-swipe-backdrop="true">
      <q-list>
        <q-item-label header> Navigation </q-item-label>

        <EssentialLink
          no-swipe-close="true"
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
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

defineOptions({
  name: "MainLayout",
});

const linksList = ref([
  {
    title: "Section 1",
    caption: "Navigate to Container 1",
    icon: "public",
    link: "#section1",
  },
  {
    title: "Section 2",
    caption: "Navigate to Container 2",
    icon: "public",
    link: "#section2",
  },
  {
    title: "Section 3",
    caption: "Navigate to Container 3",
    icon: "public",
    link: "#section3",
  },
  {
    title: "Section 4",
    caption: "Navigate to Container 4",
    icon: "public",
    link: "#section4",
  },
]);

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
