<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import { SOCIAL_LINKS } from "@/widgets/header/constants";

defineComponent({
  name: "MainFooter",
});

const currentYear = ref(new Date().getFullYear());
</script>

<template>
  <footer class="main-footer">
    <section class="main-footer__copyright container">
      <p>
        Make by
        <a :href="SOCIAL_LINKS[1].link">
          UnderDogInc
        </a>

        <br>

        <time class="main-footer__year">{{ currentYear }} year</time>
      </p>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
.main-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  padding: 16px 0;

  p, a {
    color: var(--white);
    text-align: center;
  }

  &__year {
    display: inline-block;
    margin-top: 8px;
  }
}
</style>
