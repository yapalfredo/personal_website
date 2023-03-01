import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>alfredoyap.com</title>
        <meta name="description" content="alfredo yap | personal website |" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Alfredo Yap&apos;s&nbsp;
            <code className={styles.code}>Personal Website</code>
          </p>
          <p>
            <code className={styles.code}>
              <a href="mailto:al@alfredoyap.com">al@alfredoyap.com</a>
            </code>
          </p>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/coming-soon.png"
            alt="Illustration by ekzi.letters from Ouch!"
            width={256}
            height={72}
            priority
          />
        </div>

        <div className={styles.grid}></div>
      </main>
    </>
  );
}
