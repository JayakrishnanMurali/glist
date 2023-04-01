import { Icons } from "@/components/common/icons";

export const _dashboardSection = [
  {
    id: "/dashboard",
    name: "Overview",
    widgets: ["weather", "calendar", "meetings"],
    icon: Icons.dashboard,
    isNew: false,
  },
  {
    id: "/task",
    name: "Tasks",
    widgets: [],
    icon: Icons.tasks,
    isNew: false,
  },
  {
    id: "/feed",
    name: "News",
    widgets: [],
    icon: Icons.news,
    isNew: true,
  },
  {
    id: "/finance",
    name: "Finance",
    widgets: [],
    icon: Icons.finance,
    isNew: false,
  },
  {
    id: "/notes",
    name: "Notes",
    widgets: [],
    icon: Icons.notes,
    isNew: false,
  },
];

export type _dashboardSectionType = typeof _dashboardSection;

export const weatherPatternColor = [
  {
    type: "sunny",
    bg: "bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-red-400 via-amber-300 to-cyan-600",
    icon: Icons.sun,
  },
];
