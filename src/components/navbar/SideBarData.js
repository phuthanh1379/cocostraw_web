import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import {RiProductHuntLine} from "react-icons/all";

export const SideBarData = [
    {
        title: "TRANG CHỦ",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "SẢN PHẨM",
        path: "/product",
        icon: <RiProductHuntLine />,
        cName: "nav-text",
    },
    {
        title: "VỀ CHÚNG TÔI",
        path: "/aboutus",
        icon: <IoIcons.IoMdInformationCircleOutline />,
        cName: "nav-text",
    }
];
