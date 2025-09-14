# 🚀 Setup Guide: Vite + React + Tailwind CSS 3 + React Router

This guide walks you through creating a React project using **Vite**, styling it with **Tailwind CSS 3.4.17**, and adding **React Router** for navigation.

---

## 1. Create a New Vite Project

```bash
npm create vite@latest
```

When prompted:

* **Project name:** `forever` (or any name you choose)
* **Framework:** `React`
* **Variant:** `JavaScript` (or `TypeScript` if you prefer)

Then move into the project:

```bash
cd forever //name of your project, it can be any name
```

---

## 2. Install Dependencies

```bash
npm install
```

Run the dev server to confirm Vite is working:

```bash
npm run dev
```

---

## 3. Add React Router

```bash
npm install react-router-dom
```

---

## 4. Install Tailwind CSS 3

Install Tailwind, PostCSS, and Autoprefixer (with the versions you specified):

```bash
npm install -D tailwindcss@^3.4.17 postcss@^8.5.6 autoprefixer
```

Initialize Tailwind:

```bash
npx tailwindcss init -p
```

This creates:

* `tailwind.config.js` or `tailwind.config.ts`
* `postcss.config.js`

---

## 5. Configure Tailwind

In **`tailwind.config.js`**, update the content paths:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

## 6. Add Tailwind Directives

In **`src/index.css`**, add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

And make sure it’s imported in **`main.jsx`**:

```jsx
import './index.css'
```

---

## 7. (Optional) Install Node Types

If you’re using TypeScript:

```bash
npm i --save-dev @types/node
```

---

## 8. Run the Project

Start the dev server:

```bash
npm run dev
```

Now you have:

* **Vite** for fast dev/build
* **React** for UI
* **Tailwind CSS 3.4.17** for styling
* **React Router** for navigation

---

✅ You’re ready to start building your app!