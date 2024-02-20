import { defineStore } from "pinia";
import { Ref, ref } from "vue";

export const useItemsStore = defineStore("items", () => {
  const items: Ref<MuneroItem[]> = ref([]);

  function setItems(newItems: MuneroItem[]) {
    items.value = newItems;
  }

  return { items, setItems };
});
