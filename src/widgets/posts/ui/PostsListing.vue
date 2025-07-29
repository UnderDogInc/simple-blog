<script setup lang="ts">
import PostsCard from "./PostCard.vue";
import { UiSpiner } from "@/shared/ui";
import { onMounted, ref } from "vue";
import usePostsState from "@/widgets/posts/composables/usePostsState";
import { useInfiniteScroll } from "@vueuse/core";
import { RouteNames } from "@/app/providers/router/routes";

const { posts, loading, fetchPosts, hasMore } = usePostsState();

const scrollContainer = ref<HTMLElement | null>(null);

useInfiniteScroll(
  scrollContainer,
  () => {
    if (hasMore.value) {
      fetchPosts();
    }
  },
  { distance: 100 }
);

onMounted(() => {
  fetchPosts();
});
</script>

<template>
  <section class="posts-listing">
    <ul class="posts-listing__list">
      <li
        v-for="(item, idx) in posts"
        :key="item.id"
        class="posts-listing__item"
        :class="[{ 'posts-listing__item_wide': idx === 0 }]"
      >
        <RouterLink
          :to="{ name: RouteNames.POST, params: { id: item.id } }"
          :aria-label="`узнать больше о ${item.title}`"
        >
          <PostsCard :post="item" />
        </RouterLink>
      </li>

      <li v-if="loading" class="posts-listing__loader">
        <UiSpiner />
      </li>
    </ul>

    <div ref="scrollContainer" />
  </section>
</template>

<style lang="scss" scoped>
.posts-listing {
  padding: 20px 0;

  &__list {
    width: 90%;
    max-width: 1240px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    list-style: none;
    padding: 0;

    @media (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__item_wide {
    @media (min-width: 1024px) {
      grid-column: span 2;
    }
  }

  &__loader {
    grid-column: 1 / -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
  }
}
</style>
