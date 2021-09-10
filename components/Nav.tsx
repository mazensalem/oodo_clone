import React from "react";
import Image from "next/image";

export default function Nav() {
  return (
    <header className="bg-red-900 w-full h-10 relative">
      {/* Links */}
      <nav className="bg-yellow-300 relative h-full w-1/6 mr-10 float-right">
        {/* Chat */}
        <div className="float-right absolute right-1 top-1/2 transform -translate-y-1/2">
          <div className="relative">
            <div className="bg-white absolute -right-2 text-center leading-5 text-sm rounded-full w-5 h-5">
              +1
            </div>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/chat.png" />
          </div>
        </div>
        {/* TODO */}
        <div className="absolute left-1/2 top-1/2 transform translate-x-10 -translate-y-1/2">
          <div className="relative">
            <div className="bg-white absolute -right-2 text-center leading-5 text-sm rounded-full w-5 h-5">
              +1
            </div>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/document.png" />
          </div>
        </div>
        {/* User */}
        <div className="bg-green-400 flex space-x-2 absolute top-1/2 transform -translate-y-1/2">
          <Image
            src="/user.png"
            width={26}
            height={26}
            className="rounded-full"
          />
          <span>user name</span>
        </div>
      </nav>
    </header>
  );
}
