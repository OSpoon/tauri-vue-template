<script setup lang="ts">
import { invoke } from "@tauri-apps/api/core";
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const greetMsg = ref("");
const name = ref("");

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  greetMsg.value = await invoke("greet", { name: name.value });
}
</script>

<template>
  <div class="space-y-8">
    <!-- Header Section -->
    <div class="space-y-4 text-center">
      <h1 class="text-4xl font-bold tracking-tight">
        Welcome to Tauri + Vue
      </h1>
    </div>

    <!-- Technology Stack Section -->
    <div class="space-y-4">
      <div class="flex items-center justify-center gap-8 flex-wrap">
        <a
          href="https://vite.dev"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col items-center gap-2 transition-transform hover:scale-105"
        >
          <img
            src="/vite.svg"
            class="logo vite h-16 w-16"
            alt="Vite logo"
          />
          <span class="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
            Vite
          </span>
        </a>
        <a
          href="https://tauri.app"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col items-center gap-2 transition-transform hover:scale-105"
        >
          <img
            src="/tauri.svg"
            class="logo tauri h-16 w-16"
            alt="Tauri logo"
          />
          <span class="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
            Tauri
          </span>
        </a>
        <a
          href="https://vuejs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex flex-col items-center gap-2 transition-transform hover:scale-105"
        >
          <img
            src="@/assets/vue.svg"
            class="logo vue h-16 w-16"
            alt="Vue logo"
          />
          <span class="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
            Vue
          </span>
        </a>
      </div>
      <p class="text-center text-sm text-muted-foreground">
        Click on the logos to learn more about each technology
      </p>
    </div>

    <!-- Greet Form Section -->
    <div class="space-y-4">
      <form
        class="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        @submit.prevent="greet"
      >
        <Input
          id="greet-input"
          v-model="name"
          placeholder="Enter a name..."
          class="flex-1 w-full"
        />
        <Button type="submit" class="w-full sm:w-auto">
          Greet
        </Button>
      </form>
      <div
        v-if="greetMsg"
        class="text-center p-4 bg-muted rounded-lg max-w-md mx-auto"
      >
        <p class="text-sm font-medium">
          {{ greetMsg }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  will-change: filter;
  transition: filter 0.3s ease, transform 0.3s ease;
}

.logo.vite:hover {
  filter: drop-shadow(0 0 1.5em #646cff);
}

.logo.tauri:hover {
  filter: drop-shadow(0 0 1.5em #24c8db);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 1.5em #42b883);
}
</style>
