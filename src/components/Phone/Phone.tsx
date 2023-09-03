import styles from "./Phone.module.css";

export const Phone = ({ color }: { color: string }) => {
  return (
    <div className={styles.phone__block}>
      <svg
        className={styles.phone}
        width="26"
        height="25"
        viewBox="0 0 26 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_252_26)">
          <path
            d="M10.7566 14.9005C13.2301 17.1576 16.0487 18.8026 17.6976 18.6687C17.0649 15.1875 18.177 13.772 20.3437 14.1354C22.913 14.5754 24.4277 15.57 25.3481 16.3734C26.326 17.215 25.9617 18.6113 25.8658 19.2808C25.4631 21.8057 20.5546 25.8416 17.4484 24.8661C12.9617 23.4315 7.51624 18.4392 7.51624 18.4392"
            fill={color}
          />
          <path
            d="M10.7566 14.9005C8.28318 12.6435 6.40413 9.96558 6.40413 8.32059C9.93215 8.64576 11.2552 7.42158 10.6991 5.31753C10.0472 2.81179 8.91593 1.39633 8.03392 0.535582C7.11357 -0.363423 5.73304 0.114771 5.08112 0.286921C2.60767 0.879882 -0.997052 6.12089 0.24926 9.10483C2.05162 13.4468 7.51622 18.4392 7.51622 18.4392"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_252_26">
            <rect width="26" height="25" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <a
        href="ok"
        className={`montserrat semi-bold h4`}
        style={{ color: color }}
      >
        095 489 58 75
      </a>
    </div>
  );
};
