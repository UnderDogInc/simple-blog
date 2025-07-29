<script lang="ts" setup>
import { usePageTitle } from "@/shared/composable";
import { PostView } from "@/widgets/post";

usePageTitle({
  title: "Статья",
  description: "Читайте статью в блоге Леона",
  keywords: "статья, блог, Leon",
});
</script>

<template>
  <PostView />
</template>
