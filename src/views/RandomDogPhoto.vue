<template>
  <v-container>
    <h1 class="display-3 mb-2">Random dog</h1>
    <div v-if="shibe">
      <v-btn @click="load" block color="primary" class="mb-4">Refresh</v-btn>
      <div>
        <v-img class="mx-auto align-end" :src="shibe.message" />
      </div>
    </div>

    <div v-else>Server Error</div>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    loading: false,
    shibe: null,
  }),
  mounted() {
    this.load();
  },
  methods: {
    load() {
      this.loading = true;
      axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then((response) => {
          this.shibe = response.data;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style>
</style>