<script setup>
import {  computed } from "vue"
import menuData from "@/data.json"
import { useRoute } from "vue-router"
import ConnexDec from "@/components/ConnexDec.vue"

const route = useRoute()

// id de l'URL
const id = computed(() => parseInt(route.params.id))

// filtrage direct
const tab = computed(() => menuData.menus.filter(el => el.id === id.value))
</script>

<template>
  <div class="grid grid-cols-3 gap-5 m-10">
    <div 
      v-for="(el, i) in tab" 
      :key="i"
      class="bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform"
    >
      <img 
        :src="el.image" 
        :alt="el.name" 
        class="w-full h-40 object-cover rounded-xl mb-3" 
      />
      <h2 class="text-lg font-bold mb-2">{{ el.name }}</h2>
      <p class="text-gray-600 mb-3">{{ el.description }}</p>
      <button 
        class="py-2 px-4 bg-[#eb3c25] text-white rounded-[10px] hover:rotate-10 transition-transform duration-300 cursor-pointer" 
      >
        Commander
      </button>
    </div>
  </div>
  <!-- <ConnexDec /> -->
</template>

