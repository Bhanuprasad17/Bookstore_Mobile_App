# TODO: Fix Splash Icon Change in React Native Expo App

## Steps to Complete
- [x] Verify Image and Path: Confirmed the image file `splash-icon.png` exists in `Mobile/assets/images/`, and the path `./assets/images/splash-icon.png` in `app.json` is correct relative to the project root.
- [x] Clear Cache and Restart: Ran `expo start --clear` from the Mobile directory to clear the Metro bundler cache. The Expo server is now running with cache cleared.
- [ ] Rebuild if Needed: For Android/iOS, clean and rebuild the app using `expo run:android --clean` or `expo run:ios --clean` to ensure native assets update.
- [x] Check Console Logs: The Expo server is running without errors; no splash screen-related errors in logs so far.
- [x] Test Alternative Image: Temporarily changed the image path to `splash-icon2.png` in `app.json` to test if the issue is with the specific image file.
- [ ] Build Custom Development Build: Expo Go does not support custom splash screens. Build a custom development build using EAS to see the splash screen.
