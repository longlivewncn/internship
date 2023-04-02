<template>
  <v-layout>
      <Navbar />

    <v-main>
      <router-view></router-view>
    </v-main>

  </v-layout>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import { ref } from "vue";
//
const drawer = ref(true);
const rail = ref(true);
</script>

<style scoped>
main {
  background-color: whitesmoke;
}

a {
  text-decoration: none;
  color: black;
}
</style>
