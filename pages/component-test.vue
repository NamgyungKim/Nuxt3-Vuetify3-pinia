<template>
  <div>
    <h1>about</h1>
    <v-card class="ma-4 pa-4">
      <ClientOnly>
        <Calendar locale="ko" :attributes="attributes" />
      </ClientOnly>
    </v-card>
    <v-card class="ma-4 pa-4">
      <p class="mb-3 font-weight-bold">Crypto</p>
      <v-text-field v-model="cryptoText" label="crypto" />
      <v-btn @click="fn_getCrypto">getCrypto</v-btn>
      <v-btn @click="fn_deCrypto">deCrypto</v-btn>
    </v-card>
    <v-card class="ma-4 pa-4">
      <p>fileInput</p>
      <div class="input-file">
        <label>FileInput</label>
        <v-file-input bg-color="pnk" variant="outlined" prepend-icon=""></v-file-input>
      </div>
    </v-card>
  </div>
</template>

<script setup>
import { Calendar } from 'v-calendar';

const cryptoText = ref('');
const attributes = ref([
  {
    highlight: true,
    dates: {
      start: new Date(2022, 10, 7),
      repeat: {
        every: [2, 'weeks'],
        weekdays: 2,
      },
    },
  },
]);

const fn_getCrypto = () => {
  console.log(crypto.getCrypto(cryptoText.value));
};
const fn_deCrypto = () => {
  console.log(crypto.deCrypto(cryptoText.value));
};
</script>

<style lang="scss">
.input-file {
  position: relative;
  label {
    position: absolute;
    z-index: 10;
    color: #333;
    background: #ddd;
    padding: 5px 10px;
    border-radius: 5px;
    top: 50%;
    left: 10px;
    transform: translateY(-80%);
    transition: 0.3s;
    cursor: pointer;
  }
  .v-field--variant-filled:hover .v-field__overlay {
    opacity: 0;
  }
  &:hover label {
    background: #ccc;
  }
  .v-label.v-field-label {
    display: none;
  }
  .v-field__input {
    margin-left: 100px;
  }
  input {
    cursor: pointer;
  }
}
</style>
