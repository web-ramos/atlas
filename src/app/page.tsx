import { Metadata } from "next"
import Image from "next/image"
import styles from './Page.module.scss'
import Button from "@/components/Button/Button";

export const metadata: Metadata = {
  title: "Home",
}

const fake = {
  name: "Ushuaia Roundtrip",
  image: "/fake/image001.png",
  alt: "Ushuaia Roundtrip",
  yacht: "World Voyager",
  dates: "Nov. 17 - 28 2023",
  night: "11 nights",
  dep: "Ushaia",
  arr: "Ushaia",
  offIncl: [
    "Charter Jet Service",
    "Free Stateroom Upgrade",
    "Free Dinning Upgrade",
  ],
  allIncl: [
    "Stocked in-room minibar",
    "24-hour room service with spirits, wine, & beer",
    "Nespresso Coffee & Kusmi Teas",
    "Still & sparkling water in reusable glass bottles",
    "Private marble spa bath with L'OCCITANE amenities",
    "Option to change queen bed into two singles"
  ],
};

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__image}>
          <Image
            src={fake.image}
            width={232}
            height={220}
            style={{ objectFit: "contain" }}
            alt={fake.alt}
          />
        </div>
        <div className={styles.header__wrapper}>
          <h2 className={styles.header__title}>{fake.name}</h2>
          <ul className={styles.header__list}>
            <li className={styles.header__list__item}>
              <span className={styles.header__list__title}>Yacht</span>
              <span className={styles.header__list__value}>{fake.yacht}</span>
            </li>
            <li className={styles.header__list__item}>
              <span className={styles.header__list__title}>Dates</span>
              <span className={styles.header__list__value}>{fake.dates}</span>
            </li>
            <li className={styles.header__list__item}>
              <span className={styles.header__list__title}>Night</span>
              <span className={styles.header__list__value}>{fake.night}</span>
            </li>
            <li className={styles.header__list__item}>
              <span className={styles.header__list__title}>Departure Port</span>
              <span className={styles.header__list__value}>{fake.dep}</span>
              <span className={styles.header__list__title}>Arrival Port</span>
              <span className={styles.header__list__value}>{fake.arr}</span>
            </li>
          </ul>
        </div>
      </header>
      <section className={styles.offers_inlc}>
        <h3 className={styles.offers_inlc__title}>Offers Included</h3>
        <ul className={styles.offers_inlc__list}>
          {fake.offIncl.map((value) => {
            return <li key={value}>{value}</li>;
          })}
        </ul>
      </section>
      <section className={styles.always_incl}>
        <h3 className={styles.always_incl__title}>Always Included</h3>
        <ul className={styles.always_incl__list}>
          {fake.allIncl.map((value) => {
            return <li key={value}>{value}</li>;
          })}
        </ul>
      </section>
      <footer className={styles.footer}>
          <Button link="#" text="Looks good" rounded active />
      </footer>
    </>
  );
}
