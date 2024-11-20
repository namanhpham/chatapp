import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src="/web-bg.jpg" // Replace with your image path
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10"
        priority
      />

      {/* Overlay Content */}
      <div className="relative flex flex-col items-center justify-center h-full bg-black/50 text-white">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
          Welcome to Our Chat App
        </h1>
        <p className="text-lg md:text-2xl text-center mb-8 max-w-2xl">
          Connect, share, and communicate with your friends and family instantly.
        </p>
        <div className="flex space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg">
            <Link href={"/sign-in"}>
                Get Started
            </Link>
          </button>
          <button className="bg-transparent border border-white hover:bg-white hover:text-black px-6 py-3 rounded-md text-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}