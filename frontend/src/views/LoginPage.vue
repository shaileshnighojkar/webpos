<script setup lang="ts">
import { getToken, checkToken } from "../api";
import { ref, watch, onBeforeMount } from "vue";
import { useAuthStore } from "../store/auth.store";
import { useRoute, useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

const username = ref("");
const password = ref("");
const loading = ref(false);
const errorMessage = ref("");

watch(
  () => username.value + password.value,
  () => (errorMessage.value = "")
);

onBeforeMount(async () => {
  if (authStore.token && route.path === "/login") {
    const [isValid] = await checkToken();

    if (isValid) {
      router.push("/items");
    }
  }
});

async function login() {
  loading.value = true;

  const [token, error] = await getToken(username.value, password.value);

  if (token) {
    authStore.setToken(token);
    router.push("/items");
  } else {
    errorMessage.value = error;
  }

  loading.value = false;
}
</script>

<template>
  <div class="login-page-container">
    <img
      src="https://www.munero.net/wp-content/uploads/2019/07/Munero-Assets-W.png"
    />
    <h1>Munero</h1>

    <div class="form-inputs">
      <v-text-field v-model="username" label="Username" variant="outlined" />
      <v-text-field
        v-model="password"
        label="Password"
        type="password"
        variant="outlined"
        @keyup.enter="login"
      />
      <v-btn
        size="x-large"
        :disabled="loading"
        :loading="loading"
        @click="login"
      >
        Login
      </v-btn>
      <div class="error-message">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<style lang="scss">
.login-page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 64px;

  img {
    height: 148px;
  }

  h1 {
    font-weight: 300;
    margin-top: -32px;
    color: var(--color-primary);
  }

  .form-inputs {
    width: 320px;
    margin-top: 24px;

    .v-btn {
      background: var(--color-primary);
      color: white;
      width: 100%;
    }

    .error-message {
      margin-top: 8px;
      color: red;
      text-align: center;
      font-size: 18px;
    }
  }
}
</style>
