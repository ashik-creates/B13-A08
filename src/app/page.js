import Banner from "@/components/homepage/Banner";
import LearningTips from "@/components/homepage/LearningTips";
import NewReleases from "@/components/homepage/NewReleases";
import PopularCourses from "@/components/homepage/PopularCourses";
import TopInstructors from "@/components/homepage/TopInstructors";
import { Spinner } from "@heroui/react";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="px-4 sm:px-0">
      <Banner></Banner>
      <Suspense
        fallback={
          <div className="flex justify-center items-center py-10">
            <Spinner></Spinner>
          </div>
        }
      >
        <PopularCourses></PopularCourses>
      </Suspense>
      <LearningTips></LearningTips>
      <TopInstructors></TopInstructors>
      <Suspense
        fallback={
          <div className="flex justify-center items-center py-10">
            <Spinner></Spinner>
          </div>
        }
      >
        <NewReleases></NewReleases>
      </Suspense>
    </div>
  );
}
