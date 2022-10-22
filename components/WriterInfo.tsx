interface HeaderProp {
  name: string;
  family: string;
  image: string;
  postdate?: string;
  onClick?: () => void;
  className?: string;
  width?: number;
  height?: number;
  textinfo?: string;
}

export const WriterInfo = ({
  name,
  family,
  image,
  postdate,
  onClick,
  className,
  width,
  textinfo,
  height,
}: HeaderProp) => {
  return (
    <div
      className={`flex items-center cursor-pointer relative w-full ${className}`}
      onClick={onClick}
    >
      <img
        src={image}
        alt={name}
        width={`${width} ?  ${width} : ${30}`}
        height={`${height} ?  ${height} : ${30}`}
        className="rounded-full "
      />

      <p
        className={`m-0 pl-2  ${textinfo} ? ${textinfo} : text-base  `}
      >{`${name} ${family}`}</p>

      <p className="text-sm m-0 text-extra_text pl-2">{postdate}</p>
    </div>
  );
};
