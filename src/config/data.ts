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
