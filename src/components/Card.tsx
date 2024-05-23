import { IFetchData } from "../pages/home";

export interface ICardProps {
  data: IFetchData;
}

const Card = ({ data }: ICardProps) => {
  return (
    <div className="bg-white border-2 border-gray-200 w-full md:w-[360px] h-[192px] rounded-[8px] p-8">
      <div>
        <div className="flex items-center ">
          <img
            src={data?.icon_url}
            alt="n/A"
            className="w-[44px] h-[44px] border-2 border-gray-300 rounded-[8px]"
          />
          <div className="ml-3">
            <h1 className="text-[16px] font-medium leading-[24px] text-[#171F46]">
              {data?.title}
            </h1>
            <p className="text-[#7E858E] text-[12px]">{data?.category}</p>
          </div>
        </div>
        <p className="my-4 text-[#0B69FF] cursor-pointer hover:underline text-[14px] !leading-[24px] no-underline	">
          <a href={data.link} target="_blank">
            {data?.link}
          </a>
        </p>
        <p className="text-[#7E858E] text-[14px]">{data?.description}</p>
      </div>
    </div>
  );
};

export default Card;
