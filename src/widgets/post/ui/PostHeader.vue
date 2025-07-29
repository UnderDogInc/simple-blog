<script lang="ts" setup>
import { wordByNum } from "@/shared/helpers";
import { CommentsIcon, LikeIcon } from "@/shared/assets/icons";

defineProps({
  time: {
    type: Number,
    default: 0,
  },

  comments: {
    type: Number,
    default: 0,
  },

  reactions: {
    type: Number,
    default: 0,
  },

  title: {
    type: String,
    default: "",
  },
});

const reactionsView = (count: number, name: string) =>
  count ? `${name}: ${count}` : `No ${name} yet`;
</script>

<template>
  <header class="post-header">
    <h1 class="post-header__title">
      {{ title }}
    </h1>

    <div class="post-header__reactions reactions">
      <span v-if="!!time" class="reactions__item">
        Reading time:
        <time>
          {{ time }}
          {{ wordByNum(time, ["minutes", "minutes", "minutes"]) }}
        </time>
      </span>

      <span class="reactions__item">
        <img class="reactions__image" :src="LikeIcon" alt="comments" />
        {{ reactionsView(comments, "comments") }}
      </span>

      <span class="reactions__item">
        <img class="reactions__image" :src="CommentsIcon" alt="comments" />
        {{ reactionsView(reactions, "reactions") }}
      </span>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.post-header {
  padding-bottom: 16px;

  &__title {
    font-size: 64px;
    line-height: 105%;
    text-align: center;
    margin-bottom: 16px;

    @include tablet() {
      font-size: 32px;
      text-align: start;
    }

    @include phone() {
      font-size: 24px;
    }
  }

  .reactions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    @include tablet() {
      justify-content: flex-start;
    }

    @include s-tablet() {
      gap: 4px;
      align-items: flex-start;
      flex-direction: column;
    }

    &__item {
      font-size: 12px;
      font-weight: bold;
      display: flex;
      gap: 8px;
      justify-content: space-between;
      align-items: center;
      color: var(--white);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    &__image {
      display: inline-block;
      max-width: 16px;
    }
  }
}
</style>
