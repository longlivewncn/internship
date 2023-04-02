<template>
  <nav>
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      :disable-route-watcher="true"
      permanent
      @click="rail = !rail"
      location="right"
      fixed
    >
      <v-list nav density="compact">
        <v-list-item prepend-icon="mdi-menu">
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-right"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>
      </v-list>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-home-outline"
          title="Home"
          router
          to="/"
        >
        </v-list-item>
        <v-list-item
          prepend-icon="mdi-account-group-outline"
          title="Teams"
          router
          to="/teams"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-book-open-outline"
          title="Introduction"
          router
          to="/introduction"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-office-building-outline"
          title="Company"
          router
          to="/company"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-briefcase-outline"
          title="Project"
          router
          to="/project"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script setup>
import { ref } from "vue";
//
const drawer = ref(true);
const rail = ref(true);
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>
