export default function Filter({ searchCountries, searchInput, setCountries }) {
  const fetchCountryByRegion = async (region) => {
    const res = await fetch(`https://restcountries.com/v2/continent/${region}`);
    const data = await res.json();
    setCountries(data);
    console.log(data);
  };

  return (
    <>
      <div className="flex items-start justify-between flex-col md:flex-row md:items-center md:justify-between 2xl:container 2xl:mx-auto">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search by country name"
          value={searchInput}
          onChange={(e) => searchCountries(e.target.value)}
          className="py-2 px-4 rounded shadow placeholder-gray-900 ml-5 lg:w-1/2 w-full"
          autoComplete="off"
        />
        <select
          id="select"
          className="py-2 px-4 rounded shadow ml-5 md:mr-5 md:ml-0"
          onChange={(e) => fetchCountryByRegion(e.target.value)}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
        </select>
      </div>
    </>
  );
}
