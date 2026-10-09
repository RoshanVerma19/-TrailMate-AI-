
# 🌿 TrailMate AI — Your Offline Outdoor Companion

> **AI that gets you outside — and then gets out of your way.**

TrailMate AI is a web-based outdoor exploration companion built for the **Touch Grass** challenge. It encourages people to spend less time on screens and more time exploring the real world through outdoor missions, nature discovery, gamification, and phone-free activities.

The project uses HTML, CSS, and JavaScript to create a responsive, interactive experience that motivates users to walk, observe nature, and discover the environment around them.

---

## 🌎 The Problem

People spend increasing amounts of time looking at screens and less time engaging with the natural world.

Traditional productivity apps encourage users to spend more time inside an application. TrailMate AI takes the opposite approach: it uses technology to inspire real-world exploration and encourages users to put their phones away.

## 💡 Our Solution

TrailMate AI transforms outdoor activities into fun, rewarding adventures.

Users can generate nature challenges, upload photographs of outdoor discoveries, earn experience points, unlock achievements, and participate in phone-free sessions.

**Our philosophy:** The best feature of an outdoor app is knowing when to stop being useful.

---

## ✨ Features

### 🧭 1. Outdoor Adventure Challenges
- Generate random outdoor missions.
- Explore different aspects of nature.
- Complete challenges and earn XP.
- Discover new activities for every adventure.

### 🌱 2. AI Nature Scanner
- Upload a photograph of a plant, leaf, flower, or natural object.
- View an analysis-style result in the current demo.
- Designed for future integration with an actual open-weight vision model.

> **Current status:** The scanner currently displays simulated results. A real AI model must be integrated for genuine image recognition.

### 📵 3. Phone Down Mode
- Start a 10-minute phone-free session.
- Follow a countdown timer.
- Earn rewards for completing a session.
- Encourage users to focus on their surroundings instead of their screens.

### 🏆 4. Gamification System
- Earn XP by completing challenges and recording discoveries.
- Progress through explorer levels.
- Unlock achievement badges.
- Track your outdoor exploration progress.

### 📊 5. Adventure Dashboard
Track your:
- Experience points (XP)
- Recorded distance
- Nature discoveries
- Completed challenges
- Phone-free minutes
- Explorer level and streak

Some metrics are placeholders or manually simulated in this prototype rather than automatically measured.

### 💾 6. Local Progress Storage
- Save progress using browser LocalStorage.
- Retain recorded statistics between visits in the same browser.
- No database or account system is required.

### 📱 7. Responsive Design
- Clean, nature-inspired interface.
- Responsive layouts for desktop, tablet, and mobile.
- Simple navigation and interactive cards.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and content |
| CSS3 | Styling, layouts, animations, and responsive design |
| JavaScript | Application logic, challenges, timers, XP, and interactions |
| LocalStorage | Saving progress in the browser |
| File API | Reading uploaded images locally |

### AI Technology

The project is designed to support an open-weight AI model for nature image recognition and intelligent challenge generation.

The current version uses JavaScript-based demo logic for these features. It does **not yet run a real AI model**.

A future version can integrate a browser-compatible open-weight model through JavaScript, using an appropriate model runtime such as Transformers.js and a compatible vision model.

---

## 📂 Project Structure

```text
TrailMate-AI/
│
├── index.html     # Main webpage and interface
├── style.css      # Styling and responsive design
├── script.js      # App logic and demo AI functionality
└── README.md      # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

You need:
- A modern web browser
- A code editor such as Visual Studio Code
- The three project files: `index.html`, `style.css`, and `script.js`

No package installation or backend server is required for the current prototype.

### Installation

**Step 1: Clone the repository**

Replace the placeholder URL with your actual GitHub repository URL.

```bash
git clone https://github.com/YOUR_USERNAME/TrailMate-AI.git
```

**Step 2: Open the project folder**

```bash
cd TrailMate-AI
```

**Step 3: Run the project**

Open `index.html` in your browser.

Alternatively, use the **Live Server** extension in Visual Studio Code.

**Step 4: Start exploring**

1. Click **Start Adventure**.
2. Generate a nature challenge.
3. Upload a nature photograph to try the scanner demo.
4. Complete missions and earn XP.
5. Start Phone Down Mode.
6. Check your progress and achievements.

---

## 🧠 How It Works

### Adventure Engine
JavaScript selects a challenge from a collection of outdoor activities and displays it in the interface.

### XP and Achievements
Completing missions or recording a discovery updates the application statistics. Achievement badges unlock when their configured conditions are met.

### Nature Scanner
The user selects an image through the browser's file input. JavaScript previews the image and currently produces a simulated analysis result.

### Phone Down Timer
JavaScript manages a countdown timer and awards demo rewards when the timer finishes. This is a motivational feature, not a mechanism for enforcing phone restrictions.

### LocalStorage
The application saves selected statistics in the browser so they remain available after refreshing the page.

---

## 🔓 Why Open Innovation Matters

Open innovation makes AI more accessible, adaptable, and transparent.

Our goal is to integrate an open-weight AI model that can help users explore nature without requiring every image to be sent to a proprietary AI service.

Potential benefits include:

- **Privacy:** Image analysis can happen locally when a suitable model runs on-device.
- **Offline exploration:** A downloaded model can support AI features without an internet connection, subject to browser and device capabilities.
- **Model flexibility:** Developers can experiment with compatible open-weight models.
- **Accessibility:** The project can be built and extended using widely available web technologies.
- **Customization:** Developers can adapt challenges and model behavior to different environments and user needs.

These benefits depend on the model and runtime actually selected and integrated. The current demo does not yet provide real AI-powered offline recognition.

---

## 🗺️ Future Improvements

- [ ] Integrate a real open-weight vision model in JavaScript.
- [ ] Generate personalized challenges using an actual language model.
- [ ] Support offline AI inference with downloaded model assets.
- [ ] Improve plant and bird identification with appropriate models.
- [ ] Add optional GPS-based distance tracking with user permission.
- [ ] Track streaks using calendar dates.
- [ ] Add more achievement badges and difficulty levels.
- [ ] Add accessibility improvements and multilingual support.
- [ ] Test on real outdoor adventures and improve the experience based on feedback.

---

## 🌿 Our Mission

TrailMate AI is built around a simple belief:

**Technology should help people experience more of the real world, not keep them trapped inside a screen.**

Go outside. Discover something new. Put your phone down.

### Built for the Touch Grass Challenge 🌎

*TrailMate AI — Explore more. Scroll less.*