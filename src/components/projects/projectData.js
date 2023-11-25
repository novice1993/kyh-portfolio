import stock01 from "../../asset/project/stock01.gif";
import stock02 from "../../asset/project/stock02.gif";
import stock03 from "../../asset/project/stock03.gif";
import stock04 from "../../asset/project/stock04.gif";
import stock05 from "../../asset/project/stock05.gif";

import nyTimes01 from "../../asset/project/nyTimes01.gif";
import nyTimes02 from "../../asset/project/nyTimes02.gif";
import nyTimes03 from "../../asset/project/nyTimes03.gif";
import nyTimes04 from "../../asset/project/nyTimes04.gif";
import nyTimes05 from "../../asset/project/nyTimes05.gif";

import coz01 from "../../asset/project/coz01.gif";
import coz02 from "../../asset/project/coz02.gif";
import coz03 from "../../asset/project/coz03.gif";
import coz04 from "../../asset/project/coz04.gif";
import coz05 from "../../asset/project/coz05.gif";

import port01 from "../../asset/project/portfolio01.gif";
import port02 from "../../asset/project/portfolio02.gif";
import port03 from "../../asset/project/portfolio03.gif";

import stockReview01 from "../../asset/review/stockReview01.gif";
import stockReview02 from "../../asset/review/stockReview02.png";
import stockReview03 from "../../asset/review/stockReview03.gif";
import stockReview04 from "../../asset/review/stockReview04.gif";
import stockReview05 from "../../asset/review/stockReview05.gif";
import stockReview07 from "../../asset/review/stockReview07.png";
import stockReview09 from "../../asset/review/stockReview09.png";

export const stockHolm = {
  screenShot: [stock01, stock02, stock03, stock04, stock05],
  description: [
    "주식 입문자를 위한 차트 기반의 모의 주식투자 사이트입니다",
    "직관적인 UX를 위해 한 화면에서 모든 기능이 작동하도록 구현하였습니다",
    "한국투자증권 오픈 API를 활용하여 실제 주식시장 데이터를 제공합니다",
    "종목 별 차트 조회 및 확대/축소, 종목 간 차트 비교 기능을 제공합니다",
    "회원가입 후 가상현금 충전을 통해 모의 매수/매도 체험이 가능합니다",
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
      name: "배포 링크",
    },
    {
      url: "https://github.com/novice1993/StockHolm",
      name: "깃허브 레포지토리",
    },
    {
      url: "https://velog.io/@novice93/%ED%8C%80-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%AA%A8%EC%9D%98-%EC%A3%BC%EC%8B%9D%ED%88%AC%EC%9E%90-%EC%82%AC%EC%9D%B4%ED%8A%B8-StockHolm",
      name: "프로젝트 회고",
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
    "리프레시 토큰 활용 부재로 인한 자동 로그아웃 기능 구현",
  ],
};

export const nyTimes = {
  screenShot: [nyTimes01, nyTimes02, nyTimes03, nyTimes04, nyTimes05],
  description: [
    "뉴욕타임즈 기사 조회 및 검색, 스크랩이 가능한 모바일 해상도 기반의 웹 사이트입니다",
    "오픈 API를 활용하여 실제 기사 조회가 가능하며, 제목 클릭 시 기사로 연결됩니다",
    "React-Query 라이브러리 활용하여 기사 목록 무한 스크롤 구현하였습니다",
    "상단 필터 탭에서 조건 설정이 가능하며, 새로고침 및 종료 시에도 설정이 유지됩니다",
    "해상도 변경에 따른 반응형 UI 구현하였습니다 (min-width 280px, max-width 560px)",
  ],
  duration: "1주 (2023. 11)",
  member: "1명",
  stack: [
    { name: "TypeScript-yellow", logo: "typescript&logoColor=#3178C6" }, // ts
    { name: "React-darkgreen", logo: "react&logoColor=#61DAFB" }, // react
    { name: "Redux-purple", logo: "redux&logoColor=#764ABC" }, // redux
    { name: "React Query-orange", logo: "reactQuery&logoColor=#FF4154" }, // query
    { name: "styled components-pink", logo: "styledcomponents&logoColor=#DB7093" }, // styled
  ],
  link: [
    {
      url: "https://ny-times-project.vercel.app/",
      name: "배포 링크",
    },
    {
      url: "https://github.com/novice1993/ny-times",
      name: "깃허브 레포지토리",
    },
  ],
  roll: [
    "기사 목록 무한 스크롤 구현",
    "기사 필터링 기능 구현",
    "관심 기사 스크랩 추가/제거 기능 구현",
    "모바일 해상도 기반 반응형 UI 구현",
  ],
  review: [],
};

