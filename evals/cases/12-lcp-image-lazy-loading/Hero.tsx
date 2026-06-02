import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[520px]">
      <Image src="/hero.jpg" alt="" fill loading="lazy" />
      <h1>Build better products</h1>
    </section>
  );
}
