import { ArrowIcon } from "../icon";

interface OwnProp {
  children: React.ReactNode;
}
export const Note = ({ children }: OwnProp): JSX.Element => {
  return (
    <div
      className=" absolute top-16 -left-3 flex items-end flex-col   w-full  !z-10  "
      style={{ maxWidth: "313px" }}
    >
      <ul className="pl-0 my-2 cursor-pointer bg-white rounded w-full flex flex-col items-start  justify-between shadow-md border border-solid ran border-slate-200 ">
        {children}
      </ul>
      <ArrowIcon
        fill="#fff"
        style={{
          height: "20",
          width: "20",
          top: "-5px",
          left: "calc(65px)",
          filter: "drop-shadow(rgb(207, 217, 222) 1px -1px 1px)",
          position: "absolute",
        }}
      />
    </div>
  );
};
