export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Surrey Garden Services. All rights
          reserved.
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Facebook
          </a>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Google Reviews
          </a>
        </div>
      </div>
    </footer>
  );
}
