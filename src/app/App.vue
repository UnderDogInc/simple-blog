<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import { DefaultLayout } from "@/layouts/default-layout";

const route = useRoute();

const layout = computed(() => route.meta.layout || DefaultLayout);
</script>

<template>
  <component :is="layout">
    <template #default>
      <RouterView />
    </template>
  </component>
</template>
