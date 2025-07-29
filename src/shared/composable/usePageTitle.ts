import { useHead } from "@unhead/vue";
import { computed } from "vue";

export interface PageTitleOptions {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
}

export function usePageTitle(options: PageTitleOptions) {
  const defaultTitle = "Leon Blog";
  const defaultDescription = "Блог Леона - последние статьи и новости";

  const pageTitle = computed(() => {
    if (options.title) {
      return `${options.title} - ${defaultTitle}`;
    }
    return defaultTitle;
  });

  const pageDescription = computed(() => {
    return options.description || defaultDescription;
  });

  useHead({
    title: pageTitle.value,
    meta: [
      {
        name: "description",
        content: pageDescription.value,
      },
      ...(options.keywords
        ? [
            {
              name: "keywords",
              content: options.keywords,
            },
          ]
        : []),
      ...(options.image
        ? [
            {
              property: "og:image",
              content: options.image,
            },
            {
              name: "twitter:image",
              content: options.image,
            },
          ]
        : []),
      {
        property: "og:title",
        content: pageTitle.value,
      },
      {
        property: "og:description",
        content: pageDescription.value,
      },
      {
        name: "twitter:title",
        content: pageTitle.value,
      },
      {
        name: "twitter:description",
        content: pageDescription.value,
      },
    ],
  });

  return {
    pageTitle,
    pageDescription,
  };
}
