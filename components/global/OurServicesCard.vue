<template>
    <div class="pb-[25px]" >
        <MainTitle class="pb-[7px] lg:pb-[10px]">{{ title }}</MainTitle>
        <div class="lg:flex justify-between">
            <div class="w-full lg:w-[80%] xl-[90%]">
                <p>
                    <slot />
                </p>
            </div>
            <div class="flex-1 flex justify-end max-lg:mt-4">
                <NuxtLink to="">
                    <OutlineButton label-color="#C93F63" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(['title', 'linkTo'])
</script>