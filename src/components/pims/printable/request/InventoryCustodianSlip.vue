<template>
  <body>
    <div class="header">
      <h3>INVENTORY CUSTODIAN SLIP</h3>
    </div>

    <table>
      <thead>
        <tr>
          <td colspan="2">Entity Name:</td>
          <td colspan="3">
            TESDA Regional Training Center- Korea Phil. Vocational Training
            Center, Davao
          </td>
        </tr>
        <tr>
          <td colspan="2">Fund Cluster :</td>
          <td colspan="3"></td>
          <td colspan="2">ICS No : 2023-2024</td>
        </tr>
      </thead>

      <thead>
        <tr>
          <th style="width: 5%" rowspan="2">Quantity</th>
          <th style="width: 5%" rowspan="2">Unit</th>
          <th style="width: 20%" colspan="2">Amount</th>
          <th style="width: 40%" rowspan="2">Description</th>
          <th style="width: 5%" rowspan="2">Inventory Item No.</th>
          <th style="width: 5%" rowspan="2"></th>
        </tr>
        <tr>
          <th width="10%">Unit Cost</th>
          <th width="10%">Total Cost</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in items" :key="item">
          <td>{{ item.qty }}</td>
          <td>{{ item.unit }}</td>
          <td>{{ item.unitCost }}</td>
          <td>{{ item.totalCost }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.itemNo }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <table>
      <tr>
        <th width="50%">Received from:</th>
        <th width="50%">Received by:</th>
      </tr>
      <tr>
        <td class="underline"><span>ALANAH TAMARAH N. MILLAN</span></td>
        <td></td>
      </tr>
      <tr>
        <td>Signature Over Printed Name</td>
        <td>Signature Over Printed Name</td>
      </tr>
      <tr>
        <td class="underline">TESDS II</td>
        <td></td>
      </tr>
      <tr>
        <td class="underline">Supply Officer</td>
        <td></td>
      </tr>
      <tr>
        <td>Position/Office</td>
        <td>Position/Office</td>
      </tr>
      <tr>
        <td>2024-08-08</td>
        <td>2024-08-08</td>
      </tr>
    </table>
  </body>
</template>

<script setup>
let items = ref([
  {
    qty: 1,
    unit: "pax",
    unitCost: 44234,
    totalCost: 2434,
    description:
      "Airfare during the process of documents for Visa and Diploma Passport",
    itemNo: "001",
  },
  {
    qty: 1,
    unit: "pax",
    unitCost: 46423,
    totalCost: 12373,
    description:
      "Airfare during the process of documents for Visa and Diploma Passport",
    itemNo: "001",
  },
]);
</script>

<style lang="scss" scoped>
* {
  font-family: "Times New Roman", Times, serif, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 12px;
}

.header {
  text-align: center;
  margin: 20px 0;
}
.header h3 {
  font-size: 16px;
  font-weight: 600;
}

table {
  width: 100%;
  border-collapse: collapse;
}
table thead:first-child tr th,
table thead:first-child tr td {
  border: none;
  text-align: start;
}

table:nth-child(3) {
  border: 1px solid black;
  border-top: none;
}
table:nth-child(3) th:first-child,
table:nth-child(3) tr:nth-child(1n + 2) td {
  border-right: 1px solid black;
}
table:nth-child(3) th,
table:nth-child(3) td {
  border: none;
  padding: 0;
}
table:nth-child(3) tr:first-child th {
  padding: 0 5px;
  padding-bottom: 20px;
  text-align: start;
}
table:nth-child(3) tr:last-child td {
  padding-top: 10px;
}

table tr th,
table tr td {
  border: 1px solid black;
  padding: 5px;
  text-align: center;
}

.underline {
  text-decoration: underline;
}
.underline span {
  font-weight: 600;
}

@media print {
  @page {
    size: A4 portrait;
    margin: 20px;
    padding: 0;
  }
}
</style>
