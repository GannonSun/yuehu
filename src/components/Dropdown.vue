<template>
  <div class="dropdown" ref="dropdownRef">
    <a
      class="btn btn-outline-light my-2 dropdown-toggle"
      href="#"
      @click.prevent="toggleDropdown"
    >
      {{ title }}
    </a>
    <ul class="dropdown-menu" :class="{ show: isOpen }">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const dropdownRef = ref<null | HTMLElement>(null);
    const isOpen = ref(false);
    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    const handler = (e: MouseEvent) => {
      if (
        !dropdownRef.value?.contains(e.target as HTMLElement) &&
        isOpen.value
      ) {
        isOpen.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener('click', handler);
    });

    onUnmounted(() => {
      document.removeEventListener('click', handler);
    });

    return {
      dropdownRef,
      isOpen,
      toggleDropdown
    };
  }
});
</script>

<style></style>
