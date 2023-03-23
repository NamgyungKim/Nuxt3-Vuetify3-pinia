<template>
  <div id="aboveNav">
    <nav>
      <NuxtLink to="/">Index</NuxtLink>
      <NuxtLink to="/api-test">API Test</NuxtLink>
      <NuxtLink to="/life-cycle">Life Cycle</NuxtLink>
      <NuxtLink to="/component-test">Component Test</NuxtLink>
      <NuxtLink to="/i18n">i18n</NuxtLink>
      <NuxtLink to="/google-charts">Google Charts</NuxtLink>
      <NuxtLink to="/forms">Forms</NuxtLink>
      <NuxtLink to="/my-page">MyPage</NuxtLink>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Above',
};
</script>

<style lang="scss" scoped>
%main-display {
  display: flex;
  justify-content: center;
  align-items: center;
}

#aboveNav {
  @extend %main-display;
  flex-direction: column;
}

body {
  @extend %main-display;
  margin: 0;
}

nav {
  @extend %main-display;
  background-color: black;
  width: 100vw;

  & > a {
    text-decoration: none;
    font-weight: bold;
    color: white;
    margin: 10px;

    &:hover {
      color: darken(white, 30%);
    }
  }
}
</style>
