"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./components/Hero";
import Category from "./components/Category";
import CardBox from "./components/CardBox";
import Reviews from "./components/Reviews";

const serverUrl = process.env.NEXT_PUBLIC_API_URL;
const getCategory = async () => {
  // try {
  //   const response = await axios.get(`${serverUrl}/get-all-category`);
  //   console.log(response.data.data);
  //   return response.data.data.category;
  // } catch (error) {
  //   return error;
  // }
  return [
    {
      name: "Moving furniture",
      image: "/truck-svgrepo-com-2 1.svg",
    },
    {
      name: "Moving furniture",
      image: "/video-svgrepo-com 2.svg",
    },
    {
      name: "Gardening",
      image: "/leaves-leaf-svgrepo-com-2.svg",
    },
    {
      name: "Handyman",
      image: "/Group 806.svg",
    },
    {
      name: "Cleaning",
      image: "/sprayer-spray-bottle-svgrepo-com 2.svg",
    },
    {
      name: "Business & Admin",
      image: "/XMLID_1923_.svg",
    },
    {
      name: "Delivery",
      image: "/trolley-svgrepo-com 1.svg",
    },
    {
      name: "Pedicure & manicure",
      image: "/Group 812.svg",
    },
    {
      name: "Manpower",
      image: "/Group.svg",
    },
    {
      name: "Manpower",
      image: "/safety-vest-svgrepo-com 1.svg",
    },
    {
      name: "Health",
      image: "/HealthGroup.svg",
    },
    {
      name: "Art",
      image: "/paint-brush-art-svgrepo-com 1.svg",
    },
    {
      name: "Construction",
      image: "/construction-svgrepo-com 1.svg",
    },
    {
      name: "Lab & Research",
      image: "/microscope-medical-svgrepo-com 1.svg",
    },
    {
      name: "Mechanic",
      image: "/steering-wheel-car-svgrepo-com 1.svg",
    },
    {
      name: "Pets care",
      image: "/pet-svgrepo-com 1.svg",
    },
    {
      name: "Baby care",
      image: "/BabyCareGroup.svg",
    },
    {
      name: "Web & design",
      image: "/search-svgrepo-com 1.svg",
    },
  ];
};
const getTasks = async () => {
  try {
    const response = await axios.get(`${serverUrl}/browse-task`);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export default function Home() {
  const [category, setCategory] = useState([]);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getCategory().then((res) => {
      console.log(res);
      setCategory(res);
    });
    getTasks().then((res) => {
      setTasks(res);
    });
    //
  }, []);

  return (
    <>
      <Hero />
      {category.length > 0 && <Category category={category} />}
      {tasks.length > 0 && <Reviews tasks={tasks} />}
      <CardBox />
    </>
  );
}
