<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { HeaderLogo } from "@/shared/assets/icons";
import { SOCIAL_LINKS } from "@/widgets/header/constants";

const isSticky = ref(false);

const handleScroll = () => {
  isSticky.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header class="main-header" :class="{ 'main-header--sticky': isSticky }">
    <nav class="container main-header__nav">
      <RouterLink class="main-header__link" to="/">
        <img
          class="main-header__logo"
          :src="HeaderLogo"
          alt="test leon blog logo"
        />
      </RouterLink>

      <ul class="main-header__list list">
        <li v-for="el in SOCIAL_LINKS" :key="el.name" class="list__item">
          <a
            class="main-header__link"
            :href="el.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img class="list__icon" :src="el.icon" alt="el.name" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.main-header {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &--sticky {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
    background: rgba(0, 0, 0, 0.8);
  }

  &__logo {
    display: block;
  }

  &__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__link {
    transition: opacity 0.3s ease-in-out;

    @media (hover: hover) {
      &:hover {
        opacity: 0.8;
      }
    }
  }

  .list {
    display: flex;
    align-items: center;
    gap: 8px;

    &__icon {
      display: inline-block;
      width: 32px;
      flex-shrink: 0;
      transition: transform 0.3s ease;

      @media (hover: hover) {
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
