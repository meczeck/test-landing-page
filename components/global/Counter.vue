<template>
  <div class="counter flex flex-col justify-center items-center max-md:mt-4">
    <NuxtImg ref="clientImages" class="cursor-pointer transition-shadow duration-100 hover:shadow-lg hover:shadow-blue" height="100px" :src="icon" format="webp" sizes="100px md:160px" :alt="title"
      loading="lazy" />

    <p class="text-sm lg:text-lg text-gray-500 font-bold py-2">{{ title }}</p>
    <span class="text-3xl lg:text-5xl text-primaryColor font-bold">{{ currentCount }}</span>
  </div>
</template>
  
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
const props = defineProps(['start', 'end', 'title', 'icon'])

const currentCount = ref(0);
let countingInterval;

const startCounting = (start, end) => {
  let count = start;
  const increment = end > start ? 1 : -1;

  countingInterval = setInterval(() => {
    currentCount.value = count;
    count += increment;

    if ((increment > 0 && count > end) || (increment < 0 && count < end)) {
      currentCount.value = end;
      clearInterval(countingInterval);
    }
  }, 20);
};

onMounted(() => {
  const start = props.start || 0;
  const end = props.end || 0;

  startCounting(start, end);
});

onBeforeUnmount(() => {
  clearInterval(countingInterval);
});
</script>
  
<style scoped>
.counter {
  text-align: center;
}

/* .counter span {
    font-size: 2rem;
    font-weight: bold;
  } */

/* .counter p {
  margin-top: 10px;
  font-size: 1rem;
} */
</style>
  