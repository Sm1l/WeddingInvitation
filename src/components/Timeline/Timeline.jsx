import { useEffect, useRef, useState } from "react";
import styles from "./Timeline.module.css";

const events = [
  {
    time: "14:00",
    title: "Сбор гостей",
    description: "Фотосессия",
  },
  {
    time: "14:30",
    title: "Фуршет",
    description: "",
  },
  {
    time: "15:30",
    title: "Праздничный банкет",
    description: "",
  },
  {
    time: "22:00",
    title: "Окончание мероприятия",
    description: "",
  },
];

function Timeline() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = sectionRef.current;

      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewport = window.innerHeight;

      const total = rect.height + viewport;
      const current = viewport - rect.top;

      const value = Math.min(Math.max(current / total, 0), 1);

      const start = 0.25; // начало движения
      const end = 0.85; // конец движения

      const delayedProgress = value <= start ? 0 : value >= end ? 1 : (value - start) / (end - start);

      setProgress(delayedProgress);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>12 сентября 2026</p>

        <h2>Свадебное расписание</h2>

        <div className={styles.timeline}>
          <div className={styles.line}>
            <div
              className={styles.progress}
              style={{
                height: `${progress * 100}%`,
              }}
            />

            <div
              className={styles.leaf}
              style={{
                top: `${progress * 100}%`,
              }}
            >
              🍂
            </div>
          </div>

          <div className={styles.events}>
            {events.map((event) => (
              <div className={styles.event} key={event.time}>
                <div className={styles.dot} />

                <div className={styles.eventContent}>
                  <span>{event.time}</span>

                  <h3>{event.title}</h3>

                  {event.description && <p>{event.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
