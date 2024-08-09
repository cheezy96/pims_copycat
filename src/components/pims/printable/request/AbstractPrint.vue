<template>
  <body>
    <div class="header">
      <h3>ABSTRACT OF PRICE QUOTATION</h3>
      <h4>Date: Invalid date</h4>
    </div>

    <table>
      <thead>
        <tr>
          <th style="width: 10%">Item No.</th>
          <th style="width: 60%" colspan="3">Article/Description</th>
          <th style="width: 30%">Lowest Calculated and Responsive Quotation</th>
        </tr>
        <tr>
          <th></th>
          <th style="width: 10%">Qty</th>
          <th style="width: 10%">Unit</th>
          <th style="width: 40%">Description</th>
          <th></th>
        </tr>
        <tr>
          <th colspan="100%">
            Purpose: Airfare during the process of documents for Visa and
            Diploma Passport
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.qty }}</td>
          <td>{{ item.unit }}</td>
          <td style="text-align: start">
            {{ item.description }}
          </td>
          <td></td>
        </tr>

        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>xxx nothing follows xxx</td>
          <td></td>
        </tr>
      </tbody>

      <tbody>
        <tr>
          <td>for Bids and Awards Committee</td>
        </tr>
      </tbody>
    </table>
  </body>
</template>

<script setup>
let items = ref([
  {
    id: 1,
    qty: 2,
    unit: "unit",
    description:
      "Airfare during the process of documents for Visa and Diploma Passport",
  },
]);
</script>

<style scoped>
* {
  font-family: Arial, sans-serif;
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
  font-size: 14px;
  font-weight: 600;
}
.header h4 {
  font-weight: 500;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
}
table tr th,
table tr td {
  border: 1px solid #000;
  padding: 5px;
  text-align: center;
}
table tr:nth-child(3) th {
  text-align: start;
}

@media print {
  @page {
    size: A4 landscape;
    margin: 20px;
    padding: 0;
  }
}
</style>