export const cozShopping = {
  screenShot: [coz01, coz02, coz03, coz04, coz05],
  description: [
    "요구사항 명세서와 디자인 시안 기반으로 제작한 쇼핑몰 사이트입니다",
    "총 3개의 페이지로 구성되어 있습니다 (메인, 상품 리스트, 즐겨찾기)",
    "전체 상품 조회, 카테고리 별 조회, 즐겨찾기 추가/제거 기능을 제공합니다",
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
      name: "요구사항 명세서",
    },
    {
      url: "https://www.figma.com/file/TfWAvMXegGEJiS3etqOSfs/FE-S4-project?node-id=0%3A1&t=cHu4rWaqJ0c5CTVV-1",
      name: "디자인 시안",
    },
    { url: "https://github.com/novice1993/coz-shopping#readme", name: "깃허브 레포지토리" },
    { url: "https://velog.io/@novice93/rzbekqs8", name: "프로젝트 회고" },
  ],
  roll: [
    "페이지 라우팅 (메인, 상품 리스트, 즐겨찾기)",
    "상품 리스트 페이지 무한 스크롤",
    "상품 카테고리 별 필터링",
    "즐겨찾기 추가/제거 (토스트 메세지 발생)",
  ],
  review: [],
};

// kyh-portfolio
export const portfolio = {
  screenShot: [port01, port02, port03],
  description: [
    "개인용 포트폴리오 목적의 웹 사이트입니다",
    "유저 입장에서 직관적이며 간결한 느낌을 받을 수 있도록 구현하였습니다",
    "스크롤 이벤트와 애니메이션을 활용해 부드러운 느낌이 나도록 구현하였습니다",
    "미디어쿼리를 활용하여 반응형 UI를 구현하였습니다 (PC, 노트북, 태블릿PC 고려)",
    `레이아웃 구상 시 Start Bootstrap 무료 템플릿을 참고하였으나 (아래 링크 첨부)
내부 UI는 모두 직접 구상하였으며, 소스코드 역시 모두 직접 작성하였습니다`,
  ],
  duration: "1주 (2023. 11)",
  member: "1명",
  stack: [
    { name: "JavaScript-blue", logo: "javascript&logoColor=#F7DF1E" },
    {
      name: "React-darkgreen",
      logo: "react&logoColor=#61DAFB",
    },
    { name: "Redux-purple", logo: "redux&logoColor=#764ABC" },
    { name: "styled components-darkgray", logo: "styledcomponents&logoColor=#DB7093" },
  ],
  link: [
    {
      url: "https://startbootstrap.com/theme/creative",
      name: "레이아웃 참고 사이트",
    },
    {
      url: "https://github.com/novice1993/kyh-portfolio",
      name: "깃허브 레포지토리",
    },
  ],
  roll: ["스크롤 이벤트 및 애니메이션 효과 적용", "미디어쿼리 활용한 반응형 구현"],
  review: [],
};

// project 리뷰 data
export const problemList = [
  "주식 데이터 자동 갱신 로직 구현",
  "주식 데이터 시각화 및 종목 간 비교 기능 구현",
  "매도/매수 거래가 설정 시 오차 제거 기능 구현",
  "리프레시 토큰 활용 부재로 인한 자동 로그아웃 기능 구현",
];

