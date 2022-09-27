import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CategoryList from "../components/category/CategoryList";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <CategoryList />
    </>
  );
};

export default Home;
