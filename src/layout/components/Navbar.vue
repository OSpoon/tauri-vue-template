<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

const route = useRoute();

const breadcrumbItems = computed(() => {
  if (!route.matched.length) {
    return [];
  }
  const items = [];
  if (route.matched[0]?.path && route.matched[0]?.name) {
    items.push({
      path: route.matched[0].path,
      label: route.matched[0].name as string,
    });
  }
  if (route.name) {
    items.push({
      path: route.path,
      label: route.name as string,
    });
  }
  return items;
});
</script>

<template>
  <header
    class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"
  >
    <div class="flex items-center gap-2 px-4">
      <SidebarTrigger class="-ml-1" />
      <Separator
        orientation="vertical"
        class="mr-2 data-[orientation=vertical]:h-4"
      />
      <Breadcrumb>
        <BreadcrumbList>
          <template v-if="breadcrumbItems.length > 0">
            <BreadcrumbItem
              v-if="breadcrumbItems.length > 1"
              class="hidden md:block"
            >
              <BreadcrumbLink as-child>
                <RouterLink :to="breadcrumbItems[0]?.path || '/'">
                  {{ breadcrumbItems[0]?.label }}
                </RouterLink>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator
              v-if="breadcrumbItems.length > 1"
              class="hidden md:block"
            />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {{ breadcrumbItems[breadcrumbItems.length - 1]?.label }}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </template>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  </header>
</template>
