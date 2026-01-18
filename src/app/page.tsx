import { UnicornBackground } from "@/components/UnicornBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-screen flex flex-col items-center justify-center">
        <UnicornBackground />
      </section>
    </main>
  );
}
