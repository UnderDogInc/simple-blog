import { ref, onMounted } from "vue";

export function useImageLoader(src: string) {
  const isLoading = ref(true);
  const hasError = ref(false);

  const img = new Image();

  onMounted(() => {
    img.onload = () => {
      isLoading.value = false;
    };

    img.onerror = () => {
      isLoading.value = false;
      hasError.value = true;
    };

    img.src = src;
  });

  return {
    isLoading,
    hasError,
  };
}
