import React from "react";

export default function NavBar() {
  return (
    <div className="flex justify-between bg-black p-5">
      <img
        className="h-8 ml-6 object-cover"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="logo"
      />
      <img className="h-8 w-8 rounded-full" src="/img/avather.png" alt="avater" />
    </div>
  );
}
