import './styles/globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from './page.module.scss';
import Image from 'next/image';
import home from '@/assets/icons/home.svg';
import search from '@/assets/icons/search.svg';
import edit from '@/assets/icons/edit.svg';
import favorite from '@/assets/icons/favorite.svg';
import person from '@/assets/icons/person.svg';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Thread',
  description: 'An Open Source Threads Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className={styles.app}>
          <section className={styles.content}>
            <h1>@</h1>
            {children}
          </section>
        <nav className={styles.menu}>
          <ul>
            <li>
              <Image src={home} className={styles.icon} alt='Home' />
            </li>
            <li>
              <Image src={search} className={styles.icon} alt='Search' />
            </li>
            <li>
              <Image src={edit} className={styles.icon} alt='Post' />
            </li>
            <li>
              <Image src={favorite} className={styles.icon} alt='Likes' />
            </li>
            <li>
              <Image src={person} className={styles.icon} alt='Profile' />
            </li>
          </ul>
        </nav>
      </main>
        </body>
    </html>
  )
}
