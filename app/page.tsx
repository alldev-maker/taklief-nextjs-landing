"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./components/Hero";
import Category from "./components/Category";
import CardBox from "./components/CardBox";
import Reviews from "./components/Reviews";
import CommunityHero from "./components/CommunityHero";
import Image from "next/image";

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
  // try {
  //   const response = await axios.get(`${serverUrl}/browse-task`);
  //   console.log(response.data.data);
  //   return response.data.data;
  // } catch (error) {
  //   return error;
  // }
  const tasks = [
    {
      taskTitle: "Move Living Room Furniture",
      taskLocation: "456 Oak Street, Apartment 3A, Cityville",
      taskBudget: 800,
      taskDate: "2023-01-15",
      taskCompletionDate: "2023-01-15",
      taskStatus: "Assigned",
      taskUser: {
        userImage: "/Ellipse 42.svg",
      },
    },
    {
      taskTitle: "Record Furniture Assembly Tutorial",
      taskLocation: "789 Elm Street, Home Studio, Townsville",
      taskBudget: 200,
      taskDate: "2023-02-01",
      taskCompletionDate: "2023-02-02",
      taskStatus: "Assigned",
      taskUser: {
        userImage: "/Ellipse 41.svg",
      },
    },
    {
      taskTitle: "Trimming and Pruning",
      taskLocation: "101 Pine Avenue, Backyard, Villageland",
      taskBudget: 400,
      taskDate: "2023-03-10",
      taskCompletionDate: "2023-03-11",
      taskStatus: "Open",
      taskUser: {
        userImage: "/Ellipse 42.svg",
      },
    },
    {
      taskTitle: "Fixing Leaky Faucet",
      taskLocation: "202 Handyman Street, Suite B, Fixerville",
      taskBudget: 320,
      taskDate: "2023-04-05",
      taskCompletionDate: "2023-04-06",
      taskStatus: "Assigned",
      taskUser: {
        userImage: "/Ellipse 41.svg",
      },
    },
    {
      taskTitle: "Deep Clean Kitchen",
      taskLocation: "789 Spruce Avenue, Home, Cleansburg",
      taskBudget: 480,
      taskDate: "2023-05-20",
      taskCompletionDate: "2023-05-21",
      taskStatus: "Assigned",
      taskUser: {
        userImage: "/Ellipse 41.svg",
      },
    },
    {
      taskTitle: "Manage Business Finances",
      taskLocation: "10 Office Plaza, Suite 200, Financial District",
      taskBudget: 2000,
      taskDate: "2023-06-15",
      taskCompletionDate: "2023-06-16",
      taskStatus: "Open",
      taskUser: {
        userImage: "/Ellipse 42.svg",
      },
    },
    {
      taskTitle: "Parcel Delivery",
      taskLocation: "Recipient's Address",
      taskBudget: 80,
      taskDate: "2023-07-01",
      taskCompletionDate: "2023-07-02",
      taskStatus: "Open",
      taskUser: {
        userImage: "/Ellipse 41.svg",
      },
    },
    {
      taskTitle: "Pedicure & Manicure Session",
      taskLocation: "456 Spa Lane, Relaxation City",
      taskBudget: 200,
      taskDate: "2023-08-10",
      taskCompletionDate: "2023-08-11",
      taskStatus: "Assigned",
      taskUser: {
        userImage: "/Ellipse 41.svg",
      },
    },
    {
      taskTitle: "Assist with Moving Heavy Items",
      taskLocation: "789 Mover Street, Heavytown",
      taskBudget: 300,
      taskDate: "2023-09-05",
      taskCompletionDate: "2023-09-06",
      taskStatus: "Open",
      taskUser: {
        userImage: "/Ellipse 41.svg",
      },
    },
    {
      taskTitle: "Construction Support",
      taskLocation: "101 Construction Way, Builderville",
      taskBudget: 600,
      taskDate: "2023-10-20",
      taskCompletionDate: "2023-10-21",
      taskStatus: "Assigned",
      taskUser: {
        userImage: "/Ellipse 41.svg",
      },
    },
    {
      taskTitle: "Lab Experiment Assistance",
      taskLocation: "202 Research Street, Labland",
      taskBudget: 200,
      taskDate: "2023-11-15",
      taskCompletionDate: "2023-11-16",
      taskStatus: "Assigned",
      taskUser: {
        userImage: "/Ellipse 42.svg",
      },
    },
    {
      taskTitle: "Car Inspection and Maintenance",
      taskLocation: "303 Auto Avenue, Careville",
      taskBudget: 400,
      taskDate: "2023-12-01",
      taskCompletionDate: "2023-12-02",
      taskStatus: "Open",
      taskUser: {
        userImage: "/Ellipse 42.svg",
      },
    },
    {
      taskTitle: "Pet Sitting",
      taskLocation: "456 Pet Street, Owner's Home, Petland",
      taskBudget: 120,
      taskDate: "2024-01-10",
      taskCompletionDate: "2024-01-11",
      taskStatus: "Open",
      taskUser: {
        userImage: "/Ellipse 41.svg",
      },
    },
    {
      taskTitle: "Babysitting",
      taskLocation: "123 Nursery Lane, City",
      taskBudget: 200,
      taskDate: "2024-02-05",
      taskCompletionDate: "2024-02-06",
      taskStatus: "Open",
      taskUser: {
        userImage: "/Ellipse 42.svg",
      },
    },
    {
      taskTitle: "Web Design Consultation",
      taskLocation: "789 Client Street, Suite 100, Designville",
      taskBudget: 800,
      taskDate: "2024-03-20",
      taskCompletionDate: "2024-03-21",
      taskStatus: "Open",
      taskUser: {
        userImage: "/Ellipse 42.svg",
      },
    },
  ];

  return tasks;
};

export default function Home() {
  const [category, setCategory] = useState([]);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getCategory().then((res: any) => {
      console.log("Categories: ", res);
      setCategory(res);
    });
    getTasks().then((res: any) => {
      console.log("Tasks: ", res);
      setTasks(res);
    });
    //
  }, []);

  return (
    <>
      <Image
        src="/HeadingBadge.svg"
        className="mx-auto  mt-[90px] h-auto w-auto text-center"
        alt="No Img"
        width={240}
        height={30}
      />
      <Hero />
      {category.length > 0 && <Category category={category} />}
      {tasks.length > 0 && <Reviews tasks={tasks} />}
      <CardBox />
      <CommunityHero />
    </>
  );
}
