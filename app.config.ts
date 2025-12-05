import { ExpoConfig, ConfigContext } from 'expo/config';

const IS_DEV = process.env.APP_VARIANT === 'development';

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    name: IS_DEV ? "Mahasiswa (Dev)" : "Project Mahasiswa",
    slug: "ProjectMahasiswa",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "projectmahasiswa",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    
    ios: {
      supportsTablet: true,
      bundleIdentifier: IS_DEV ? "com.julius.projectmahasiswa.dev" : "com.julius.projectmahasiswa"
    },
    
    android: {
      adaptiveIcon: {
        backgroundColor: "#E6F4FE",
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundImage: "./assets/images/android-icon-background.png",
        monochromeImage: "./assets/images/android-icon-monochrome.png"
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
      package: IS_DEV ? "com.julius.projectmahasiswa.dev" : "com.julius.projectmahasiswa",
      googleServicesFile: "./google-services.json"
    },
    
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png"
    },
    
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff",
          "dark": {
            "backgroundColor": "#000000"
          }
        }
      ],
      "@react-native-firebase/app"
    ],
    
    experiments: {
      typedRoutes: true,
      reactCompiler: true
    }
  };
};