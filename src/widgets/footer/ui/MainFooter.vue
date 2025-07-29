<script lang="ts" setup>
import { defineComponent, ref } from "vue";

defineComponent({
  name: "MainFooter",
});

const currentYear = ref(new Date().getFullYear());
</script>

<template>
  <footer class="main-footer">
    <section class="main-footer__copyright container">
      <p>
        Сделано в <time class="main-footer__year">{{ currentYear }}</time>
      </p>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
.main-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  padding: 16px 0;

  p {
    text-align: center;
  }
}
</style>
