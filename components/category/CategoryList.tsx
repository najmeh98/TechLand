import { Tab } from "@headlessui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import { config, fetcher } from "../Api";
import { WriterInfo } from "../WriterInfo";
import { ArrowLeft, ArrowRight } from "../icon";
import Layout from "../Layout";
import PostsList from "../posts/Listofposts";
import { Space } from "../share/Space";
import { ThemedText } from "../ThemedText";
import {
  adminProp,
  CateProp,
  dataProp,
  ItemProp,
  PostProp,
} from "./Cate.interface";
import { Header } from "../Header";
import Carousl from "../carousl";

interface CatProp {
  name: string;
  id: string;
  image: string;
}

export default function CategoryList(): JSX.Element {
  const { data, error } = useSWR(
    `${config.apiUrl}/api/data/getAllCategories`,
    fetcher
  );

  console.log(data);

  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const [postInfo, setPostInfo] = useState<PostProp[]>();

  const [saveId, setSaveId] = useState<string>("");

  const [catValue, setcatValue] = useState<CatProp>({
    name: "",
    id: "",
    image: "",
  });

  useEffect(() => {
    setLoading(true);

    const filter = data
      ?.filter((items: dataProp) => items?.name == router?.query?.tag)
      .map((data: dataProp) => {
        // if (data.length > 0) {
        setcatValue(data);
        // }
      });

    if (catValue && catValue?.id.length > 0) {
      setSaveId(catValue?.id);
    }
  }, [catValue, catValue?.id, data, router?.query?.tag, saveId]);

  useEffect(() => {
    setLoading(true);

    try {
      axios
        .post(`${config.apiUrl}/api/data/getposts`)
        .then((result) => {
          if ((result?.status as number) == 200) {
            setLoading(false);

            console.log(result);

            if (router?.query?.tag) {
              // show result base on posts
              const info = result?.data?.filter(
                (posts: PostProp) => posts?.categoryId == saveId
              );

              setPostInfo(info);
            } else {
              setPostInfo(result?.data);
            }
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [data, router.query.tag, saveId]);

  const style = {
    borderRight: "1px solid rgb(229 231 235)",
    borderLeft: "1px solid rgb(229,231,235)",
  };

  return (
    <div
      style={style}
      className="w-[60rem]  min-h-screen flex flex-col border border-r border-l border-slate-300 mx-auto  whitespace-normal leading-8 "
    >
      <div className="w-[45rem] flex flex-col  items-start justify-center mx-auto  ">
        <Space vertical={80} />

        <Header data={data} setSaveId={setSaveId} />

        {postInfo &&
          postInfo.length > 0 &&
          postInfo.map((posts: PostProp) => {
            const adminInfo: adminProp = posts.admin;

            const slug: string = posts?.title;
            const wblogId: string = posts?.id;

            const postdate: string = `. ${new Date(
              posts?.createdAt
            ).toLocaleDateString("en-us", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}`;

            return (
              <Fragment key={posts?.id}>
                <div className="flex flex-col w-full items-start justify-start pt-6 cursor-pointer">
                  {/* show profile writer */}
                  <WriterInfo
                    postdate={postdate}
                    name={adminInfo?.name}
                    image={adminInfo?.image}
                    family={adminInfo?.family}
                    width={30}
                    height={30}
                    onClick={() =>
                      router.push({
                        pathname: "/account",
                        query: {
                          slug: [adminInfo?.id],
                        },
                      })
                    }
                  />

                  {/* show list of posts */}
                  <PostsList
                    title={posts?.title}
                    content={posts?.content}
                    image={posts?.image}
                    createdAt={posts?.createdAt}
                    category={posts?.category}
                    onClick={() =>
                      router.push({
                        pathname: "/post/postInfo",
                        query: {
                          psID: posts?.id,
                          slug: posts?.title,
                        },
                      })
                    }
                  />
                </div>

                <hr className=" m-0  w-full border-gray-200 border-t-0 border-solid" />
              </Fragment>
            );
          })}

        {/* <Carousl data={data} /> */}
      </div>
    </div>
  );
}
