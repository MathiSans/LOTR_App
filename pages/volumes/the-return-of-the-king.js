import { volumes } from "../../resources/lib/data.js";
import Link from "next/link";
import Image from "next/image";
import bookThree from "resources/public/images/bookThree.png";

export default function BookThree() {
  const dataBook = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );

  function BookObject() {
    return (
      <ul style={{ padding: 0, listStyle: "none" }}>
        {volumes[2].books.map(({ ordinal, title }) => (
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
      <h1>The Return of the King</h1>
      <p>{dataBook.description}</p>
      <BookObject></BookObject>
      <Image
        src={bookThree}
        height={230}
        width={140}
        alt="The Return of the King Book Cover"
      ></Image>
    </>
  );
}
