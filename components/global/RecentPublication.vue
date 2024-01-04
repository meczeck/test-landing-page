<template>
    <div class="flex items-center gap-2 md:gap-4 p-2 pb-0 cursor-pointer">
        <div class="w-[150px] md:w-[200px] bg-primaryColor relative">
            <NuxtImg :src="recentPublication.cover_image" height="150px" width="200px" sizes="150px lg:200px" alt="img" />
        </div>
        <div>
            <h4 class="font-bold max-md:text-sm">{{ recentPublication.title.length > 34 ?
                recentPublication.title.slice(0,
                    34) + "..." :
                recentPublication.title
            }}</h4>
            <p class="max-md:text-xs text-xs">{{ recentPublication.introduction.length > 80 ?
                recentPublication.introduction.slice(0, 80) + "..." :
                recentPublication.introduction
            }}</p>

        </div>
    </div>
    <div class="flex items-center justify-between border-b-[1px] pb-2 text-xs  p-2 ">
        <div class="flex  items-center gap-2 ">
            <!-- <Icon name="ic:baseline-access-alarm" /> -->
            <p class=" text-[10px] lg:text-[15px]">
                {{ getPostedTime(recentPublication.created_at)
                }}
            </p>
        </div>

        <div class="flex items-center gap-2 ">
            <!-- <Icon name="ic:baseline-person" /> -->
            <p class=" text-[10px] lg:text-[15px]"> By {{recentPublication.author }}</p>
        </div>


    </div>
</template>

<script setup >
import { getPostedTime } from '@/utils/constants.js'

defineProps({
    recentPublication: {
        Type: Object
    },
})
</script>