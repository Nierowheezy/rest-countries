import { Link } from "react-router-dom";
import Toggle from "../utils/Toggle";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between w-full bg-white shadow p-5 dark:bg-gray-800">
        <div>
          <Link to="/">
            <h1 className="font-bold text-gray-900 dark:text-white text-4xl">
              Where in the world?
            </h1>
          </Link>
        </div>

        <div>
          <Toggle />
        </div>
      </header>
    </>
  );
}
