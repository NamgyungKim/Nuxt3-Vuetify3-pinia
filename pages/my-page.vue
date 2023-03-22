<template>
  <div>
    <h1>마이페이지</h1>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['authenticated'],
});
</script>

<style scoped></style>
