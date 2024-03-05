// vite.config.mts
import AutoImport from "file:///Users/bruno/code/tests/vuetify-turno/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///Users/bruno/code/tests/vuetify-turno/node_modules/unplugin-vue-components/dist/vite.js";
import Fonts from "file:///Users/bruno/code/tests/vuetify-turno/node_modules/unplugin-fonts/dist/vite.mjs";
import Layouts from "file:///Users/bruno/code/tests/vuetify-turno/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Vue from "file:///Users/bruno/code/tests/vuetify-turno/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueRouter from "file:///Users/bruno/code/tests/vuetify-turno/node_modules/unplugin-vue-router/dist/vite.mjs";
import Vuetify, { transformAssetUrls } from "file:///Users/bruno/code/tests/vuetify-turno/node_modules/vite-plugin-vuetify/dist/index.mjs";
import { defineConfig } from "file:///Users/bruno/code/tests/vuetify-turno/node_modules/vite/dist/node/index.js";
import { fileURLToPath, URL } from "node:url";
var __vite_injected_original_import_meta_url = "file:///Users/bruno/code/tests/vuetify-turno/vite.config.mts";
var vite_config_default = defineConfig({
  plugins: [
    VueRouter(),
    Layouts(),
    Vue({
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
      styles: {
        configFile: "src/styles/variables/_vuetify.scss"
      }
    }),
    Components(),
    Fonts({
      google: {
        families: [{
          name: "Roboto",
          styles: "wght@100;300;400;500;700;900"
        }]
      }
    }),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "pinia"
      ],
      dts: true,
      eslintrc: {
        enabled: true
      },
      vueTemplate: true
    })
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
      "@core": fileURLToPath(new URL("./src/@core", __vite_injected_original_import_meta_url)),
      "@layouts": fileURLToPath(new URL("./src/@layouts", __vite_injected_original_import_meta_url)),
      "@styles": fileURLToPath(new URL("./src/styles/", __vite_injected_original_import_meta_url)),
      "@configured-variables": fileURLToPath(new URL("./src/styles/variables/_template.scss", __vite_injected_original_import_meta_url))
    },
    extensions: [
      ".js",
      ".json",
      ".jsx",
      ".mjs",
      ".ts",
      ".tsx",
      ".vue"
    ]
  },
  server: {
    port: 3e3
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2JydW5vL2NvZGUvdGVzdHMvdnVldGlmeS10dXJub1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2JydW5vL2NvZGUvdGVzdHMvdnVldGlmeS10dXJuby92aXRlLmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2JydW5vL2NvZGUvdGVzdHMvdnVldGlmeS10dXJuby92aXRlLmNvbmZpZy5tdHNcIjsvLyBQbHVnaW5zXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCBGb250cyBmcm9tICd1bnBsdWdpbi1mb250cy92aXRlJ1xuaW1wb3J0IExheW91dHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWxheW91dHMnXG5pbXBvcnQgVnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlci92aXRlJ1xuaW1wb3J0IFZ1ZXRpZnksIHsgdHJhbnNmb3JtQXNzZXRVcmxzIH0gZnJvbSAndml0ZS1wbHVnaW4tdnVldGlmeSdcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgVnVlUm91dGVyKCksXG4gICAgTGF5b3V0cygpLFxuICAgIFZ1ZSh7XG4gICAgICB0ZW1wbGF0ZTogeyB0cmFuc2Zvcm1Bc3NldFVybHMgfSxcbiAgICB9KSxcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVldGlmeWpzL3Z1ZXRpZnktbG9hZGVyL3RyZWUvbWFzdGVyL3BhY2thZ2VzL3ZpdGUtcGx1Z2luI3JlYWRtZVxuICAgIFZ1ZXRpZnkoe1xuICAgICAgYXV0b0ltcG9ydDogdHJ1ZSxcbiAgICAgIHN0eWxlczoge1xuICAgICAgICBjb25maWdGaWxlOiAnc3JjL3N0eWxlcy92YXJpYWJsZXMvX3Z1ZXRpZnkuc2NzcycsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIENvbXBvbmVudHMoKSxcbiAgICBGb250cyh7XG4gICAgICBnb29nbGU6IHtcbiAgICAgICAgZmFtaWxpZXM6IFt7XG4gICAgICAgICAgbmFtZTogJ1JvYm90bycsXG4gICAgICAgICAgc3R5bGVzOiAnd2dodEAxMDA7MzAwOzQwMDs1MDA7NzAwOzkwMCcsXG4gICAgICAgIH1dLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgJ3Z1ZScsXG4gICAgICAgICd2dWUtcm91dGVyJyxcbiAgICAgICAgJ3BpbmlhJyxcbiAgICAgIF0sXG4gICAgICBkdHM6IHRydWUsXG4gICAgICBlc2xpbnRyYzoge1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHZ1ZVRlbXBsYXRlOiB0cnVlLFxuICAgIH0pLFxuICBdLFxuICBkZWZpbmU6IHsgJ3Byb2Nlc3MuZW52Jzoge30gfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICdAY29yZSc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMvQGNvcmUnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICdAbGF5b3V0cyc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMvQGxheW91dHMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICdAc3R5bGVzJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYy9zdHlsZXMvJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAnQGNvbmZpZ3VyZWQtdmFyaWFibGVzJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYy9zdHlsZXMvdmFyaWFibGVzL190ZW1wbGF0ZS5zY3NzJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgfSxcbiAgICBleHRlbnNpb25zOiBbXG4gICAgICAnLmpzJyxcbiAgICAgICcuanNvbicsXG4gICAgICAnLmpzeCcsXG4gICAgICAnLm1qcycsXG4gICAgICAnLnRzJyxcbiAgICAgICcudHN4JyxcbiAgICAgICcudnVlJyxcbiAgICBdLFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDAwLFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sU0FBUztBQUNoQixPQUFPLGVBQWU7QUFDdEIsT0FBTyxXQUFXLDBCQUEwQjtBQUc1QyxTQUFTLG9CQUFvQjtBQUM3QixTQUFTLGVBQWUsV0FBVztBQVhnSixJQUFNLDJDQUEyQztBQWNwTyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxVQUFVO0FBQUEsSUFDVixRQUFRO0FBQUEsSUFDUixJQUFJO0FBQUEsTUFDRixVQUFVLEVBQUUsbUJBQW1CO0FBQUEsSUFDakMsQ0FBQztBQUFBO0FBQUEsSUFFRCxRQUFRO0FBQUEsTUFDTixZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsUUFDTixZQUFZO0FBQUEsTUFDZDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLElBQ1gsTUFBTTtBQUFBLE1BQ0osUUFBUTtBQUFBLFFBQ04sVUFBVSxDQUFDO0FBQUEsVUFDVCxNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsUUFDVixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEtBQUs7QUFBQSxNQUNMLFVBQVU7QUFBQSxRQUNSLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxhQUFhO0FBQUEsSUFDZixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsUUFBUSxFQUFFLGVBQWUsQ0FBQyxFQUFFO0FBQUEsRUFDNUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxNQUNwRCxTQUFTLGNBQWMsSUFBSSxJQUFJLGVBQWUsd0NBQWUsQ0FBQztBQUFBLE1BQzlELFlBQVksY0FBYyxJQUFJLElBQUksa0JBQWtCLHdDQUFlLENBQUM7QUFBQSxNQUNwRSxXQUFXLGNBQWMsSUFBSSxJQUFJLGlCQUFpQix3Q0FBZSxDQUFDO0FBQUEsTUFDbEUseUJBQXlCLGNBQWMsSUFBSSxJQUFJLHlDQUF5Qyx3Q0FBZSxDQUFDO0FBQUEsSUFDMUc7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
