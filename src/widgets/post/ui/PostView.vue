<script setup lang="ts">
import { defineComponent, onBeforeMount, ref } from "vue";
import { useRouteParams } from "@vueuse/router";
import { apiGetPost } from "@/widgets/post/api";
import { IArticle } from "@/widgets/posts/interfaces";
import PostHeader from "@/widgets/post/ui/PostHeader.vue";
import PostThumbnail from "@/widgets/post/ui/PostThumbnail.vue";
import PostUser from "@/widgets/post/ui/PostUser.vue";
import PostBody from "@/widgets/post/ui/PostBody.vue";
import { UiSpiner } from "@/shared/ui";

defineComponent({
  name: "PostView",
});

const postId = useRouteParams("id");
const post = ref<IArticle | null>(null);
const isLoading = ref(true);

const fetchPost = async () => {
  try {
    const { data } = await apiGetPost(postId.value as string);
    post.value = data;
  } catch (e) {
    console.error(e);
  } finally {
    isLoading.value = false;
  }
};

onBeforeMount(() => {
  fetchPost();
});
</script>

<template>
  <section class="post-content container">
    <div v-if="isLoading" class="post-loading">
      <UiSpiner size="large" />
    </div>

    <template v-else-if="post">
      <PostHeader
        :title="post.title"
        :time="post.reading_time_minutes"
        :comments="post.comments_count"
        :reactions="post.public_reactions_count"
      />

      <PostThumbnail :src="post.social_image" :alt="post.title" />

      <PostUser v-if="post.user" :user="post.user" />

      <PostBody :content="post.body_html" />
    </template>
  </section>
</template>

<style lang="scss" scoped>
.post-content {
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @include tablet() {
    gap: 16px;
  }

  &__reading {
    margin-left: auto;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--light-grey);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  &__header {
    display: flex;
    align-items: flex-end;
    gap: 10px;
    padding: 8px 0;
    border-bottom: 1px solid var(--light-grey);
  }

  &__preview {
    width: 80px;
    height: 80px;
    object-fit: cover;
    display: inline-block;
    border-radius: 50%;
    border: 1px solid var(--grey);
  }

  .post-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
  }
}
</style>
