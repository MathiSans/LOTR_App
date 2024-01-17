import { volumes } from "../../resources/lib/data.js";
import Link from "next/link";
import Image from "next/image";
import bookOne from "resources/public/images/bookOne.png";

export default function BookOne() {
  const dataBook = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  function BookObject() {
    return (
      <ul style={{ padding: 0, listStyle: "none" }}>
        {volumes[0].books.map(({ ordinal, title }) => (
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
      <h1>The Fellowship of the Ring</h1>
      <p>{dataBook.description}</p>
      <BookObject></BookObject>
      <Image
        src={bookOne}
        height={230}
        width={140}
        alt="The Fellowship of the Ring Book Cover"
      ></Image>
    </>
  );
}
