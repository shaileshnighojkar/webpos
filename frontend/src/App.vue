<script setup lang="ts">
import { onBeforeMount } from "vue";
import { RouterView, useRouter, useRoute } from "vue-router";
import { useAuthStore } from "./store/auth.store";

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

onBeforeMount(() => {
  if (!authStore.token && route.path != "/login") {
    router.push("/login");
  }
});
</script>

<template>
  <RouterView />
</template>

<style>
:root {
  --color-primary: #3ca8de;
}

*,
::before,
::after {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

#app {
  max-width: 1280px;
  margin: 0px auto;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
}
</style>
