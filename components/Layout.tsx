import React, { ReactNode } from "react";

interface OwnProp {
  children: ReactNode;
  className?: string;
}

export default function Layout({ children, className }: OwnProp) {
  const style = {
    borderRight: "1px solid rgb(229 231 235)",
    borderLeft: "1px solid rgb(229,231,235)",
  };

  return (
    <div
      style={style}
      className={` container min-h-screen w-full flex flex-col border border-r border-l border-slate-300 mx-auto  whitespace-normal leading-8 ${className} lg:max-w-[60rem] md:max-w-[42rem] sm:max-w-[33rem]`}
    >
      <div className=" container flex flex-col items-start justify-center mx-auto w-full  lg:max-w-[45rem] md:max-w-[36rem] sm:max-w-[30rem]">
        {children}
      </div>
    </div>
  );
}

// rgb(100, 149,237)
