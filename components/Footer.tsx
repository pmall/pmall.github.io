export function Footer() {
  return (
    <footer className="container mx-auto px-4 py-6 max-w-4xl">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          <a href="mailto:pierre.mallinjoud@gmail.com" className="underline">
            Pierre Mallinjoud
          </a>
        </p>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>
            Made with{" "}
            <a
              href="https://https://nextjs.org/"
              target="_blank"
              className="underline"
            >
              Nextjs
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="underline"
            >
              tailwindcss
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
