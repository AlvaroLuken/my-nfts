import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import products from '../products.json';

import { initateCheckout, initiateCheckout } from '../lib/payments.js';

export default function Home() {
  console.log("NEXT_PUBLIC_STRIPE_API_KEY", process.env.NEXT_PUBLIC_STRIPE_API_KEY);
  return (
    <div className={styles.container}>
      <Head>
        <title>GA - Checkout</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Gravity Assist Stripe Checkout Page
        </h1>

        <p className={styles.description}>
          Welcome!
        </p>

        <ul className={styles.grid}>
          {products.map(product => {
            const {id, title, price, description, image} = product;
            return (
              <li key={id} className={styles.card}>
                <a href="#">
                  <img src={ image } alt={description}/>
                  <h2>{ title }</h2>
                  <p>${price}</p>
                  <p>{ description }</p>
                </a>
                <p>
                  <button className={styles.button} onClick={() => {
                    initiateCheckout({
                      lineItems: [
                        {
                          price: id,
                          quantity: 1
                        }
                      ]
                    });
                  }}>Buy Now</button>
                </p>
              </li>
            )
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
