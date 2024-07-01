<template>
  <q-page
    :id="'section' + props.id"
    class="flex flex-center"
    style="border: solid 5px"
  >
    <h1>Section {{ props.id }}</h1>
    <div style="border: solid 2px">
      <h2>jdhakjsmndb kjh kjh</h2>
      <p>Beispoiejalhkskjah ak,jhsklajsdh akjsdhaksjdhakjsmndb kjh kjh</p>
    </div>
  </q-page>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
