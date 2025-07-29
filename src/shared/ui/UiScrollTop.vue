<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);

const checkScroll = () => {
  isVisible.value = window.scrollY > 500;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>

<template>
  <button
    v-show="isVisible"
    type="button"
    class="ui-scroll-top"
    aria-label="Наверх"
    @click="scrollToTop"
  >
    ↑
  </button>
</template>

<style scoped>
.ui-scroll-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--dark-white);
  color: var(--dark-grey);
  border: none;
  cursor: pointer;
  font-size: 24px;
  transition:
    opacity 0.3s,
    transform 0.3s;
  z-index: 1000;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.1);
      opacity: 0.7;
    }
  }
}
</style>
