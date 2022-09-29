import React from 'react'
import ReactPlayer from 'react-player/lazy';

const HighJewelry = () => {
    return (
        <section className='HighJewelry'>
            <figure className='high01'></figure>
            <div className="inner hsp">
                <div className="txt 01">
                    <strong>경이로움의 연속</strong>
                    <h2>매그니피카 하이 주얼리 컬렉션</h2>
                    <p>장인 정신이 깃든 새로운 매그니피카 하이 주얼리 컬렉션에서는 <br />장엄한 아름다움, 원동력, 궁극적인 목표를 향한 로마 주얼러의 불굴의 헌신을 엿볼 수 있습니다. <br />불가리 하이 주얼리의 진정한 정신은 시그니처로 자리 잡은 특별한 젬스톤의 생동감 넘치는 컬러와 눈부신 광채에 깃들어 있습니다. <br /> 자연을 보는 듯한 경이로움과 신비로움, 예술 작품을 탄생시키는 선구적인 디자인과 무한한 상상력의 결실입니다.</p>
                </div>
                <div className="pic01 hsp">
                    <figure className='high02'></figure>
                    <figure className='high03'></figure>
                </div>
                <p>독특한 디자인과 대담한 볼륨감, 탁월한 착용감이 이루어내는 조화로운 균형감은<br />특별한 매그니피카 작품 고유의 매력을 한층 더합니다. 각 젬스톤은 완벽하게 들어맞도록 정교하게 컷팅되어 일상에 화려함을 불어넣으면서도<br /> 편안한 착용감을 선사하며, 장인의 손길을 거쳐 제2의 피부와 같이 가볍고 유연하게 제작되었습니다.</p>
                <div className="eden hsp">
                    {/* <div className="player-wrapper">
                        <ReactPlayer
                            className='react-player'
                            url={process.env.PUBLIC_URL + '/assets/img/eden.mp4'}
                            width='640px'
                            height='480px'
                            playing={true}
                            muted={true}
                            controls={true}
                            light={false}
                            poster={process.env.PUBLIC_URL + '/assets/img/mp4cover.png'}
                        />
                    </div> */}
                    <div className="left">
                        <figure className='eden01'></figure>
                    </div>
                    <div className="right">
                        <strong>뉴 컬렉션</strong>
                        <h3>에덴, 매그니피카</h3>
                        <p>장인의 탁월한 기술, 특별한 젬스톤, 섬세한 디자인으로<br />자연의 아름다움에서 영감을 받은 작품이 탄생합니다.</p>
                    </div>

                </div>
                <div className="eden2">
                    <div className="right">
                        <strong>메그니피카</strong>
                        <h3>에메랄드 네크리스</h3>
                        <p>호화로운 42.20캐럿의 콜롬비아산 페어 쉐입<br /> 에메랄드 11개와 페어 쉐입 브릴리언트컷<br /> 다이아몬드 73개(110.39ct)를 세심하게 배치하여<br />  투명도, 컬러, 쉐입, 사이즈가  완벽한 조화를<br /> 이룹니다. 거의 3,000시간에 달하는 작업 시간에<br /> 걸친 복잡한 장인 기술과 불가리만의 감성과 <br />노하우, 그리고 독창성이 독특한 조화를 이루며 <br />생동감 넘치는 네크리스를 완성합니다. 불가리는 <br />다양한 쉐입을 조화시키기 위해 다채로운 기술로<br /> 완벽한 세팅 간의 탁월한 균형을 끌어냅니다.</p>
                    </div>
                    <div className="left">
                        <figure className='eden02'></figure>
                    </div>
                </div>

            </div>


        </section>
    )
}
export default HighJewelry;

// import ReactPlayer from 'react-player/lazy';

// const Video = ({ playList, index }) => {
//     return (
//         <>
//             <h2>Player Test</h2>
//             <div className='player-wrapper'>
//                 <ReactPlayer
//                     className='react-player'
//                     url={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}    // 플레이어 url
//                     width='800px'         // 플레이어 크기 (가로)
//                     height='500px'        // 플레이어 크기 (세로)
//                     playing={true}        // 자동 재생 on
//                     muted={true}          // 자동 재생 on
//                     controls={true}       // 플레이어 컨트롤 노출 여부
//                     light={false}         // 플레이어 모드
//                     pip={true}            // pip 모드 설정 여부
//                     poster={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'}   // 플레이어 초기 포스터 사진
//                     onEnded={() => handleVideo()}  // 플레이어 끝났을 때 이벤트
//                 />
//             </div>
//         </>
//     )
// }

// export default Video;