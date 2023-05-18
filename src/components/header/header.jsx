import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image
            alt={"logo"}
            src={"/images/logo-black.png"}
            height={70}
            width={100}
          />
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/events">Events</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
            </ul>
          </nav>
        </div>
        <h1>Lorem ipsum dolor sit amet</h1>
      </div>
    </header>
  );
};
