import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from "../components/Filter";
import ThumbDetail from "./ThumbDetail";
import Spinner from "../utils/Spinner/Spinner";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchCountries = async () => {
    const res = await fetch(`https://restcountries.com/v2/all`);
    const data = await res.json();
    setCountries(data);
    console.log(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const searchCountries = (searchValue) => {
    setSearchInput(searchValue);

    if (searchInput) {
      const filteredCountries = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setFiltered(filteredCountries);
    } else {
      setFiltered(countries);
    }
  };

  return (
    <>
      {isLoading ? (
        <h1 className="flex items-center justify-center h-screen text-4xl uppercase tracking-widest text-gray-900 dark:text-white lg:text-7xl font-bold">
          <Spinner />
        </h1>
      ) : (
        <>
          <div className="pt-32">
            <Filter
              searchCountries={searchCountries}
              searchInput={searchInput}
              setCountries={setCountries}
            />
          </div>
          {searchInput.length > 0 ? (
            <section className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 2xl:container 2xl:mx-auto">
              {filtered.map((country, index) => (
                <Link to={`/${country.capital}`} key={index}>
                  <ThumbDetail
                    title={country.name}
                    image_url={country.flag}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                  />
                </Link>
              ))}
            </section>
          ) : (
            <>
              <section className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 2xl:container 2xl:mx-auto">
                {countries?.map((country, index) => (
                  <Link to={`country/${country.capital}`} key={index}>
                    <ThumbDetail
                      title={country.name}
                      image_url={country.flag}
                      population={country.population}
                      region={country.region}
                      capital={country.capital}
                    />
                  </Link>
                ))}
              </section>
            </>
          )}
        </>
      )}
    </>
  );
}
