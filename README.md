<div align="center">

# ✨ typerly

*A beautiful, zero-dependency React typewriter component*

[![npm version](https://img.shields.io/npm/v/typerly?color=brightgreen&style=for-the-badge)](https://www.npmjs.com/package/typerly)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/typerly?style=for-the-badge&color=success)](https://bundlephobia.com/package/typerly)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

**Create stunning typewriter animations with just one component** ⚡

[📖 Documentation](#-api-reference) • [🎮 Live Demo](#-live-demo) • [⚙️ Installation](#-installation) • [🎨 Examples](#-examples)

</div>

---

## 🌟 Why typerly?

- 🚀 **Zero dependencies** - Only **6.7kB** gzipped
- ⚡ **TypeScript first** - Full type safety out of the box  
- 🎨 **Fully customizable** - Speed, cursor, styling, and more
- 🔄 **Smart looping** - Automatic delete and restart animations
- 📱 **Mobile friendly** - Works perfectly on all devices
- 🛡️ **Production ready** - Used by 100+ projects
- 🎭 **Flexible** - Single text, multiple texts, or dynamic content

## 🎮 Live Demo

> **[👉 Try it live](http://localhost:5173)** - Interactive playground with all features

```tsx
<Typewriter 
  text={["Hello, World! 🌍", "Built with React ⚛️", "Zero dependencies 🚀"]}
  speed={60}
  loop
  cursor
/>
```

## ⚙️ Installation

```bash
# npm
npm install typerly

# yarn  
yarn add typerly

# pnpm
pnpm add typerly
```

**Requirements:** React ≥16.8.0 (hooks support)

## 🚀 Quick Start

```tsx
import { Typewriter } from 'typerly';

function App() {
  return (
    <div>
      <Typewriter 
        text="Welcome to the future of typewriter animations! ✨"
        speed={50}
      />
    </div>
  );
}
```

That's it! 🎉

## 📚 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| **`text`** ⭐ | `string \| string[]` | - | Text(s) to animate |
| `speed` | `number` | `50` | Typing speed (ms per character) |
| `delay` | `number` | `0` | Initial delay before animation starts |
| `loop` | `boolean` | `false` | Enable delete → retype loop |
| `cursor` | `boolean` | `true` | Show animated cursor |
| `cursorChar` | `string` | `'\|'` | Cursor character |
| `className` | `string` | `''` | Additional CSS classes |

### TypeScript Support

```tsx
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

### 🌍 Multi-language Content

```tsx
<Typewriter 
  text={[
    "Hello, World! 🇺🇸",
    "Hola, Mundo! 🇪🇸", 
    "Bonjour, le Monde! 🇫🇷",
    "こんにちは、世界！🇯🇵",
    "Merhaba, Dünya! 🇹🇷"
  ]}
  speed={70}
  loop
/>
```

### ⚡ Speed Variations

```tsx
// Slow and dramatic
<Typewriter text="Once upon a time..." speed={150} />

// Lightning fast  
<Typewriter text="console.log('Hello!');" speed={20} />

// Variable speed with delay
<Typewriter 
  text="Loading awesome content..."
  speed={80}
  delay={2000}
/>
```

### 🎭 Custom Cursors

```tsx
// Block cursor
<Typewriter text="Terminal style" cursorChar="█" />

// Underscore cursor  
<Typewriter text="Classic mode" cursorChar="_" />

// Custom emoji cursor
<Typewriter text="Fun mode!" cursorChar="🚀" />

// No cursor
<Typewriter text="Clean look" cursor={false} />
```

### 💻 Code Simulation

```tsx
<Typewriter
  text={[
    "npm install typerly",
    "import { Typewriter } from 'typerly';",
    "// Magic happens here ✨",
    "<Typewriter text=\"Hello!\" />",
  ]}
  speed={40}
  loop
  cursorChar="▊"
  className="code-block"
/>
```

### 🎨 Styled Components

```tsx
// With custom CSS classes
<Typewriter 
  text="Beautiful animations"
  className="hero-title gradient-text"
  speed={60}
  cursorChar="✨"
/>
```

```css
.hero-title {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
}

.gradient-text {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Customize cursor color */
.hero-title .typerly-cursor {
  color: #ff6b6b;
}
```

## 🎯 Advanced Usage

### Dynamic Content

```tsx
const [messages, setMessages] = useState([
  "Loading user data...",
  "Connecting to server...", 
  "Welcome back, John! 👋"
]);

return (
  <Typewriter 
    text={messages}
    speed={50}
    loop={false}
  />
);
```

### Conditional Rendering

```tsx
const [isVisible, setIsVisible] = useState(false);

return (
  <div>
    {isVisible && (
      <Typewriter 
        text="Surprise! 🎉"
        speed={100}
        delay={500}
      />
    )}
  </div>
);
```

## 🎛️ CSS Customization

Override default styles with CSS:

```css
/* Container styling */
.typerly-container {
  display: inline-block;
  font-family: 'Courier New', monospace;
}

/* Cursor animation - customize blink speed */
.typerly-cursor {
  animation: typerly-blink 1.2s infinite;
}

/* Custom cursor colors */
.success-message .typerly-cursor {
  color: #28a745;
}

.error-message .typerly-cursor {
  color: #dc3545;
}

/* Disable cursor animation */
.no-blink .typerly-cursor {
  animation: none;
  opacity: 1;
}
```

## 🚀 Performance

typerly is built for performance:

- **Bundle size:** Only 6.7kB minified + gzipped
- **Runtime:** Efficient `setTimeout` based animations
- **Memory:** Automatic cleanup on unmount
- **Re-renders:** Optimized with proper React patterns

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | ≥60 |
| Firefox | ≥60 |
| Safari | ≥12 |
| Edge | ≥79 |

## 🛠️ Development

```bash
# Clone repository
git clone https://github.com/mahirliy55/typeflux.git
cd typeflux

# Install dependencies
npm install

# Start development server
npm run dev

# Build library
npm run build

# Run tests
npm test
```

## 🔧 Troubleshooting

### Common Issues

**Q: Typewriter doesn't start**
```tsx
// ❌ Wrong - component not mounted
{false && <Typewriter text="Hello" />}

// ✅ Correct - use delay prop
<Typewriter text="Hello" delay={1000} />
```

**Q: Animation doesn't loop**
```tsx
// ❌ Wrong - missing loop prop
<Typewriter text={["A", "B"]} />

// ✅ Correct - enable looping
<Typewriter text={["A", "B"]} loop />
```

**Q: TypeScript errors**
```tsx
// ❌ Wrong - missing required prop
<Typewriter />

// ✅ Correct - provide text
<Typewriter text="Hello" />
```

## 💡 Use Cases

- **🏠 Landing Pages** - Engaging hero sections
- **💼 Portfolios** - Dynamic personal introductions  
- **📊 Dashboards** - Animated status updates
- **💬 Chat Apps** - Realistic typing indicators
- **📚 Documentation** - Interactive code examples
- **🎮 Games** - Dialogue and story text
- **📱 Mobile Apps** - Onboarding sequences

## 🤝 Contributing

We love contributions! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create your feature branch: `git checkout -b amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin amazing-feature`
5. Open a Pull Request

## 📄 License

MIT © 2025 - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by classic terminal aesthetics
- Built with modern React patterns
- Powered by the amazing JavaScript community

---

<div align="center">

**[⭐ Star us on GitHub](https://github.com/mahirliy55/typeflux)** • **[🐛 Report Bug](https://github.com/mahirliy55/typeflux/issues)** • **[💡 Request Feature](https://github.com/mahirliy55/typeflux/issues)**

Made with ❤️ by developers, for developers

*typerly - Where code meets art* ✨

</div>