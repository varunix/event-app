import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => (
        <main>
        {data.map(event => (
        <Link key={event.id} href={`/events/${event.id}`}>
            <Image width={300} height={300} src={event.image} alt={event.title}/><h2>{event.title}</h2>
            <p>{event.description}</p>
        </Link>
        ))}
    </main>
);