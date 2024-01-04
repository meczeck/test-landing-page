<script setup>
const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
    maxWidth: {
        type: String,
        default: '2xl',
    },
    closeable: {
        type: Boolean,
        default: true,
    },
    modalTitle: {
        type: String
    },
    maxWidthValue: {
        type: String,
        default: "700px"
    }
});

const emit = defineEmits(['close']);

watch(
    () => props.show,
    () => {
        if (props.show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = null;
        }
    }
);

const close = () => {
    if (props.closeable) {
        emit('close');
    }
};

const closeOnEscape = (e) => {
    if (e.key === 'Escape' && props.show) {
        close();
    }
};

onMounted(() => document.addEventListener('keydown', closeOnEscape));

onUnmounted(() => {
    document.removeEventListener('keydown', closeOnEscape);
    document.body.style.overflow = null;
});

</script>

<template>
 
        <Transition leave-active-class="duration-200">
            <div v-show="show" class="fixed inset-0 md:top-[8px] lg:top-[25%] overflow-y-hidden px-4 py-6 sm:px-0 z-50" scroll-region>
                <Transition enter-active-class="ease-out duration-300" enter-from-class="opacity-0"
                    enter-to-class="opacity-100" leave-active-class="ease-in duration-200" leave-from-class="opacity-100"
                    leave-to-class="opacity-0">
                    <div v-show="show" class="fixed inset-0 transform transition-all" @click="close">
                        <div class="absolute inset-0 bg-gray-500 opacity-75 overlay" />
                    </div>
                </Transition>

                <Transition enter-active-class="ease-out duration-300"
                    enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enter-to-class="opacity-100 translate-y-0 sm:scale-100" leave-active-class="ease-in duration-200"
                    leave-from-class="opacity-100 translate-y-0 sm:scale-100"
                    leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <div v-show="show" :style="{ maxWidth: maxWidthValue }"
                        class="mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto">
                        <div class="w-full px-4 py-2 bg-darkColor flex justify-between items-center">
                            <h4 class="text-white">{{ modalTitle }}</h4>
                            <div @click="close" class="rounded-full bg-white p-1 px-2 cursor-pointer">
                                <Icon name="radix-icons:cross-1" color="#C93F63" size="18" />
                            </div>
                        </div>
                        <slot v-if="show" />
                    </div>
                </Transition>
            </div>
        </Transition>
</template>

<style>
.overlay {
    overflow-y: hidden;
}
</style>