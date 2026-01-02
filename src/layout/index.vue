<script setup lang="ts">
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import AppSidebar from "./components/AppSidebar.vue";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <SidebarProvider :style="{ '--sidebar-width': '15rem' }">
    <AppSidebar />
    <SidebarInset class="h-svh overflow-hidden">
      <Navbar />
      <ScrollArea class="flex-1 min-h-0 p-4">
        <RouterView />
      </ScrollArea>
    </SidebarInset>
  </SidebarProvider>
</template>
