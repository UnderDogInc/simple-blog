<script lang="ts" setup>
import { defineComponent } from "vue";
import { MainHeader } from "@/widgets/header";
import { MainFooter } from "@/widgets/footer";
import { UiScrollTop } from "@/shared/ui";

defineComponent({
  name: "DefaultLayout",
});
</script>

<template>
  <div class="default-layout">
    <MainHeader />

    <main>
      <RouterView />
    </main>

    <MainFooter />

    <UiScrollTop />
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  height: 100%;

  main {
    min-height: 100vh;
  }
}
</style>
