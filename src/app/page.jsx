import Hero from "@/components/Hero";
import About from "@/app/about/page";
import Help from "./help/page";
import Solutions from "./solutions/page";
import Gallery from "./gallery/page";
import Contact from "./contact/page";
import Quiz from "./quiz/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Help />
      <Solutions />
      <Gallery />
      <Contact />
      <Quiz />
    </main>
  );
}
