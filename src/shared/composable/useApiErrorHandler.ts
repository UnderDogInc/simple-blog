import { router } from "@/app/providers/router";
import { RouteNames } from "@/app/providers/router/routes";
import type { AxiosError } from "axios";

export interface ApiErrorHandlerOptions {
  redirectToNotFound?: boolean;
  showError?: boolean;
  customErrorHandler?: (error: AxiosError) => void;
}

export function useApiErrorHandler(options: ApiErrorHandlerOptions = {}) {
  const {
    redirectToNotFound = true,
    showError = false,
    customErrorHandler,
  } = options;

  const handleApiError = (error: AxiosError) => {
    if (customErrorHandler) {
      customErrorHandler(error);
      return;
    }

    if (error.response && error.response.status >= 400) {
      if (
        redirectToNotFound &&
        router.currentRoute.value.name !== RouteNames.NOT_FOUND
      ) {
        router.push({ name: RouteNames.NOT_FOUND });
      }

      if (showError) {
        console.error("API Error:", error.response?.data || error.message);
      }
    }
  };

  return {
    handleApiError,
  };
}
