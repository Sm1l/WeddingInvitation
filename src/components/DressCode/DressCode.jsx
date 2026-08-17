import styles from "./DressCode.module.css";

const colors = [
  {
    name: "Осенний жёлтый",
    className: "yellow",
  },
  {
    name: "Тёплый оранжевый",
    className: "orange",
  },
  {
    name: "Глубокий бордовый",
    className: "burgundy",
  },
  {
    name: "Лесной зелёный",
    className: "green",
  },
];

function DressCode() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Dress code</p>

        <h2>Тематика мероприятия</h2>

        <p className={styles.description}>
          Наше мероприятие будет проходить в осенних, ярких и радостных тонах: оранжевом, жёлтом, бордовом, зелёном и их
          оттенках.
        </p>

        <p className={styles.description}>
          Будем благодарны, если при выборе наряда Вы будете придерживаться этой палитры. Это не обязательно должен быть
          весь образ — достаточно отдельного элемента одежды или небольшого аксессуара.
        </p>

        <div className={styles.palette}>
          {colors.map((color) => (
            <div className={styles.color} key={color.name}>
              <div className={`${styles.circle} ${styles[color.className]}`} />

              <span>{color.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DressCode;
