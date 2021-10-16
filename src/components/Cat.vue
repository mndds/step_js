<template>
  <div class="cat-title" id="cat">
      Random cat :D
    <button id="btn-update" @click="updatePhoto()">Update</button>
    <div v-if="loading">Loading...</div>
    <img id="cat-photo" :src="imgSrc" v-if="imgSrc && !loading"  />
  </div>
</template>

<script>
import axios from 'Axios';

export default {
  data: () => ({
        loading: false,
        imgSrc: null,
    }),

  mounted() {
    this.updatePhoto();
  },

  methods: {
    updatePhoto() {
      this.loading = true;
      axios.get('https://aws.random.cat/meow')
            .then(response => {
                const data = response.data;
                console.log(data.file); 
                this.imgSrc = data.file;                              
            })
            .finally(() => {
                this.loading = false;    
            });
    }
  }
};
</script>

<style>
body {
  background-color: #c0c0c0;
  color: #f8f8ff;
  font-family: Lucida Console, Courier, monospace;
}

.cat-title {
  font-size: 25px;
  margin: 0 auto;
  text-align: center;
}

#cat-photo {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px;
  margin-top: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
}

#cat-photo:hover {
  box-shadow: 0 0 2px 1px rgba(25, 25, 112, 0.5);
  transition: all ease-in 0.2s;
}

#btn-update {
  border: 0;
  padding: 10px 30px;
  border-radius: 10px;
  background-color: rgba(25, 25, 112, 0.5);
  color: #ffffff;
  cursor: pointer;
}
</style>