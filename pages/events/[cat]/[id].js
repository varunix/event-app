import Image from "next/image";
import SingleEvent from "../../../src/components/events/single-event";

const EventPage = ({ data }) => <SingleEvent data={data} />

export default EventPage;

export async function getStaticPaths() {
  const { allEvents } = await import("../../../tmp/data.json");

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const { allEvents } = await import("../../../tmp/data.json");
  const eventData = allEvents.find((ev) => id === ev.id);
  return {
    props: {
      data: eventData,
    },
  };
}
