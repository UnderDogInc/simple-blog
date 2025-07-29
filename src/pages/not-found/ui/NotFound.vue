<script setup lang="ts">
import { computed } from "vue";
import { usePageTitle } from "@/shared/composable";
import { RouteNames } from "@/app/providers/router/routes";

const title = computed((): string => "404 - Страница не найдена");

usePageTitle({
  title: "404 - Страница не найдена",
  description: "Запрашиваемая страница не найдена",
});
</script>

<template>
  <div class="not-found">
    <h1>{{ title }}</h1>
    <RouterLink :to="{ name: RouteNames.HOME }" class="back-link">
      Вернуться на главную
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 2rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--grey);
  }

  a {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: var(--light-grey);
  }
}
</style>
