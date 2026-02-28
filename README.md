# 📱 ReelStream 2.0

> A high-performance Reels clone built with **React**, **Tailwind CSS**, and **Axios**.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)

---

## 🌟 Evolution: From Vanilla JS to React
This project marks my transition from simple DOM manipulation to a professional **Component-Based Architecture**. By rebuilding the "ReelStream" engine in React, I solved challenges like state isolation, persistent metadata, and smooth UX.

## 🚀 Key Features

### 🛠️ Technical Engineering
- **Component-Level State:** Used `useState` to isolate interactions (Like/Save/Follow) so only the target reel re-renders.
- **Persistent Logic:** Integrated `localStorage` with unique ID keys to "lock" user interactions and random counters across sessions.
- **Async Data Fetching:** Seamlessly streaming HD content from the **Pexels API** using **Axios**.
- **Ref-Based Navigation:** Implemented a "Back to Top" smooth-scroll using `useRef` for a native mobile feel.

### 🎨 UI/UX Excellence
- **Skeleton Loaders:** Custom `animate-pulse` screens to eliminate layout shift during API calls.
- **Responsive Viewport:** Fixed 9:16 aspect ratio ensures a pixel-perfect "Mobile View" on Laptop and 4K screens.
- **Remix Icon Integration:** High-quality, responsive iconography with custom hex-color states.

---

## 📂 Folder Structure
To keep the project clean and scalable, I followed a standard React industry structure:


```text
ReelStream/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI pieces
│   │   ├── ReelCard.jsx
│   │   └── SkeletonCard.jsx
│   ├── App.jsx          # Main Logic & API Calls
│   ├── main.jsx         # Entry Point
│   └── index.css        # Tailwind Global Styles
├── .env                 # API Keys (Git ignored)
├── package.json         # Dependencies
└── README.md            # Documentation
```

---

## ⚙️ Setup & Installation

1.  Clone the Repo
    ```
    git clone [https://github.com/Navyachhokar/ReelStream](https://github.com/Navyachhokar/ReelStream)
    cd ReelStream
    ```

2.  Install Dependencies
    ```
    npm install
    ```

3.  Configure Environment
    Create a .env file in the root and add:
    ```
    VITE_PEXELS_KEY=your_pexels_api_key_here
    ```

4.  Run Development Server
    ```
    npm run dev
    ```

## 🛠️ Challenges & Learnings

### 1. State Synchronization
One of the main hurdles was ensuring that "Like" and "Save" counts remained independent for each reel. By using a component-based architecture, I ensured that a state change in ReelCard #1 doesn't trigger a re-render in ReelCard #2.

### 2. LocalStorage Logic
To prevent random numbers from changing on every refresh, I implemented a "Check-then-Set" logic:
- If data exists in `localStorage` for a specific ID, use it.
- If not, generate a random number and "lock" it into storage.

### 3. Responsive Constraints
Achieving a mobile-first look on ultra-wide monitors was solved using Tailwind's `aspect-[9/16]` and `max-h-[90vh]`. This ensures the video never stretches past its intended vertical ratio.

---

## 📈 Future Roadmap

- [ ] **Infinite Scroll:** Use Intersection Observer to fetch "Page 2" of data when the user reaches the last reel.
- [ ] **Search Filter:** Allow users to search for specific video categories (e.g., "Nature", "Coding").
- [ ] **Global Mute:** Implement a single state to mute/unmute all videos simultaneously.

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

## 📄 License
This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

---
*Developed by Navya as part of my Frontend Engineering Journey.*