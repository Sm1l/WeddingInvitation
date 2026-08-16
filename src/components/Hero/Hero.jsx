import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const WEDDING_DATE = new Date("2026-09-12T14:00:00+03:00");

function getTimeLeft() {
  const difference = WEDDING_DATE.getTime() - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function Hero() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      {/* <div className={styles.leaf leafOne}>🍂</div>
      <div className={styles.leaf leafTwo}>🍁</div>
      <div className={styles.leaf leafThree}>🍂</div> */}

      <div className={styles.content}>
        <p className={styles.eyebrow}>Приглашаем на свадьбу</p>

        <h1>
          Наталия
          <span>&</span>
          Константин
        </h1>

        <div className={styles.date}>
          <strong>12 сентября 2026</strong>
          <span>14:00</span>
        </div>

        <div className={styles.location}>
          <span>Ореховая бухта</span>
          <small>
            Московская область, городской округ Мытищи,
            <br />
            деревня Болтино, Ореховая улица
          </small>
        </div>

        <div className={styles.countdown}>
          <p>До нашей встречи</p>

          <div className={styles.counter}>
            <div>
              <strong>{String(timeLeft.days).padStart(2, "0")}</strong>
              <span>дней</span>
            </div>

            <i>:</i>

            <div>
              <strong>{String(timeLeft.hours).padStart(2, "0")}</strong>
              <span>часов</span>
            </div>

            <i>:</i>

            <div>
              <strong>{String(timeLeft.minutes).padStart(2, "0")}</strong>
              <span>минут</span>
            </div>

            <i>:</i>

            <div>
              <strong>{String(timeLeft.seconds).padStart(2, "0")}</strong>
              <span>секунд</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scroll}>
        <span>Листайте вниз</span>
        <div />
      </div>
    </section>
  );
}

export default Hero;
