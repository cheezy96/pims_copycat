<template>
    <v-container>
        <v-row>
            <v-col class="d-flex align-center">
                <v-text-field prepend-icon="mdi-magnify" label="Search" variant="underlined"></v-text-field>
            </v-col>
            <v-col class="align-center">
                <v-select label="Department" variant="underlined"></v-select>
            </v-col>
            <v-col class="align-center">
                <v-select label="Status" variant="underlined"></v-select>
            </v-col>
            <v-col class="d-flex align-center">
                <v-btn>All</v-btn>
                <v-btn>Self</v-btn>
            </v-col>
            <v-col class="d-flex align-center justify-end ga-1">
                <v-btn>
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
                <v-btn>
                    <v-icon>mdi-refresh</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';


let departments = ref([
    { text: 'All', value: 'all' },
]);
</script>

<style lang="scss" scoped></style>