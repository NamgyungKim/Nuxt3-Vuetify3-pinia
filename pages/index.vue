<template>
  <div>
    <h1>Home</h1>
    <p>로그인 여부 : {{ auth.auth }}</p>
    <v-btn color="green" @click="login">login</v-btn>
    <v-btn color="red" @click="logOut">logOut</v-btn>
  </div>
</template>

<script setup>
import { useAuth } from '~/stores/auth';
const auth = useAuth();
const login = () => {
  auth.login();
};
const logOut = () => {
  auth.logout();
};
</script>
