import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Hero />
      <main>{children}</main>
    </>
  );
}
