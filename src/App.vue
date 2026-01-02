<script setup lang="ts">
import { Toaster } from "@/components/ui/sonner";
import { useUpdateListener } from "@/composables/useUpdateListener";
import "vue-sonner/style.css";

// Setup update event listener
useUpdateListener();
</script>

<template>
  <RouterView />
  <Toaster />
</template>
