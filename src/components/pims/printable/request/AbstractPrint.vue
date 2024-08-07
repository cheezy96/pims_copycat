<template>
  <body>
    <div class="header">
      <h3>ABSTRACT OF PRICE QUOTATION</h3>
      <h4>Date: Invalid date</h4>
    </div>

    <table>
      <thead>
        <tr>
          <th style="width: 20%">Item No.</th>
          <th style="width: 50%" colspan="3">Article/Description</th>
          <th style="width: 30%">Lowest Calculated and Responsive Quotation</th>
        </tr>
        <tr>
          <th></th>
          <th>Qty</th>
          <th>Unit</th>
          <th>Description</th>
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
        <tr>
          <td>1</td>
          <td>1</td>
          <td>pax</td>
          <td style="text-align: start">
            Airfare (Dvo-Mnl-Dvo) (Jestony Mark P. Aprong)
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </body>
</template>

<script setup></script>

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
