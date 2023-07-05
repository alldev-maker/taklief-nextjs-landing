"use client";
import { useEffect, useState } from "react";
import Header from "./component/header";
import Category from "./component/category";
import axios from "axios";
import Card from "./component/card";
import Footer from "./component/layout/footer";

const serverUrl = "http://8.213.23.19/api";
const getCategory = async () => {
  try {
    const response = await axios.get(`${serverUrl}/get-all-category`);
    console.log(response.data.data.category);
    return response.data.data.category;
  } catch (error) {
    return error;
  }
};

export default function Home() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategory().then((res) => {
      setCategory(res);
    });
    //
  }, []);

  return (
    <>
      <Header />
      <Category category={category} />
      <Card />
    </>
  );
}
