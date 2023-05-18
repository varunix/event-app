import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => (
  <div className="home_body">
    {data.map((event) => (
      <Link
        className="card"
        key={event.id}
        href={`/events/${event.id}`}
        passHref
      >
        <div className="image">
          <Image width={600} height={400} src={event.image} alt={event.title} />
        </div>
        <div className="content">
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </div>
      </Link>
    ))}
  </div>
);
