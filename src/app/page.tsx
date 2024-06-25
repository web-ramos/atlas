import { Metadata } from "next"
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home",
}

const fake = {
  name: 'Ushuaia Roundtrip',
  image: '/fake/image001.png',
  alt: 'Ushuaia Roundtrip',

};

export default function Home() {
  return (
    <>
      <Image
        src={fake.image}
        width={232}
        height={220}
        style={{ objectFit: "contain" }}
        alt={fake.alt}
      />
      <h5>{fake.name}</h5>
    </>
  );
}
