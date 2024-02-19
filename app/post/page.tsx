"use client";
import React, { useEffect } from "react";
import ReviewItem from "../components/ReviewItem";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Router from "next/router";
import axios from "axios";
import CommunityHero from "../components/CommunityHero";
import Overview from "../components/Overview";

const serverUrl = process.env.NEXT_PUBLIC_API_URL;

const getTask = async () => {
  try {
    // get id from url
    const url = window.location.href;
    // const url = url.substring(url.lastIndexOf('/') + 1);
    // after ?

    const id = url.split("?")[1];
    console.log(id);
    // i need like this ?id=1
    // const pram = new URLSearchParams(id);
    // console.log(pram);

    const response = await axios.get(`${serverUrl}/task?id=`.concat(id));
    console.log(response);
    // if response 404 go to 404 page
    if (response.status === 404) {
      console.log("not found");
    }
    // if not found go to 404
    if (response.data.data.length === 0) {
      console.log("not found");
    }
    return response.data.data;
  } catch (error) {
    console.log("not found");

    // ...

    Router.push("/404");

    // Redirect to 404 page here

    return error;
  }
};

// update task use effect

const Post = () => {
  const [task, setTask] = React.useState([]);
  // const router = useRouter();
  const { t } = useTranslation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = window.location.href;
        // const url = url.substring(url.lastIndexOf('/') + 1);
        // after ?

        const id = url.split("?")[1];

        const response = await axios.get(`${serverUrl}/task?id=`.concat(id));
        console.log(response);
        if (response.status === 404 || response.data.data.length === 0) {
          console.log("not found");
          window.location.href = "/404";
        } else {
          setTask(response.data.data);
        }
      } catch (error) {
        console.log("not found");
        if (typeof window !== "undefined") {
          // it's safe to use window now
          //window.location.href = '/404';
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-20 flex h-full w-full flex-col justify-center ">
      <div className="flex w-full flex-col items-center justify-center space-y-[10px] align-middle">
        <ReviewItem className="mx-auto" task={task} bgColor="bg-white" />
        <div className="inline-flex h-11 w-[353px] items-center justify-start space-x-5 rounded-[10px] bg-slate-50 px-5 py-2.5">
          <Image
            src="/tabler-icon-info-square-rounded-filled.svg"
            width={24}
            height={24}
            alt="info"
          />
          <div className="flex space-x-[5px]">
            <p>{t("get_app_to_view_link")}</p>
            <Image
              src="/tabler-icon-link.svg"
              width={24}
              height={24}
              alt="appstore"
            />
          </div>
        </div>
      </div>
      <Overview />
      <CommunityHero />
    </div>
  );
};

export default Post;