export const stockReadme01 = {
  situation: [
    {
      contentTitle: "주기적인 데이터 갱신",
      description: ["→ 서버에서 주식 데이터가 30분 마다 갱신되므로 클라이언트에서도 동기화 필요"],
    },
    {
      contentTitle: "폐장시간/개장시간 구분",
      description: [
        "→ 폐장시간에는 데이터를 갱신할 필요가 없으므로 개장시간/폐장시간 구분하여 로직 구현 필요",
      ],
    },
    {
      contentTitle: "데이터 통신 효율화",
      description: [
        "→ 다수의 종목을 번갈아 조회할 때 동일 데이터 중복 호출을 방지하여 통신 효율화 필요",
      ],
    },
  ],
  resolve: {
    img: {
      src: stockReview01,
      explain:
        "✔︎ 자동 refetch 구현 (실제로는 30분 주기로 refetch 되나 시연을 위해 2초마다 갱신되도록 조정)",
    },
    content: [
      {
        contentTitle: "React-Query 라이브러리 활용",
        description: [
          "→ 메모이제이션을 활용하여 동일 데이터 중복 호출 방지 (staleTime, cacheTime 속성 활용)",
          "→ 30분 주기로 데이터 자동 갱신 (refetchInterval 기능 활용)",
        ],
      },
      {
        contentTitle: "setTimeout 메서드 활용",
        description: [
          "→ 데이터 갱신 로직이 정확한 시간에 작동할 수 있도록 비동기 로직 활용",
          "1) 최초 접속 시 30분 혹은 정각에 refetch 시작되도록 설정",
          "2) 폐장시간 (15시 30분) 부터는 refetch 중단되도록 설정",
        ],
      },
    ],
  },
  struggle: {
    content: [
      {
        contentTitle: "다수의 종목을 번갈아 조회할 시 문제가 발생함 (A회사 → B회사 → A회사)",
        description: [
          "→ 첫번째로 A회사를 조회할 때는 API 요청을 하지만, 두번째로 조회할 때는 React-Query의 useQuery 메서드에 부여한 Query Key가 동일하여 API 요청이 아닌 캐싱된 데이터를 활용",
        ],
      },
      {
        contentTitle: "동일 데이터 중복 호출을 방지할 수 있는 부분은 효율적이지만 부작용 존재",
        description: ["→ 서버 데이터가 갱신되어 클라이언트 동기화가 필요한 경우에 문제가 발생함"],
      },
      {
        contentTitle: "문제를 해결하기 위해 TimeZone을 설정하여 Query Key를 동적으로 부여",
        description: ["→ 데이터 갱신 필요 여부에 따라 API 호출 여부가 갱신되도록 로직 구현"],
      },
    ],
    img: {
      src: stockReview02,
      explain: "✔︎ 관련 코드 (종목 별로 월/일/시/timeZone을 부여해 Query Key를 동적으로 부여함)",
    },
  },
};

export const stockReadme02 = {
  situation: [
    {
      contentTitle: "서버에서 받아온 데이터(종목 별 주가/거래량)를 차트 형식으로 시각화 해야 함",
      description: [],
    },
    {
      contentTitle:
        "유저가 차트를 제어하며 자유롭게 조회가 가능해야 함 (줌 인/아웃, 주가/거래량 동시 조회)",
      description: [],
    },
    {
      contentTitle: "종목 별 주가 차트를 시각적으로 비교할 수 있어야 함",
      description: [],
    },
  ],
  resolve: {
    img: {
      src: stockReview03,
      explain: "✔︎ 좌우 스크롤 및 줌 인/아웃, 주가/거래량 동시 조회가 가능하도록 구현 함",
    },
    content: [
      {
        contentTitle: "Apache Echarts 라이브러리 활용",
        description: ["→ 커스터마이징이 용이하며, 필요한 기능(줌 인/이웃 등)이 잘 구비되어 있음"],
      },
      {
        contentTitle: "서버에서 받아온 데이터를 차트 형식에 맞게 변환하여 활용",
        description: [
          "→ 날짜 및 시간, 종목명, 주가(시가/종가/저가/고가), 거래량 데이터 정리하여 활용",
          "→ 마우스 움직임에 따라 해당하는 시각의 데이터를 제공하도록 설정",
        ],
      },
      {
        contentTitle: "주가/거래량 차트 동기화 설정",
        description: [
          "→ 차트 옵션 설정 시 X축은 공유하되 Y축은 분리되도록 설정",
          "→ 주가/거래량이 상/하로 나누어 표시되나 가로축을 공유하므로 특정 시간대의 주가/거래량 동시 조회가 가능함",
        ],
      },
      {
        contentTitle: "종목 간 차트 비교 기능 구현",
        description: [
          "→ 라이브러리 자체적으로 차트 비교 기능이 부재하는 상황",
          "→ 우측 상단에 비교 버튼을 추가하여 마우스 오버 시 비교할 종목 리스트가 렌더링 되도록 구현",
          "→ 종목명 클릭 시 비교 차트 시각화 되도록 구현 (Redux-Toolkit 전역 상태 관리 및 useEffect hook 활용",
        ],
      },
    ],
  },
};

