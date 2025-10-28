# 🎯 typerly

A modern, dependency-free React TypeScript library that provides smooth typewriter animations.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

## ✨ Features

- 🚀 **Zero dependencies** - Lightweight and fast
- ⚡ **TypeScript** - Full type safety
- 🎨 **Customizable** - Speed, cursor, styling, and more
- 🔄 **Looping** - Optional delete and restart animations
- 📱 **Modern** - Built with React 18+ and Vite
- 🎭 **Flexible** - Support for single text or multiple texts

## 📦 Installation

```bash
npm install typerly
# or
yarn add typerly
# or
pnpm add typerly
```

## 🚀 Quick Start

```tsx
import { Typewriter } from 'typerly';

function App() {
  return (
    <div style={{ fontSize: '2rem', fontFamily: 'monospace' }}>
      <Typewriter 
        text="Hello, world! 👋"
        speed={60}
        cursor
      />
    </div>
  );
}
```

## 📚 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string \| string[]` | **required** | Single text or array of texts to type |
| `speed` | `number` | `50` | Typing speed in milliseconds |
| `delay` | `number` | `0` | Delay before starting animation (ms) |
| `loop` | `boolean` | `false` | Enable looping (delete and restart) |
| `cursor` | `boolean` | `true` | Show blinking cursor |
| `cursorChar` | `string` | `'\|'` | Character to use for cursor |
| `className` | `string` | `''` | Additional CSS class names |

### TypeScript Interface

```ts
interface TypewriterProps {
  text: string | string[];
  speed?: number;
  delay?: number;
  loop?: boolean;
  cursor?: boolean;
  cursorChar?: string;
  className?: string;
}
```

## 🎨 Examples

### Basic Usage

```tsx
import { Typewriter } from 'typerly';

export default function BasicExample() {
  return (
    <Typewriter text="Welcome to typerly!" />
  );
}
```

### Multiple Texts with Looping

```tsx
import { Typewriter } from 'typerly';

export default function MultipleTexts() {
  return (
    <Typewriter 
      text={[
        "Hello, world! 🌍", 
        "Hola, mundo! 🇪🇸", 
        "Bonjour, le monde! 🇫🇷",
        "こんにちは、世界！🇯🇵"
      ]}
      speed={80}
      loop
      cursor
    />
  );
}
```

### Custom Styling

```tsx
import { Typewriter } from 'typerly';

export default function StyledExample() {
  return (
    <div className="hero-section">
      <Typewriter 
        text="🚀 Built with React & TypeScript"
        speed={40}
        delay={1000}
        cursor
        cursorChar="▊"
        className="hero-text"
      />
    </div>
  );
}
```

### Fast Typing

```tsx
import { Typewriter } from 'typerly';

export default function FastExample() {
  return (
    <Typewriter 
      text="Speed typing! ⚡"
      speed={20}
      cursor={false}
    />
  );
}
```

## 🎭 CSS Customization

The component includes default CSS classes you can override:

```css
/* Container */
.typerly-container {
  display: inline-block;
  font-family: inherit;
}

/* Cursor animation */
.typerly-cursor {
  animation: typerly-blink 1s infinite;
}

/* Customize cursor */
.my-custom-typewriter .typerly-cursor {
  color: #ff6b6b;
  font-weight: bold;
}
```

## 🛠️ Development

```bash
# Clone the repository
git clone <repository-url>
cd typerly

# Install dependencies
npm install

# Start development
npm run dev

# Build library
npm run build

# Run tests
npm test
```

## 📄 License

MIT © [Your Name](LICENSE)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 💡 Use Cases

- **Landing pages** - Eye-catching hero sections
- **Portfolios** - Dynamic introductions
- **Dashboards** - Animated status messages
- **Chat interfaces** - Simulated typing effects
- **Documentation** - Interactive code examples

---

<p align="center">
  Made with ❤️ and TypeScript
</p>
