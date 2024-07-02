import { Button } from "@/components/ui/button";
import { FC, ReactNode } from "react";
import { AiOutlineHome, AiOutlineMessage,AiOutlineLogout } from "react-icons/ai";
import { FaRegBuilding, FaUsers, FaRegCalendarAlt } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsGear } from "react-icons/bs";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-3">
            <ButtonNav
              title="Home"
              icon={<AiOutlineHome className="mr-2 text-lg" />}
            />
            <ButtonNav
              title="Messages"
              icon={<AiOutlineMessage className="mr-2 text-lg" />}
            />
            <ButtonNav
              title="Company Profile"
              icon={<FaRegBuilding className="mr-2 text-lg" />}
            />
            <ButtonNav
              title="All Applicants"
              icon={<FaUsers className="mr-2 text-lg" />}
            />
            <ButtonNav
              title="Job Listings"
              icon={<IoDocumentTextOutline className="mr-2 text-lg" />}
            />
            <ButtonNav
              title="My Schedules"
              icon={<FaRegCalendarAlt className="mr-2 text-lg" />}
            />
          </div>
        </div>

        <div className="space-y-4 py-4">
          <div className="py-2 px-3">
            <h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>
            <ButtonNav
              title="Settings"
              icon={<BsGear className="mr-2 text-lg" />}
            />
            <ButtonNav
              title="Logout"
              style="text-red-500 hover:text-red-500 hover:bg-red-200"
              icon={<AiOutlineLogout className="mr-2 text-lg" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

interface Props {
  title: string;
  icon: ReactNode;
  style?: string
}
const ButtonNav = ({ title, icon,style }: Props) => {
  return (
    <Button
      variant={"ghost"}
      className={`w-full justify-start rounded-none  hover:text-primary  ${style}`}
    >
      {icon} {title}
    </Button>
  );
};
