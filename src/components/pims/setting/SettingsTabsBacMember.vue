<template>
    <div>
        <v-container>
            <v-row rows="1">
                <v-col cols="4" v-for="name in names" :key="name">
                    <v-text-field color="primary" :label="name.title" v-model="name.value"  variant="underlined"></v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
import {ref, reactive} from 'vue';

let names = ref([
    {title: "BAC Chair", value: "MARILOU F. COLOMA"},
    {title: "BAC Vice Chair", value: "MARIBEL B. TERO"},
    {title: "BAC Member", value: "MARIO M. DELA CERNA"},
    {title: "BAC Member", value: "ARMANDO D. BOLIVAR"},
    {title: "BAC Member", value: "JOSEPH I. JUNIO"},
    {title: "BAC Motion", value: ""},

]);


</script>

<style scoped>

</style>