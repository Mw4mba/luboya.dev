## Plan: Create Splash Screen Animation

I will create a splash screen component that runs on the initial visit, featuring the requested logo rotation and slide-up animation, and integrate it into the root layout.

### Steps
1. Create `src/components/SplashScreen.tsx` with the animation logic (rotation, slide-up) and theme-aware styling.
2. Update `src/app/layout.tsx` to import and include the `<SplashScreen />` component.

### Further Considerations
1. The animation uses `sessionStorage` to ensure it only plays once per session.
2. The component handles both light (white background, black logo) and dark (black background, white logo) modes.

I will now proceed with the changes.
