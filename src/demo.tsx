import ReactDOM from "react-dom/client";
import { Typewriter } from "./index";

function Demo() {
  return (
    <div className="container">
      <h1>🎯 typerly Demo</h1>

      <div className="demo-section">
        <div className="demo-title">1. Basic Typewriter</div>
        <div className="typewriter-demo">
          <Typewriter text="Welcome to typerly! 🚀" speed={80} />
        </div>
      </div>

      <div className="demo-section">
        <div className="demo-title">2. Multiple Texts with Looping</div>
        <div className="typewriter-demo">
          <Typewriter
            text={[
              "Hello, World! 🌍",
              "Merhaba, Dünya! 🇹🇷",
              "Hola, Mundo! 🇪🇸",
              "Bonjour, le Monde! 🇫🇷",
              "こんにちは、世界！🇯🇵",
            ]}
            speed={60}
            loop={true}
            cursor={true}
          />
        </div>
      </div>

      <div className="demo-section">
        <div className="demo-title">3. Large Text with Custom Speed</div>
        <div className="typewriter-demo large-text">
          <Typewriter
            text="✨ Beautiful Animations"
            speed={100}
            delay={1000}
            cursor={true}
          />
        </div>
      </div>

      <div className="demo-section">
        <div className="demo-title">4. Fast Typing</div>
        <div className="typewriter-demo fast-text">
          <Typewriter
            text="⚡ Super fast typing animation with custom styles!"
            speed={30}
            cursor={false}
          />
        </div>
      </div>

      <div className="demo-section">
        <div className="demo-title">5. Custom Cursor Character</div>
        <div className="typewriter-demo custom-cursor">
          <Typewriter
            text={[
              "Code with style 💻",
              "Build amazing things 🎨",
              "typerly rocks! 🎉",
            ]}
            speed={70}
            loop={true}
            cursor={true}
            cursorChar="▊"
            className="custom-cursor"
          />
        </div>
      </div>

      <div className="demo-section">
        <div className="demo-title">6. No Cursor Mode</div>
        <div className="typewriter-demo">
          <Typewriter
            text="Clean typing without cursor"
            speed={50}
            cursor={false}
          />
        </div>
      </div>

      <div className="demo-section">
        <div className="demo-title">7. Programming Languages</div>
        <div className="typewriter-demo">
          <Typewriter
            text={[
              "const message = 'TypeScript';",
              "function hello() { return 'React'; }",
              "export { Typewriter };",
              "npm install typerly",
            ]}
            speed={40}
            loop={true}
            cursor={true}
          />
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Demo />);
