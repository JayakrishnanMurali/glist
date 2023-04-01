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

export const _layout = {
  "2xl": [
    { i: "weather1", x: 0, y: 0, h: 1, w: 1 },
    { i: "weather2", x: 2, y: 1, h: 1, w: 1 },
    { i: "weather3", x: 0, y: 2, h: 1, w: 1 },
    { i: "weather4", x: 1, y: 0, h: 1, w: 2 },
    { i: "weather5", x: 0, y: 1, h: 1, w: 2 },
    { i: "weather6", x: 1, y: 2, h: 1, w: 2 },
  ],
};
