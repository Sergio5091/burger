<script setup>

const props = defineProps({
    tab:Array
})
console.log(props.tab);

</script>


<template>

<div class=" w-[300px] shadow-lg rounded-lg" v-for="men in tab">
        <div><img :src="men.image" alt="" class="h-[150px] w-full rounded-lg"></div>
        <p class="font-bold text-2xl ml-[20px]">{{ men.title }}</p>
        <div class="p-2 text-center">{{ men.description }}</div>
    </div>

</template>


<style scoped>



</style>