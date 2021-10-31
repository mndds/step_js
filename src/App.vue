<template>
  <v-app>
      <v-app-bar fixed >
      <v-app-bar-title class="orange--text mr-5" style="font-size: 2.1rem;">HomeWork 18-22</v-app-bar-title>        

      <v-btn elevation='0' :to="{name: 'RandomUser'}">Random user</v-btn>      
      <v-btn elevation='0' :to="{name: 'RandomUserPhoto'}">Random user PHOTO</v-btn>     
      <v-btn elevation='0' :to="{name: 'BitcoinPrice'}">Bitcoin Price</v-btn>    
      <v-btn elevation='0' :to="{name: 'RandomDogPhoto'}">Random dog</v-btn>    

    </v-app-bar>
   
    <div style="margin-top: 100px"></div>
   

   <v-main app>
      <router-view :key="$route.fullPath"/>
    </v-main>
    
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    
  }),
  
}
</script>

<style>

</style>
