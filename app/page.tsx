"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./components/hero";
import Category from "./components/category";
import Card from "./components/card";

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
      <Card />
    </>
  );
}
