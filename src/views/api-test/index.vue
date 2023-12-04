<template>
  <div class="h-full py-4">
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-[80%] mx-auto">
      <div
        class="w-full px-6 py-4 hover:scale-105 my-4 rounded-lg bg-white shadow-slate-300 shadow-md relative"
        v-for="(item, i) in list"
        :key="i">
        <div class="flex justify-center">
          <img
            class="h-60 w-full rounded-md cursor-pointer"
            :src="item.image || '/images/nn-found.jpg'"
            :alt="item.name" />
        </div>
        <div class="flex justify-between py-2 mt-3">
          <span class="text-xl font-semibold text-blue-600 italic">
            {{ item.title }}
          </span>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center">
      <button
        @click="getList"
        class="px-2 py-1 text-lg font-semibold border border-cyan-800 my-4 bg-white text-cyan-500 rounded-md">
        Show more
      </button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
const list = ref([]);
const page = ref(1);
function getList() {
  axios({
    method: "get",
    url: "https://newsi-api.p.rapidapi.com/api/category",
    params: {
      category: "world",
      language: "en",
      country: "us",
      sort: "top",
      page: page.value,
      limit: "20",
    },
    headers: {
      "X-RapidAPI-Key": "e4448ec584msh8f045fa2cad6af6p1683d2jsn80be66b38254",
      "X-RapidAPI-Host": "newsi-api.p.rapidapi.com",
    },
  })
    .then(function (response) {
      list.value = list.value.concat(response.data);
      page.value++;
    })
    .catch(function (error) {
      // handle error
      console.error(error);
    })
    .finally(function () {
      // always executed
    });
}
onMounted(() => {
  getList();
});
</script>
