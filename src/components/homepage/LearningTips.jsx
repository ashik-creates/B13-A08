import { Card, Chip } from "@heroui/react";

import {
  FaBrain,
  FaClock,
  FaCalendarAlt,
  FaListOl,
  FaBookReader,
  FaLightbulb,
  FaTasks,
  FaChartLine,
} from "react-icons/fa";

const LearningTips = () => {
  const learningTips = [
    {
      id: 1,
      title: "Pomodoro Study Technique",
      category: "Study Techniques",
      description:
        "Study for 25 minutes, take a 5-minute break. Repeat this cycle to improve focus and reduce burnout.",
      icon: FaClock,
      color: "text-red-500",
    },
    {
      id: 2,
      title: "Active Recall",
      category: "Study Techniques",
      description:
        "Test yourself instead of rereading notes. Self-quizzing improves long-term memory retention.",
      icon: FaBrain,
      color: "text-purple-500",
    },
    {
      id: 3,
      title: "Time Blocking",
      category: "Time Management",
      description:
        "Assign fixed time slots for study, practice, and revision to avoid distractions.",
      icon: FaCalendarAlt,
      color: "text-blue-500",
    },
    {
      id: 4,
      title: "Set Daily Priorities",
      category: "Time Management",
      description:
        "List the top 3 tasks you must complete each day before doing anything else.",
      icon: FaListOl,
      color: "text-green-500",
    },
    {
      id: 5,
      title: "Feynman Technique",
      category: "Study Techniques",
      description:
        "Teach what you learned in simple words as if explaining to a child.",
      icon: FaBookReader,
      color: "text-yellow-500",
    },
    {
      id: 6,
      title: "Avoid Multitasking",
      category: "Study Techniques",
      description:
        "Focus on one task at a time. Multitasking reduces efficiency and understanding.",
      icon: FaTasks,
      color: "text-pink-500",
    },
    {
      id: 7,
      title: "Weekly Review Habit",
      category: "Time Management",
      description:
        "Spend time each week reviewing what you learned to strengthen memory.",
      icon: FaChartLine,
      color: "text-indigo-500",
    },
    {
      id: 8,
      title: "Break Big Goals into Small Tasks",
      category: "Time Management",
      description:
        "Divide large goals into smaller achievable tasks to avoid overwhelm.",
      icon: FaLightbulb,
      color: "text-orange-500",
    },
  ];

  return (
    <div className="my-16 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        Learning Tips for Students
      </h2>

      <div className="grid grid-cols-4 gap-5">
        {learningTips.map((tip) => {
          const Icon = tip.icon;
          return (
            <Card
              key={tip.id}
              className="p-6  shadow-md border border-gray-200 flex flex-col gap-3 h-full"
            >
              <Icon className={`text-3xl ${tip.color}`}></Icon>
              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-semibold">{tip.title}</h3>
                <p className=" text-gray-700">{tip.description}</p>
              </div>
              <Chip
                className={`w-fit ${tip.category === "Study Techniques" ? "bg-blue-200" : "bg-red-200"}`}
              >
                {tip.category}
              </Chip>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default LearningTips;
