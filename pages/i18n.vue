<template>
  <div>
    <h1>i18n</h1>
    <p>
      <NuxtLink :to="switchLocalePath('ko')">Korea</NuxtLink>
    </p>
    <p>
      <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
    </p>
    <p>{{ $t('welcome') }}</p>
    <p>{{ $t('hello', { name: 'knk' }) }}</p>
  </div>
</template>

<script setup></script>

<style scoped></style>
