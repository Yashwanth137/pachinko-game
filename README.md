# Plinko (Pachinko) Game — React Native (Android)

A clean, mobile-first **Plinko (Pachinko) game** built using **React Native with Expo**, designed as part of an engineering internship coding assignment.
The focus is on **correct gameplay logic, clean UI, and maintainable architecture**, rather than heavy physics engines.

---

## Features

### Core Gameplay

* Vertical Plinko board with **multiple centered pegs**
* **Drop Ball** action with realistic left/right bouncing
* **5 scoring buckets** (10, 20, 50, 20, 10)
* Score automatically updates when the ball lands
* Clean, minimal, **Material-style UI**

### Bonus Features

* **Restart Game** (resets score and balls)
* **High Score Saving** using AsyncStorage
* **Limited Balls System** (default: 5 balls)
* **Power-Up Row** (special peg row that doubles score)
* Smooth animations using React Native `Animated`

---

## Technical Approach

* **No physics engine** used
  Instead, the ball snaps to actual peg coordinates per row, ensuring:

  * Visual alignment with pegs
  * Predictable, fair gameplay
  * Simpler and more readable logic

* **Separation of Concerns**

  * Game logic handled via a custom hook
  * UI split into reusable components
  * Constants and styles centralized

This keeps the code **scalable, testable, and interview-friendly**.

---

## Project Structure

```text
pachinko-game/
├── app/
│   ├── _layout.tsx
│   └── index.tsx          # Main screen
│
├── components/
│   ├── Board.tsx          # Board + pegs
│   ├── Ball.tsx           # Animated ball
│   ├── Buckets.tsx        # Scoring buckets
│   └── Controls.tsx       # Drop / Restart buttons
│
├── hooks/
│   └── usePlinkoGame.ts   # Core game logic
│
├── constants/
│   └── game.ts            # Config & constants
│
├── styles/
│   └── theme.ts           # Material-style UI
│
└── README.md
```

---

## How to Run the App

### Prerequisites

* Node.js (LTS recommended)
* Android phone with **Expo Go** installed

### Steps

```bash
npm install
npx expo start
```

* Scan the QR code using **Expo Go** on your Android device
* (If network issues occur, use `npx expo start --tunnel`)

---

## Testing

* Tested on a **real Android device**
* Verified:

  * Multiple drops produce different paths
  * Peg collisions visually align
  * Score and high score update correctly
  * Edge cases like rapid taps and zero balls remaining

---

## Demo

A short screen recording (30–45 seconds) demonstrates:

* App launch
* Ball drops
* Score updates
* Bonus features in action

---

## Possible Improvements

* Multiple balls on screen simultaneously
* Sound effects / haptic feedback
* Adjustable difficulty levels
* Leaderboard or analytics

---

## Summary

This project demonstrates:

* Strong fundamentals in React Native
* Clean UI/UX decisions
* Thoughtful architecture
* Ability to build, iterate, and polish a working product

**Built for clarity, correctness, and mobile usability.**

---
