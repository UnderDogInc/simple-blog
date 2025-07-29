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

  aspectRatio: {
    type: String,
    default: "60%",
  },
});

defineComponent({
  name: "PostImage",
});

const { src } = toRefs(props);

const { isLoading, hasError } = useImageLoader(src.value);
</script>

<template>
  <div class="post-image" :style="{ paddingBottom: aspectRatio }">
    <div v-if="isLoading" class="post-image__loading">
      <UiSpiner />
    </div>

    <div v-else-if="hasError" class="post-image__error">
      <span>
        Не удалось загрузить изображение
        <br />
        Попробуйте через VPN
      </span>
    </div>

    <div
      v-else
      class="post-image__image"
      :style="{ backgroundImage: `url(${src})` }"
      :aria-label="alt"
    />
  </div>
</template>

<style scoped lang="scss">
.post-image {
  position: relative;
  width: 100%;
  background-color: var(--dark-white);

  &__loading,
  &__error,
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
    background-size: cover;
    background-position: center;
  }

  &__error {
    background-color: var(--dark-white);
    color: var(--light-grey);
    font-size: 14px;
    font-weight: bold;
    text-align: center;
  }
}
</style>
