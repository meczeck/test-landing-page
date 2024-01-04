<template>
    <div v-if="isDraweOpen" class="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden" @click="isDraweOpen = false"></div>
    <div class="lg:hidden"
        :class="[isDraweOpen ? 'translate-x-0' : '-translate-x-full left-0', 'lg:translate-x-0 fixed lg:relative py-2 md:py-5 z-40 bg-primaryColor h-full w-64 lg:w-full  rounded-lg transition-transform duration-300']">
        <div class="max-md:h-full max-w-[1200px] mx-auto px-2 lg:px-0">
            <div class="md:flex md:justify-between w-full items-center max-md:mt-[20px]">
                <ul style="list-style: none" class="flex flex-col items-start gap-5 nav-items">
                    <li v-for="(item, index) in menuItems" :key="index" class="text-gray-300 lg:text-black" >
                        <nuxt-link :to="item.to" :exactActiveClass="item.exactActiveClass">{{ item.text }}</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="max-w-[1200px] mx-auto px-4 lg:px-0 sticky">
        <div class="flex items-center justify-between w-full lg:h-[70px]">
            <NuxtLink id="main-logo" to="/">
                <NuxtImg src="logos/logo.png" format="webp" height="60" width="200" sizes="170px md:100px lg:200px" alt="main-logo" />
            </NuxtLink>
            <ul style="list-style: none;" class="items-center hidden gap-x-[40px] lg:flex nav-items">
                <li v-for="(item, index) in menuItems" :key="index">
                    <NuxtLink :to="item.to" :exactActiveClass="item.exactActiveClass" class="text-gray-300 lg:text-black" >{{ item.text }}</NuxtLink>
                </li>
            </ul>
            <div v-if="isDraweOpen" @click="isDraweOpen = false"
                class="block lg:hidden border-[1px] border-primaryColor rounded-full p-2 active:bg-gray-800">
                <Icon name="radix-icons:cross-1" color="#2A60A6" size="25" />
            </div>
            <div v-else @click="isDraweOpen = true"
                class="block lg:hidden border-[1px] border-primaryColor rounded-full p-2 active:bg-gray-800">
                <Icon name="material-symbols:lists" color="#2A60A6" size="25" />
            </div>
        </div>
    </div>
</template>

<script setup>
const isDraweOpen = ref(false);

const menuItems = [
    {
        to: '/',
        text: 'Home',
    },
    {
        to: '/about',
        text: 'About us',
    },
    {
        to: '/contact',
        text: 'Contact',
    },
    {
        to: '/gallery',
        text: 'Gallery',
    },


]
</script>


<style scoped>
#main-logo {
    border: none;
    width: auto;
    display: block;
}

.nav-items a {
  /* color: black; */
  font-weight: 400;
  font-size: 14px;
  position: relative;
  text-decoration: none;
  margin-right: 15px; /* Adjust spacing between items as needed */
}

.nav-items a::before {
  content: '';
  position: absolute;
  bottom: -3px; /* Adjust the value based on your design */
  left: 0;
  width: 0;
  height: 3px;
  background-color: #2A60A6;
  transition: width 0.3s ease-in-out;
}

.nav-items a:hover::before {
  width: 50%;
}

.nav-items a:focus::before {
  width: 50%;
}

.router-link-exact-active {
  border-bottom: 3px #2A60A6 solid;
  width: 50%;
  display: inline-block;
  white-space: nowrap;
}

</style>

