<template>
    <Title>Homepage</Title>
    <section id="partners" class="bg-[#D9D9D9] w-full py-[40px] md:py-[70px] ">
        <div class="max-w-[1200px] mx-auto max-xl:mx-[20px]">
            <MainHead :initialAn="{ yPosition: -50 }" class="text-center">
                Your Marketing And Digital Solutions Agency
            </MainHead>
            <div class="flex justify-center mt-4">
                <div class="lg:w-[60%] text-center">
                    <TextWrapper>
                        Afromark is a fast growing marketing and digital solutions agency fully Tanzania owned which has
                        been
                        operating for 4 years and registered with incorporation No 108586.
                    </TextWrapper>
                </div>
            </div>
            <div class="grid md:grid-cols-2 gap-3 md:gap-5 mt-[20px]">
                <div v-for="(item, index) in sections" :key="index" ref="aboutUsItem"
                    class="flex max-md:flex-col items-center justify-between p-4 gap-5 rounded-lg border-[1px] border-primaryColor hover:shadow-lg hover:drop-shadow-md bg-primaryColor ">
                    <div class="flex items-center">
                        <div class="rounded-full p-2 bg-white w-[150px] h-[150px] flex items-center justify-center">
                            <NuxtImg height=" 100px" :src="item.icon" format="webp" sizes="100px md:100px" :alt="item.title"
                                loading="lazy" />
                        </div>
                    </div>
                    <div>
                        <h4 class="font-bold text-white">{{ item.title }}:</h4>
                        <p class="text-white">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Counters -->
    <section class="max-w-[1200px] mx-auto max-lg:mx-[20px] my-[20px] lg:my-[50px]">
        <div class="counter-container grid grid-cols-2 lg:grid-cols-4 gap-3" ref="counterContainer">
            <Counter v-for="(counter, index) in counters" :key="index" :start="counter.start" :end="counter.end"
                :title="counter.title" :icon="counter.icon" />
        </div>
    </section>

    <!-- Our Portfolio -->
    <section>
        <div class="bg-primaryColor w-full pt-[40px] pb-[20px]">
            <h1 class="text-center text-3xl lg:text-4xl text-white">Our Portfolio</h1>
        </div>
        <div class="relative">
            <div class="custom-shape-divider-top-1704367790 ">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        opacity=".25" class="shape-fill"></path>
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        opacity=".5" class="shape-fill"></path>
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        class="shape-fill"></path>
                </svg>
            </div>
        </div>

        <div class="max-w-[1200px] mx-auto  px-[20px] xl:px-0 py-[5px] lg:py-[20px] mt-[60px]">
            <div class="grid md:grid-cols-3 gap-[40px]">
                <OurWorksCard class="max-lg:hidden" v-for="project, index in projects" :key="index" :title="project.title"
                    :background="project.image" v-motion :initial="initialAnimation({ xPosition: 50 })"
                    :visibleOnce="finalAnimation({ delayTime: 700 * (index + 1), stiffDuration: 100 })">
                    {{ project.description }}
                </OurWorksCard>
                <OurWorksCard class="lg:hidden" v-for="project, index in projects" :key="index" :title="project.title"
                    :background="project.image" v-motion :initial="initialAnimation({ yPosition: 40 })"
                    :visibleOnce="finalAnimation({ delayTime: 700 * (index + 1), stiffDuration: 100 })">
                    {{ project.description }}
                </OurWorksCard>
            </div>
        </div>
    </section>

    <!-- Our Clients -->
    <section id="clients" class="bg-[#D9D9D9] w-full py-[40px] md:py-[70px]">
        <div class="max-w-[1200px] mx-auto max-lg:mx-[20px]">
            <MainHead :initialAn="{ yPosition: -50 }" class="text-center">
                Our Clients
            </MainHead>
            <div class="py-[30px]">
                <div class="grid grid-cols-2 lg:grid-cols-3 gap-[50px] place-items-center my-[10px]">
                    <NuxtImg ref="clientImages"
                        class="cursor-pointer transition-shadow duration-300 hover:shadow-lg hover:shadow-blue"
                        v-for="(image, index) in clients" :key="index" :src="image.src" format="webp" sizes="120px md:200px"
                        :alt="image.src" loading="lazy" />
                </div>
            </div>
        </div>
    </section>
</template>
  
<script setup >
import { initialAnimation, finalAnimation } from '@/utils/constants';
import { useMotion } from '@vueuse/motion';

const counterContainer = ref(null);

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Trigger counting animation when the component becomes visible
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(counterContainer.value);
});

