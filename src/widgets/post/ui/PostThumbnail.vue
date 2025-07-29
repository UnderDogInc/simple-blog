<script setup lang="ts">
import { defineComponent, toRefs } from "vue";
import { UiSpiner } from "@/shared/ui";
import { useImageLoader } from "@/shared/composable";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },

  alt: {
    type: String,
    default: "",
  },
});

defineComponent({
  name: "PostThumbnail",
});

const { src } = toRefs(props);

const { isLoading, hasError } = useImageLoader(src.value);
</script>

<template>
  <div class="post-thumbnail">
    <div v-if="isLoading" class="post-thumbnail__loading">
      <UiSpiner />
    </div>

    <div v-else-if="hasError" class="post-thumbnail__error">
      <span>
        Не удалось загрузить изображение
        <br />
        Попробуйте через VPN
      </span>
    </div>

    <div
      v-else
      class="post-thumbnail__image"
      :style="{ backgroundImage: `url(${src})` }"
      :aria-label="alt"
    />
  </div>
</template>

<style scoped lang="scss">
.post-thumbnail {
  position: relative;
  width: 100%;
  height: 480px;
  background-color: var(--dark-white);
  border-radius: 20px;

  @include tablet() {
    height: 240px;
  }

  &__loading,
  &__error,
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    height: 100%;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
  }

  &__image {
    background-size: cover;
    height: 480px;
    background-position: center;

    @include tablet() {
      height: 240px;
    }
  }

  &__error {
    height: 480px;
    background-color: var(--dark-white);
    color: var(--light-grey);
    font-size: 14px;
    font-weight: bold;
    text-align: center;

    @include tablet() {
      height: 240px;
    }
  }
}
</style>
