import Stages, { Stage } from "@/components/Stages/Stages"
import "../styles/globals.css"
import styles from '../styles/layout.module.scss'
import Footer from "@/components/Footer/Footer";
import TopCross from "@/components/TopCross/TopCross";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap' rel='stylesheet' />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body className={styles.body}>
        <div className={styles.wrapper}>
          <aside className={styles.sideBar}>
            <Stages stageCurrent={Stage.SUMMARY} />
          </aside>
          <main className={styles.main}>
            <TopCross />
            {children}
          </main>
        </div>
        <footer>
          <Footer active />
        </footer>
      </body>
    </html>
  );
}
