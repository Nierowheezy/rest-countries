import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../utils/Spinner/Spinner";

export default function Country() {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { details } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      const res = await fetch(
        `https://restcountries.com/v2/capital/${details}`
      );
      const data = await res.json();
      setCountry(data);
      setIsLoading(false);
    };

    fetchCountryData();
  }, [details]);

  return (
    <>
      {isLoading ? (
        <h1 className="flex items-center justify-center h-screen text-4xl uppercase tracking-widest text-gray-900 dark:text-white lg:text-7xl font-bold">
          <Spinner />
        </h1>
      ) : (
        <section className="pt-32 xl:max-w-7xl xl:mx-auto px-5 xl:px-0 h-screen dark:text-white">
          <Link
            to="/"
            className="pt-2 pb-3 pl-4 pr-6 rounded shadow text-dark fobt-bold tracking-wide animate-pulse"
          >
            &larr; Back
          </Link>

          {country?.map((country) => {
            return (
              <div className="container flex mx-auto p-8 pl-0 pr-0">
                <img
                  src={country?.flag}
                  className="w-1/2 pr-8"
                  alt={country?.name}
                />
                <div className="p-8 pl-8">
                  <h2 className="font-bold text-2xl mb-8">{country?.name}</h2>
                  <div className="grid grid-cols-2 gap-x-20 gap-y-4">
                    <p>
                      Native Name:{" "}
                      <span className="dark:text-gray-400 text-gray-700 text-sm">
                        {country?.nativeName}
                      </span>
                    </p>
                    <p>
                      Population:{" "}
                      <span className="dark:text-gray-400 text-gray-700 text-sm">
                        {country?.population}
                      </span>
                    </p>
                    <p>
                      Region:{" "}
                      <span className="dark:text-gray-400 text-gray-700 text-sm">
                        {country?.region}
                      </span>
                    </p>
                    <p>
                      Sub Region:{" "}
                      <span className="dark:text-gray-400 text-gray-700 text-sm">
                        {country?.subregion}
                      </span>
                    </p>
                    <p>
                      Capital:{" "}
                      <span className="dark:text-gray-400 text-gray-700 text-sm">
                        {country?.capital}
                      </span>
                    </p>
                    <p>
                      Top Level Domain:{" "}
                      <span className="dark:text-gray-400 text-gray-700 text-sm">
                        {country?.topLevelDomain[0]}
                      </span>
                    </p>
                    <p>
                      Currencies:{" "}
                      <span className="dark:text-gray-400 text-gray-700 text-sm">
                        {country?.currencies.map((cur) => cur.name)}
                      </span>
                    </p>
                    <p>
                      Languages:{" "}
                      <span className="dark:text-gray-400 text-gray-700 text-sm">
                        {country?.languages.map((lang) => lang.name + ", ")}
                      </span>
                    </p>
                  </div>
                  <div className="flex mt-16">
                    <p className="font-bold">
                      Border Countries :
                      {country.borders.map((border) => " " + border + ", ")}{" "}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      )}
    </>
  );
}
