<template>
    <section id="footer" class="bg-[#EBF3F6] w-full">
        <div class="max-w-[1200px] mx-auto  px-[20px] xl:px-0 py-[5px] lg:py-[20px]">
            <div class="grid items-start pb-8 md:grid-cols-4 lg:grid-cols-5 max-lg:gap-y-3 lg:gap-4 ">
                <div class="flex flex-col justify-start md:items-start md:col-span-2">
                    <NuxtLink id="main-logo" to="/">
                        <NuxtImg src="logos/logo.png" format="webp" height="60" width="200" sizes="170px md:100px lg:200px" alt="main-logo" />
                    </NuxtLink>
                    <p class="my-5 lg:my-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Cupiditate velit dolor possimus? Totam, repellendus corporis.</p>
                    <ul style="list-style: none;" class="flex gap-3 text-gray-300">
                        <li class="cursor-pointer">
                            <nuxt-link to="#">
                                <Icon name="fa6-brands:facebook" color="blue" size="18" />
                            </nuxt-link>
                        </li>
                        <li class="cursor-pointer">
                            <nuxt-link to="#">
                                <Icon name="fa6-brands:twitter" color="#1DA1F2" size="18" />
                            </nuxt-link>
                        </li>
                        <li class="cursor-pointer">
                            <nuxt-link to="#">
                                <Icon name="fa6-brands:instagram" color="#F70261" size="18" />
                            </nuxt-link>
                        </li>
                        <li class="cursor-pointer">
                            <nuxt-link to="#">
                                <Icon name="fa6-brands:youtube" color="#FF0101" size="18" />
                            </nuxt-link>
                        </li>

                    </ul>
                </div>
                <div>
                    <h4 class="py-2 font-bold">Quick Links</h4>
                    <ul>
                        <li class="py-1"><nuxt-link class="font-light text-md" to="#">Home</nuxt-link></li>
                        <li class="py-1"><nuxt-link class="font-light text-md" to="#">About us</nuxt-link>
                        </li>
                        <li class="py-1"><nuxt-link class="font-light text-md" to="#">Gallery</nuxt-link></li>
                        <li class="py-1"><nuxt-link class="font-light text-md" to="#">Contact</nuxt-link></li>
                    </ul>
                </div>

                <div>
                    <h4 class="py-2 font-bold">About</h4>
                    <ul>
                        <li class="py-1"><nuxt-link class="font-light text-md" to="#">Partiners</nuxt-link> </li>
                        <li class="py-1"><nuxt-link class="font-light text-md" to="#">Carriers</nuxt-link></li>
                        <li class="py-1"><nuxt-link class="font-light text-md" to="#">Press</nuxt-link></li>
                        <li class="py-1"><nuxt-link class="font-light text-md" to="#">Community</nuxt-link></li>
                    </ul>
                </div>

                <div>
                    <h4 class="py-2 font-bold">Our Office</h4>
                    <ul>
                        <li class="py-1"><nuxt-link class="font-light text-md" to="#">Dar es Salaam, Tanzania </nuxt-link>
                        </li>
                        <li class="py-1"><nuxt-link class="font-light text-md" to="#">ABC Tower 10th Floor </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bg-primaryColor">
            <div class="max-w-[1200px] mx-auto px-[20px] xl:px-0 w-full flex items-center justify-between h-[60px]">
                <p class="text-white max-lg:text-sm">Copyright © {{ date }}. All rights reserved.</p>
                <ul class="flex gap-3 lg:gap-10">
                    <li class="py-1"><nuxt-link class="text-md text-white max-lg:text-sm" to="#">Privacy </nuxt-link> </li>
                    <li class="py-1"><nuxt-link class="text-md text-white max-lg:text-sm" to="#">Security </nuxt-link> </li>
                    <li class="py-1"><nuxt-link class="text-md text-white max-lg:text-sm" to="#">Terms </nuxt-link></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
let dateObject = new Date()
const date = dateObject.getFullYear()
</script>

<style  scoped>
.cursor-pointer {
    background: white;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>