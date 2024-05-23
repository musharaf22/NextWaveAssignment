export interface ICardProps {
  data: {
    title: string;
    icon_url: string;
    link: string;
    description: string;
    category: string;
    tag: string;
    id: string;
  };
}

const Card = ({ data }: ICardProps) => {
  return (
    <div className="bg-white border border-gray-200 w-[360px] h-[192px] rounded-[4px] p-8">
      <div>
        <div className="flex items-start border-2 border-red-500">
          <img src={data.icon_url} alt="n/A" className="w-[44px] h-[44px]" />
          <div className="ml-3">
            <h1>Dropbox, Inc</h1>
            <p>Cloud Service</p>
          </div>
        </div>
        <p className="my-4">www.google.com</p>
        <p>It is a file hosting service</p>
      </div>
    </div>
  );
};

export default Card;
