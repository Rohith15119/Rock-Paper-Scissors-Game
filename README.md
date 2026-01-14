# 🎮 Rock Paper Scissors Game  
### Built with React + TypeScript

A modern, interactive **Rock–Paper–Scissors** web game built using **React Hooks** and **TypeScript**.  
The game includes **persistent score tracking**, **autoplay mode**, and a **fully responsive UI** that works smoothly across all devices.

---

## 📖 Table of Contents

- Overview  
- Features  
- Demo  
- Tech Stack  
- Installation  
- How to Play  
- Game Logic Explanation  
- Autoplay Mode  
- Data Persistence  
- Project Structure  
- Styling & UI  
- Performance & Best Practices  
- Future Improvements  
- License  

---

## 🧠 Overview

This application allows users to play Rock–Paper–Scissors against a computer that randomly selects its move.  
The game tracks:

- Number of times each move is played  
- Wins  
- Losses  
- Ties  

All data is stored in the browser using **localStorage**, ensuring progress is saved even after refreshing the page.

---

## ✨ Features

✔️ Built with **React Functional Components**  
✔️ Strongly typed using **TypeScript**  
✔️ Persistent game state using **localStorage**  
✔️ **Autoplay mode** with interval-based gameplay  
✔️ Buttons automatically disabled during autoplay  
✔️ Reset functionality to clear stored data  
✔️ Responsive and mobile-friendly design  
✔️ Clean UI with hover effects and transitions  

---

## 🌐 Demo

> 🚀 Deploy using **Vercel**, **Netlify**, or **GitHub Pages**

---

## 🛠 Tech Stack

- **React**
- **TypeScript**
- **CSS3 (Responsive Design)**
- **Browser LocalStorage API**

---

## ⚙️ Installation

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/your-username/rock-paper-scissors-react.git

# Navigate to the project directory
cd rock-paper-scissors-react

# Install dependencies
npm install

# Start the development server
npm run dev

```

## ▶️ How to Play

Click Rock, Paper, or Scissor to make your move

The computer randomly selects its move

The game displays the result instantly:

✅ You Win

❌ You Lose

👀 Tie

Game statistics update in real time

Click Reset to clear all scores and start fresh

Click Start Auto Play to let the game play automatically

---

## 🧩 Game Logic Explanation

Player input is determined using the button’s className

Computer moves are randomly selected from:

rock  , paper , scissor

Conditional logic determines:

Win , Loss , Tie

State updates use functional updates to ensure accuracy

---

## 🤖 Autoplay Mode

Autoplay simulates continuous gameplay by:

🔥 Triggering a random move every 500 milliseconds

🔥 Creating a synthetic event passed to the same click handler

🔥 Disabling manual input during autoplay

🔥 Allowing safe toggling on and off

---

## Implemented using:

⭐ useRef

⭐ useCallback

⭐ setInterval

⭐ clearInterval

---

## 💾 Data Persistence

The game state is automatically saved to localStorage:

⭐ localStorage.setItem("rps-game", JSON.stringify(game));

---

## This ensures:

👊 No backend is required

👊 Game data persists across sessions

👊 Lightweight and fast performance

---

## 📁 Project Structure
```
src/
│── App.tsx        # Main game logic and state management
│── Result.tsx     # Displays scores and feedback messages
│── App.css        # Styling and responsiveness
│── main.tsx       # Application entry point
```
---

## 🎨 Styling & UI

👊 Responsive layout using clamp() for font and button sizing

👊 Circular buttons with smooth hover transitions

👊 Color-coded hover effects for each action

👊 Optimized for both desktop and mobile screens

---

##⚡ Performance & Best Practices

✅ Memoized handlers using useCallback

✅ Cleanup of intervals using useEffect

✅ Minimal re-renders

✅ Clear separation of UI and logic

✅ Strong typing with TypeScript for safety

---

## 🚀 Future Improvements

🔊 Sound effects

🎞️ Animations for wins and losses

👥 Multiplayer support

🌗 Dark / Light mode

📊 Match history tracking

🧠 Smarter AI difficulty levels
