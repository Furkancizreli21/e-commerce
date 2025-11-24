import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline>
        <source src="/home/home.mp4" type="video/mp4" />
      </video>
      <Navbar />
    </div>
  );
}
