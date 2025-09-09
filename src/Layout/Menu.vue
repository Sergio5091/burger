<script setup>
import menuData from "@/data.json"
console.log(menuData)
</script>

<template>
    <div class="grid grid-cols-3 gap-5 m-10">
        <div v-for="(el, i) in menuData.menus" :key="i"
            class="bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform">
            <img :src="el.image" :alt="el.name" class="w-full h-40 object-cover rounded-xl mb-3" />
            <h2 class="text-lg font-bold mb-2">{{ el.name }}</h2>
            <button class="py-2 px-4 bg-[#eb3c25] text-white rounded-[10px] hover:rotate-10 transition-transform duration-300 cursor-pointer">
                Commander
            </button>
        </div>
    </div>
</template>

<style scoped></style>
