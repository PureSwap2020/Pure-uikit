import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  // const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <img
      width="20"
      alt=""
      src="data:image/png;base64,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"
    />
    // <Svg viewBox="0 0 160 26" {...props}>
    //   <path
    //     d="M30.8524 19.7569C30.4803 19.7569 30.2173 19.6799 30.0633 19.5259C29.9221 19.372 29.8516 19.1282 29.8516 18.7946V7.65066C29.8516 7.31705 29.9285 7.07326 30.0825 6.91928C30.2365 6.75248 30.4931 6.66907 30.8524 6.66907H35.5679C37.3642 6.66907 38.6858 7.04759 39.5327 7.80463C40.3796 8.56167 40.803 9.69082 40.803 11.1921C40.803 12.6805 40.3796 13.8032 39.5327 14.5603C38.6987 15.3045 37.3771 15.6766 35.5679 15.6766H33.7394V18.7946C33.7394 19.1282 33.6624 19.372 33.5085 19.5259C33.3545 19.6799 33.0914 19.7569 32.7193 19.7569H30.8524ZM35.2599 12.8858C35.786 12.8858 36.1902 12.7446 36.4725 12.4624C36.7676 12.1801 36.9151 11.7566 36.9151 11.1921C36.9151 10.6147 36.7676 10.1848 36.4725 9.90253C36.1902 9.62025 35.786 9.47911 35.2599 9.47911H33.7394V12.8858H35.2599Z"
    //     fill={textColor}
    //   />
    //   <path
    //     d="M45.3484 20.0456C44.1423 20.0456 43.1735 19.6607 42.4421 18.8908C41.7236 18.1081 41.3643 17.011 41.3643 15.5996C41.3643 14.5218 41.6081 13.5787 42.0957 12.7703C42.5961 11.9619 43.2954 11.3396 44.1936 10.9034C45.1046 10.4543 46.1503 10.2297 47.3308 10.2297C48.306 10.2297 49.1657 10.3388 49.9099 10.5569C50.6669 10.7622 51.3598 11.0638 51.9885 11.4615V19.1602C51.9885 19.404 51.9436 19.5644 51.8538 19.6414C51.764 19.7184 51.5844 19.7569 51.3149 19.7569H49.3517C49.2106 19.7569 49.1015 19.7376 49.0245 19.6992C48.9475 19.6478 48.8834 19.5708 48.8321 19.4682L48.5819 18.8908C48.2097 19.2886 47.7607 19.5773 47.2346 19.7569C46.7213 19.9494 46.0926 20.0456 45.3484 20.0456ZM46.7919 17.428C47.2923 17.428 47.6837 17.3061 47.966 17.0623C48.2482 16.8186 48.3894 16.4721 48.3894 16.023V13.0205C48.1456 12.905 47.8376 12.8473 47.4655 12.8473C46.7855 12.8473 46.2402 13.0847 45.8296 13.5594C45.4318 14.0342 45.2329 14.7014 45.2329 15.5611C45.2329 16.8057 45.7526 17.428 46.7919 17.428Z"
    //     fill={textColor}
    //   />
    //   <path
    //     d="M54.667 19.7569C54.2949 19.7569 54.0319 19.6799 53.8779 19.5259C53.7239 19.372 53.6469 19.1282 53.6469 18.7946V11.1151C53.6469 10.8841 53.6854 10.7301 53.7624 10.6532C53.8522 10.5633 54.0318 10.5184 54.3013 10.5184H56.2837C56.4377 10.5184 56.5532 10.5441 56.6302 10.5954C56.72 10.6339 56.7713 10.7109 56.7841 10.8264L56.8804 11.4038C57.2397 11.0445 57.708 10.7622 58.2854 10.5569C58.8756 10.3388 59.53 10.2297 60.2486 10.2297C61.2879 10.2297 62.1283 10.5248 62.7699 11.1151C63.4115 11.6925 63.7322 12.5522 63.7322 13.6942V18.7946C63.7322 19.1282 63.6552 19.372 63.5013 19.5259C63.3601 19.6799 63.1035 19.7569 62.7314 19.7569H60.8645C60.4924 19.7569 60.2229 19.6799 60.0561 19.5259C59.9021 19.372 59.8251 19.1282 59.8251 18.7946V13.9444C59.8251 13.5594 59.7417 13.2836 59.5749 13.1167C59.4081 12.9499 59.1451 12.8665 58.7858 12.8665C58.4009 12.8665 58.0929 12.9692 57.862 13.1745C57.6438 13.3798 57.5348 13.6621 57.5348 14.0213V18.7946C57.5348 19.1282 57.4578 19.372 57.3038 19.5259C57.1627 19.6799 56.906 19.7569 56.5339 19.7569H54.667Z"
    //     fill={textColor}
    //   />
    //   <path
    //     d="M70.5354 20.0456C68.739 20.0456 67.3532 19.6286 66.3781 18.7946C65.4029 17.9605 64.9153 16.748 64.9153 15.1569C64.9153 14.1817 65.1399 13.322 65.5889 12.5778C66.038 11.8336 66.686 11.2562 67.5329 10.8456C68.3926 10.435 69.4062 10.2297 70.5739 10.2297C71.4592 10.2297 72.2034 10.3131 72.8065 10.4799C73.4224 10.6467 73.9677 10.9034 74.4425 11.2498C74.5836 11.3396 74.6542 11.4551 74.6542 11.5963C74.6542 11.6989 74.6029 11.8336 74.5002 12.0004L73.7111 13.367C73.6213 13.5466 73.5122 13.6364 73.3839 13.6364C73.3069 13.6364 73.185 13.5851 73.0182 13.4824C72.6718 13.2643 72.3446 13.1039 72.0366 13.0013C71.7415 12.8986 71.3694 12.8473 70.9203 12.8473C70.2787 12.8473 69.7591 13.0526 69.3613 13.4632C68.9764 13.8738 68.7839 14.4384 68.7839 15.1569C68.7839 15.8883 68.9828 16.4529 69.3806 16.8506C69.7783 17.2356 70.3237 17.428 71.0165 17.428C71.4271 17.428 71.7992 17.3703 72.1329 17.2548C72.4665 17.1393 72.8065 16.9789 73.1529 16.7736C73.3326 16.671 73.4609 16.6197 73.5379 16.6197C73.6534 16.6197 73.756 16.7095 73.8458 16.8891L74.7119 18.3711C74.7761 18.4994 74.8082 18.6021 74.8082 18.6791C74.8082 18.7946 74.7312 18.9036 74.5772 19.0063C74.0383 19.3527 73.4481 19.6093 72.8065 19.7761C72.1778 19.9558 71.4207 20.0456 70.5354 20.0456Z"
    //     fill={textColor}
    //   />
    //   <path
    //     d="M79.6881 20.0456C78.482 20.0456 77.5132 19.6607 76.7819 18.8908C76.0633 18.1081 75.704 17.011 75.704 15.5996C75.704 14.5218 75.9478 13.5787 76.4354 12.7703C76.9358 11.9619 77.6351 11.3396 78.5333 10.9034C79.4443 10.4543 80.4901 10.2297 81.6705 10.2297C82.6457 10.2297 83.5054 10.3388 84.2496 10.5569C85.0067 10.7622 85.6995 11.0638 86.3283 11.4615V19.1602C86.3283 19.404 86.2834 19.5644 86.1935 19.6414C86.1037 19.7184 85.9241 19.7569 85.6546 19.7569H83.6915C83.5503 19.7569 83.4412 19.7376 83.3643 19.6992C83.2873 19.6478 83.2231 19.5708 83.1718 19.4682L82.9216 18.8908C82.5495 19.2886 82.1004 19.5773 81.5743 19.7569C81.0611 19.9494 80.4323 20.0456 79.6881 20.0456ZM81.1316 17.428C81.632 17.428 82.0234 17.3061 82.3057 17.0623C82.588 16.8186 82.7291 16.4721 82.7291 16.023V13.0205C82.4853 12.905 82.1774 12.8473 81.8053 12.8473C81.1252 12.8473 80.5799 13.0847 80.1693 13.5594C79.7715 14.0342 79.5726 14.7014 79.5726 15.5611C79.5726 16.8057 80.0923 17.428 81.1316 17.428Z"
    //     fill={textColor}
    //   />
    //   <path
    //     d="M98.4184 19.0255C98.5082 19.1282 98.5531 19.2436 98.5531 19.372C98.5531 19.4874 98.5146 19.5837 98.4377 19.6607C98.3607 19.7248 98.258 19.7569 98.1297 19.7569H95.1465C94.9668 19.7569 94.8321 19.7441 94.7423 19.7184C94.6653 19.6799 94.5819 19.6093 94.4921 19.5067L91.8745 15.946V18.7946C91.8745 19.1282 91.7975 19.372 91.6435 19.5259C91.4896 19.6799 91.2265 19.7569 90.8544 19.7569H88.9875C88.6154 19.7569 88.3523 19.6799 88.1984 19.5259C88.0572 19.372 87.9866 19.1282 87.9866 18.7946V7.65066C87.9866 7.31705 88.0636 7.07326 88.2176 6.91928C88.3716 6.75248 88.6282 6.66907 88.9875 6.66907H90.8544C91.2265 6.66907 91.4896 6.75248 91.6435 6.91928C91.7975 7.07326 91.8745 7.31705 91.8745 7.65066V14.0983L94.4151 10.7879C94.4921 10.6852 94.5755 10.6147 94.6653 10.5762C94.7551 10.5377 94.8898 10.5184 95.0695 10.5184H98.0527C98.181 10.5184 98.2773 10.5569 98.3414 10.6339C98.4184 10.6981 98.4569 10.7879 98.4569 10.9034C98.4569 11.0317 98.412 11.1472 98.3222 11.2498L95.031 15.0222L98.4184 19.0255Z"
    //     fill={textColor}
    //   />
    //   <path
    //     d="M104.668 20.0456C103.59 20.0456 102.628 19.866 101.781 19.5067C100.947 19.1474 100.286 18.6085 99.7985 17.89C99.3109 17.1714 99.0671 16.2925 99.0671 15.2531C99.0671 13.6236 99.529 12.379 100.453 11.5193C101.377 10.6596 102.705 10.2297 104.437 10.2297C106.131 10.2297 107.414 10.6532 108.286 11.5C109.172 12.334 109.614 13.4953 109.614 14.9837C109.614 15.6252 109.332 15.946 108.767 15.946H102.724C102.724 16.4978 102.929 16.9212 103.34 17.2163C103.763 17.5114 104.398 17.659 105.245 17.659C105.771 17.659 106.208 17.6141 106.554 17.5243C106.913 17.4216 107.273 17.2741 107.632 17.0816C107.786 17.0174 107.889 16.9854 107.94 16.9854C108.055 16.9854 108.152 17.0623 108.229 17.2163L108.883 18.4481C108.947 18.5764 108.979 18.6727 108.979 18.7368C108.979 18.8523 108.902 18.9614 108.748 19.064C108.222 19.4105 107.626 19.6607 106.958 19.8146C106.291 19.9686 105.528 20.0456 104.668 20.0456ZM106.15 14.0406C106.15 13.553 106.009 13.1745 105.726 12.905C105.444 12.6356 105.021 12.5009 104.456 12.5009C103.892 12.5009 103.462 12.642 103.167 12.9243C102.872 13.1937 102.724 13.5658 102.724 14.0406H106.15Z"
    //     fill={textColor}
    //   />
    //   <path
    //     d="M116.211 20.0456C115.133 20.0456 114.113 19.9365 113.151 19.7184C112.189 19.4874 111.412 19.1667 110.822 18.7561C110.604 18.6149 110.495 18.4674 110.495 18.3134C110.495 18.2107 110.533 18.1017 110.61 17.9862L111.553 16.4849C111.656 16.331 111.759 16.254 111.861 16.254C111.926 16.254 112.035 16.2989 112.189 16.3887C112.663 16.6582 113.202 16.8763 113.805 17.0431C114.408 17.2099 115.005 17.2933 115.595 17.2933C116.198 17.2933 116.641 17.2035 116.923 17.0238C117.218 16.8442 117.366 16.5555 117.366 16.1577C117.366 15.7728 117.206 15.4713 116.885 15.2531C116.577 15.035 115.993 14.7591 115.133 14.4255C113.837 13.9379 112.824 13.3926 112.092 12.7896C111.374 12.1737 111.015 11.3396 111.015 10.2875C111.015 9.01718 111.47 8.04843 112.381 7.38121C113.292 6.71398 114.505 6.38037 116.019 6.38037C117.071 6.38037 117.969 6.47661 118.713 6.66907C119.47 6.84871 120.112 7.131 120.638 7.51593C120.856 7.68274 120.965 7.83671 120.965 7.97786C120.965 8.06767 120.927 8.17032 120.85 8.2858L119.907 9.78705C119.791 9.94103 119.688 10.018 119.599 10.018C119.534 10.018 119.425 9.97311 119.271 9.88329C118.527 9.3957 117.642 9.15191 116.615 9.15191C116.064 9.15191 115.64 9.24173 115.345 9.42137C115.05 9.601 114.902 9.89612 114.902 10.3067C114.902 10.589 114.979 10.82 115.133 10.9996C115.287 11.1792 115.493 11.3396 115.749 11.4808C116.019 11.6091 116.429 11.7759 116.981 11.9812L117.347 12.1159C118.296 12.488 119.04 12.8473 119.579 13.1937C120.131 13.5273 120.548 13.9444 120.83 14.4448C121.113 14.9324 121.254 15.5483 121.254 16.2925C121.254 17.4344 120.824 18.3455 119.964 19.0255C119.117 19.7056 117.866 20.0456 116.211 20.0456Z"
    //     fill={textColor}
    //   />
    //   <path
    //     d="M125.343 19.7569C125.151 19.7569 125.003 19.7248 124.9 19.6607C124.798 19.5965 124.721 19.4682 124.67 19.2757L122.187 10.9611C122.161 10.8841 122.148 10.8264 122.148 10.7879C122.148 10.6083 122.277 10.5184 122.533 10.5184H125.074C125.241 10.5184 125.362 10.5505 125.439 10.6147C125.516 10.666 125.568 10.7558 125.593 10.8841L126.633 15.2531L127.941 11.731C128.006 11.577 128.07 11.4744 128.134 11.423C128.211 11.3589 128.339 11.3268 128.519 11.3268H129.731C129.911 11.3268 130.033 11.3589 130.097 11.423C130.174 11.4744 130.245 11.577 130.309 11.731L131.598 15.2531L132.657 10.8841C132.695 10.7558 132.747 10.666 132.811 10.6147C132.875 10.5505 132.991 10.5184 133.157 10.5184H135.717C135.974 10.5184 136.102 10.6083 136.102 10.7879C136.102 10.8264 136.089 10.8841 136.064 10.9611L133.562 19.2757C133.51 19.4682 133.433 19.5965 133.331 19.6607C133.241 19.7248 133.1 19.7569 132.907 19.7569H131.021C130.841 19.7569 130.707 19.7248 130.617 19.6607C130.527 19.5837 130.45 19.4554 130.386 19.2757L129.116 15.7921L127.845 19.2757C127.794 19.4554 127.717 19.5837 127.614 19.6607C127.524 19.7248 127.39 19.7569 127.21 19.7569H125.343Z"
    //     fill={textColor}
    //   />
    //   <path
    //     d="M140.981 20.0456C139.775 20.0456 138.806 19.6607 138.075 18.8908C137.356 18.1081 136.997 17.011 136.997 15.5996C136.997 14.5218 137.241 13.5787 137.728 12.7703C138.229 11.9619 138.928 11.3396 139.826 10.9034C140.737 10.4543 141.783 10.2297 142.963 10.2297C143.938 10.2297 144.798 10.3388 145.542 10.5569C146.299 10.7622 146.992 11.0638 147.621 11.4615V19.1602C147.621 19.404 147.576 19.5644 147.486 19.6414C147.396 19.7184 147.217 19.7569 146.947 19.7569H144.984C144.843 19.7569 144.734 19.7376 144.657 19.6992C144.58 19.6478 144.516 19.5708 144.465 19.4682L144.214 18.8908C143.842 19.2886 143.393 19.5773 142.867 19.7569C142.354 19.9494 141.725 20.0456 140.981 20.0456ZM142.424 17.428C142.925 17.428 143.316 17.3061 143.598 17.0623C143.881 16.8186 144.022 16.4721 144.022 16.023V13.0205C143.778 12.905 143.47 12.8473 143.098 12.8473C142.418 12.8473 141.873 13.0847 141.462 13.5594C141.064 14.0342 140.865 14.7014 140.865 15.5611C140.865 16.8057 141.385 17.428 142.424 17.428Z"
    //     fill={textColor}
    //   />
    //   <path
    //     d="M150.28 23.6447C149.908 23.6447 149.645 23.5678 149.491 23.4138C149.35 23.2598 149.279 23.016 149.279 22.6824V11.654C149.857 11.2434 150.582 10.9034 151.454 10.6339C152.327 10.3645 153.238 10.2297 154.187 10.2297C158.062 10.2297 160 11.8721 160 15.1569C160 16.6453 159.589 17.8322 158.768 18.7176C157.947 19.6029 156.786 20.0456 155.284 20.0456C154.861 20.0456 154.45 19.9943 154.053 19.8916C153.668 19.789 153.347 19.6478 153.09 19.4682V22.6824C153.09 23.016 153.013 23.2598 152.859 23.4138C152.705 23.5678 152.442 23.6447 152.07 23.6447H150.28ZM154.457 17.4473C155.009 17.4473 155.419 17.242 155.689 16.8314C155.971 16.408 156.112 15.8434 156.112 15.1377C156.112 14.3036 155.945 13.7198 155.612 13.3862C155.291 13.0398 154.79 12.8665 154.11 12.8665C153.674 12.8665 153.328 12.9243 153.071 13.0398V16.1C153.071 16.5363 153.193 16.8699 153.437 17.1008C153.681 17.3318 154.021 17.4473 154.457 17.4473Z"
    //     fill={textColor}
    //   />
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M4.38998 4.50033C4.01476 2.49106 5.55649 0.634766 7.60049 0.634766C9.40427 0.634766 10.8665 2.09701 10.8665 3.90078V7.92728C11.3177 7.89544 11.7761 7.87911 12.2404 7.87911C12.6865 7.87911 13.1272 7.89418 13.5612 7.9236V3.90078C13.5612 2.09701 15.0234 0.634766 16.8272 0.634766C18.8712 0.634766 20.4129 2.49106 20.0377 4.50033L19.1539 9.23326C22.1872 10.5576 24.4809 12.8577 24.4809 15.748V17.4966C24.4809 19.8734 22.9085 21.8634 20.7102 23.2068C18.4948 24.5606 15.4978 25.3654 12.2404 25.3654C8.98304 25.3654 5.98604 24.5606 3.77065 23.2068C1.57242 21.8634 0 19.8734 0 17.4966V15.748C0 12.873 2.2701 10.5817 5.27785 9.25477L4.38998 4.50033ZM18.0212 9.85508L19.0555 4.3169C19.3159 2.92236 18.2459 1.63399 16.8272 1.63399C15.5753 1.63399 14.5604 2.64886 14.5604 3.90078V9.02479C14.2324 8.98273 13.8991 8.9494 13.5612 8.92524C13.128 8.89426 12.6873 8.87833 12.2404 8.87833C11.7753 8.87833 11.3168 8.89559 10.8665 8.92912C10.5286 8.95429 10.1953 8.98862 9.86729 9.03169V3.90078C9.86729 2.64886 8.85241 1.63399 7.60049 1.63399C6.18184 1.63399 5.11179 2.92235 5.37222 4.3169L6.40988 9.87345C3.16599 11.0784 0.999219 13.2586 0.999219 15.748V17.4966C0.999219 21.2906 6.03208 24.3662 12.2404 24.3662C18.4488 24.3662 23.4817 21.2906 23.4817 17.4966V15.748C23.4817 13.2458 21.2927 11.0562 18.0212 9.85508Z"
    //     fill="#633001"
    //   />
    //   <path
    //     d="M23.4815 17.4967C23.4815 21.2907 18.4486 24.3663 12.2402 24.3663C6.03189 24.3663 0.999023 21.2907 0.999023 17.4967V15.748H23.4815V17.4967Z"
    //     fill="#FEDC90"
    //   />
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M5.37202 4.31671C5.1116 2.92216 6.18164 1.63379 7.6003 1.63379C8.85222 1.63379 9.8671 2.64867 9.8671 3.90059V9.0315C10.6321 8.93102 11.4261 8.87813 12.2402 8.87813C13.0356 8.87813 13.8116 8.9286 14.5602 9.02459V3.90059C14.5602 2.64867 15.5751 1.63379 16.827 1.63379C18.2457 1.63379 19.3157 2.92216 19.0553 4.31671L18.021 9.85488C21.2925 11.056 23.4815 13.2457 23.4815 15.7478C23.4815 19.5418 18.4486 22.6174 12.2402 22.6174C6.03189 22.6174 0.999023 19.5418 0.999023 15.7478C0.999023 13.2584 3.16579 11.0782 6.40968 9.87326L5.37202 4.31671Z"
    //     fill="#D1884F"
    //   />
    //   <path
    //     d="M9.11817 15.2485C9.11817 16.2833 8.55896 17.1221 7.86914 17.1221C7.17932 17.1221 6.62012 16.2833 6.62012 15.2485C6.62012 14.2138 7.17932 13.375 7.86914 13.375C8.55896 13.375 9.11817 14.2138 9.11817 15.2485Z"
    //     fill="#633001"
    //   />
    //   <path
    //     d="M17.7363 15.2485C17.7363 16.2833 17.1771 17.1221 16.4873 17.1221C15.7975 17.1221 15.2383 16.2833 15.2383 15.2485C15.2383 14.2138 15.7975 13.375 16.4873 13.375C17.1771 13.375 17.7363 14.2138 17.7363 15.2485Z"
    //     fill="#633001"
    //   />
    // </Svg>
  );
};

export default Logo;
