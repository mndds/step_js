<template>
  <v-container>
    <div v-if="bitcoin">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="display-1">Disclaimer</v-list-item-title>
            {{ bitcoin.disclaimer }}
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-card class="mx-auto" max-width="344">
        <v-img
          src="https://cdn.pixabay.com/photo/2017/01/25/12/31/bitcoin-2007769__480.jpg"
          height="200px"
        ></v-img>

        <v-card-title>
          Bitcoin <br />
          {{ bitcoin.time.updated }}
        </v-card-title>

        <v-card-subtitle> USD: {{ bitcoin.bpi.USD.rate }} </v-card-subtitle>

        <v-card-subtitle> EUR: {{ bitcoin.bpi.EUR.rate }} </v-card-subtitle>

        <v-card-subtitle> GBP: {{ bitcoin.bpi.GBP.rate }} </v-card-subtitle>
      </v-card>
    </div>

    <div v-else>Server Error</div>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    loading: false,
    bitcoin: null,
  }),
  mounted() {
    this.loadBitcoin();
  },
  methods: {
    loadBitcoin() {
      this.loading = true;
      axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((response) => {
          this.bitcoin = response.data;         
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