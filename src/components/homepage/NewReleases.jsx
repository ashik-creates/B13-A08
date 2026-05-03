import { getAllData } from "@/lib/api";
import NewReleaseCard from "@/ui/NewReleaseCard";

const NewReleases = async () => {
  const courses = await getAllData();
  const lastThree = courses.slice(-3);

  return (
    <div className="max-w-7xl mx-auto my-10">
      <h2 className="text-2xl text-center  lg:text-3xl font-bold mb-8">
        New Releases
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {lastThree.map((course) => (
          <NewReleaseCard key={course.id} course={course}></NewReleaseCard>
        ))}
      </div>
    </div>
  );
};

export default NewReleases;