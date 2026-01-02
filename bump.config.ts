import { defineConfig } from "bumpp";

export default defineConfig({
  files: [
    "package.json",
    "src-tauri/tauri.conf.json",
    "src-tauri/Cargo.toml",
  ],
  commit: true,
  push: true,
});
