// pages/blog/[id].js
import { client } from "../../libs/client";
import styles from '../../styles/Home.module.scss';

export default function BlogId({ yudukikensyuburogu }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{yudukikensyuburogu.title}</h1>
      <p className={styles.publishedAt}>{yudukikensyuburogu.publishedAt}</p>
      <p>{yudukikensyuburogu.category && yudukikensyuburogu.category.name}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${yudukikensyuburogu.body}`,
        }}
        className={styles.post}
      />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "yudukikensyuburogu" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);

  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "yudukikensyuburogu", contentId: id });

  return {
    props: {
        yudukikensyuburogu: data,
    },
  };
};