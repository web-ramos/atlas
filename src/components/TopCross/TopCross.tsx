import Link from 'next/link'
import Image from "next/image"
import styles from './TopCross.module.scss'
import crossIcon from './topCross.svg'

const fake = {
  phone: '+1.844.44ATLAS'
}

const TopCross = () => {
  const phoneLink = 'tel:' + fake.phone
  return (
    <div className={styles.container}>
      <a className={styles.phone} href={phoneLink}>{fake.phone}</a>
      <button className={styles.crossButton}>
        <Link href='#'>
          <Image priority src={crossIcon} alt='Close' width={44} height={44}/>
        </Link>
      </button>
    </div>
  );
}

export default TopCross