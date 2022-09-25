type OwnProp = {
  horizontal?: number;
  vertical?: number;
};

export const Space = ({ horizontal, vertical }: OwnProp) => {
  return <div style={{ width: horizontal, height: vertical }} />;
};
