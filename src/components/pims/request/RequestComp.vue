<template>
    <v-app>
        <v-container class="w-75">
            <v-row>
                <v-col class="d-flex align-center">
                    <v-text-field prepend-icon="mdi-magnify" label="Search" variant="underlined"></v-text-field>
                </v-col>
                <v-col class="d-flex align-center">
                    <v-select label="Department" variant="underlined" :items="departments" item-title="text"
                        item-value="value"></v-select>
                </v-col>
                <v-col class="d-flex align-center">
                    <v-select label="Status" variant="underlined" :items="status" item-title="text"
                        item-value="value"></v-select>
                </v-col>
                <v-col class="d-flex align-center ga-1">
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

            <v-row>
                <v-data-table :headers="headers" header :items="requestTable" items-per-page="5">
                    <template v-slot:item.prNo="{ value }">
                        <v-btn size="small" color="primary" rounded>
                            {{ value }}
                        </v-btn>
                    </template>

                    <template v-slot:item.status="{ value }">
                        <v-btn size="small" :color="getColor(value)" rounded>
                            {{ value }}
                        </v-btn>
                    </template>

                    <template v-slot:item.button="{ value }">
                        <td class="d-flex ga-1">
                            <v-btn size="small" color="primary" rounded>
                                <v-icon>mdi-printer</v-icon>
                            </v-btn>
                            <v-btn size="small" color="primary" rounded>
                                <v-icon>mdi-cog</v-icon>
                            </v-btn>
                        </td>
                    </template>



                </v-data-table>
            </v-row>
        </v-container>
    </v-app>
</template>

<script setup>
import { ref } from 'vue';


let departments = ref([
    { text: 'All', value: 'all' },
    { text: 'Admin', value: 'admin' },
    { text: 'DABET', value: 'dabet' },
    { text: 'DAT', value: 'dat' },
]);

let status = ref([
    { text: 'All', value: 'all' },
    { text: 'Received', value: 'received' },
    { text: 'Lacking', value: 'lacking' },
    { text: 'For Signature', value: 'for signature' },
])

let requestTable = ref([
    { prNo: '2023-7-21', requestor: "Ycker Ponio", purpose: "RTX 3080 For Better Gaming Experience", items: 20, amount: 20000, date: "2023-23-23", status: 'received' },
    { prNo: '2023-7-11', requestor: "Ycker Ponio", purpose: "RTX 3080 For Better Gaming Experience", items: 20, amount: 20000, date: "2023-23-23", status: 'new' },
    { prNo: '2023-7-11', requestor: "Ycker Ponio", purpose: "RTX 3080 For Better Gaming Experience", items: 20, amount: 20000, date: "2023-23-23", status: 'new' },
    { prNo: '2023-7-11', requestor: "Ycker Ponio", purpose: "RTX 3080 For Better Gaming Experience", items: 20, amount: 20000, date: "2023-23-23", status: 'new' },
    { prNo: '2023-7-11', requestor: "Ycker Ponio", purpose: "RTX 3080 For Better Gaming Experience", items: 20, amount: 20000, date: "2023-23-23", status: 'new' },
    { prNo: '2023-7-11', requestor: "Ycker Ponio", purpose: "RTX 3080 For Better Gaming Experience", items: 20, amount: 20000, date: "2023-23-23", status: 'new' },
    { prNo: '2023-7-11', requestor: "Ycker Ponio", purpose: "RTX 3080 For Better Gaming Experience", items: 20, amount: 20000, date: "2023-23-23", status: 'new' },
    { prNo: '2023-7-11', requestor: "Ycker Ponio", purpose: "RTX 3080 For Better Gaming Experience", items: 20, amount: 20000, date: "2023-23-23", status: 'new' },
]);

let headers = ref([
    { title: 'PR No', value: 'prNo' },
    { title: 'Requestor', value: 'requestor' },
    { title: 'Purpose', value: 'purpose' },
    { title: 'Items', value: 'items' },
    { title: 'Amount', value: 'amount' },
    { title: 'Date', value: 'date' },
    { title: 'Status', value: 'status', align: "center" },
    { title: '', value: 'button' },
]);


function getColor(status) {
    if (status == "new") return "warning"
    else if (status == "cancelled") return "error"
    else if (status == "received") return "primary"
} 
</script>

<style lang="scss" scoped></style>