<template>
    <div class="pb-[25px]">
        <h2 class="font-bold text-2xl lg:text-3xl my-[5px] lg:my-[10px]">{{ title }}</h2>
        <div class="lg:flex justify-between">
            <div class="w-full lg:w-[80%] xl-[90%]">
                <p>
                    {{ content  }}
                </p>
            </div>
            <div class="min-h-10 bg-[#8888] w-[4px]"></div>
            <div class="flex-1 max-lg:mt-4 flex-col ms-4">
                <h4 class="text-md mb-1 text-neutral-600 font-semibold" >OUR SPECIALIZATION</h4>
                <ul>
                    <li class="text-sm" ><NuxtLink to="" >Tax planning</NuxtLink></li>
                    <li class="text-sm" ><NuxtLink to="" >Transactions</NuxtLink></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="h-[1px] w-full bg-[#8888]" >
    </div>
</template>

<script setup>
defineProps(['title', 'linkTo', 'content'])
</script>