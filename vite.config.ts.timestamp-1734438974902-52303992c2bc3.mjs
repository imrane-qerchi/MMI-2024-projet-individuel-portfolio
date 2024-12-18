// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/imran.LAPTOP-GL55R6AF/Documents/GitHub/MMI-2024-projet-individuel-portfolio/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/imran.LAPTOP-GL55R6AF/Documents/GitHub/MMI-2024-projet-individuel-portfolio/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///C:/Users/imran.LAPTOP-GL55R6AF/Documents/GitHub/MMI-2024-projet-individuel-portfolio/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import VueRouter from "file:///C:/Users/imran.LAPTOP-GL55R6AF/Documents/GitHub/MMI-2024-projet-individuel-portfolio/node_modules/unplugin-vue-router/dist/vite.js";
var __vite_injected_original_import_meta_url = "file:///C:/Users/imran.LAPTOP-GL55R6AF/Documents/GitHub/MMI-2024-projet-individuel-portfolio/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    VueRouter({
      /* options */
    }),
    // ⚠️ Vue must be placed after VueRouter()
    vue(),
    vueDevTools()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  build: {
    // outDir: './pocketbase/pb_public'
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxpbXJhbi5MQVBUT1AtR0w1NVI2QUZcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxNTUktMjAyNC1wcm9qZXQtaW5kaXZpZHVlbC1wb3J0Zm9saW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGltcmFuLkxBUFRPUC1HTDU1UjZBRlxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXE1NSS0yMDI0LXByb2pldC1pbmRpdmlkdWVsLXBvcnRmb2xpb1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvaW1yYW4uTEFQVE9QLUdMNTVSNkFGL0RvY3VtZW50cy9HaXRIdWIvTU1JLTIwMjQtcHJvamV0LWluZGl2aWR1ZWwtcG9ydGZvbGlvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgdnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJ1xyXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXIvdml0ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgVnVlUm91dGVyKHtcclxuICAgICAgLyogb3B0aW9ucyAqL1xyXG4gICAgfSksXHJcbiAgICAvLyBcdTI2QTBcdUZFMEYgVnVlIG11c3QgYmUgcGxhY2VkIGFmdGVyIFZ1ZVJvdXRlcigpXHJcbiAgICB2dWUoKSxcclxuICAgIHZ1ZURldlRvb2xzKClcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXHJcbiAgICB9XHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgLy8gb3V0RGlyOiAnLi9wb2NrZXRiYXNlL3BiX3B1YmxpYydcclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMGIsU0FBUyxlQUFlLFdBQVc7QUFDN2QsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sZUFBZTtBQUpxUSxJQUFNLDJDQUEyQztBQU01VSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxVQUFVO0FBQUE7QUFBQSxJQUVWLENBQUM7QUFBQTtBQUFBLElBRUQsSUFBSTtBQUFBLElBQ0osWUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFBQSxFQUVQO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
