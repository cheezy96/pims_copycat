<template>
  <div class="d-flex justify-space-around">
    <div>
      <v-text-field
        variant="underlined"
        color="primary"
        prepend-icon="mdi-magnify"
        placeholder="Search"
        width="300"
      ></v-text-field>
    </div>
    <div class="border-md pa-2 my-auto d-flex ga-2">
      <v-btn color="primary">
        <v-icon size="large">mdi-plus</v-icon>
      </v-btn>
      <v-btn color="primary">
        <v-icon size="large">mdi-refresh</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
