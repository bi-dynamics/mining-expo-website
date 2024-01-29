import Hero from "@/components/Hero";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title> Home - Mining Expo Namibia 2024 </title>
      </Head>
      <main>
        <Hero />
        <Hero />
      </main>
    </>
  );
}
