import { useNavigate } from "react-router-dom";
import BackButton from "../utils/icons/BackButton";
import { ChangeEvent, useState } from "react";
import UploadIcon from "../utils/icons/UploadIcon";
import { toast } from "react-toastify";

interface IFormData {
  name: string;
  image: string;
  description: string;
  link: string;
}
const AddResource = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    image: "/4.png",
    description: "",
    link: "",
  });
  const inputClass =
    "border-2 border-gray-300 outline-none rounded-[4px] w-[320px] h-[40px] p-2";
  const labelClass = " text-gray-500 text-[12px] leading-[16px] mb-2";

  // Generating Base 64 Of An Image File
  const getBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsDataURL(file);
    });
  };
  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    // Validating Files type
    if (!file.type.startsWith("image")) {
      toast.error("File must be an image file");
      return;
    }
    //getting image base64
    const base64 = await getBase64(file);
    if (!base64) return;
    setFormData({ ...formData, image: base64.toString() });
  };
  return (
    <div className="relative h-[94vh] overflow-hidden ">
      {/* // Go BAck Button  */}
      <div
        className="flex items-center p-4 absolute cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <BackButton /> <p className="text-[#7E858E] ml-2"> Go Back</p>
      </div>

      {/* // Contents  */}
      <div className="flex items-center justify-center md:justify-between h-full">
        {/* // Form div  */}
        <div className="w-[50%] flex flex-col justify-center items-center ">
          <p className="text-[26px] md:text-[32px] mb-10  font-rubik ">
            Add a Resource
          </p>

          <div className="flex flex-col items-start">
            <label htmlFor="" className={labelClass}>
              NAME
            </label>
            <input
              type="text"
              className={inputClass}
              placeholder="Ashoka Tano"
            />
          </div>

          <div className="flex flex-col items-start my-6">
            <label htmlFor="" className={labelClass}>
              LINK
            </label>
            <input
              type="text"
              className={`${inputClass} placeholder-[#0B69FF]`}
              placeholder="Ashoka Tano"
            />
          </div>

          <div className="flex flex-col items-start my-4 ">
            <label htmlFor="" className={labelClass}>
              DESCRIPTION
            </label>
            <textarea
              className={
                "border-2 border-gray-300 outline-none rounded-[4px] w-[320px] p-2"
              }
              rows={5}
              cols={10}
              draggable={true}
              placeholder="Ex. Building new Connectivity platform for the team"
            />
          </div>

          {/* // Change Photo  */}
          <div className="flex items-center md:w-[40%] m-auto  my-6">
            <img
              src={formData.image}
              alt=""
              className="w-[44px] h-[44px] border-2 border-gray-200 rounded-[8px]"
            />
            <div className="flex items-center ml-4 ">
              <UploadIcon />
              {/* // File input to be hidden  */}
              <input
                type="file"
                className="hidden"
                onChange={handleImageChange}
                id="fileInput"
              />
              <p
                className={`${labelClass} my-2 ml-2 hover:underline cursor-pointer`}
                onClick={() => {
                  const el = document.getElementById("fileInput");
                  if (!el) return;
                  el.click();
                }}
              >
                Change photo
              </p>
            </div>
          </div>

          <button
            className={`p-2 bg-[#0B69FF] text-white w-[93px] h-[42px] rounded-[4px] mt-8`}
          >
            CREATE
          </button>
        </div>

        {/* // Image Div  */}
        <div className="w-[45%] md:flex justify-end my-6 hidden">
          <img src="/Group3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AddResource;
