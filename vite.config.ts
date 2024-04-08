import viteBasicSslPlugin from '@vitejs/plugin-basic-ssl';
import vue from '@vitejs/plugin-vue';
import dns from 'dns';
import fs from 'fs';
import path from 'path';
import { CommonServerOptions, defineConfig } from 'vite';
import styleX from 'vite-plugin-stylex';
import tsconfigPaths from 'vite-tsconfig-paths';

const IS_SECURE = process.env.IS_SECURE === 'true';

const vitePlugins = [vue(), tsconfigPaths(), styleX()];
let httpsConfig: CommonServerOptions['https'];
if (IS_SECURE) {
  configureSsl();
  dns.setDefaultResultOrder('verbatim');
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: vitePlugins,
  server: {
    https: httpsConfig,
    host: IS_SECURE ? 'localhost' : '127.0.0.1',
  },
  build: {
    minify: mode === 'production' ? 'esbuild' : false,
    sourcemap: mode === 'staging',
  },
  resolve: {
    alias: {
      '@/utils': path.resolve(__dirname, 'src', 'lib', 'utils.ts'),
      '@/ui': path.resolve(__dirname, 'src', 'components', 'ui'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
}));

function configureSsl() {
  const certs = path.join(__dirname, '.cert'),
    sslCertPath = path.join(certs, 'localhost.pem'),
    sslKeyPath = path.join(certs, 'localhost-key.pem');

  if (fs.existsSync(sslCertPath) && fs.existsSync(sslKeyPath)) {
    httpsConfig = {
      key: sslKeyPath,
      cert: sslCertPath,
    };
    return;
  }

  vitePlugins.push(viteBasicSslPlugin());
}
