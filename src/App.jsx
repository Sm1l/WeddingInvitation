import Hero from "./components/Hero/Hero";
import Invitation from "./components/Invitation/Invitation";
import DressCode from "./components/DressCode/DressCode";
import Timeline from "./components/Timeline/Timeline";
import Location from "./components/Location/Location";
import styles from "./App.module.css";

function App() {
  return (
    <main className={styles.app}>
      <Hero />
      <Invitation />
      <DressCode />
      <Timeline />
      <Location />

      <footer className={styles.footer}>
        <div className={styles.footerLeaf}>✦</div>
        <p>Наталия & Константин</p>
        <span>12 · 09 · 2026</span>
      </footer>
    </main>
  );
}

export default App;
