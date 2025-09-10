<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
const router = useRouter()
function login() {
    localStorage.setItem("login",true)
    router.push("/myApp/")
    
}
const isVisible = ref(false)
function toggleComponent(){
    isVisible.value = true;
}
</script>
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <!-- <div
      class="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md hover:scale-105 transition-transform"
    > -->
      <h1 class="text-2xl font-bold text-center mb-6">Inscrivez-vous</h1>
      <div class="space-y-5">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
            Adresse e-mail
          </label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="jhjd@mail.com"
            class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-[#eb3c25]"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder=""
            class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#eb3c25]"
          />
        </div>

         <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
            Confirmer
          </label>
          <input
            type="password"
            id="password"
            v-model="passwordConfirme"
            placeholder=""
            class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#eb3c25]"
          />
        </div>
        <button
          type="submit"
          class="w-full py-2 px-4 bg-[#eb3c25] text-white rounded-[10px] hover:rotate-1 transition-transform duration-300"
        @click="login()">
          Se connecter
        </button>
         <p class="text-sm text-center text-gray-600 mt-5">
        Pas encore de compte ?
        <a href="#" class="text-[#eb3c25] hover:underline" @click="toggleComponent()">Connectez-vous</a>
      </p>
    </div>
    </div>
  </div>
</template>

