<template>
  <div>
    <div class="main-container">
      <h1>JOIN US</h1>
      <h2>h2</h2>
      <p>addWon: {{ addWon }}</p>
      <p>comma: {{ numberComma(number) }}</p>
      <p>Won + comma: {{ numberFormet }}</p>
      <v-btn color="pink" @click="increaseNumber">+ 1,000</v-btn>
      <v-btn color="blue" @click="decreseNumber">- 1,000</v-btn>
    </div>
  </div>
</template>

<script setup>
let number = ref(1000);

// ! 500 document is not defined error
// const $h2 = document.querySelector('h2');
// NextJS는 모든 페이지를 서버에서 프리 렌더링 하여 보여주게 된다. 해당 시점에 document에 접근하려고 하면 접근할 수 없어서 에러를 뱉어내게 된다.

const addWon = computed(() => number.value + '원');
const numberFormet = computed(() => numberComma(number.value) + '원');

console.log('🚨console.log');
const numberComma = (num) => {
  if (!num) {
    num = 0;
  }
  const parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

watch(number, (newValue, oldValue) => {
  console.log('new:' + newValue);
  console.log('old:' + oldValue);
});

const increaseNumber = () => {
  number.value += 1000;
};

const decreseNumber = () => {
  number.value -= 1000;
};

onMounted(() => {
  const $h1 = document.querySelector('h1');
  console.log('🌄 onMounted');
  console.log($h1);
});

onUpdated(() => {
  console.log('updated');
});
</script>

<style scoped></style>
