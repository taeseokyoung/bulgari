import { HiOutlineX } from "react-icons/hi";

const TopBanner = () => {
    return (
        <section className="TopBanner gothic">
            <div className="hInner">
                <p className="">SS23 에메랄드 캡슐 컬렉션을 온라인 스토어에서 가장 먼저 만나보세요.</p>
                <a href="#!">자세히 보기</a>
            </div>
            <button><HiOutlineX /></button>
        </section>
    )
}

export default TopBanner;