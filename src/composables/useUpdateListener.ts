import { listen } from "@tauri-apps/api/event";
import { onMounted, onUnmounted } from "vue";
import { toast } from "vue-sonner";

let unlisten: (() => void) | null = null;

/**
 * Composable for listening to update events from Tauri backend
 * and displaying toast notifications
 */
export function useUpdateListener() {
  const setupListener = async () => {
    try {
      unlisten = await listen<string>("update-event", (event) => {
        const status = event.payload;

        if (status === "up-to-date") {
          toast.info("You are currently using the latest version", {
            duration: 1500,
          });
        }
        else if (status === "downloading") {
          toast.loading("Downloading update...", {
            id: "update-downloading",
            duration: Infinity, // Keep showing until manually dismissed
          });
        }
        else if (status === "restarting") {
          toast.loading("Download complete, restarting application...", {
            id: "update-restarting",
            duration: Infinity,
          });
        }
        else if (status.startsWith("error:")) {
          // Dismiss previous loading toasts
          toast.dismiss("update-downloading");
          toast.dismiss("update-restarting");

          const errorMessage = status.replace("error: ", "");
          toast.error(errorMessage, {
            duration: 1500,
          });
        }
      });
    }
    catch (error) {
      console.error("Failed to setup update event listener:", error);
    }
  };

  const cleanup = () => {
    if (unlisten) {
      unlisten();
      unlisten = null;
    }
  };

  onMounted(() => {
    setupListener();
  });

  onUnmounted(() => {
    cleanup();
  });

  return {
    setupListener,
    cleanup,
  };
}
