import { introduction } from "../resources/lib/data.js";
import Link from "next/link";
import { volumes } from "../resources/lib/data.js";

export default function Home() {
  function BookTitles() {
    return (
      <ul style={{ padding: 0, listStyle: "none" }}>
        {volumes.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <BookTitles></BookTitles>
    </div>
  );
}
