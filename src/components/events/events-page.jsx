import React from "react";
import Link from "next/link";
import Image from "next/image";

const EventsPage = ({ data }) => {
  return (
    <div className="events_page">
      {data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`}>
          <div className="card">
            <Image src={ev.image} alt={ev.title} width={500} height={600} />
            <h2>{ev.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default EventsPage;
