import type { NextPage } from "next";
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
