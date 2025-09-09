<script setup>
import { reactive } from 'vue';
import image from '../../src/assets/About.jpg'
import image2 from '@/assets/burger2.jfif'
import image3 from '@/assets/burger3.jfif'
import image4 from '@/assets/burger4.jfif'
import image5 from '@/assets/burger5.jfif'
import image6 from '@/assets/burger6.jfif'
import MenuListComponent from './MenuListComponent.vue';


const menu = reactive([
    {
    image: image,
    title: 'Spices',
    description: 'Épices sélectionnées pour vos plats'
  },
  {
    image: image2,
    title: 'Burger',
    description: 'Burger classique avec viande juteuse'
  },
  {
    image: image3,
    title: 'CheeseBurger',
    description: 'Burger avec fromage fondant'
  },
  {
    image: image4,
    title: 'Salade Burger',
    description: 'Burger avec salade fraîche'
  },
  {
    image: image5,
    title: 'Triple Cheese',
    description: 'Burger avec triple portion de fromage'
  },
  {
    image: image6,
    title: 'Double Cheese',
    description: 'Burger avec double fromage et sauce spéciale'
  }
])

</script>


<template>
 <MenuListComponent :tab="menu"/>

</template>


<style scoped>


</style>