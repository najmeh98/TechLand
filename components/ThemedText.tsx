type textProp = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const ThemedText: React.FC<textProp> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <p onClick={onClick} className={` m-0 ${className}`}>
      {children}
    </p>
  );
};
