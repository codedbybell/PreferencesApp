# 🦢 Preferences & Auth App (Fairy Edition)

This project is a multi-screen React Native application developed for the Mobile Programming course. It demonstrates real-world state management patterns using **Context API**, **AsyncStorage** for local persistence, and **React Navigation**.

**Student Name:** Berra Turan
**Student ID:** 210408015

---

## ✨ Features

Designed with a "Fairy/Coquette" aesthetic, the app includes the following technical features:

1.  **Authentication Flow:**
    * Global user state management using Context API.
    * **Persistence:** Login session persists after app restarts using `AsyncStorage`.
    * Secure logic preventing access to the Home screen without logging in.

2.  **Theme Management:**
    * **Light Mode (Fairy):** Soft Nude, Sage Green, and Baby Pink tones.
    * **Dark Mode (Dark Forest):** Deep Green, Moonlight Blue, and Dark Grey tones.
    * **Instant Sync:** Theme preference is persisted locally and updates globally across all screens instantly via Context.

3.  **Navigation:**
    * Implements `Native Stack Navigator` for seamless screen transitions.
    * Dynamic routing based on authentication state (Auth Flow).

---

## 📱 Screens

* **Login Screen:** Allows users to enter a username to access the "Realm".
* **Home Screen:** Displays a personalized welcome message and navigation options.
* **Settings Screen:** Provides options to toggle between Light/Dark themes and Logout.

---

## 🛠 Setup & Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/codedbybell/PreferencesApp.git](https://github.com/codedbybell/PreferencesApp.git)
    cd PreferencesApp
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the application:**
    ```bash
    npx expo start
    ```

---

## 🎀 Technologies Used
* React Native & Expo
* React Context API (Global State)
* AsyncStorage (Local Persistence)
* React Navigation (Stack)
* Custom Hooks (`useTheme`, `useAuth`)