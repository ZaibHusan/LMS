import { assets } from "../assets/assets";


let fetchingcourse = async () => {
  try {
    const response = await fetch("https://lms-back-end-mu.vercel.app/getout");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching course data:", error);
  }
};


const courseData = await fetchingcourse();

export default courseData;





export const buyers = [
    {
      id: 1,
      name: "Ali Khan",
      date: "12 August 2024",
      amount: "$30",
      profile: assets.profile_img,
    },
    {
      id: 2,
      name: "Sara Ahmed",
      date: "15 August 2024",
      amount: "$45",
      profile: assets.profile_img,
    },
    {
      id: 3,
      name: "Usman Malik",
      date: "20 August 2024",
      amount: "$50",
      profile: assets.profile_img,
    },
    {
      id: 4,
      name: "Hina Shah",
      date: "25 August 2024",
      amount: "$25",
      profile: assets.profile_img,
    },
    {
      id: 5,
      name: "Bilal Hussain",
      date: "30 August 2024",
      amount: "$60",
      profile: assets.profile_img,
    },
  ];



