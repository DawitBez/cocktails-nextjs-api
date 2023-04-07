import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cocktail List | Home</title>
        <meta name='keywords' content='cocktail' />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          We have compiled a list of cocktail drink names to help you navigate
          through the sometimes confusing world of cocktail beverages. With so
          many different names and variations, it can be difficult to know
          exactly what you are ordering. Our list will provide you with a handy
          reference guide to the most common cocktail drinks you may encounter.
        </p>
        <p className={styles.text}>
          So without further ado, here are the most popular cocktail drinks!
        </p>
        <Link href='/cocktail' className={styles.btn}>
          Cocktail Listing
        </Link>
      </div>
    </>
  )
}
