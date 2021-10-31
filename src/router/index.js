import Vue from 'vue'
import VueRouter from 'vue-router'
import RandomUser from '../views/RandomUser'
import RandomUserPhoto from '../views/RandomUserPhoto'
import BitcoinPrice from '../views/BitcoinPrice'
import RandomDogPhoto from '../views/RandomDogPhoto'


Vue.use(VueRouter);

const routes = [
    {
        path: '/user',
        name: 'RandomUser',
        component: RandomUser,
    },
    {
        path: '/randomphoto',
        name: 'RandomUserPhoto',
        component: RandomUserPhoto,
    },
    {
        path: '/bitcoinprice',
        name: 'BitcoinPrice',
        component: BitcoinPrice,
    },
    {
        path: '/randomdog',
        name: 'RandomDogPhoto',
        component: RandomDogPhoto,
    },
    
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  })
  
  export default router