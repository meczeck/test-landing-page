<template>
    <div ref="cardItem" class="shadow-md cursor-pointer hover:shadow-xl ">
        <NuxtImg class="w-full max-h-[300px]" :src="`${item.cover_image}`" alt="cover-image" loading="lazy" />
        <div class="p-4">
            <div class="flex justify-between ">
                <p class="flex items-center gap-2 text-gray-500 text-[10px] lg:text-[15px]">
                    <!-- <Icon name="ic:baseline-person" size="18" /> <span>{{ item.author }}</span> -->
                </p>
                <p class="flex items-center gap-2 text-gray-500 text-[10px] lg:text-[15px]">
                    <!-- <Icon name="ic:baseline-access-alarm" size="18" /><span>{{ getPostedTime(item.created_at) }}</span> -->
                </p>
            </div>
            <h3 class="py-4 font-bold">{{ item.title.length > 42 ? item.title.slice(0, 42) + "..." : item.title }}</h3>
            <p v-if="item.introduction.length > 80">{{ item.introduction.slice(0, 80) + "..." }}</p>
            <p v-else>{{ item.introduction.slice(0, 212) }}</p>

            <div class="mt-4 mb-2">
                <OutlineButton title="Read More" bg-color="#2D88AC" />
            </div>
        </div>
    </div>
</template>

<script setup>
import {  getPostedTime } from '@/utils/constants.js'

const props = defineProps({
    item: Object,
    index: {
        Type: Number,
        default: 0
    },

})


</script>
