import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mdshreyas.app',
  appName: 'mdshreyas',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
