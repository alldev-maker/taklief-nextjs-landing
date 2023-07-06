"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./components/Hero";
import Category from "./components/Category";
import CardBox from "./components/CardBox";
import Reviews from "./components/Reviews";

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
      <Hero />
      <Category category={category} />
      <Reviews />
      <CardBox />
    </>
  );
}
