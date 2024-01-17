import { volumes } from "../../resources/lib/data.js";
import Link from "next/link";
import Image from "next/image";
import bookTwo from "resources/public/images/bookTwo.png";

export default function BookTwo() {
  const dataBook = volumes.find(({ slug }) => slug === "the-two-towers");

  function BookObject() {
    return (
      <ul style={{ padding: 0, listStyle: "none" }}>
        {volumes[1].books.map(({ ordinal, title }) => (
          <li key={ordinal}>
            {ordinal}: {title}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <Link href="/">Back to All Volumes</Link>
      <h1>The Two Towers</h1>
      <p>{dataBook.description}</p>
      <BookObject></BookObject>
      <Image
        src={bookTwo}
        height={230}
        width={140}
        alt="The The Two Towers Book Cover"
      ></Image>
    </>
  );
}
