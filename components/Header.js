import {
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
  CollectionIcon,
  BadgeCheckIcon,
} from "@heroicons/react/outline";

import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="m-5 flex flex-col sm:flex-row justify-between items-center h-auto ">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        alt=""
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
