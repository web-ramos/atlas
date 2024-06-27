import Link from "next/link"
import styles from './Button.module.scss'

interface propsButton {
  link: string
  text: string
  active?: boolean
  rounded?: boolean
}

const Button = (props: propsButton) => {
  const { link, text, active, rounded} = props


  return (
    <button
      className={`
        ${styles.button}
        ${active ? styles.button__active : ""}
        ${rounded ? styles.button__rounded : ""}
      `}
    >
      <Link href={link}>{text}</Link>
    </button>
  );
}

export default Button