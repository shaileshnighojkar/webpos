import { defineStore } from "pinia";
import { ref } from "vue";

export const LOCAL_STORAGE_KEY = "auth-token";

export const useAuthStore = defineStore("auth", () => {
  const token = ref(localStorage.getItem(LOCAL_STORAGE_KEY) || "");

  function setToken(newToken: string) {
    token.value = newToken;
    localStorage.setItem(LOCAL_STORAGE_KEY, newToken);
  }

  return { token, setToken };
});
