import stock01 from "../../asset/project/stock01.gif";
import stock02 from "../../asset/project/stock02.gif";
import stock03 from "../../asset/project/stock03.gif";
import stock04 from "../../asset/project/stock04.gif";
import stock05 from "../../asset/project/stock05.gif";

import coz01 from "../../asset/project/coz01.gif";
import coz02 from "../../asset/project/coz02.gif";
import coz03 from "../../asset/project/coz03.gif";
import coz04 from "../../asset/project/coz04.gif";
import coz05 from "../../asset/project/coz05.gif";

export const stockHolm = {
  screenShot: [stock01, stock02, stock03, stock04, stock05],
  description: [
    "주식 입문자를 위한 차트 기반의 모의 주식투자 사이트입니다",
    "직관적인 UX를 위해 한 화면에서 모든 기능이 작동하도록 구현하였습니다",
    "한국투자증권 오픈 API를 활용하여 실제 주식시장 데이터를 제공합니다",
    "종목 별 차트 조회 및 확대/축소, 종목 간 차트 비교 기능을 제공합니다",
    "회원가입 후 가상현금 충전을 통해 모의 매매/매도 체험이 가능합니다",
    "이외 관심 종목 추가/제거 및 보유 주식 조회, 게시판 기능을 제공합니다",
    "📌 시연용 계정 (ID/PW) : novice1993@naver.com / 123456789aA!",
  ],
  duration: "4주 (2023. 08 ~ 2023. 09)",
  member: "총 7명 (FE 3명, BE 4명)",
  stack: [
    { name: "TypeScript-yellow", logo: "typescript&logoColor=#3178C6" }, // ts
    { name: "React-darkgreen", logo: "react&logoColor=#61DAFB" }, // react
    { name: "Redux-purple", logo: "redux&logoColor=#764ABC" }, // redux
    { name: "React Query-orange", logo: "reactQuery&logoColor=#FF4154" }, // query
    { name: "styled components-pink", logo: "styledcomponents&logoColor=#DB7093" }, // styled
    { name: "Apache Echarts-skyblue", logo: "apacheecharts&logoColor=#AA344D" }, // apache
  ],
  link: [
    {
      url: "http://seb008stockholm.s3-website.ap-northeast-2.amazonaws.com/",
      name: "배포 링크 바로 가기",
    },
    {
      url: "https://github.com/novice1993/StockHolm",
      name: "깃허브 바로 가기",
    },
    {
      url: "https://velog.io/@novice93/%ED%8C%80-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%AA%A8%EC%9D%98-%EC%A3%BC%EC%8B%9D%ED%88%AC%EC%9E%90-%EC%82%AC%EC%9D%B4%ED%8A%B8-StockHolm",
      name: "화고 바로 가기",
    },
  ],
  roll: [
    "주가/거래량 데이터 자동 갱신 로직 구현",
    "주가/거래량 데이터 차트 시각화",
    "주식 매수/매도 UI 및 기능 구현",
    "자동 로그아웃 기능 구현",
  ],
  review: [
    "주식 데이터 자동 갱신 로직 구현 (30분 단위)",
    "주식 데이터 시각화 및 종목 간 비교 기능 구현",
    "매도/매수 거래가 설정 시 오차 제거 기능 구현",
    "리프레시 토큰 활용 부재로 인한 자동 로그인 기능 구현",
  ],
};

export const cozShopping = {
  screenShot: [coz01, coz02, coz03, coz04, coz05],
  description: [
    "주어진 요구사항 명세서와 디자인 시안 기반으로 제작한 쇼핑몰 사이트입니다",
    "총 3개의 페이지로 구성되어 있습니다 (메인, 상품 리스트, 즐겨찾기)",
    "전체 상품 조회, 카테고리 별 조회, 즐겨찾기 추가/제거 가능합니다",
  ],
  duration: "1주 (2023. 08)",
  member: "1명",
  stack: [
    { name: "TypeScript-yellow", logo: "typescript&logoColor=#3178C6" },
    {
      name: "React-darkgreen",
      logo: "react&logoColor=#61DAFB",
    },
    { name: "Redux-purple", logo: "redux&logoColor=#764ABC" },
    { name: "styled components-darkgray", logo: "styledcomponents&logoColor=#DB7093" },
  ],
  link: [
    {
      url: "https://codestates.notion.site/codestates/S4-05073c7f88a942c0ad5e5fcdd68c1dec",
      name: "요구사항 명세서 바로 가기",
    },
    {
      url: "https://www.figma.com/file/TfWAvMXegGEJiS3etqOSfs/FE-S4-project?node-id=0%3A1&t=cHu4rWaqJ0c5CTVV-1",
      name: "디자인 시안 바로 가기",
    },
    { url: "https://github.com/novice1993/coz-shopping#readme", name: "깃허브 바로 가기" },
    { url: "https://velog.io/@novice93/rzbekqs8", name: "회고 바로 가기" },
  ],
  roll: [
    "페이지 라우팅 (메인, 상품 리스트, 즐겨찾기)",
    "상품 리스트 페이지 무한 스크롤",
    "상품 카테고리 별 필터링",
    "즐겨찾기 추가/제거 (토스트 메세지 발생)",
  ],
  review: [],
};