const sections = [
    {
        title: "Your Marketing And Digital Solutions Agency",
        description:
            "Afromark is a fast-growing marketing and digital solutions agency fully Tanzanian-owned, operating for 4 years and registered with incorporation No 108586.",
        icon: "/icons/services/solutions.png"
    },
    {
        title: "About Us",
        description:
            "Afromark is a fast-growing marketing and digital solutions agency fully Tanzanian-owned, operating for 4 years and registered with incorporation No 108586.",
        icon: "/icons/services/profile.png"
    },
    {
        title: "Event Management",
        description:
            "We create and organize activities, displays, or exhibits that put our client's brand at the center stage and connect consumers together to achieve the objectives of our clients, ensuring brand building and Top of Mind awareness.",
        icon: "/icons/services/management.png"
    },
    {
        title: "Direct Sales",
        description:
            "Afromark's experience grooms us to unlock a product's potential for the consumer, whether it be in a big mall, a supermarket, a small kiosk, market, or Gulio, providing interactive experiences that connect your brand with consumers.",
        icon: "/icons/services/sales.png"
    },
    {
        title: "Experiential Marketing",
        description:
            "Afromark has enough experience in Experiential marketing and Bar activation to make customers engage and interact with your brands, products, and services in sensory ways.",
        icon: "/icons/services/market.png"
    },
    {
        title: "Road Show",
        description:
            "Roadshow is the best and most effective way to draw a crowd via edutainment. We take your product or service to the heart of your target audience.",
        icon: "/icons/services/teacher.png"
    },
    {
        title: "Digital Activation",
        description:
            "Afromark has been at the forefront of creating synergy between online activations and offline activations.",
        icon: "/icons/services/digital-activation.png"
    },
    {
        title: "Digital Solutions",
        description:
            "AFROMARK meets consumer/client needs and improves access to information and communication. We employ technology and innovation that fit in with our client’s profile. Whether simple SMS, USSD, smart application, or computer program, our digital solutions offer the reflection of your needs.",
        icon: "/icons/services/digital.png"
    }
];


const projects = ref([
    {
        title: 'NMB',
        description: 'Promote brand awareness and the use of NMB Mastercards through NMB FRIYAY discounts.',
        image: '/images/p1.jpg',
        link: '#',
    },
    {
        title: 'Guinness Smooth',
        description: 'Promote brand awareness, drive trial and sustainability through a smooth experience.',
        image: '/images/p2.jpg',
        link: '#',
    },
    {
        title: 'Guinness Go Black',
        description: 'Memorable event to create brand awareness and provide a superior match viewing exprience for premier Leage lovers.',
        image: '/images/p3.jpg',
        link: '#',
    },
]);

const clients = [
    { sizes: 'sm:30vw lg:300px', src: '/images/clients/c1.png' },
    { sizes: 'sm:30vw lg:300px', src: '/images/clients/c2.png' },
    { sizes: 'sm:30vw lg:300px', src: '/images/clients/c3.png' },
    { sizes: 'sm:30vw lg:300px', src: '/images/clients/c4.png' },
    { sizes: 'sm:30vw lg:300px', src: '/images/clients/c5.png' },
    { sizes: 'sm:30vw lg:300px', src: '/images/clients/c6.png' },
    { sizes: 'sm:30vw lg:300px', src: '/images/clients/c7.png' },
    { sizes: 'sm:30vw lg:300px', src: '/images/clients/c8.png' },
    { sizes: 'sm:30vw lg:300px', src: '/images/clients/c9.png' },
    { sizes: 'sm:30vw lg:300px', src: '/images/clients/c10.png' },
    { sizes: 'sm:30vw lg:300px', src: '/images/clients/c11.png' },
    { sizes: 'sm:30vw lg:300px', src: '/images/clients/c12.png' },
];

const counters = [
    { start: 0, end: 104, title: 'Projects We Have Done', icon: '/icons/projects.png' },
    { start: 0, end: 17, title: 'People Working With Love', icon: '/icons/team-work.png' },
    { start: 0, end: 23034, title: 'Number of Activations', icon: '/icons/number.png' },
    { start: 0, end: 42, title: 'Events & Launches', icon: '/icons/events.png' },
]

const aboutUsItem = ref()
const clientImages = ref()
const learnMoreButton = ref()

onMounted(() => {
    sections.forEach((item, index) => {
        useMotion(aboutUsItem.value[index], {
            initial: initialAnimation({ yPosition: 50 }),
            visibleOnce: finalAnimation({ delayTime: 300 * index })
        })
    })

    clients.forEach((item, index) => {
        useMotion(clientImages.value[index], {
            initial: initialAnimation({ yPosition: 50 }),
            visible: finalAnimation({ delayTime: 230 * (index + 1), stiffDuration: 90 })
        })
    })

    useMotion(learnMoreButton,
        {
            initial: initialAnimation({ yPosition: 100 }),
            visible: finalAnimation({ delayTime: 1300, stiffDuration: 100 })
        }
    )

})
</script>
  
<style scoped >
.custom-shape-divider-top-1704367790 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1704367790 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 46px;
    transform: rotateY(180deg);
}

.custom-shape-divider-top-1704367790 .shape-fill {
    fill: #2A60A6;
}


.hover\:shadow-lg:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

.text-blue-500 {
    color: #3b82f6;
}

.text-blue-500:hover {
    color: #2563eb;
}
</style>