import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import { config, fetcher } from "../components/Api";
import Layout from "../components/Layout";
import { Space } from "../components/share/Space";
import { ThemedText } from "../components/ThemedText";

export default function Account(): JSX.Element {
  const { query } = useRouter();

  const adId = query?.slug;

  const { data, error } = useSWR(
    `${config.apiUrl}/api/data/Info?query=${adId}`,
    fetcher
  );

  console.log(data);

  console.log("q", query);

  const style = {
    borderRight: "1px solid rgb(229 231 235)",
    borderLeft: "1px solid rgb(229,231,235)",
  };

  return (
    <div
      // style={style}
      className="max-w-[60rem]   min-h-screen w-full flex flex-col border border-r border-l border-slate-300 mx-auto  whitespace-normal"
    >
      {/* main image */}
      <div className="border mx-auto  container border-solid border-slate-100  bg-white rounded-3xl shadow-md">
        {data?.banner == null ? (
          <img
            src="img.jpeg"
            alt={data?.name}
            height={300}
            className="w-full rounded-b-3xl"
          />
        ) : (
          <img
            src={data?.banner}
            alt={data?.name}
            height={300}
            className="w-full rounded-b-3xl"
          />
        )}

        <div className="lg:max-w-[47rem] md:max-w-[42rem] mx-auto flex flex-col  justify-start  w-full  sm:max-w-[25rem] ">
          {/* main text */}
          <div className="flex items-start justify-start w-full  ">
            <img
              src={data?.image}
              alt={data?.name}
              width={130}
              height={130}
              className="rounded-full shadow-2xl relative -top-10 border-4 border-solid border-white   maxmd:w-24 maxmd:h-24"
            />
            <div className="flex flex-col items-start justify-between  pl-5 ">
              <ThemedText className="text-3xl  pt-4 capitalize font-medium maxmd:text-2xl maxmd:pt-2">{`${data?.name} ${data?.family}`}</ThemedText>
              <ThemedText className="text-extra_text pt-1 text-base font-mono">{`@${data?.name}`}</ThemedText>

              {/* <Space vertical={20} /> */}

              {data && data?.job.length > 0 && (
                <ThemedText className="pt-5  font-serif text-base">
                  {data?.job}
                </ThemedText>
              )}

              <Space vertical={50} />
            </div>
          </div>

          {/* main text */}
        </div>
      </div>

      <Space vertical={20} />

      {data && data?.bio.length > 0 && (
        <div className=" flex container  mx-auto flex-col w-full h-96 items-center justify-start rounded-3xl border border-solid border-slate-100  shadow-md bg-white">
          <div className="lg:max-w-[47rem] md:max-w-[42rem] py-7 sm:max-w-[25rem] ">
            <ThemedText className="font-sans font-bold text-xl leading-5 ">
              About Me
            </ThemedText>
            <ThemedText className="pt-4 text-lg font-serif leading-8 rounded-lg ">
              {data?.bio}
            </ThemedText>
          </div>
        </div>
      )}
    </div>
  );
}
