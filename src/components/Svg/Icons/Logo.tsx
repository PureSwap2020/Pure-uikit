import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <img
      width="20"
      alt=""
      src="data:image/png;base64,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"
    />
    // <Svg viewBox="0 0 32 32" {...props}>
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M5.84199 5.00181C5.35647 2.40193 7.35138 0 9.9962 0C12.3302 0 14.2222 1.89206 14.2222 4.22603V9.43607C14.806 9.39487 15.3992 9.37374 16 9.37374C16.5772 9.37374 17.1474 9.39324 17.709 9.43131V4.22603C17.709 1.89206 19.601 0 21.935 0C24.5798 0 26.5747 2.40193 26.0892 5.00181L24.9456 11.1259C28.8705 12.8395 31.8384 15.8157 31.8384 19.5556V21.8182C31.8384 24.8936 29.8038 27.4686 26.9594 29.2068C24.0928 30.9586 20.2149 32 16 32C11.7851 32 7.90719 30.9586 5.04062 29.2068C2.19624 27.4686 0.161621 24.8936 0.161621 21.8182V19.5556C0.161621 15.8355 3.09899 12.8708 6.99084 11.1538L5.84199 5.00181ZM23.48 11.9305L24.8183 4.76446C25.1552 2.96 23.7707 1.29293 21.935 1.29293C20.3151 1.29293 19.0019 2.60612 19.0019 4.22603V10.8562C18.5774 10.8018 18.1462 10.7586 17.709 10.7274C17.1484 10.6873 16.5782 10.6667 16 10.6667C15.3982 10.6667 14.8049 10.689 14.2222 10.7324C13.785 10.765 13.3537 10.8094 12.9293 10.8651V4.22603C12.9293 2.60612 11.6161 1.29293 9.9962 1.29293C8.16055 1.29293 6.77597 2.96 7.11295 4.76446L8.45562 11.9543C4.25822 13.5135 1.45455 16.3344 1.45455 19.5556V21.8182C1.45455 26.7274 7.96677 30.7071 16 30.7071C24.0332 30.7071 30.5455 26.7274 30.5455 21.8182V19.5556C30.5455 16.318 27.7131 13.4847 23.48 11.9305Z"
    //     fill="#633001"
    //   />
    //   <path
    //     d="M30.5455 21.8183C30.5455 26.7275 24.0333 30.7072 16 30.7072C7.96681 30.7072 1.45459 26.7275 1.45459 21.8183V19.5557H30.5455V21.8183Z"
    //     fill="#FEDC90"
    //   />
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M7.11298 4.7645C6.77601 2.96004 8.16058 1.29297 9.99624 1.29297C11.6161 1.29297 12.9293 2.60616 12.9293 4.22607V10.8652C13.9192 10.7351 14.9466 10.6667 16 10.6667C17.0291 10.6667 18.0333 10.732 19.0019 10.8562V4.22607C19.0019 2.60616 20.3151 1.29297 21.935 1.29297C23.7707 1.29297 25.1553 2.96004 24.8183 4.7645L23.4801 11.9306C27.7131 13.4847 30.5455 16.318 30.5455 19.5556C30.5455 24.4648 24.0333 28.4445 16 28.4445C7.96681 28.4445 1.45459 24.4648 1.45459 19.5556C1.45459 16.3345 4.25826 13.5135 8.45566 11.9543L7.11298 4.7645Z"
    //     fill="#D1884F"
    //   />
    //   <path
    //     d="M11.9595 18.9091C11.9595 20.248 11.2359 21.3333 10.3433 21.3333C9.45075 21.3333 8.72717 20.248 8.72717 18.9091C8.72717 17.5702 9.45075 16.4849 10.3433 16.4849C11.2359 16.4849 11.9595 17.5702 11.9595 18.9091Z"
    //     fill="#633001"
    //   />
    //   <path
    //     d="M23.1111 18.9091C23.1111 20.248 22.3875 21.3333 21.4949 21.3333C20.6024 21.3333 19.8788 20.248 19.8788 18.9091C19.8788 17.5702 20.6024 16.4849 21.4949 16.4849C22.3875 16.4849 23.1111 17.5702 23.1111 18.9091Z"
    //     fill="#633001"
    //   />
    // </Svg>
  );
};

export default Icon;