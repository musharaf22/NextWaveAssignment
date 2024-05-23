import { useEffect, useState } from "react";
import Card, { ICardProps } from "../../components/Card";
import FilterNAv from "../../components/FilterNAv";
import homeData from "../utils/demoData/homepageData";

const Home = () => {
  const [activeFilter, setActiveFilter] = useState<string>("resources");
  const [listingData, setListingData] = useState<any[]>(homeData);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    if (searchValue !== "") {
      const filteredData = homeData.filter((d) =>
        d.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setListingData(filteredData);
    } else {
      setListingData(homeData);
    }
  }, [searchValue]);
  return (
    <div className="w-full my-10 ">
      <div className="md:w-[80%] m-auto p-4 h-full ">
        <FilterNAv
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
        />
        <input
          type="text"
          name=""
          id=""
          className="p-2 w-full md:w-[40%] border border-gray-200 rounded-[4px] my-10 outline-none"
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />

        {/* //  */}
        {listingData.filter(
          (data) =>
            data.tag ===
            activeFilter.toLowerCase().substring(0, activeFilter.length - 1)
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
