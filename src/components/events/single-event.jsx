import React from "react";
import Image from "next/image";

const SingleEvent = ({ data }) => {
  const onSubmit = () => {};
  return (
    <div className="event_single_page">
      <Image src={data.image} alt={data.title} width={1000} height={500} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <form onSubmit={onSubmit} className="email_registration">
        <label>Get Registered for this event!</label>
        <input
          type="email"
          id="email"
          placeholder="Please insert your email here"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SingleEvent;
