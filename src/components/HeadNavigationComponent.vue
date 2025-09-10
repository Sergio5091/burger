<script setup>
import menuData from '@/data.json'
import { useRouter } from 'vue-router';
console.log(menuData);
const route = useRouter()
function deconnec(){
    localStorage.removeItem("login"),
    route.push("/")
}


</script>


<template>

    <div class="flex justify-center">
        <nav class="flex gap-7 shadow-lg p-5 rounded-b-[50px] justify-center bg-[#f8b8g8]">
            <div class=" p-2 rounded-lg font-bold">
                <RouterLink to="/myApp/">Home</RouterLink>
            </div>
            <div class=" p-2 rounded-lg font-bold">
                <RouterLink :to="{ name: 'about' }">About</RouterLink>
            </div>
            <div class=" p-2 rounded-lg font-bold">
                <RouterLink :to="{ name: 'menu' }">Menu</RouterLink>
            </div>
            <div class=" p-2 rounded-lg font-bold">
                <RouterLink :to="{ name: 'kfc' }">KFC</RouterLink>
            </div>
            <div class=" p-2 rounded-lg font-bold">
                <RouterLink :to="{ name: 'burger' }">BurgerKing</RouterLink>
            </div>
            <div class=" p-2 rounded-lg font-bold">
                <RouterLink :to="{ name: 'mcdo' }">McDo</RouterLink>
            </div>
            <div class="flex space-x-5 justify-center items-center font-bold shadow-lg p-2 rounded-lg">
                <RouterLink v-for="value in menuData.menus"
                :to="{
                    name:'menu-show',
                    params: {id: value.id}
                }">{{ value.name }}</RouterLink>
            </div>
        
        </nav>
          <div class="flex items-center px-[10px]">
              <button
                class="py-2 px-4 bg-[#eb3c25] text-white rounded-[10px] hover:rotate-10 transition-transform duration-300 cursor-pointer" @click="deconnec()"
              >
              Deconnecter
              </button>
          </div>
        
    </div>

</template>


<style scoped>
a.lien-actif{
    background-color:#eb3c25;
    padding: 0.5rem;
    border-radius: 10px;
    color: white;
}
</style>