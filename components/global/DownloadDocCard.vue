<template>
    <div class="card p-4 drop-shadow shadow-md border-t-4 border-primaryColor">
        <p class="text-sm uppercase">TAX UPDATES</p>
        <h2 class="text-sm md:text-lg font-semibold ">{{ item.title }}</h2>
            <p class="text-gray-500 mb-4 text-sm">{{ item.datePosted }}</p>
            <a :href="item.doc" target="blank" class="text-blue-500 cursor-pointer" >
                Download PDF
            </a>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
const props = defineProps(['item'])
</script>
  
<style scoped>
/* .card {
    border: 1px solid #ddd;
    border-radius: 0.5em;
    width: 300px;
} */
</style>
  