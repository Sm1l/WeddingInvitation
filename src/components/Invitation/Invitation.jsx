import styles from "./Invitation.module.css";

function Invitation() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.decor}>✦</div>

        <p className={styles.label}>Дорогой Гость!</p>

        <h2>
          Мы будем рады разделить
          <br />с Вами этот день
        </h2>

        <p className={styles.text}>
          Мы рады сообщить Вам, что состоится самое главное торжество в нашей жизни — день нашей свадьбы!
        </p>

        <p className={styles.text}>
          Ждём Вас в <strong>«Ореховой бухте»</strong> 12 сентября 2026 года в 14:00.
        </p>

        <div className={styles.divider}>
          <span />
          🍂
          <span />
        </div>

        <div className={styles.registration}>
          <p className={styles.label}>Свадебная регистрация</p>

          <h3>1 сентября 2026 · 12:00</h3>

          <p>Наша регистрация брака пройдёт во Дворце бракосочетания № 4.</p>

          <address>
            г. Москва,
            <br />
            ул. Бутырская, 17
          </address>
        </div>

        <div className={styles.divider}>
          <span />
          ✦
          <span />
        </div>

        <div className={styles.gifts}>
          <p className={styles.label}>Пожелания по подаркам</p>

          <h3>Вместо цветов — вино</h3>

          <p>Ваше присутствие в день нашей свадьбы — самый значимый подарок для нас!</p>

          <p>
            Мы понимаем, что дарить цветы на свадьбу — традиция. Но вместо этого предлагаем Вам купить нам бутылку вина
            на Ваш вкус и написать на записке:
          </p>

          <div className={styles.wineCard}>
            <span>«Когда?»</span>
            <span>«Где?»</span>
            <span>«При каких обстоятельствах?»</span>
          </div>

          <p>А мы обязательно откроем её в нужный момент, вспомним этот прекрасный день и Вас.</p>
        </div>
      </div>
    </section>
  );
}

export default Invitation;
