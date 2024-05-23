import { useEffect, useRef, useState } from "react";
import Card from "../../components/Card";
import FilterNAv from "../../components/FilterNAv";

export interface IFetchData {
  title: string;
  icon_url: string;
  link: string;
  description: string;
  category: string;
  tag: string;
  id: string;
}
const Home = () => {
  // Managing States
  const homeData = useRef<any>(null);
  const [activeFilter, setActiveFilter] = useState<string>("resources");
  const [listingData, setListingData] = useState<IFetchData[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  // Function that fetches data from api
  const fetchData = async () => {
    const resp = await fetch(
      "https://media-content.ccbp.in/website/react-assignment/resources.json"
    );
    const data = await resp.json();
    homeData.current = data;
    setListingData(data);
  };

  // handling data for search result
  useEffect(() => {
    if (searchValue !== "") {
      const filteredData = homeData?.current?.filter((d: { title: string }) =>
        d.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setListingData(filteredData);
    } else {
      setListingData(homeData.current);
    }
  }, [searchValue]);

  // Cycle through data fetched from server
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full my-10 ">
      <div className="md:w-[80%] m-auto p-4 h-full ">
        <FilterNAv
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
        />
        {/* // Search Input Box  */}
        <input
          type="text"
          className="p-2 w-full md:w-[40%] border border-gray-200 rounded-[4px] my-10 outline-none"
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />

        {/* // Listing Cards */}
        {listingData?.filter(
          (data) =>
            data.tag ===
            activeFilter?.toLowerCase()?.substring(0, activeFilter?.length - 1)
        )?.length > 0 ? (
          <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-4  justify-center">
            {listingData
              .filter(
                (data) =>
                  data.tag ===
                  activeFilter
                    .toLowerCase()
                    .substring(0, activeFilter.length - 1)
              )
              .map((data) => {
                return <Card data={data} />;
              })}
          </div>
        ) : (
          <div className="h-[50vh] flex justify-center items-center">
            <h1 className="text-center text-2xl">No Data Found</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
