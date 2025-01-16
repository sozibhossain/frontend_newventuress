import { AlignJustify, Bell, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DashNav = () => {
  return (
    <div className="w-full h-[94px] bg-[#2A6C2D] flex items-center">
      <div className="ml-[336px] mr-[37px] flex justify-between w-full">
        <div className="h-[36px] w-[36px] bg-white text-[#2A6C2D] flex justify-center items-center rounded-[4px]">
          <AlignJustify />
        </div>
        <DashRightSide />
      </div>
    </div>
  );
};

export default DashNav;

const DashRightSide = () => {
  return (
    <div className="flex items-center gap-x-[20px]">
      <Link
        href="/"
        className="h-[35px] w-[35px] border-[1px] border-white text-white flex justify-center items-center rounded-[24px] hover:bg-white/20 transition-colors duration-300"
      >
        <MessageCircleMore className="h-[12px] w-[12px]" />
      </Link>
      <Link
        href="/"
        className="h-[35px] w-[35px] border-[1px] border-white text-white flex justify-center items-center rounded-[24px] hover:bg-white/20 transition-colors duration-300"
      >
        <Bell className="h-[12px] w-[12px]" />
      </Link>

      <div className="flex items-center gap-x-[10px]">
        <Image
          src="https://www.monirhrabby.info/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.fe6e329e.jpg&w=256&q=95"
          width={42}
          height={42}
          alt="profile"
          className="rounded-full"
        />
        <div className="flex flex-col gap-y-[2px]">
          <h3 className="text-[16px] font-medium leading-[24px] text-white">
            Monir Hossain
          </h3>
          <p className="text-[12px] leading-[14.53px] font-normal text-[#EAF0EA]">
            Business
          </p>
        </div>
      </div>
    </div>
  );
};
