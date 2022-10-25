interface OwenProp {
  onClick?: () => void;
  children: string;
  className?: string;
}

export const ContentText: React.FC<OwenProp> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <p
      onClick={onClick}
      className={` m-0 cursor-pointer ${className}`}
      dangerouslySetInnerHTML={{ __html: children }}
    ></p>
  );
};
