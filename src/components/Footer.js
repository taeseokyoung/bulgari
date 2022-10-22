import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

const FOOTDATA = [
    {
        id: 1, title: "고객 관리", alink: "#!",
        submenu: [
            { sid: 1, stitle: "주문 정보", slink: "#!" },
            { sid: 2, stitle: "제품 관리법", slink: "#!" },
            { sid: 3, stitle: "애프터 세일즈", slink: "#!" },
            { sid: 4, stitle: "디지털 보증", slink: "#!" },
            { sid: 5, stitle: "교환 및 반품신청", slink: "#!" },
        ]
    },
    {
        id: 2, title: "불가리 소개", alink: "#!",
        submenu: [
            { sid: 1, stitle: "사회 공헌 활동", slink: "#!" },
            { sid: 2, stitle: "인재 채용", slink: "#!" },
            { sid: 3, stitle: "브랜드 보호", slink: "#!" },
            { sid: 4, stitle: "호텔 & 리조트", slink: "#!" },
            { sid: 5, stitle: "스토어", slink: "#!" },
        ]
    },
    {
        id: 3, title: "개인정보 보호 및 정책", alink: "#!",
        submenu: [
            { sid: 1, stitle: "쿠키 설정", slink: "#!" },
            { sid: 2, stitle: "쿠키 정책", slink: "#!" },
            { sid: 3, stitle: "개인정보 처리방침", slink: "#!" },
            { sid: 4, stitle: "지원자 개인정보 보호정책", slink: "#!" },

        ]
    },
    {
        id: 4, title: "법적 고지", alink: "#!",
        submenu: [
            { sid: 1, stitle: "판매 약관", slink: "#!" },
            { sid: 2, stitle: "이용 약관", slink: "#!" }

        ]
    },
    {
        id: 5, title: "스토어 검색", alink: "#!",
        submenu: [
            { sid: 1, stitle: "스토어 위치", slink: "#!" },

        ]
    },
    {
        id: 6, title: "문의하기", alink: "#!",
        submenu: [
            { sid: 1, stitle: "전화문의", slink: "#!" },
            { sid: 1, stitle: "이메일 보내기", slink: "#!" },
            { sid: 1, stitle: "카카오톡 상담", slink: "#!" },

        ]
    },
]

const Footer = () => {
    return (
        <footer className="Footer">
            <ul className="inner">
                {
                    FOOTDATA.map((el, idx) => (
                        <li key={el.id}>
                            <a href={el.alink} className="fTit">{el.title}</a>
                            <ul className="fSub" >
                                {
                                    el.submenu.map(smenu => (
                                        <li key={el.sid}>
                                            <a href={smenu.slink}>{smenu.stitle}</a>
                                        </li>)
                                    )
                                }
                            </ul>
                        </li>)
                    )
                }
            </ul>

            <div className="copyright inner">
                <div className="left">
                    &copy; 2022. BULGARI all rights reserved.
                </div>
                <div className="right">
                    베송지: 한국
                    {/* <IoIosArrowDown /> */}
                    <MdKeyboardArrowDown />
                </div>

            </div>

            {/* <div className="bottom">
                &copy;
            </div> */}
        </footer >
    )
}

export default Footer