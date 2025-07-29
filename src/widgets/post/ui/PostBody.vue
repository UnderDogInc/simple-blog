<script setup lang="ts">
import { defineComponent } from "vue";

defineProps({
  content: {
    type: String,
    required: true,
  },
});

defineComponent({
  name: "PostCard",
});
</script>

<template>
  <section class="post-body">
    <div v-if="content.length" class="post-body__content" v-html="content" />
    <p v-else class="post-body__empty">Opps, this is post empty</p>
  </section>
</template>

<style lang="scss" scoped>
.post-body {
  &__empty {
    text-align: center;
  }
  &__content {
    &:deep(h1),
    &:deep(h2),
    &:deep(h3),
    &:deep(h4),
    &:deep(h5),
    &:deep(h6) {
      margin-bottom: 12px;
    }

    &:deep(* + h1),
    &:deep(* + h2),
    &:deep(* + h3),
    &:deep(* + h4),
    &:deep(* + h5),
    &:deep(* + h6) {
      margin-top: 8px;
      font-variant-numeric: lining-nums proportional-nums;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px;

      @media (max-width: 1023px) {
        font-size: 20px;
        line-height: 28px;
      }
    }

    &:deep(p + p) {
      padding-top: 8px;
    }

    &:deep(ul + p) {
      padding-top: 8px;
    }

    &:deep(ol + p) {
      padding-top: 8px;
    }

    &:deep(ul),
    &:deep(ol) {
      padding-left: 24px;
    }

    &:deep(* + ol) {
      margin-top: 16px;
    }

    &:deep(* + ul) {
      margin-top: 16px;
    }

    &:deep(li + li) {
      margin-top: 8px;
    }

    &:deep(img) {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      margin: 16px 0;
      aspect-ratio: 2/1;
    }

    &:deep(a) {
      color: var(--primary) !important;

      @media (hover: hover) {
        &:hover {
          color: var(--color-semantic-content-hover-link) !important;
        }
      }
    }

    &:deep(strong a),
    &:deep(b a),
    &:deep(a strong),
    &:deep(a b) {
      color: var(--primary) !important;

      @media (hover: hover) {
        &:hover {
          color: var(--primary) !important;
        }
      }
    }
  }
}
</style>
