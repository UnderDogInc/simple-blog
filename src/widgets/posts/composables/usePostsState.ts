import { reactive, ref } from "vue";
import { IArticle } from "@/widgets/posts/interfaces";
import { apiGetPosts } from "@/widgets/posts/api";
import { MAX_PAGE_SIZE, PER_PAGE } from "@/widgets/posts/constants";

export default function usePostsState() {
  const posts = reactive<IArticle[]>([]);
  const loading = ref(false);
  const page = ref(1);
  const hasMore = ref(true);

  const fetchPosts = async () => {
    if (loading.value || !hasMore.value) {
      return;
    }

    loading.value = true;

    try {
      const { data } = await apiGetPosts({
        per_page: PER_PAGE,
        page: page.value,
      });

      if (data.length === 0 || page.value >= MAX_PAGE_SIZE) {
        hasMore.value = false;
        return;
      }

      posts.push(...data);
      page.value++;
    } catch (e) {
      console.error("Error fetching posts:", e);
    } finally {
      loading.value = false;
    }
  };

  return {
    posts,
    loading,
    hasMore,
    fetchPosts,
  };
}
