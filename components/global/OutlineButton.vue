<template>
  <button
    class="border-[1px] relative bg-transparent px-2 md:px-4 py-3 rounded-lg hover:text-white focus-within:text-white text-sm custom-button"
    type="button" :style="{ border: '1px solid ' + borderColor }" :class="computedTextColor">
    <span class="label">{{ label }}</span>
  </button>
</template>
  
<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Learn More'
  },

  borderColor: {
    type: String,
    default: '#2A60A6'
  },
  color: {
    type: String,
    default: '#8888'
  }
});

const computedTextColor = computed(() => {
  return `text-${props.color}`
})
</script>
  
<style scoped>
.custom-button {
  overflow: hidden;
}

.custom-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: #2A60A6;
  /* Blue color */
  transition: left 0.3s ease-in-out;
  /* z-index: -1; */
}

.custom-button:hover::before,
.custom-button:focus-within::before {
  left: 0;
}

.label {
  position: relative;
  z-index: 1;
}

.custom-button:focus-within .label {
  color: white;
}
</style>
  
  
  
  
  