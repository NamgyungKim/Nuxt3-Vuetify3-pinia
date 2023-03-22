<template>
  <div>
    <h1>about</h1>
    <v-text-field label="Label"></v-text-field>
    <ClientOnly>
      <Calendar locale="ko" :attributes="attributes" />
    </ClientOnly>
    <v-text-field v-model="cryptoText" label="crypto" />
    <v-btn @click="fn_getCrypto">getCrypto</v-btn>
    <v-btn @click="fn_deCrypto">deCrypto</v-btn>
  </div>
</template>

<script setup>
import { Calendar } from 'v-calendar';
import { deCrypto, getCrypto } from '~/utils/crypto';

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
  console.log(getCrypto(cryptoText.value));
};
const fn_deCrypto = () => {
  console.log(deCrypto(cryptoText.value));
};
</script>

<style scoped></style>
