<template>
    <section v-if="route.path == '/'" id="hero-section">

        <Header />

        <div
            class="flex flex-col items-center max-w-[1200px] mx-auto h-[calc(100vh-100px)] justify-center px-[20px] xl:px-0">
            <div class="w-full grid lg:grid-cols-2 gap-3">
                <div class="w-full lg:w-[50%] max-lg:flex items-center flex-col max-lg:order-2">
                    <div class="min-h-20 typed-text">
                        <p
                            class="text-3xl lg:text-6xl my-[10px] lg:my-[20px] uppercase text-primaryColor font-extrabold text-shadow">
                            <span v-for="(char, index) in typedText" :key="index">{{ char }}</span>
                            <span v-if="showCursor" class="cursor">|</span>
                        </p>
                    </div>
                    <OutlineButton ref="learnMoreButton" class="lg:mt-20" label="Lean More" />
                </div>
                <div>
                    <NuxtImg ref="heroImage" src="/images/innovative.svg" height="50vh" width="100vw" sizes="170px md:100px lg:200px"
                     alt="main-logo" />
                </div>
            </div>
        </div>
    </section>

    <Header v-else />

    <slot />
    <Footer />
</template>
<script setup>
import { initialAnimation, finalAnimation } from '@/utils/constants';
import { useMotion } from '@vueuse/motion';
const route = useRoute()

useHead({
    titleTemplate: '%s | Afro Mark',
})

useSeoMeta({
    ogImage: '/logos/logo.png',
    ogSiteName: 'Afro Mark',
    ogImageWidth: '100px',
    ogType: 'website'
})


const words = ["think", "create", "win...!!"];
let currentIndex = ref(0);
let typedText = ref([]);
let showCursor = ref(true);

const startTypewriter = () => {
    if (currentIndex.value >= words.length) {
        currentIndex.value = 0; // Reset index when reaching the end
    }
    typeWord(words[currentIndex.value]);
};

const typeWord = (word) => {
    typedText.value = [];
    for (let i = 0; i < word.length; i++) {
        setTimeout(() => {
            typedText.value.push(word[i]);
        }, i * 100); // Typing speed (adjust as needed)
    }

    setTimeout(() => {
        deleteWord();
    }, word.length * 100 + 1000); // Wait for 1 second before deleting
};

const deleteWord = () => {
    showCursor.value = false;

    setTimeout(() => {
        for (let i = typedText.value.length - 1; i >= 0; i--) {
            setTimeout(() => {
                typedText.value.pop();
            }, (typedText.value.length - i - 1) * 50); // Deleting speed (adjust as needed)
        }

        currentIndex.value++;

        setTimeout(() => {
            showCursor.value = true;
            startTypewriter();
        }, typedText.value.length * 50 + 500); // Wait for 0.5 seconds before starting the next word
    }, 1000); // Wait for 1 second before starting to delete
};

const learnMoreButton = ref()
const heroImage = ref()
onMounted(() => {
    startTypewriter();

    useMotion(learnMoreButton,
        {
            initial: initialAnimation({ yPosition: 100 }),
            visible: finalAnimation({ delayTime: 1000, stiffDuration: 100 })
        }
    )
    useMotion(heroImage,
        {
            initial:initialAnimation({ scale: 0.6, opacity: 0 }),
            visible:finalAnimation({ stiffDuration: 100 })
        }
    )

});
</script>

<style >
#hero-section {
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    background-image: linear-gradient(to bottom left, white, rgba(0, 0, 0, 0)), url("/backgrounds/diamond-sunset.svg");
    background-image: linear-gradient(to bottom left, white, rgba(0, 0, 0, 0)), url("/backgrounds/diamond-sunset.svg");
}

.typed-text span {
    display: inline-block;
    text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
}

.cursor {
    animation: blink 0.7s infinite;
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}
</style>