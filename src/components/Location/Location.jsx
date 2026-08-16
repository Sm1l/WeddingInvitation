import { useEffect, useRef } from "react";
import styles from "./Location.module.css";

const COORDINATES = [55.972816, 37.662495];

function Location() {
  const mapRef = useRef(null);

  useEffect(() => {
    const initMap = () => {
      if (!window.ymaps || !mapRef.current) return;

      const map = new window.ymaps.Map(mapRef.current, {
        center: COORDINATES,
        zoom: 15,
        controls: ["zoomControl"],
      });

      const placemark = new window.ymaps.Placemark(
        COORDINATES,
        {
          balloonContentHeader: "Наталия & Константин",
          balloonContentBody: "Ореховая бухта<br/>12 сентября 2026 · 14:00",
        },
        {
          preset: "islands#redDotIcon",
        }
      );

      map.geoObjects.add(placemark);

      return map;
    };

    if (window.ymaps) {
      window.ymaps.ready(initMap);
      return;
    }

    const script = document.createElement("script");

    script.src = "https://api-maps.yandex.ru/2.1/?apikey=56d55009-5a4d-4cf8-83ce-8fae63d013dd&lang=ru_RU";

    script.async = true;

    script.onload = () => {
      window.ymaps.ready(initMap);
    };

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Мы ждём Вас</p>

        <h2>Как добраться</h2>

        <p className={styles.address}>
          Ореховая бухта
          <br />
          Московская область, городской округ Мытищи,
          <br />
          деревня Болтино, Ореховая улица
        </p>

        <div className={styles.mapWrapper}>
          <div ref={mapRef} className={styles.map} />
        </div>

        <a
          className={styles.button}
          href="https://yandex.ru/maps/?ll=37.662903%2C55.971582&mode=routes&rtext=~55.972816%2C37.662495&rtt=auto&ruri=~&z=16.96"
          target="_blank"
          rel="noreferrer"
        >
          Построить маршрут
          <span>↗</span>
        </a>
      </div>
    </section>
  );
}

export default Location;
