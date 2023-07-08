import styles from './page.module.scss';
import Post from '@/components/Post/Post';

export default function App() {
  return (
    <main className={styles.app}>
      <h1>@</h1>
      <Post />
    </main>
  )
}
