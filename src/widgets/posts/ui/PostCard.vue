<script setup lang="ts">
import { IArticle } from "@/widgets/posts/interfaces";
import { defineComponent, PropType } from "vue";
import { format } from "date-fns";
import PostImage from "./PostImage.vue";

defineProps({
  post: {
    type: Object as PropType<IArticle>,
    default: () => {},
  },
});

defineComponent({
  name: "PostCard",
});
</script>

<template>
  <article :title="post.description || 'Нет описания'" class="post-card">
    <PostImage
      class="post-card__image"
      :src="post.cover_image"
      :alt="post.title"
      aspect-ratio="60%"
    />
    <div class="post-card__content">
      <h3 class="post-card__title">{{ post.title }}</h3>
      <p class="post-card__description">
        {{ post.description }}
      </p>
      <span class="post-card__info">
        {{ post.user.name }}

        <time
          :datetime="post.published_at"
          itemprop="datePublished"
          class="post-card__date"
        >
          {{ format(new Date(post.published_at), "dd MMMM yyyy") }}
        </time>
      </span>
    </div>
  </article>
</template>

<style scoped lang="scss">
.post-card {
  background: var(--white);
  text-decoration: none;
  color: var(--grey);
  display: flex;
  flex-direction: column;
  min-height: 100%;
  position: relative;
  top: 0;
  height: 100%;

  &__image {
    transition: opacity 0.3s ease-in-out;
  }

  &__content {
    padding: 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__title {
    font-size: 20px;
    margin: 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    color: var(--dark-grey);
  }

  &__description {
    flex: 1;
    line-height: 1.4;
    margin: 10px 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  &__info {
    font-size: 12px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--light-grey);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-top: 2em;
  }

  @media (hover: hover) {
    &:hover {
      .post-card__title {
        color: var(--primary);
      }

      .post-card__image {
        opacity: 0.9;
      }
    }
  }
}
</style>
