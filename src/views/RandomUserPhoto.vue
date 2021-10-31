<template>
    <v-container>
        <h1 class="display-3 mb-2">Random user photo</h1>
        <div v-if="randomUserPhoto">
            <v-btn @click="loadRandomUser" block color="primary" class="mb-4">Refresh</v-btn>
            <div>
                <v-img class="mx-auto align-end" height="500px"  width="500px" :src="randomUserPhoto" />
            </div>            
        </div>

        <div v-else>Server Error</div>

       
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    data: () => ({
        loading: false,
        randomUserPhoto: null,
    }),
    mounted() {
        this.loadRandomUser();
    },
    methods: {
        loadRandomUser() {
             this.loading=true;
            axios.get('https://randomuser.me/api/')
                .then(response => {
                    this.randomUserPhoto = response.data.results[0].picture.large;                    
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