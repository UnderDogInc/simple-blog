<script lang="ts" setup>
import { defineComponent } from "vue";

defineComponent({
  name: "UiSpinner",
});
</script>

<template>
  <div class="ui-spinner" />
</template>

<style lang="scss" scoped>
.ui-spinner {
  width: 24px;
  height: 24px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: var(--light-grey);
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
