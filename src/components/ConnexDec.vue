<script setup>
import { ref } from "vue"
import '@mdi/font/css/materialdesignicons.css'
import { useRouter } from "vue-router"
import userData from "@/data.json"
import InscripComponent from "./inscripComponent.vue"

const router = useRouter()
const email = ref("")
const password = ref("")
const errorMessage = ref("")

// Vérification des champs
function login() {
  if (!email.value || !password.value) {
    return errorMessage.value = "Veuillez remplir tous les champs"
  }

  // Recherche de l'utilisateur
  const user = userData.users.find(user => user.email === email.value && user.password === password.value
  )

  if (user) {
    localStorage.setItem("login", true)
    router.push("/myApp/")
  } else {
    errorMessage.value = "Email ou mot de passe incorrect"
  }
}

</script>

<template>

  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md hover:scale-105 transition-transform">
       <div class="flex justify-center mb-4">
    <i class="mdi mdi-account-circle text-6xl text-gray-400"></i>
  </div>
      <h1 class="text-2xl font-bold text-center mb-6">Connexion</h1>


      <!-- Message d'erreur -->
      <div v-if="errorMessage" class="bg-red-300 border border-red-400 text-red-700 px-4 py-3 mb-4">
        {{ errorMessage }}
      </div>

      <div class="space-y-5">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
            Adresse e-mail
          </label>
          <input type="email" id="email" v-model="email" placeholder="jhjd@mail.com"
            class="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-[#eb3c25]" />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
            Mot de passe
          </label>
          <input type="password" id="password" v-model="password" placeholder=""
            class="w-full px-4 py-2 border rounded-xl focus:ring-[#eb3c25]" />
        </div>

        <button @click="login"
          class="w-full py-2 px-4 bg-[#eb3c25] text-white rounded-[10px] hover:rotate-1 transition-transform duration-300">
          Se connecter
        </button>

        <p class="text-sm text-center text-gray-600 mt-5">
          Pas encore de compte ?
          <a href="#" class="text-[#eb3c25] hover:underline" @click.prevent="$emit('toggleComponent')">
            Inscrivez-vous
          </a>
        </p>
      </div>
    </div>
  </div>
  <InscripComponent />
</template>
