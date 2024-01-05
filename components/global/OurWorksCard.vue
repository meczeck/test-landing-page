<template>
  <div class="relative">
    <!-- Image with gradient overlay -->
    <div class="relative">
      <NuxtImg :src="background" height="600" width="600" sizes="600px md:100vw" class="rounded-[10px]"
        alt="news-and-updates-image" />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 rounded-[10px]"></div>

      <!-- Centered button -->
      <div class="absolute inset-0 flex items-center justify-center">
        <OutlineButton border-color="#2A60A6" color="white" />
      </div>
    </div>

    <!-- Text content -->
    <div>
      <h2 class="text-2xl lg:text-3xl my-[10px] lg:my-[20px] text-center text-primaryColor font-bold">{{ title }}</h2>
      <p>
        <slot />
      </p>
    </div>
  </div>
</template>

<script setup >
defineProps(['title', 'linkTo', 'background'])
</script>