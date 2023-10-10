import { HiFolderOpen, HiLightBulb} from "react-icons/hi";
import {LuLayoutDashboard } from "react-icons/lu";
import {BsFillBarChartFill } from "react-icons/bs";

export const dataDashboard = [
  {
    key: "md1",
    link: "/dashboard",
    label: "Dashboard",
    labelMobile:"Dashboard",
    icon: LuLayoutDashboard
  },
  {
    key: "md2",
    link: "/dashboard/project",
    label: "Project",
    icon: HiFolderOpen,
  },
  {
    key: "md3",
    link: "/dashboard/skill",
    label: "Skill",
    icon: HiLightBulb,
  },
  {
    key: "md4",
    link: "/dashboard/experience",
    label: "Experience",
    icon: BsFillBarChartFill,
  },
]