export const stockReadme03 = {
  situation: [
    {
      contentTitle: "BE에서 한국투자증권 오픈 API를 받아서 그대로 활용 함",
      description: ["→ API에서 제공하는 호가와 일치할 때만 거래가 체결되도록 BE 로직이 구현 됨"],
    },
    {
      contentTitle: "이외의 가격으로 거래가 설정 시 미체결 거래로 처리되는 상황",
      description: ["→ 30분 마다 API에서 갱신된 호가를 기반으로 체결 전환 여부를 체크하도록 설정"],
    },
    {
      contentTitle: "애매한 가격을 설정할 경우 무기한 대기가 발생할 가능성이 존재하는 상황",
      description: [],
    },
  ],
  resolve: {
    img: {
      src: stockReview04,
      explain:
        "✔︎ 거래가 자동 보정 기능 구현 - priceInterval(호가 간 격차)로 나누어 떨어지도록 자동 보정하는 로직 구현",
    },
    content: [
      {
        contentTitle: "서버에서 받아온 주식 데이터(stockInfo)에서 호가 데이터만 추출하여 정리",
        description: ["→ 매수 호가 : 변수명 askp / 매도 호가 : 변수명 bidp"],
      },
      {
        contentTitle: "정리한 호가 데이터를 바탕으로 호가 간 격차 추출 (priceInterval)",
        description: [],
      },
      {
        contentTitle:
          "유저가 키보드로 거래가를 입력할 시 priceInterval로 나누어 떨어지는 경우, 떨어지지 않는 경우를 분기",
        description: [
          "1) 나누어 떨어지는 경우 : 입력 값 그대로 적용",
          "2) 나누어 떨어지지 않는 경우",
          "→ 나머지(remainder)를 계산하여 입력 값에서 차감",
          "→ setTimeout 메서드를 활용하여 조정 값으로 입력 값을 대체하는 비동기 로직 구현",
        ],
      },
      {
        contentTitle: "만약 자동 보정 전 유저가 값을 수정할 경우",
        description: [
          "→ 이전 자동 보정 로직을 제거한 후 (clearTimeout 메서드 활용) 위의 과정 반복 ",
        ],
      },
    ],
  },
  struggle: {
    img: {
      src: stockReview07,
    },
  },
};

export const stockReadme04 = {
  situation: [
    {
      contentTitle: "액세스 토큰 유효기간 만료 시 문제발생",
      description: [
        "→ 로그인 처리 후 서버에서 발급받은 액세스 토큰을 로컬 스토리지에 저장해서 활용하는 방식으로 구현",
        "→ 액세스 토큰의 유효기간이 만료될 시 클라이언트는 로그인 상태이지만, 서버에서는 유효한 유저로 인정받지 못하는 문제 발생",
      ],
    },
    {
      contentTitle:
        "로그인 기능 담당 팀원과 리프레시 토큰 활용 관련하여 논의 진행 (위의 사진 참고)",
      description: [
        "→ 담당 팀원과 논의한 결과 프로젝트 마감까지 리프레시 토큰 활용 로직 구현이 어려울 것 같다는 답변을 받음",
        "→ 대안이 필요한 상황이나 담당 팀원의 작업 진행 상황이 여의치 않아 해당 부분을 대신 맡아서 구현하게 됨",
      ],
    },
  ],
  resolve: {
    img: {
      src: stockReview05,
      explain:
        "✔︎ 자동 로그아웃 기능 구현 - 본래 30분 뒤에 로그아웃 처리되나, 시연을 위해 시간 조정함",
    },
    content: [
      {
        contentTitle: "setTimeout 메서드를 활용하여 30분 경과 후 자동 로그아웃 처리되도록 구현",
        description: [
          "→ 유저가 명확하게 인지할 수 있도록 토스트 메시지로 해당 내역 안내 (총 3회 안내)",
        ],
      },
      {
        contentTitle: "로그인 시 총 2번의 비동기 로직이 실행 됨",
        description: [
          "1) 첫번째는 29분 뒤 실행 됨 (1분 뒤 로그아웃 처리 됨을 알림)",
          "2) 두번째는 첫번째 로직 종료 후 1분 뒤 실행 됨 (로그아웃 완료 됨을 알림)",
        ],
      },
      {
        contentTitle: "브라우저 종료 및 새로고침 시에도 동일하게 처리되도록 구현 함",
        description: [
          "→ 로그인 한 시간을 로컬 스토리지에 저장하여 브라우저 종료/새로고침 시에 활용",
          "→ 브라우저 재시작 시간과 로컬 스토리지에 저장해둔 시간을 비교하여 아래의 로직 처리",
          "ㅤ",
          "1) 브라우저 종료 시",
          "→ 브라우저 재시작 시간이 이전 로그인 시간 기준 30분 이상 지났는지 체크",
          "→ 30분 이상 경과 시 로컬 스토리지에 저장해둔 액세스 토큰과 로그인 시간 제거",
          "ㅤ",
          "2) 브라우저 새로고침 시",
          "→ 새고로침 된 시간과 이전 로그인 시간을 차감하여 자동 로그아웃 잔여 시간(remainTime) 계산",
          "→ remainTime을 활용하여 자동 로그아웃 관련 비동기 로직 재시작 (최종적으로 자동 로그아웃 되는 시간은 동일해짐)",
        ],
      },
    ],
  },
  struggle: {
    img: {
      src: stockReview09,
    },
  },
};

// stock review 관련 array
export const stockReviewArray = [stockReadme01, stockReadme02, stockReadme03, stockReadme04];
