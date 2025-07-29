<script lang="ts" setup>
import { usePageTitle } from "@/shared/composable";
import PostsListing from "@/widgets/posts/ui/PostsListing.vue";

usePageTitle({
  title: "Главная",
  description: "Блог Леона - последние статьи и новости",
  keywords: "блог, статьи, новости, Leon",
});
</script>

<template>
  <PostsListing />
</template>
