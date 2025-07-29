<script lang="ts" setup>
import { computed, defineComponent, PropType } from "vue";
import { IArticleUser } from "@/widgets/posts/interfaces";

const props = defineProps({
  user: {
    type: Object as PropType<IArticleUser>,
    required: true,
  },
});

defineComponent({
  name: "PostUser",
});

const currentTag = computed(() => (props.user.website_url ? "a" : "div"));
</script>

<template>
  <component
    :is="currentTag"
    class="post-user"
    :href="user.website_url"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      class="post-user__image"
      :src="user.profile_image_90"
      :alt="user.name"
    />
    {{ user.name }}
  </component>
</template>

<style lang="scss" scoped>
.post-user {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 24px;
  font-weight: 900;
  line-height: 152%;
  color: var(--dark-white);
  border-bottom: 1px solid var(--primary);
  padding-bottom: 16px;
  width: fit-content;
  margin-bottom: 16px;

  @include tablet() {
    font-size: 18px;
  }

  &__image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid var(--light-grey);

    @include tablet() {
      width: 80px;
      height: 80px;
    }
  }

  @media (hover: hover) {
    &:hover {
      color: var(--primary);
    }
  }
}
</style>
