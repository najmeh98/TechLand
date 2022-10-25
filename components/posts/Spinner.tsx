export const Spinner = () => {
  return (
    <div className="w-full my-8   cursor-pointer  max-w-[46rem] max-auto  p-5 ">
      <div className="flex flex-col  animate-pulse px-7 space-y-8">
        <div className="flex items-center w-full ">
          <div className="w-12 h-12 rounded-full bg-[#e8e8e8] " />
          <div className=" w-[200px] h-[11px] bg-[#e8e8e8] shadow-xl rounded-lg ml-2"></div>
        </div>

        <div className="h-2 w-full bg-[#e8e8e8] rounded"></div>
        <div className=" w-full h-[350px] bg-[#e8e8e8] rounded-md    bg-cover hover:shadow-[0_8px_30px_#7c7b7b1e]" />

        <div className="space-y-5  w-full">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-[#e8e8e8] rounded col-span-2"></div>
            <div className="h-2 bg-[#e8e8e8] rounded col-span-1"></div>
          </div>
          <div className="h-2 bg-[#e8e8e8] rounded"></div>
          <div className="h-2 bg-[#e8e8e8] rounded"></div>
        </div>
      </div>
    </div>
  );
};

export const Style = () => {
  return (
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-700 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
