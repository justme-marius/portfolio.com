<template>
  <q-page>
    <div
      :id="'section' + props.id"
      class="PageSection mostly-customized-scrollbar"
    >
      <h1>Section {{ props.id }}</h1>
      <div style="padding: 3rem">
        <h2>Lorem ipsum dolor sit amet,</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At
        </p>
      </div>

      <img
        style="padding: 3rem"
        src="https://picsum.photos/500/300"
        alt="picsum photo random placeholder img a 300x300"
      />

      <div style="padding: 3rem">
        <h2>Lorem ipsum dolor sit amet,</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At
        </p>
      </div>

      <img
        style="padding: 3rem"
        src="https://picsum.photos/500/300"
        alt="picsum photo random placeholder img a 300x300"
      />
    </div>
  </q-page>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});
</script>
