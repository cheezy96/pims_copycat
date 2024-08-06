<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" md="4" v-for="name in names" :key="name">
                    <v-text-field color="primary" :label="name.title" v-model="name.value" variant="underlined"></v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
import {ref, reactive} from 'vue';

let names = ref([
    {title: "C.A. Name", value: "ENGR. CONSTANTINO B. PANES, JR."},
    {title: "C.A. Title", value: "Chief TESD Specialist"},
    {title: "C.A. Subtitle", value: "Center Administrator"},
    {title: "Unit Head Name", value: "MARIO M. DELE CERNA"},
    {title: "Unit Head Title", value: "Senior TESD Specialist"},
    {title: "Unit Head Subtitle", value: "Training Department Head"},
    {title: "A.O. Name", value: "JHASMIN C. GARAZA"},
    {title: "A.O. Title", value: "Administrative Officer IV"},
    {title: "A.O. Subtitle", value: "Finance Analyst II"},
    {title: "S.O Name", value: "ALANAH TAMARAH N. MILLAN"},
    {title: "S.O Title", value: "TESDS II"},
    {title: "S.O Subtitle", value: "Supply Officer"},
    {title: "I.O Name", value: "ENGR. ROBERT K. ARNAEZ"},
    {title: "I.O Title", value: "Senior TESD Specialist"},
    {title: "I.O Subtitle", value: "Inspection Officer"},
]);


</script>

<style scoped>

</style>