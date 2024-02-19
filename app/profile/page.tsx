"use client";
import React from "react";
import Hero from "../components/Hero";
import Image from "next/image";
import { useTranslation } from "react-i18next";
// import { useRouter } from "next/router";

// const task = {
//   taskTitle: "Yard Cleanup",
//   taskLocation: "Al-Olaya, Riyadh",
//   taskBudget: 650,
//   taskDate: "20 November 2023",
//   taskCompletionDate: "Evening",
//   taskStatus: "Open",
//   taskUser: {
//     userImage: "/Ellipse 42.svg",
//   },
// };
const serverUrl = process.env.NEXT_PUBLIC_API_URL;

const Profile = () => {

    // user profile data
    const [user, setUser] = React.useState({
      user_name: "",
      city: "",
      country: "",
      profile_pic: "",
    });
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [task, setTask] = React.useState([]);
 
    // get id from url
    let url='';
if (typeof window !== 'undefined') {
  url = window.location.href;
}
    // const url = url.substring(url.lastIndexOf('/') + 1);
    // after ?
    const id = url.split('?')[1];
    console.log(id);

    React.useEffect(() => {
      const fetchData = async () => {
        try {
          //https://148.72.245.179/api/profile?user_id=4
          const response = await fetch(`${serverUrl}/profile?user_id=${id}`);
          const data = await response.json();
          if (data && data.status === 422) {
            console.log("not found");
            window.location.href = "/404";
            setError(true);
          }
          console.log(data);
          setUser(data.data);
          setLoading(false);
        } catch (error) {
          // 422 
          if ((error as any).response && (error as any).response.status === 422) {
            console.log("not found");
            window.location.href = "/404";
            setError(true);
          }
          setLoading(false);
        }
      };
      fetchData();
    }, [id]);


  const { t } = useTranslation();
  return (
    <div className="mt-2 flex h-full w-full flex-col justify-center ">
      <div className="flex w-full flex-col items-center justify-center space-y-[10px] align-middle">
        <div className="relative h-auto w-[350px] flex-col items-center justify-center space-y-5 overflow-hidden rounded-[10px] border border-slate-300 bg-white">
          {/* Background image div */}
          <div className="absolute left-0 top-0 h-1/2 w-full">
            <img
              className="h-full w-full object-cover"
              src="/Image 4.svg"
              alt="Background"
            />
          </div>

          <div className="relative z-10">
            <div className="mx-auto mb-5 mt-[125px] w-auto overflow-hidden rounded-full ">
              {/* User image */}
              <Image
                className="mx-auto rounded-full border-4 border-white"
                // user profile data
                src={user?.profile_pic}
           
                width={150}
                height={150}
                alt="user"
              />
            </div>

            <div className="flex flex-col space-y-[10px] pb-5 text-center">
              <h1 className="p-0 font-sfpro text-[27px] font-bold text-black">
                {user?.user_name}
              </h1>
              <h2 className="p-0 font-sfpro text-[15px] text-black ">
                {user?.city} , {user?.country}
              </h2>
            </div>
          </div>
        </div>

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

      <Hero />
    </div>
  );
};

export default Profile;
