// pages/index.js
import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ yudukikensyuburogu }) {
  
  return (
    <div>
      <ul>
        {yudukikensyuburogu.map((yudukikensyuburogu) => (
          <li key={yudukikensyuburogu.id}>
            <Link href={`/blog/${yudukikensyuburogu.id}`}>{yudukikensyuburogu.tittle}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "yudukikensyuburogu" });

  return {
    props: {
      yudukikensyuburogu: data.contents,
    },
  };
};
