import styles from "./page.module.scss";
import PostFeed from "@/pages/PostFeed";

export default async function App() {
  return (
    <main className={styles.app}>
      <section className={styles.content}>
        <PostFeed />
      </section>
    </main>
  );
}
