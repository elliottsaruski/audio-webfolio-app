# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

<!-- /src
│
├── main.tsx                  # Entry point
├── App.tsx                   # Router + layout setup
├── index.css                 # Global styles (optional)
│
├── /assets                   # Logo, icons, wave images, etc
│
├── /pages                    # Top-level routed pages
│   ├── Home.tsx
│   ├── Login.tsx
│   ├── Signup.tsx
│   ├── Dashboard.tsx         # Auth-only view w/ edit UI
│   ├── PublicUserPage.tsx    # Live portfolio view at /u/:username
│   └── NotFound.tsx
│
├── /components
│   ├── /dashboard            # Dashboard edit UI
│   │   ├── TrackUploadSection.tsx
│   │   ├── BioEditorSection.tsx
│   │   ├── ThemeEditorSection.tsx
│   │   ├── TrackListManager.tsx
│   │   ├── LivePreview.tsx
│   │   └── UploadButton.tsx
│   │
│   └── /shared               # Reusable UI parts
│       ├── Input.tsx
│       ├── ColorInput.tsx
│       ├── FileInput.tsx
│       ├── Button.tsx
│       └── FormSection.tsx   # Wrapper for <details><summary>
│
├── /lib
│   ├── supabaseClient.ts     # Supabase init
│   ├── uploadToCloudinary.ts # Upload utility (fetch + FormData)
│   └── utils.ts              # General helpers
│
├── /hooks
│   ├── useAuth.ts            # Supabase auth state listener
│   └── useUserProfile.ts     # Fetch user info, theme, tracks, etc
│
├── /store                    # Zustand global stores
│   ├── useTrackStore.ts
│   ├── useThemeStore.ts
│   └── useUserStore.ts
│
├── /types
│   ├── track.ts              # Track type
│   ├── user.ts               # User/Profile types
│   └── theme.ts              # Theme & visual customization
│
└── /styles
    ├── variables.css         # CSS vars if needed
    └── globals.css           # Reset or base global styles -->
