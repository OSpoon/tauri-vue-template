# Tauri Vue Template

一个现代化的 Tauri + Vue 3 + TypeScript 桌面应用开发模板，集成了完整的开发工具链和最佳实践。

![Tauri](https://img.shields.io/badge/Tauri-2.0-FFC131?style=flat&logo=tauri&logoColor=white)
![Vue](https://img.shields.io/badge/Vue-3.5-4FC08D?style=flat&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat&logo=vite&logoColor=white)
[![publish](https://github.com/OSpoon/tauri-vue-template/actions/workflows/publish.yml/badge.svg)](https://github.com/OSpoon/tauri-vue-template/actions/workflows/publish.yml)

## ✨ 特性

- 🚀 **现代化技术栈**
  - Tauri 2.0 - 轻量级桌面应用框架
  - Vue 3.5 - 组合式 API，性能优异
  - TypeScript 5.9 - 完整的类型支持
  - Vite 6.0 - 极速构建工具

- 🎨 **UI 组件库**
  - Reka UI - 基于 Radix UI 的 Vue 组件库
  - Tailwind CSS 4.0 - 实用优先的 CSS 框架
  - Shadcn-Vue 风格组件 - 美观且可定制

- 🛠️ **开发体验**
  - ESLint + @antfu/eslint-config - 严格的代码规范
  - Git Hooks - 自动代码检查和格式化
  - Commitlint - Conventional Commits 规范
  - TypeScript 严格模式 - 类型安全

- 🎯 **功能特性**
  - 状态管理 - Pinia 状态管理
  - 主题系统 - 自动跟随系统主题
  - 路由进度条 - NProgress 集成
  - Toast 通知 - Vue Sonner

- 📦 **CI/CD**
  - GitHub Actions - 自动化构建和发布
  - 多平台支持 - macOS (Arm64/x64) + Windows
  - 自动版本管理 - Bumpp 版本管理
  - 自动生成 Changelog - Conventional Changelog

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone <your-repo-url>
cd tauri-vue-template
```

### 2. 初始化项目

> ⚠️ **重要**: 克隆项目后，请全局搜索并替换以下内容：

- **`tauri-vue-template`** → 替换为你的项目名称
- **`com.osp`** → 替换为你的包名（如 `com.yourcompany.yourapp`）

这些内容出现在以下文件中：
- `package.json` - 项目名称
- `src-tauri/tauri.conf.json` - 应用名称和标识符
- `src-tauri/Cargo.toml` - Rust 包名
- 其他配置文件

> 💡 **提示**: 别忘了更新 `LICENSE` 文件中的版权信息。

### 3. 安装依赖

```bash
pnpm install
```

### 4. 开发模式

```bash
pnpm dev:tauri
```

## 📁 项目结构

```
tauri-vue-template/
├── .github/
│   └── workflows/
│       └── publish.yml          # GitHub Actions 发布工作流
├── src/                          # 前端源代码
│   ├── components/              # Vue 组件
│   │   └── ui/                  # UI 组件库（Shadcn-Vue 风格）
│   ├── layout/                  # 布局组件
│   │   ├── components/          # 布局子组件（侧边栏、导航栏）
│   │   └── index.vue            # 主布局
│   ├── router/                  # 路由配置
│   │   ├── router.ts            # 路由定义
│   │   └── guards.ts            # 路由守卫
│   ├── stores/                  # Pinia 状态管理
│   ├── views/                   # 页面视图
│   ├── lib/                     # 工具函数
│   ├── style.css                # 全局样式
│   └── main.ts                  # 应用入口
├── src-tauri/                   # Tauri 后端代码
│   ├── src/                     # Rust 源代码
│   ├── tauri.conf.json          # Tauri 配置文件
│   └── icons/                   # 应用图标
├── bump.config.ts                # Bumpp 版本管理配置
├── eslint.config.ts              # ESLint 配置
├── components.json               # UI 组件配置
├── tsconfig.json                 # TypeScript 配置
└── vite.config.ts                # Vite 配置
```

## 🛠️ 开发指南

### 代码规范

项目使用 **@antfu/eslint-config** 作为 ESLint 配置，主要规则：

- **引号**: 双引号
- **分号**: 必须使用分号
- **对象属性**: 仅在需要时使用引号
- **HTML 标签**: 自闭合标签必须使用 `/>`
- **导入排序**: 自动排序（类型导入 → 外部依赖 → 内部模块）

### Git 工作流

#### 提交规范

项目使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```bash
<type>(<scope>): <subject>

# 示例
feat(router): 添加路由守卫功能
fix(ui): 修复侧边栏滚动问题
docs: 更新 README 文档
```

#### Git Hooks

项目配置了自动 Git Hooks：

- **pre-commit**: 自动运行 ESLint 修复
- **commit-msg**: 验证提交信息格式

### 版本管理

使用 `bumpp` 进行版本管理：

```bash
# 交互式选择版本类型
pnpm release
```

`bumpp` 会：
1. 更新 `package.json` 版本号
2. 同步更新 `src-tauri/tauri.conf.json` 版本号
3. 创建 Git commit
4. 创建 Git tag
5. 推送到远程仓库

## 📦 构建和发布

项目配置了 GitHub Actions 自动发布流程：

1. **触发条件**: 推送 `v*` 格式的 tag（如 `v1.0.0`）
2. **构建平台**:
   - macOS Arm64 (Apple Silicon)
   - macOS x64 (Intel)
   - Windows x64
3. **发布流程**:
   - 自动生成 Changelog
   - 构建多平台应用
   - 创建 GitHub Release
   - 上传构建产物

**发布步骤**:

```bash
# 1. 运行版本管理
pnpm release

# 2. 选择版本类型（patch/minor/major）

# 3. bumpp 会自动：
#    - 更新版本号
#    - 创建 commit
#    - 创建 tag
#    - 推送到远程

# 4. GitHub Actions 自动触发构建和发布
```

## 📄 许可证

MIT License

## 🙏 致谢

- [Tauri](https://tauri.app/) - 桌面应用框架
- [Vue](https://vuejs.org/) - 渐进式 JavaScript 框架
- [@antfu/eslint-config](https://github.com/antfu/eslint-config) - ESLint 配置
- [Shadcn-Vue](https://www.shadcn-vue.com/) - UI 组件设计

---

**Happy Coding! 🚀**
