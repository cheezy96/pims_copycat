<template>
  <v-menu location="bottom">
    <template v-slot:activator="{ props }">
      <v-btn size="small" color="primary" v-bind="props" rounded>
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item v-for="(item, index) in settingMenu" :key="index">
        <v-list-item-title>
          <v-icon>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import { ref } from "vue";

let settingMenu = ref([
  { title: "Bids", icon: "mdi-tag" },
  { title: "View", icon: "mdi-eye" },
  { title: "Force Edit", icon: "mdi-pencil" },
  { title: "Personnel", icon: "mdi-pencil" },
]);
</script>

<style lang="scss" scoped></style>
