import React from 'react'

const History = ({ HISTORY }) => {
    return (
        <section className='History'>
            <figure className='history01'></figure>
            <div className="inner hsp">
                <div className="txt 01">
                    <strong>로만 주얼리, 불가리</strong>
                    <h2>불가리의 역사</h2>
                    <p>그리스 출신의 은세공가 '소티리오 불가리'가 1884년 이탈리아 로마에 창립한 불가리.<br /> 이탈리아의 아름다움을 담은 작품과 장인정신, 그리고 장엄한 주얼리 디자인으로 독보적인 명성을 얻은 불가리는 <br /> 수년간의 다채로운 컬러 조합으로 차별화된 디자인, 이탈리아 로마의 헤리티지에서 얻은 특별한 모티브와 볼륨감의 완벽한 조화를 담아낸다. <br /> 유서깊은 불가리의 고전적인 아름다움을 잃지 않으면서도 혁신적인 변화와 새로운 트렌드를 도입하는데 주저하지 않은 불가리는  <br /> 현대 디자인의 아이콘으로 자리매김하였다.</p>
                </div>
                <div className="history02">
                    <div className="pic hsp">
                        <div>
                            <figure className='h01'></figure>
                            <div className="box">
                                <h3>실버에서 골드까지</h3>
                                <p>소티리오 불가리가 세공한 정교한 은공예품은 17-18세기에 유행한 그랜드 투어를 즐기던 영국 여행객들에게 큰 사랑을 받았으며 뛰어난 은공예 전문지식을 기반으로, 하이주얼리 비지니스의 성장에 몰두하기 시작하였습니다.</p>
                            </div>
                        </div>
                        <div>
                            <figure className='h02'></figure>
                            <div className="box">
                                <h3>화려한 컬러와 다채로운 매력</h3>
                                <p>1950년대 중반, 불가리는 진귀한 스톤들의 다양한 컬러를 완벽히 어우르는 조화로운 주얼리를 선보이며 다시 한 번 도약합니다. 로마 건축물의 둥근 지붕을 연상시키는 카보숑컷을 통해 보석 본연의 컬러를 극대화하였으며, 이는 브랜드를 대표하는 시그니처가 되었습니다.</p>
                            </div>
                        </div>
                        <div>
                            <figure className='h03'></figure>
                            <div className="box">
                                <h3>모듈식 주얼리와 유니크한 소재</h3>
                                <p>모듈식 주얼리는 센세이션을 불러일으켰습니다. 특히, 강렬한 디자인의 싱글 피스는, 첫 선을 보인 이래 헤마타이트에서부터 코랄, 스틸부터 파베 세팅 다이아몬드까지 다양한 소재로 다채로운 스타일로 선보였습니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="history03">
                    <div className="txt 01">
                        <strong>역사의 아이콘</strong>
                        <h2>아이덴티티</h2>
                    </div>
                    <ul className="inner">
                        {
                            HISTORY.map((el, idx) => {
                                return (
                                    <li key={el.id}>
                                        <figure className={`i0${idx + 1}`}></figure>
                                        <div className='box'>
                                            <p>{el.title}</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

        </section >
    )
}

export default History