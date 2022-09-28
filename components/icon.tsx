export const ArrowRight = () => (
  <svg
    className="arrow-left-19px_svg__svgIcon-use"
    width="26px"
    height="26px"
    viewBox="0 0 19 19"
    aria-hidden="true"
    style={{ transform: "rotate(180deg)" }}
  >
    <path
      d="M11.47 13.97L6.99 9.48 11.47 5l.55.5-3.99 3.98 4 4z"
      fill-rule="evenodd"
    ></path>
  </svg>
);

export const ArrowLeft = () => (
  <svg
    className="arrow-left-19px_svg__svgIcon-use"
    width="26px"
    height="26px"
    viewBox="0 0 19 19"
    aria-hidden="true"
  >
    <path
      d="M11.47 13.97L6.99 9.48 11.47 5l.55.5-3.99 3.98 4 4z"
      fill-rule="evenodd"
    ></path>
  </svg>
);

export const ArrowIcon = ({ fill, style }: { fill: string; style: any }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill={fill} style={style}>
    <g>
      <path d="M12.538 6.478c-.14-.146-.335-.228-.538-.228s-.396.082-.538.228l-9.252 9.53c-.21.217-.27.538-.152.815.117.277.39.458.69.458h18.5c.302 0 .573-.18.69-.457.118-.277.058-.598-.152-.814l-9.248-9.532z"></path>
    </g>
  </svg>
);
