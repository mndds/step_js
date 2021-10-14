import '../assets/style.scss';

    const axios = require('axios'); 
    const cat = document.getElementById('cat-photo');
    const btn = document.getElementById('btn-update');

    function updatePhoto() {
        axios.get('https://aws.random.cat/meow')
            .then(response => {
                const data = response.data;
                cat.src = data.file;                    
            });
    }

window.addEventListener('load', () => {    
    updatePhoto();   
});

btn.addEventListener('click', () => {
    updatePhoto();
});

    
