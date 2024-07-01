<template>
  <sectionContainer
    v-for="section in sectionList"
    :key="section.id"
    v-bind="section"
  >
    <!-- MISSING: Section Components passed throug slots -->
  </sectionContainer>
</template>

<script setup>
import sectionContainer from "./sections/section-container.vue";

/* const props = defineProps({
  sectionList: {
    type: Array,
    required: true,
  }
}); */

const sectionList = [
  {
    id: "1",
    components: "" /* array? */,
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
  {
    id: "4",
  },
];

defineOptions({
  name: "IndexPage",
  path: "/",
});
</script>
