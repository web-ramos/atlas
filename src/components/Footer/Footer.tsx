import Button from '../Button/Button'
import styles from './Footer.module.scss'

interface propsFooter {
  nextLink?: string
  backLink?: string
  active?: boolean
}

const Footer = (props : propsFooter) => {

  const { nextLink, backLink, active } = props

  return (
    active ?
    <>
      <footer>
        <div className={styles.container}>
          <div className={styles.actions}>
            <Button link={backLink || "#"} text={'Back'} />
            <Button link={nextLink || "#"} text={'Next'} active />
          </div>
        </div>
      </footer>
    </>
    : null
  );
};


export default Footer