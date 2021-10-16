const app = new Vue({
    el: '#app',  
    data() {
        return {            
            loading: false,
            imgSrc: null,
        };     
    },
    mounted() {
        this.updatePhoto();
      },
    methods: {
        updatePhoto() {
            this.loading = true;            

            axios.get('https://aws.random.cat/meow')
                .then(response => {
                    const data = response.data;
                    this.imgSrc = data.file;                         
                })
                .finally(() => {
                    this.loading = false;
                });

        }
    }
});
