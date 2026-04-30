import Banner from "@/components/homepage/Banner";
import LearningTips from "@/components/homepage/LearningTips";
import PopularCourses from "@/components/homepage/PopularCourses";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PopularCourses></PopularCourses>
      <LearningTips></LearningTips>
    </div>
  );
}
