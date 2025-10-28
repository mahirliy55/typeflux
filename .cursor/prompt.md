# typerly – Cursor Prompt

💡 **Goal:**  
Build a modern, dependency-free React Typewriter component.

---

## 🎯 Overview
`typerly` — a minimal React + TypeScript library that provides a smooth typewriter animation.  
It should display text character by character, optionally delete it, loop through multiple strings, and include a blinking cursor effect.

---

## ⚙️ Requirements
- **Project name:** `typerly`
- **Framework:** React 18+
- **Language:** TypeScript
- **Build system:** Vite
- **Dependencies:** None (zero-dependency)
- **Testing:** Vitest or Jest
- **License:** MIT
- **README:** Include clear usage examples.

---

## 🧩 Component Specs
**Component name:** `<Typewriter />`

**Props:**
```ts
interface TypewriterProps {
  text: string | string[]; // Single text or an array of texts to loop through
  speed?: number;          // Typing speed in ms (default: 50)
  delay?: number;          // Delay before starting (ms)
  loop?: boolean;          // If true, loops typing and deleting
  cursor?: boolean;        // Show blinking cursor
  cursorChar?: string;     // Cursor character, default '|'
  className?: string;      // Optional class name for styling
}
```

## 🧠 Behavior
- Render text character by character.
- If `loop` is true, delete and restart after completion.
- If `cursor` is true, display a blinking cursor using CSS animation.
- If `text` is an array, iterate through each string in sequence.
- Use `useEffect` + `setTimeout` for smooth typing control.
- Reset cleanly when text or props change.

## 📁 Structure
```
typerly/
 ├─ src/
 │   ├─ Typewriter.tsx
 │   ├─ index.ts
 │   └─ styles.css
 ├─ vite.config.ts
 ├─ tsconfig.json
 ├─ package.json
 ├─ README.md
 ├─ LICENSE
 └─ .cursor/prompt.md
```

## 💡 Example usage

```tsx
import { Typewriter } from "typerly";

export default function App() {
  return (
    <div style={{ fontSize: "2rem", fontFamily: "monospace" }}>
      <Typewriter 
        text={["Hello, world!", "Hola, Yusif!", "🚀 typerly rocks!"]}
        speed={60}
        loop
        cursor
      />
    </div>
  );
}
```
