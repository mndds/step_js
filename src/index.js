const axios = require('axios'); 

const cat = document.getElementById('cat-photo');

axios.get('https://aws.random.cat/meow')
    .then(response => {
        const data = response.data;
        cat.src = data.file;
        cat.style.width = 600+'px';        
    });