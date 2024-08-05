<template>
    <div>
        <v-container>
            <v-row>
                <v-col v-for="name in names" :key="name">
                    <v-text-field label="name.title" v-model="name.value" variant="underlined"></v-text-field>
                    <v-text-field label="Label" variant="underlined"></v-text-field>
                    <v-text-field label="Label" variant="underlined"></v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
import {ref, reactive} from 'vue';

let names = ref([
    {title: "C.A. Name", value: "ENGR. CONSTANTINO B. PANES, JR."},
    {title: "C.A. Name", value: "ENGR. CONSTANTINO B. PANES, SR."},
    {title: "C.A. Name", value: "ENGR. CONSTANTINO B. PANES, III."},
]);


</script>

<style scoped>

</style>