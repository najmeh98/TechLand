import { useRouter } from "next/router";
import { useState } from "react";
import { dataProp, ItemProp } from "./category/Cate.interface";
import { ArrowLeft, ArrowRight } from "./icon";
import { ThemedText } from "./ThemedText";

interface HeaderProp {
  data: dataProp[];
  setSaveId: (saveId: string) => void;
}

export const Header = ({ data, setSaveId }: HeaderProp) => {
  const [activestep, setactiveStep] = useState(0);
  const [saveindex, setSaveIndex] = useState(0);

  const router = useRouter();
  return (
    <>
      <div
        style={{ boxShadow: "rgb(230 230 230) 0px -1px 0px inset" }}
        className="pt-4 fixed top-0 flex items-center  max-w-[45rem] overflow-hidden  bg-white   !z-50"
      >
        <div className="bg-gradient-to-r from-rgb(255,255,255,0) to-extra_text relative top-1 cursor-pointer opacity-50 hover:opacity-100">
          <ArrowLeft />
        </div>

        <div
          id="slider"
          className="w-[50rem] overflow-x-scroll whitespace-nowrap  scrollbar-hide overflow-y-hidden  px-4"
        >
          <div className="flex items-center justify-between  ">
            <CategoryItem
              isActive={!router?.query?.tag}
              name="All"
              onClick={() => {
                router.push("/");
                console.log(router?.query?.tag);
              }}
            />

            {data &&
              data.map((item: dataProp, index: number) => {
                return (
                  <CategoryItem
                    key={item?.id}
                    name={item?.name}
                    isActive={router?.query?.tag === item?.name}
                    onClick={() => {
                      router.push({
                        pathname: "/",
                        query: {
                          tag: item?.name,
                        },
                      });

                      setSaveId(item?.id);
                      setSaveIndex(index);
                    }}
                  />
                );
              })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-rgb(255,255,255,0) to-extra_text relative top-1 cursor-pointer opacity-50 hover:opacity-100">
          <ArrowRight />
        </div>
      </div>
    </>
  );
};

export const CategoryItem = ({ onClick, name, isActive }: ItemProp) => {
  return (
    <ThemedText
      onClick={onClick}
      className={` text-base  mr-8 leading-5 capitalize group cursor-pointer  group inline-flex items-center  py-4  whitespace-nowrap ${
        isActive
          ? "border-indigo-500  border-solid    border-b-2 text-indigo-600 focus:outline-none focus:text-indigo-800  focus:border-b  focus:border-indigo-700"
          : "border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 focus:text-gray-600 focus:border-gray-300"
      } `}
    >
      {name}
    </ThemedText>
  );
};
