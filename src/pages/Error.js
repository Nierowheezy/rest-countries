import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <div
        className="
      flex
      items-center
      justify-center
      h-screen"
      >
        <div className="px-40 py-20 bg-gray-100 dark:bg-gray-900  rounded-md shadow-xl">
          <h1 className="font-bold text-blue-600 text-9xl">404</h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 dark:text-white md:text-3xl">
            <span className="text-red-500">Oops!</span> Page not found
          </h6>

          <p className="mb-8 text-center text-gray-500 dark:text-white md:text-lg">
            The page you’re looking for doesn’t exist.
          </p>

          <Link
            to="/"
            className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100"
          >
            Go home
          </Link>
        </div>
      </div>
    </>
  );
}
