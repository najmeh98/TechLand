import { useRouter } from "next/router";
import React, { useState } from "react";
import useSWR from "swr";
import { config, fetcher } from "../../components/Api";
import { ContentText } from "../../components/ContentText";
import Layout from "../../components/Layout";
import { Spinner } from "../../components/posts/Spinner";
import { Note } from "../../components/share/Note";
import { ThemedText } from "../../components/ThemedText";
import { WriterInfo } from "../../components/WriterInfo";

export default function PostInfo(): JSX.Element {
  const { query } = useRouter();

  const router = useRouter();

  const title: string = query?.psID as string;
  const [showInfo, setShowInfo] = useState<boolean>(false);

  // const psId = query?.wb_Id[0];

  // const [wblogId, slug] = query?.wb_Id ?? [undefined, undefined];

  const { data, error } = useSWR(
    `${config.apiUrl}/api/data/post?query=${query?.psID}`,
    fetcher
  );

  const adminInfo = data?.admin;

  const postdate: string = `${new Date(data?.createdAt).toLocaleDateString(
    "en-us",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  )}`;

  return (
    <>
      <Layout>
        {data == undefined ? (
          <Spinner />
        ) : (
          <>
            <div
              onMouseEnter={() => {
                setShowInfo(true);
              }}
              onMouseLeave={() => {
                setShowInfo(false);
              }}
              className="relative w-full"
            >
              <WriterInfo
                className=" mt-8 mb-6"
                width={45}
                height={45}
                name={adminInfo?.name}
                family={adminInfo?.family}
                image={adminInfo?.image}
                textinfo="text-lg font-light capitalize"
                // postdate={postdate}
                onClick={() =>
                  router.push({
                    pathname: "/account",
                    query: {
                      slug: adminInfo?.id,
                    },
                  })
                }
                key={adminInfo?.id}
              />
              {showInfo && (
                <Note>
                  <div className="p-5 flex flex-col justify-between">
                    <div className="flex items-center  capitalize">
                      <img
                        src={adminInfo?.image}
                        alt={adminInfo?.name}
                        width={30}
                        height={30}
                        className="rounded-full "
                      />
                      <ThemedText className=" pl-3 text-lg font-medium ">{`${adminInfo?.name} ${adminInfo?.family}`}</ThemedText>
                    </div>
                    {adminInfo?.job && (
                      <ThemedText className="text-sm leading-6 py-3">
                        {adminInfo?.job}
                      </ThemedText>
                    )}
                    <hr className=" m-0  w-full border-slate-200 border-t-0 border-solid" />

                    <ThemedText className="text-sm text-slate-500  pt-2">
                      {adminInfo?.email}
                    </ThemedText>
                  </div>
                </Note>
              )}
            </div>

            <h1 className="capitalize m-0 w-full cursor-pointer">
              {data?.title}
            </h1>
            <ThemedText className="text-gray-500 w-full pt-2">
              {postdate}
            </ThemedText>

            <div className="w-full pt-8">
              <img
                src={data?.image}
                alt={data?.title}
                width={300}
                height={350}
                className="w-full rounded-lg"
              />
            </div>

            <ContentText className="text-xl pt-10 w-full leading-8">
              {data?.content}
            </ContentText>
          </>
        )}
      </Layout>
    </>
  );
}

// source-serif-pro, Georgia, Cambria, "Times New Roman", Times, serif
