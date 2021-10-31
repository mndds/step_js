<template>
  <v-container>    
    <v-card v-if="randomUser">

    <v-btn @click="loadRandomUser" block color="primary" class="mb-4">Refresh</v-btn>
        
    <v-img position='center center'  class="align-end" :src="randomUser.picture.large" >

        <v-card-title class="py-3" style="background: rgba(255,255,255,0.9)">
        {{randomUser.name.title}} {{randomUser.name.last}}  {{randomUser.name.first}}  
        </v-card-title>

    </v-img>

    <v-list>   

        <v-list-item>
            <v-list-item-content>
                <v-list-item-subtitle>Age</v-list-item-subtitle>
                {{ randomUser.dob.age }}
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-content>
                <v-list-item-subtitle>Gender</v-list-item-subtitle>
                {{ randomUser.gender }}
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-content>
                <v-list-item-subtitle>Nationality</v-list-item-subtitle>
                {{ randomUser.nat }}
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-content>
                <v-list-item-subtitle >Country</v-list-item-subtitle>
                {{ randomUser.location.country }}

            </v-list-item-content>
        </v-list-item>
      
        <v-list-item>
            <v-list-item-content>
                <v-list-item-subtitle>City</v-list-item-subtitle>
                {{ randomUser.location.city }}
            </v-list-item-content>
        </v-list-item>

        <v-list-item>
            <v-list-item-content>
                <v-list-item-subtitle>e-mail</v-list-item-subtitle>
                {{ randomUser.email }}
            </v-list-item-content>
      </v-list-item>

    </v-list>

  </v-card>
  <div v-else>Server Error</div>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
    data: () => ({
        loading: false,
        randomUser: null,
    }),
    mounted() {
        this.loadRandomUser();
    },
    methods: {
        loadRandomUser() {
            this.loading=true;
            axios.get('https://randomuser.me/api/')
                .then(response => {
                    this.randomUser = response.data.results[0];                    
                })
                .finally( ()=> {
                    this.loading=false;
                })
        }
    }
}
</script>

<style>

</style>