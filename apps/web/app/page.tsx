import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-center sm:text-left">
          Welcome to{" "}
          <a
            className="text-blue-600 hover:underline"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Triplone!
          </a>
        </h1>
      </main>
    </div>
  );
}
