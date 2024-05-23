const AddResource = () => {
  const inputClass =
    "border-2 border-gray-300 outline-none rounded-[4px] w-[320px] h-[40px]";
  const labelClass = " text-gray-500 text-[12px] leading-[16px] mb-2";
  return (
    <div className="relative h-[90vh] overflow-hidden ">
      {/* // Go BAck Button  */}
      <div className="flex items-center p-4 absolute">
        <p className="text-[#7E858E] font-bold text-xl">{"<"} </p>
        <p className="text-[#7E858E] ml-2"> Go Back</p>
      </div>

      {/* // Contents  */}
      <div className="flex items-center  justify-between h-full">
        {/* // Form div  */}
        <div className="w-[50%] flex flex-col justify-center items-center">
          <p className=" text-[32px] mb-10  font-rubik">Add a Resource</p>

          <div className="flex flex-col items-start">
            <label htmlFor="" className={labelClass}>
              NAME
            </label>
            <input type="text" className={inputClass} />
          </div>

          <div className="flex flex-col items-start my-6">
            <label htmlFor="" className={labelClass}>
              LINK
            </label>
            <input type="text" className={inputClass} />
          </div>

          <div className="flex flex-col items-start my-6">
            <label htmlFor="" className={labelClass}>
              DESCRIPTION
            </label>
            <textarea
              className={
                "border-2 border-gray-300 outline-none rounded-[4px] w-[320px]"
              }
              rows={5}
              cols={10}
              draggable={true}
            />
          </div>
        </div>

        {/* // Image Div  */}
        <div className="w-[45%] flex justify-end my-6">
          <img src="/Group3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AddResource;
