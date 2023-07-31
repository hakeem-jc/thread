import styles from "./page.module.scss";
import PostFeed from "@/pages/PostFeed/PostFeed";

export default function App() {
  return (
    <main className={styles.app}>
      <section className={styles.content}>
        <PostFeed />
      </section>
    </main>
  );
}
