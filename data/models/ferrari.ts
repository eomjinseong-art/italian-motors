import type { RawModel } from "@/data/raw";

export const ferrariModels: RawModel[] = [
  {
    slug: "ferrari-125-s",
    brand: "ferrari",
    nameKo: "페라리 125 S",
    nameEn: "Ferrari 125 S",
    years: "1947",
    body: "2인승 바르케타",
    categories: [
        "sports"
      ],
    summary: "페라리 이름을 단 첫 차. 1.5리터 콜롬보 V12를 올린 1947년의 경주용 바르케타.",
    editorial: [
        "125 S는 양산 GT가 아니라 회사의 출발점이다. 배지와 V12, 마라넬로라는 장소가 여기서 모인다.",
        "대수는 두 대. 이후의 모든 페라리 로드카는 이 짧은 시즌의 뒤를 잇는 이야기다."
      ],
    history: [
        "1947년 5월 피아첸차 첫 출전은 완주하지 못했고, 같은 달 로마에서 첫 승을 올렸다. 엔진은 조아키노 콜롬보의 60도 V12다.",
        "배기량은 1,497cc, 공장 쪽 출력은 약 118 PS. 섀시는 관형 프레임의 오픈 바르케타다."
      ],
    design: [
        "차체는 작고 펜더가 따로 노는 전후 바르케타의 비례다. 나중에 고정된 그릴의 문법은 아직 자리 잡기 전이다.",
        "두 대는 이후 배기량을 키운 159, 166으로 개조되며 원래 125 사양 그대로 남지 않았다."
      ],
    driving: [
        "1.5리터 V12는 토크보다 회전으로 가는 엔진이다. 경주차라 도로용 편의는 논점 밖이다.",
        "무게가 가벼워 출력 숫자의 절대값보다 응답이 먼저 온다."
      ],
    facts: [
        "1947년, 페라리 배지의 첫 차.",
        "콜롬보 설계 1.5L V12, 약 118 PS.",
        "제작은 두 대.",
        "첫 승은 1947년 로마."
      ],
    specs: [
      ["엔진", "1.5L 콜롬보 V12"],
      ["출력", "약 118 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "프론트 엔진"],
      ["변속", "5단 수동"]
    ],
    sources: [
      ["Wikipedia — Ferrari 125 S", "https://en.wikipedia.org/wiki/Ferrari_125_S"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari 125 S", "https://en.wikipedia.org/wiki/Ferrari_125_S"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari 125 S",
  },
  {
    slug: "ferrari-250-gt",
    brand: "ferrari",
    nameKo: "페라리 250 GT",
    nameEn: "Ferrari 250 GT",
    years: "1954–1964",
    body: "쿠페·카브리올레·2+2",
    categories: [
        "gt",
        "sports"
      ],
    summary: "콜롬보 3.0리터 V12를 여러 차체에 올린 1950–60년대 GT의 본류. 한 모델이라기보다 한 혈통이다.",
    editorial: [
        "250은 실린더당 약 250cc에서 온 이름이다. 배기량 2,953cc V12가 베를리네타, 카브리올레, 2+2에 공통으로 들어갔다.",
        "쇼트 휠베이스와 루소는 별도 항목이 아니라 이 혈통의 정점 차체로 아래에 둔다. GTO는 경주 호몰로게이션이라 따로 적는다."
      ],
    history: [
        "1950년대 중반 250 유로파에서 시작해 투어 드 프랑스, 베를리네타, SWB, 루소, GTE로 갈라졌다. 생산은 피닌파리나와 카로체리아가 나뉘어 맡았다.",
        "섀시는 관형이고 차체는 시대에 따라 스틸과 알루미늄이 섞인다. 1964년 275로 넘어가며 이름이 닫힌다."
      ],
    design: [
        "긴 보닛과 둥근 힙, 타원 그릴이 공통이다. 피닌파리나 베를리네타가 가장 많이 불리는 옆모습이다.",
        "실내는 가죽과 큰 계기, 나무 림 스티어링. 2+2 GTE는 같은 얼굴을 가족 GT로 늘린 갈래다."
      ],
    driving: [
        "3리터 V12는 고회전에서 힘이 붙는 엔진이다. 드럼에서 디스크로 브레이크가 바뀌며 도로 GT로서의 거리가 늘었다.",
        "SWB는 축거를 줄여 코너가 먼저고, GTE는 승차와 짐이 먼저다. 한 이름 안의 성격 차이가 크다."
      ],
    facts: [
        "엔진은 콜롬보 2,953cc V12. 실린더당 약 250cc.",
        "차체는 베를리네타, 카브리올레, 2+2가 공존.",
        "SWB는 1959–1962년, 루소는 1962–1964년.",
        "후속 혈통은 275 GT."
      ],
    specs: [
      ["엔진", "3.0L 콜롬보 V12"],
      ["구동", "후륜구동"],
      ["레이아웃", "프론트 엔진"],
      ["변속", "4단, 후기 5단"]
    ],
    sources: [
      ["Wikipedia — Ferrari 250 GT", "https://en.wikipedia.org/wiki/Ferrari_250"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari 250 GT", "https://en.wikipedia.org/wiki/Ferrari_250"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari 250 GT Berlinetta",
    generations: [
      {
        id: "swb",
        heading: "250 GT SWB",
        years: "1959–1962",
        summary: "축거를 2,400mm로 줄인 베를리네타. 도로용 루소 스틸과 경주용 컴페티치오네 알루미늄이 나뉜다.",
        points: [
            "축거 2,400mm.",
            "스틸 루소와 알루미늄 컴페티치오네가 공존.",
            "디스크 브레이크가 기본에 가깝다."
          ],
        code: "Tipo 539"
      },
      {
        id: "lusso",
        heading: "250 GT 루소",
        years: "1962–1964",
        summary: "피닌파리나가 지붕 선을 낮추고 트렁크를 정리한 로드 GT. 생산은 350대 안팎으로 집계된다.",
        points: [
            "1962–1964년.",
            "약 350대.",
            "경주용 장비가 빠진 도로 GT."
          ]
      },
      {
        id: "gte",
        heading: "250 GTE 2+2",
        years: "1960–1963",
        summary: "같은 V12를 2+2 차체에 넣은 가족용 GT. 뒷좌석은 좁지만 네임플레이트는 여기서 처음 네 자리를 진지하게 다룬다.",
        points: [
            "1960–1963년.",
            "2+2 시트.",
            "후속의 330 GT 2+2로 이어진다."
          ]
      }
    ],
  },
  {
    slug: "ferrari-250-gto",
    brand: "ferrari",
    nameKo: "페라리 250 GTO",
    nameEn: "Ferrari 250 GTO",
    years: "1962–1964",
    body: "2도어 베를리네타",
    categories: [
        "sports",
        "gt"
      ],
    summary: "1962–1964년 GT 호몰로게이션 베를리네타. 3리터 V12와 낮은 지붕, 36대가 한 세기의 경매 기준이 됐다.",
    editorial: [
        "GTO는 Gran Turismo Omologata. 경주에 나가기 위해 도로 등록이 가능한 형태로 만든 차다.",
        "250 GT의 엔진을 쓰지만 차체와 냉각, 서스펜션은 경주 일정에 맞춰져 있다. 일반 250 GT와 같은 차로 읽으면 안 된다."
      ],
    history: [
        "1962년부터 1964년까지 시리즈 1이 만들어졌고, 말기 몇 대는 4리터에 가까운 330 GTO로 불리기도 한다. 보통 250 GTO의 기준으로 세는 것은 36대다.",
        "1960년대 GT 선수권에서 반복해서 이겼다. 드라이버 한 명의 차라기보다 팀 카의 규격에 가깝다."
      ],
    design: [
        "스크리티의 초기 안과 바람 실험 사이를 오가며 지붕이 낮아지고 리어가 잘렸다. 세 개의 닥트가 보닛을 가른다.",
        "창이 얇고 펜더가 바퀴를 겨우 덮는다. 아름다운 조각이라기보다 규정과 속도의 타협이다."
      ],
    driving: [
        "3리터 V12는 웨버 카뷰레터로 약 300 PS가 인용된다. 차체가 가벼워 출력이 곧바로 속도가 된다.",
        "승차감과 환기는 경주차의 그것이다. 도로 등록이 가능하다고 해서 투어용 GT는 아니다."
      ],
    facts: [
        "1962–1964년, 통상 36대.",
        "콜롬보 3.0L V12, 약 300 PS.",
        "이름은 Gran Turismo Omologata.",
        "250 GT 로드카와 다른 경주 호몰로게이션 차."
      ],
    anecdote: "어떤 경매 기록이 ‘세상에서 가장 비싼 차’로 불릴 때마다 GTO의 번호가 거론된다. 거래 가격은 시점마다 달라, 특정 대수를 역대 1위로 고정하는 말은 전해지는 이야기에 가깝다.",
    specs: [
      ["엔진", "3.0L 콜롬보 V12"],
      ["출력", "약 300 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "프론트 엔진"],
      ["생산", "36대"]
    ],
    sources: [
      ["Wikipedia — Ferrari 250 GTO", "https://en.wikipedia.org/wiki/Ferrari_250_GTO"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari 250 GTO", "https://en.wikipedia.org/wiki/Ferrari_250_GTO"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari 250 GTO",
  },
  {
    slug: "ferrari-250-gt-california",
    brand: "ferrari",
    nameKo: "페라리 250 GT 캘리포니아",
    nameEn: "Ferrari 250 GT California Spyder",
    years: "1957–1962",
    body: "2인승 스파이더",
    categories: [
        "gt",
        "sports"
      ],
    summary: "스칼리에티가 차체를 맡은 오픈 250. 롱 휠베이스와 숏 휠베이스가 있고, 영화 속 빨간 스파이더의 원형이다.",
    editorial: [
        "캘리포니아는 미국 딜러의 요청으로 열린 차체가 늘었다는 설명이 정설에 가깝다. 엔진은 250의 3리터 V12 그대로다.",
        "1957–1960년 롱 휠베이스와 1960–1962년 숏 휠베이스로 나뉜다. 후자가 더 적고 더 자주 호출된다."
      ],
    history: [
        "피닌파리나 디자인, 스칼리에티 제작으로 정리되는 차가 많다. 경주용 장비를 더한 차도 소수 있다.",
        "생산은 롱 약 50대, 숏 약 55대로 적히는 경우가 많다. 합쳐 100대 남짓이다."
      ],
    design: [
        "베를리네타의 얼굴을 문짝 없는 오픈 바디로 옮겼다. 숏 휠베이스는 엉덩이가 더 짧다.",
        "헤드라이트와 그릴의 간격, 뒤 범퍼의 위치가 롱과 숏을 가른다."
      ],
    driving: [
        "오픈 차체라 고속에서의 흔들림과 소음이 쿠페보다 크다. 엔진 성격은 250 GT와 같다.",
        "숏 휠베이스는 축거가 줄며 코너가 날카로워지고 직진은 더 바빠진다."
      ],
    facts: [
        "1957–1962년 스파이더.",
        "롱 휠베이스와 숏 휠베이스 두 구간.",
        "합계 100대 남짓으로 집계.",
        "1986년 영화에 나온 차는 진품이 아니라 레플리카."
      ],
    specs: [
      ["엔진", "3.0L 콜롬보 V12"],
      ["구동", "후륜구동"],
      ["레이아웃", "프론트 엔진"],
      ["차체", "스파이더"]
    ],
    sources: [
      ["Wikipedia — Ferrari 250 GT California Spyder", "https://en.wikipedia.org/wiki/Ferrari_250_GT_California_Spyder"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari 250 GT California Spyder", "https://en.wikipedia.org/wiki/Ferrari_250_GT_California_Spyder"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari 250 GT California Spyder",
  },
  {
    slug: "ferrari-275-gtb",
    brand: "ferrari",
    nameKo: "페라리 275 GTB",
    nameEn: "Ferrari 275 GTB",
    years: "1964–1968",
    body: "2도어 쿠페",
    categories: [
        "gt",
        "sports"
      ],
    summary: "250을 이은 3.3리터 프론트 엔진 베를리네타. 뒤 트랜스액슬과, 후기 4캠 GTB/4가 기술 포인트다.",
    editorial: [
        "275는 실린더당 약 275cc. 배기량 3,286cc. 250보다 토크가 넓어졌다.",
        "2캠 GTB와 1966년 이후의 4캠 GTB/4가 한 이름 안에 있다. 로드스터 GTS는 오픈 갈래다."
      ],
    history: [
        "1964년 파리에서 공개됐다. 변속기를 뒤 차축과 붙여 무게 배분을 당겼다. 페라리 로드카에서 트랜스액슬이 본격화된 세대다.",
        "차체는 초기 숏 노즈와 후기 롱 노즈가 있다. 1968년 365 데이토나로 넘어간다."
      ],
    design: [
        "피닌파리나의 긴 보닛과 패스트백. 롱 노즈는 냉각과 고속 안정 때문에 앞을 늘렸다.",
        "실내는 2인승에 가깝다. 합금 휠과 커버드 헤드램프가 시대의 얼굴이다."
      ],
    driving: [
        "V12는 여전히 회전형이다. 뒤 변속기는 시프트가 단단하고, 고속에서 차체가 한 덩어리로 느껴지게 만드는 장치다.",
        "4캠은 고회전이 더 잘 따라온다. 투어와 경주의 중간, 그란투리스모의 정의에 가까운 차다."
      ],
    facts: [
        "1964–1968년. 배기량 3.3L.",
        "2캠과 4캠 GTB/4.",
        "변속기는 뒤 트랜스액슬, 5단.",
        "숏 노즈와 롱 노즈 두 얼굴."
      ],
    specs: [
      ["엔진", "3.3L 콜롬보 V12"],
      ["구동", "후륜구동"],
      ["레이아웃", "프론트 엔진, 리어 트랜스액슬"],
      ["변속", "5단 수동"]
    ],
    sources: [
      ["Wikipedia — Ferrari 275 GTB", "https://en.wikipedia.org/wiki/Ferrari_275"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari 275 GTB", "https://en.wikipedia.org/wiki/Ferrari_275"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari 275 GTB",
  },
  {
    slug: "ferrari-365-gtb4",
    brand: "ferrari",
    nameKo: "페라리 365 GTB/4 데이토나",
    nameEn: "Ferrari 365 GTB/4 Daytona",
    years: "1968–1973",
    body: "쿠페·스파이더",
    categories: [
        "gt",
        "sports"
      ],
    summary: "프론트 엔진 V12 베를리네타의 정점. 4.4리터 4캠, 공장 표기 352 PS. 데이토나라는 별칭이 본명처럼 남았다.",
    editorial: [
        "형식명은 365 GTB/4. 데이토나는 1967년 데이토나 24시간 승리를 기린 별칭이다.",
        "미드십으로 넘어가기 직전, 앞 엔진 GT가 낼 수 있는 속도의 답으로 읽힌다."
      ],
    history: [
        "1968년 파리 공개, 생산은 1973년까지. 쿠페가 대부분이고 스파이더는 공장 122대 안팎으로 적다.",
        "미국 범퍼 규정이 말기 차의 앞모습을 바꿨다. 초기 플렉시글라스 노즈 밴드가 이 차의 표식이다."
      ],
    design: [
        "피닌파리나. 헤드램프를 덮은 가로 밴드가 1시리즈의 얼굴이고, 이후 미국형은 팝업이 드러난다.",
        "보닛이 매우 길고 데크는 짧다. 옆의 아가미가 냉각을 맡는다."
      ],
    driving: [
        "4,390cc V12, 352 PS. 0–60마일은 5초대 중반으로 인용되는 경우가 많다. 최고속은 280km/h 안팎.",
        "무겁고 스티어링이 바쁘다. 고속 투어에는 강하고, 좁은 산길은 차의 폭과 열과 싸워야 한다."
      ],
    facts: [
        "형식명 365 GTB/4. 별칭 데이토나.",
        "4.4L 4캠 V12, 352 PS.",
        "쿠페가 주류, 스파이더는 약 122대.",
        "1968–1973년."
      ],
    specs: [
      ["엔진", "4.4L V12"],
      ["출력", "352 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "프론트 엔진"],
      ["변속", "5단 수동"]
    ],
    sources: [
      ["Wikipedia — Ferrari 365 GTB/4 Daytona", "https://en.wikipedia.org/wiki/Ferrari_365_GTB/4"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari 365 GTB/4 Daytona", "https://en.wikipedia.org/wiki/Ferrari_365_GTB/4"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari 365 GTB/4 Daytona",
  },
  {
    slug: "ferrari-dino-246",
    brand: "ferrari",
    nameKo: "디노 246 GT",
    nameEn: "Dino 246 GT",
    years: "1969–1974",
    body: "쿠페·GTS",
    categories: [
        "sports"
      ],
    summary: "페라리 배지 대신 디노 이름을 단 미드십 V6. 2.4리터, 가로 배치. 브랜드의 첫 대량 미드십 로드카에 가깝다.",
    editorial: [
        "디노는 엔초의 아들 알프레도 페라리의 이름이다. 그는 V6 경주 엔진의 방향에 관여했고 1956년 세상을 떠났다.",
        "246 GT와 타르가 지붕의 GTS가 있다. 코 배지는 페라리가 아니라 디노다. 오늘날 카탈로그에서는 페라리 혈통으로 적는다."
      ],
    history: [
        "206 GT(2.0리터) 뒤를 1969년 246이 이었다. 배기량 2,418cc. 생산은 1974년까지, GT와 GTS를 합쳐 약 3,761대.",
        "피아트 디노와 엔진 설계를 나눈다. 페라리 공장의 차지만, 마케팅은 한동안 아래 줄을 의도했다."
      ],
    design: [
        "피닌파리나의 낮은 곡선. 뒷 유리 옆 플라잉 버트레스가 엔진 위를 덮는다.",
        "실내는 2인승. GTS는 롤 바 자리의 타르가 패널을 뺀다."
      ],
    driving: [
        "가로 V6는 카뷰레터에서 힘이 부드럽다. 출력은 195 PS 안팎. 절대 속도보다 차의 크기와 시야가 운전의 중심이다.",
        "핸들링은 미드십의 이른 교재다. 한계에서의 회전은 빠르고, 터보 이후의 페라리처럼 전자장비가 잡아 주지 않는다."
      ],
    facts: [
        "1969–1974년. 배기량 2.4L 가로 V6.",
        "GT와 GTS 합계 약 3,761대.",
        "노즈 배지는 디노.",
        "이름은 알프레도 ‘디노’ 페라리."
      ],
    specs: [
      ["엔진", "2.4L V6"],
      ["출력", "약 195 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "미드십, 가로 배치"],
      ["변속", "5단 수동"]
    ],
    sources: [
      ["Wikipedia — Dino 246 GT", "https://en.wikipedia.org/wiki/Dino_(automobile)"]
    ],
    furtherReading: [
      ["Wikipedia — Dino 246 GT", "https://en.wikipedia.org/wiki/Dino_(automobile)"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Dino 246 GT",
  },
  {
    slug: "ferrari-berlinetta-boxer",
    brand: "ferrari",
    nameKo: "페라리 베를리네타 박서",
    nameEn: "Ferrari Berlinetta Boxer",
    years: "1973–1984",
    body: "2도어 쿠페",
    categories: [
        "supercar",
        "sports"
      ],
    summary: "브랜드 첫 플랫 12 미드십 양산 쿠페. 365 GT4 BB에서 512 BB, 512 BBi로 이어진다.",
    editorial: [
        "박서는 대향 피스톤의 별칭이다. 카운타크와 같은 시대에 페라리가 내놓은 미드십 플래그십.",
        "디노의 V6 아래가 아니라, 12기통을 가운데 넣은 꼭대기 줄이다."
      ],
    history: [
        "1971년 토리노에 프로토타입이 나오고 1973년 365 GT4 BB가 생산에 들어갔다. 4.4리터.",
        "1976년 512 BB가 5리터로 키웠고, 1981년 512 BBi가 보쉬 인젝션으로 바뀌었다. 1984년 테스타로사로 교체."
      ],
    design: [
        "피닌파리나. 매우 낮은 쐐기와 넓은 뒷모습. 엔진이 가로가 아니라 세로로 눕는다.",
        "라디에이터는 앞, 뜨거운 공기는 옆과 뒤로 뺀다. 실내는 2인승이고 시야는 좁다."
      ],
    driving: [
        "플랫 12는 진동이 적고 소리가 낮게 깐다. 365는 약 380 PS, 5리터 카뷰레터 형은 360 PS로 출력 숫자만 보면 오히려 내려간다. 토크와 규제가 이유다.",
        "연료 탱크가 가운데 있어 무게 중심은 좋지만, 정비는 엔진을 내려야 하는 구조에 가깝다."
      ],
    facts: [
        "1973–1984년. 365 GT4 BB, 512 BB, 512 BBi.",
        "플랫 12 미드십, 세로 배치.",
        "5리터 카뷰레터형은 출력 숫자가 4.4리터보다 낮다.",
        "후속은 테스타로사."
      ],
    specs: [
      ["엔진", "4.4L 이후 5.0L 플랫 12"],
      ["구동", "후륜구동"],
      ["레이아웃", "미드십"],
      ["변속", "5단 수동"]
    ],
    sources: [
      ["Wikipedia — Ferrari Berlinetta Boxer", "https://en.wikipedia.org/wiki/Ferrari_Berlinetta_Boxer"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari Berlinetta Boxer", "https://en.wikipedia.org/wiki/Ferrari_Berlinetta_Boxer"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari 512 BB",
    generations: [
      {
        id: "365",
        heading: "365 GT4 BB",
        years: "1973–1976",
        summary: "4.4리터 플랫 12. 양산 박서의 시작.",
        points: [
            "4,390cc.",
            "약 380 PS.",
            "1973년 생산 시작."
          ]
      },
      {
        id: "512",
        heading: "512 BB",
        years: "1976–1981",
        summary: "배기량 5리터. 출력 표기는 360 PS로, 토크와 배출 규제 쪽의 변화다.",
        points: [
            "4,942cc.",
            "360 PS.",
            "카뷰레터."
          ]
      },
      {
        id: "bbi",
        heading: "512 BBi",
        years: "1981–1984",
        summary: "보쉬 K-제트로닉 인젝션. 같은 5리터를 규제 시대에 맞춘 마지막 박서.",
        points: [
            "연료분사.",
            "1984년 테스타로사로 교체.",
            "외형의 쐐기는 유지."
          ]
      }
    ],
  },
  {
    slug: "ferrari-308",
    brand: "ferrari",
    nameKo: "페라리 308",
    nameEn: "Ferrari 308 GTB/GTS",
    years: "1975–1985",
    body: "쿠페·타르가",
    categories: [
        "sports"
      ],
    summary: "2.9리터 가로 V8 미드십. 초기 쿠페는 유리섬유였고, 이후 스틸과 4밸브 QV로 이어진다.",
    editorial: [
        "308은 디노 246의 자리를 이은 8기통이다. 마그넘 P.I.의 붉은 차로 북미에서 얼굴이 고정됐다.",
        "GTB는 쿠페, GTS는 탈착 지붕. 배기량 2,927cc."
      ],
    history: [
        "1975년 파리에서 GTB가 나왔다. 초기 이탈리아 생산분 쿠페는 베트로레지나, 유리섬유 차체다. 1977년 이후 스틸이 기본이 됐다.",
        "1982년 콰트로발볼레(QV)가 실린더당 4밸브로 바뀌며 유럽형 약 240 PS. 1985년 328이 배기량을 키운다."
      ],
    design: [
        "피닌파리나의 쐐기. 검은 범퍼와 팝업 헤드램프, 뒷 기둥의 버트레스.",
        "실내는 각진 대시와 게이트 시프트. 2인승."
      ],
    driving: [
        "초기 유럽 카뷰레터는 255 PS까지 인용되고, 미국 배출 사양은 그보다 낮다. QV는 응답이 고회전에서 맑아진다.",
        "차체가 작아 도로에서의 크기는 오늘의 미드십보다 훨씬 인간적이다. 터보 이전의 자연흡기 감각이다."
      ],
    facts: [
        "1975–1985년. 2.9L 가로 V8.",
        "초기 GTB 일부는 유리섬유(베트로레지나).",
        "QV는 4밸브, 유럽형 약 240 PS.",
        "후속 328."
      ],
    specs: [
      ["엔진", "2.9L V8"],
      ["구동", "후륜구동"],
      ["레이아웃", "미드십, 가로 배치"],
      ["변속", "5단 수동"]
    ],
    sources: [
      ["Wikipedia — Ferrari 308 GTB/GTS", "https://en.wikipedia.org/wiki/Ferrari_308_GTB"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari 308 GTB/GTS", "https://en.wikipedia.org/wiki/Ferrari_308_GTB"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari 308 GTB",
    generations: [
      {
        id: "vetroresina",
        heading: "308 GTB 베트로레지나",
        years: "1975–1977",
        summary: "유리섬유 차체의 초기 쿠페. 이후 스틸 차체보다 가볍다.",
        points: [
            "1975년 공개.",
            "차체 패널이 유리섬유.",
            "이탈리아 초기 생산분."
          ]
      },
      {
        id: "qv",
        heading: "308 QV",
        years: "1982–1985",
        summary: "실린더당 4밸브. 유럽형 출력은 약 240 PS.",
        points: [
            "4밸브 헤드.",
            "유럽형 약 240 PS.",
            "1985년 328로 이어짐."
          ]
      }
    ],
  },
  {
    slug: "ferrari-328",
    brand: "ferrari",
    nameKo: "페라리 328",
    nameEn: "Ferrari 328 GTB/GTS",
    years: "1985–1989",
    body: "쿠페·타르가",
    categories: [
        "sports"
      ],
    summary: "308의 배기량을 3.2리터로 키운 마지막 가로 V8. 출력 270 PS, 범퍼와 코가 한 면으로 정리됐다.",
    editorial: [
        "328은 새 플랫폼이라기보다 308의 다듬음이다. 토크가 넓어지고 얼굴이 부드러워졌다.",
        "1989년 348이 세로 배치와 다른 차체로 이 줄을 끊는다."
      ],
    history: [
        "1985년 프랑크푸르트 공개. 배기량 3,186cc, 270 PS. GTB와 GTS.",
        "생산은 1989년까지. 터보 사양의 GTB/GTS 터보는 배기량을 줄인 별 갈래로, 일부 시장용이다."
      ],
    design: [
        "308의 쐐기를 유지한 채 범퍼를 차체에 통합했다. 그릴이 작고 코가 둥글다.",
        "휠과 실내 트림이 1980년대 중반으로 올라왔다."
      ],
    driving: [
        "자연흡기 V8은 4,000rpm 아래에서부터 쓸 수 있다. 308 QV보다 일상 운전에 가깝다는 평가가 당시 시승의 공통점이다.",
        "최고속은 260km/h대. 전자장비 없는 미드십의 마지막 세대에 가깝다."
      ],
    facts: [
        "1985–1989년.",
        "3.2L V8, 270 PS.",
        "GTB 쿠페, GTS 타르가.",
        "후속은 348."
      ],
    specs: [
      ["엔진", "3.2L V8"],
      ["출력", "270 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "미드십"],
      ["변속", "5단 수동"]
    ],
    sources: [
      ["Wikipedia — Ferrari 328 GTB/GTS", "https://en.wikipedia.org/wiki/Ferrari_328"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari 328 GTB/GTS", "https://en.wikipedia.org/wiki/Ferrari_328"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari 328 GTS",
  },
  {
    slug: "ferrari-testarossa",
    brand: "ferrari",
    nameKo: "페라리 테스타로사",
    nameEn: "Ferrari Testarossa",
    years: "1984–1996",
    body: "2도어 쿠페",
    categories: [
        "supercar",
        "sports"
      ],
    summary: "박서의 후속 플랫 12. 옆의 가로 핀과 빨간 캠 커버가 1980년대를 대표한다. 512 TR, F512 M으로 이어진다.",
    editorial: [
        "테스타로사는 ‘빨간 머리’. 캠 커버를 빨갛게 칠한 레이스 엔진의 전통에서 온 이름이다.",
        "폭이 매우 넓다. 뒷 타이어를 덮고 라디에이터를 옆으로 빼면서 생긴 실루엣이다."
      ],
    history: [
        "1984년 파리 공개. 4.9리터 플랫 12, 390 PS. 박서보다 냉각과 실내를 도로 쪽에 맞췄다.",
        "1992년 512 TR이 428 PS, 1994년 F512 M이 440 PS와 앞 코의 변화를 가져왔다. 1996년 프론트 엔진 550이 12기통의 방향을 되돌린다."
      ],
    design: [
        "피닌파리나. 사이드 스트레이크가 공기 흡입구를 숨긴다. 뒷모습이 앞보다 넓다.",
        "실내는 1980년대의 각과 가죽. 2인승. 수납은 앞 트렁크."
      ],
    driving: [
        "플랫 12는 고회전에서 매끄럽다. 저속 스티어링은 무겁고 폭 때문에 도심이 일이다.",
        "512 TR은 엔진 위치를 조금 올리고 서스펜션을 고쳐 반응을 당겼다. F512 M은 그 마지막 다듬음이다."
      ],
    facts: [
        "1984–1991년 테스타로사, 390 PS.",
        "1992–1994년 512 TR, 428 PS.",
        "1994–1996년 F512 M, 440 PS.",
        "이름은 빨간 캠 커버의 경주 전통."
      ],
    specs: [
      ["엔진", "4.9L 플랫 12"],
      ["출력", "390 PS (초기)"],
      ["구동", "후륜구동"],
      ["레이아웃", "미드십"],
      ["변속", "5단 수동"]
    ],
    sources: [
      ["Wikipedia — Ferrari Testarossa", "https://en.wikipedia.org/wiki/Ferrari_Testarossa"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari Testarossa", "https://en.wikipedia.org/wiki/Ferrari_Testarossa"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari Testarossa",
    generations: [
      {
        id: "tr",
        heading: "테스타로사",
        years: "1984–1991",
        summary: "가로 핀과 4.9리터 390 PS. 이 이름의 본편.",
        points: [
            "390 PS.",
            "사이드 스트레이크.",
            "1984년 파리 공개."
          ]
      },
      {
        id: "512tr",
        heading: "512 TR",
        years: "1992–1994",
        summary: "출력 428 PS. 엔진과 서스펜션을 손봐 반응을 당긴 중기.",
        points: [
            "428 PS.",
            "1992년.",
            "같은 차체의 진화."
          ]
      },
      {
        id: "f512m",
        heading: "F512 M",
        years: "1994–1996",
        summary: "440 PS. 노즈의 헤드램프가 드러나고, 플랫 12 미드십의 마지막.",
        points: [
            "440 PS.",
            "1994–1996년.",
            "후속 12기통은 프론트 엔진 550."
          ]
      }
    ],
  },
  {
    slug: "ferrari-288-gto",
    brand: "ferrari",
    nameKo: "페라리 288 GTO",
    nameEn: "Ferrari 288 GTO",
    years: "1984–1987",
    body: "2도어 쿠페",
    categories: [
        "supercar",
        "sports"
      ],
    summary: "그룹 B를 염두에 둔 트윈터보 V8. 308과 닮았지만 휠베이스와 엔진 방향이 다르다. 272대.",
    editorial: [
        "이름만 250 GTO의 후계를 자처한다. 기계는 308의 세로 트윈터보 버전이다.",
        "그룹 B 폐지로 경주 프로그램은 접혔고, 차는 로드카로 남았다. F40의 직접 앞선이다."
      ],
    history: [
        "1984년 제네바 공개. 2,855cc 트윈터보 V8, 400 PS. 생산 272대.",
        "휠베이스가 308보다 길고 엔진은 세로다. 컴페티치오네라고 불린 진화형 시제작도 소수 있다."
      ],
    design: [
        "308의 얼굴을 넓히고 펜더를 부풀렸다. 뒷 스포일러는 낮고, 사이드 벤트가 깊다.",
        "실내는 308과 친척이지만 장비는 여전히 얇다."
      ],
    driving: [
        "터보 지연 뒤에 400 PS가 1.1톤 남짓의 차에 들어온다. 당시 도로용 페라리 중 가장 빠른 축.",
        "전자 제어는 거의 없다. 터보 부스트를 운전자가 읽어야 한다."
      ],
    facts: [
        "1984–1987년. 272대.",
        "2.9L 트윈터보 V8, 400 PS.",
        "엔진은 세로 배치. 308과 다름.",
        "그룹 B 취소 뒤 로드카로 남음."
      ],
    specs: [
      ["엔진", "2.9L 트윈터보 V8"],
      ["출력", "400 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "미드십"],
      ["생산", "272대"]
    ],
    sources: [
      ["Wikipedia — Ferrari 288 GTO", "https://en.wikipedia.org/wiki/Ferrari_288_GTO"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari 288 GTO", "https://en.wikipedia.org/wiki/Ferrari_288_GTO"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari 288 GTO",
  },
  {
    slug: "ferrari-f40",
    brand: "ferrari",
    nameKo: "페라리 F40",
    nameEn: "Ferrari F40",
    years: "1987–1992",
    body: "2도어 쿠페",
    categories: [
        "supercar",
        "sports"
      ],
    summary: "창립 40주년의 한정 슈퍼카. 2.9리터 트윈터보 V8, 478 PS, 1,311대. 엔초가 승인한 마지막 양산 신차.",
    editorial: [
        "F40은 288 GTO의 터보 V8을 더 밀어 올리고 차체를 탄소와 케블라로 바꿨다. 편의는 의도적으로 뺐다.",
        "창은 슬라이딩 플렉시글라스, 실내는 천. 로드카의 형식을 갖춘 경주차에 가깝다."
      ],
    history: [
        "1987년 공개. 엔초 페라리는 1988년 8월 세상을 떠났고, F40은 그가 양산을 승인한 마지막 신차로 남았다.",
        "생산은 1992년까지 1,311대. 당초 계획보다 늘었다."
      ],
    design: [
        "큰 리어 윙, 덮개형 램프, 나막신 옆면. 일부 탄소 패널은 도장 아래를 숨기지 않는다.",
        "피닌파리나와 페라리의 공동 작업. 공기 흡입과 열 배출이 스타일보다 먼저다."
      ],
    driving: [
        "478 PS, 5단 수동, 후륜. 터보가 붙는 구간이 운전의 전부다.",
        "공장 표기 최고속 324km/h. 트랙션 컨트롤은 없다."
      ],
    facts: [
        "1987–1992년. 1,311대.",
        "2,936cc 트윈터보 V8, 478 PS.",
        "창립 40주년.",
        "엔초 페라리가 승인한 마지막 양산 신차."
      ],
    specs: [
      ["엔진", "2.9L 트윈터보 V8"],
      ["출력", "478 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "미드십"],
      ["변속", "5단 수동"],
      ["생산", "1,311대"]
    ],
    sources: [
      ["Wikipedia — Ferrari F40", "https://en.wikipedia.org/wiki/Ferrari_F40"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari F40", "https://en.wikipedia.org/wiki/Ferrari_F40"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari F40",
  },
  {
    slug: "ferrari-348",
    brand: "ferrari",
    nameKo: "페라리 348",
    nameEn: "Ferrari 348",
    years: "1989–1995",
    body: "쿠페·타르가·스파이더",
    categories: [
        "sports"
      ],
    summary: "328을 이은 3.4리터 세로 V8. 테스타로사를 축소한 옆 핀이 얼굴이다.",
    editorial: [
        "348 tb/ts는 1989년, 나중에 GTB/GTS/스파이더로 이름이 정리됐다. 배기량 3,405cc, 약 300 PS.",
        "가로 배치 308/328과 달리 엔진이 세로다. 몬디알과 부품을 나눈다."
      ],
    history: [
        "1989년 프랑크푸르트. 초기형은 철제 그릴과 가로 핀. 1993년 페이스리프트로 코가 열렸다.",
        "1994년 F355가 5밸브 3.5리터로 바통을 받았다. 348은 그 사이 5년의 차다."
      ],
    design: [
        "테스타로사의 사이드 스트레이크를 작은 차에 옮겼다. 팝업 헤드램프.",
        "실내는 308보다 넓고 각지다. 2인승."
      ],
    driving: [
        "300 PS의 자연흡기. 저속은 무겁고, 회전을 올리면 348답다는 말이 당시 시승의 결론에 가깝다.",
        "초기형은 리프트오프 오버스티어 이야기가 많았고, 후기 서스펜션이 그 평가를 누그러뜨렸다."
      ],
    facts: [
        "1989–1995년.",
        "3.4L 세로 V8, 약 300 PS.",
        "옆 핀은 테스타로사와의 가족 유사.",
        "후속 F355."
      ],
    specs: [
      ["엔진", "3.4L V8"],
      ["출력", "약 300 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "미드십"],
      ["변속", "5단 수동"]
    ],
    sources: [
      ["Wikipedia — Ferrari 348", "https://en.wikipedia.org/wiki/Ferrari_348"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari 348", "https://en.wikipedia.org/wiki/Ferrari_348"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari 348 tb",
  },
  {
    slug: "ferrari-f355",
    brand: "ferrari",
    nameKo: "페라리 F355",
    nameEn: "Ferrari F355",
    years: "1994–1999",
    body: "베를리네타·GTS·스파이더",
    categories: [
        "sports"
      ],
    summary: "실린더당 5밸브 3.5리터 V8. 380 PS, 8,250rpm. 348의 평가를 되돌린 차.",
    editorial: [
        "F355의 F는 Formula. 헤드 기술이 이름에 들어갔다. 배기량 3,496cc.",
        "베를리네타, 타르가 GTS, 스파이더. 후기 F1 패들시프트가 선택으로 붙었다."
      ],
    history: [
        "1994년 제네바. 348의 섀시를 바탕으로 엔진과 에어로를 바꿨다.",
        "1997년 F1 변속, 1999년 360 모데나에 자리를 넘겼다. 생산은 약 11,000대 규모로 이 줄에서는 많은 편이다."
      ],
    design: [
        "348의 핀을 지우고 더 둥근 코와 뒷 디퓨저를 넣었다. 팝업 램프는 유지.",
        "실내 게이트의 크롬 시프트가 이 시대 페라리의 상징으로 남았다."
      ],
    driving: [
        "380 PS를 8,250rpm에서 낸다. 아래 토크는 얇고, 위의 소리가 차의 이유다.",
        "패들시프트는 당시 로드카로서는 빠른 편이었지만 저속 매끄러움은 수동이 낫다는 평가가 많았다."
      ],
    facts: [
        "1994–1999년.",
        "3.5L 5밸브 V8, 380 PS.",
        "베를리네타, GTS, 스파이더.",
        "후기 F1 패들 변속 선택."
      ],
    specs: [
      ["엔진", "3.5L V8"],
      ["출력", "380 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "미드십"],
      ["변속", "6단 수동 또는 F1"]
    ],
    sources: [
      ["Wikipedia — Ferrari F355", "https://en.wikipedia.org/wiki/Ferrari_F355"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari F355", "https://en.wikipedia.org/wiki/Ferrari_F355"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari F355 Berlinetta",
  },
  {
    slug: "ferrari-f50",
    brand: "ferrari",
    nameKo: "페라리 F50",
    nameEn: "Ferrari F50",
    years: "1995–1997",
    body: "쿠페·바르케타",
    categories: [
        "supercar",
        "sports"
      ],
    summary: "F1 유래 4.7리터 자연흡기 V12를 차체의 응력 부재로 쓴 한정 차. 520 PS, 349대.",
    editorial: [
        "F40의 터보 뒤를 자연흡기와 오픈 톱으로 받았다. 창립 50년에 맞춘 이름.",
        "엔진이 섀시에 직접 볼트로 고정되는 구조다. 탈착 하드톱의 바르케타가 기본 형태다."
      ],
    history: [
        "1995년 제네바. 생산 349대. 1997년에 끝났다.",
        "V12는 1990년 F1 엔진의 도로 버전으로 설명된다. 배기량 4,698cc, 520 PS."
      ],
    design: [
        "큰 리어 윙과 커버드 램프, 차체 위를 지나는 흡기구. 피닌파리나.",
        "실내는 탄소가 그대로 보이고 문짝은 가볍다. 수납은 거의 없다."
      ],
    driving: [
        "자연흡기 12기통은 터보 F40과 힘이 붙는 방식이 다르다. 회전을 올려야 한다.",
        "공장 표기 최고속 325km/h. 전자 개입은 최소. 지붕을 열면 소리가 운전의 절반이다."
      ],
    facts: [
        "1995–1997년. 349대.",
        "4.7L V12, 520 PS.",
        "엔진이 응력 구조의 일부.",
        "탈착 하드톱 바르케타."
      ],
    specs: [
      ["엔진", "4.7L V12"],
      ["출력", "520 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "미드십"],
      ["변속", "6단 수동"],
      ["생산", "349대"]
    ],
    sources: [
      ["Wikipedia — Ferrari F50", "https://en.wikipedia.org/wiki/Ferrari_F50"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari F50", "https://en.wikipedia.org/wiki/Ferrari_F50"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari F50",
  },
  {
    slug: "ferrari-550",
    brand: "ferrari",
    nameKo: "페라리 550 마라넬로",
    nameEn: "Ferrari 550 Maranello",
    years: "1996–2006",
    body: "2도어 쿠페",
    categories: [
        "gt"
      ],
    summary: "미드십 12기통 뒤를 프론트 엔진 V12 GT로 되돌린 차. 5.5리터 485 PS. 575M이 뒤를 잇는다.",
    editorial: [
        "550은 테스타로사 라인의 반대편이다. 앞 엔진, 뒤 트랜스액슬, 2인승 GT.",
        "2002년 575M 마라넬로가 5,748cc와 515 PS로 같은 자리를 이어 2006년까지 갔다."
      ],
    history: [
        "1996년 공개. 데이토나 이후 오래 비었던 프론트 V12 베를리네타의 복귀.",
        "바라케타 한정과 575 슈퍼아메리카 오픈도 이 혈통의 갈래다. 599 GTB가 2006년 다음 장."
      ],
    design: [
        "피닌파리나. 긴 보닛, 짧은 데크, 타원 램프. 1970년대 데이토나의 현대판이라는 말이 당시 많았다.",
        "실내는 가죽 GT. 2인승이지만 트렁크가 미드십 12기통과는 다른 수준이다."
      ],
    driving: [
        "485 PS의 자연흡기 V12는 중속부터 크다. 최고속 320km/h 안팎.",
        "고속 안정은 프론트 엔진 GT의 본분. 산길의 민첩함은 미드십 8기통에 양보한다."
      ],
    facts: [
        "550 마라넬로 1996–2001년, 5.5L, 485 PS.",
        "575M 2002–2006년, 5.75L, 515 PS.",
        "프론트 엔진, 리어 트랜스액슬.",
        "미드십 플랫 12 시대의 반대 선택."
      ],
    specs: [
      ["엔진", "5.5L V12 (550)"],
      ["출력", "485 PS (550)"],
      ["구동", "후륜구동"],
      ["레이아웃", "프론트 엔진"],
      ["변속", "6단 수동"]
    ],
    sources: [
      ["Wikipedia — Ferrari 550 Maranello", "https://en.wikipedia.org/wiki/Ferrari_550_Maranello"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari 550 Maranello", "https://en.wikipedia.org/wiki/Ferrari_550_Maranello"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari 550 Maranello",
    generations: [
      {
        id: "550",
        heading: "550 마라넬로",
        years: "1996–2001",
        summary: "5,474cc V12, 485 PS. 프론트 엔진 복귀의 본편.",
        points: [
            "485 PS.",
            "6단 수동.",
            "1996년 공개."
          ]
      },
      {
        id: "575",
        heading: "575M 마라넬로",
        years: "2002–2006",
        summary: "5,748cc, 515 PS. 패들 변속 F1이 널리 달렸다.",
        points: [
            "515 PS.",
            "2002–2006년.",
            "후속 599 GTB."
          ]
      }
    ],
  },
  {
    slug: "ferrari-360",
    brand: "ferrari",
    nameKo: "페라리 360 모데나",
    nameEn: "Ferrari 360 Modena",
    years: "1999–2005",
    body: "쿠페·스파이더",
    categories: [
        "sports"
      ],
    summary: "알루미늄 스페이스프레임의 3.6리터 미드십. 400 PS. 챌린지 스트라달레가 하드코어 갈래다.",
    editorial: [
        "F355의 강철 프레임을 알루미늄으로 바꿨다. 차체 강성 이야기가 이 차의 기술 문장이다.",
        "스파이더와 2003년 챌린지 스트라달레. 후자는 더 가볍고 425 PS."
      ],
    history: [
        "1999년 제네바. 배기량 3,586cc, 400 PS. 생산은 2005년 F430까지.",
        "피닌파리나와 바람 실험실의 공기가 밑으로 빠지는 평평한 바닥이 디자인 조건이었다."
      ],
    design: [
        "팝업 램프가 사라졌다. 두 개의 흡입구가 엉덩이를 파고, 유리 엔진 커버가 뒤를 연다.",
        "실내는 알루미늄 트림과 둥근 송풍구. F355보다 넓다."
      ],
    driving: [
        "8,500rpm, 400 PS. 소리는 5밸브 355보다 두껍다.",
        "스트라달레는 카본 시트와 짧은 기어로 트랙 쪽. 일반 모데나는 도로 GT에 더 가깝다."
      ],
    facts: [
        "1999–2005년.",
        "3.6L V8, 400 PS.",
        "알루미늄 스페이스프레임.",
        "챌린지 스트라달레는 425 PS."
      ],
    specs: [
      ["엔진", "3.6L V8"],
      ["출력", "400 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "미드십"],
      ["변속", "6단 수동 또는 F1"]
    ],
    sources: [
      ["Wikipedia — Ferrari 360 Modena", "https://en.wikipedia.org/wiki/Ferrari_360"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari 360 Modena", "https://en.wikipedia.org/wiki/Ferrari_360"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari 360 Modena",
  },
  {
    slug: "ferrari-enzo",
    brand: "ferrari",
    nameKo: "페라리 엔초",
    nameEn: "Ferrari Enzo",
    years: "2002–2004",
    body: "2도어 쿠페",
    categories: [
        "supercar"
      ],
    summary: "창립자의 이름을 단 한정 미드십. 6.0리터 V12, 660 PS, 399대.",
    editorial: [
        "F50 다음의 플래그십. F1의 탄소 터브와 패들 변속, 카본 세라믹 브레이크를 로드카에 가져왔다.",
        "이름은 엔초 페라리. 번호판 있는 F1이라는 홍보 문장이 당시 붙었다."
      ],
    history: [
        "2002년 공개, 생산은 2004년까지 399대. 나중에 자선 경매용 한 대가 더해져 400대째 이야기가 따로 있다.",
        "배기량 5,998cc, 660 PS, 7,800rpm. 변속은 6단 F1 패들뿐."
      ],
    design: [
        "피닌파리나 겐 오쿠야마. 코가 파이고 지붕에서 리어 윙으로 공기가 흐른다.",
        "시저 도어. 실내는 탄소와 단순한 계기. 수납보다 시야와 페달."
      ],
    driving: [
        "자연흡기 V12가 차체 한가운데서 돌아간다. 0–100km/h는 3.5초 안팎으로 인용된다.",
        "전자 차동과 트랙션이 F40 시대와 다른 점이다. 그래도 터보의 지연은 없다."
      ],
    facts: [
        "2002–2004년. 399대(양산 계획).",
        "6.0L V12, 660 PS.",
        "6단 F1 패들만.",
        "카본 세라믹 브레이크."
      ],
    specs: [
      ["엔진", "6.0L V12"],
      ["출력", "660 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "미드십"],
      ["변속", "6단 F1"],
      ["생산", "399대"]
    ],
    sources: [
      ["Wikipedia — Ferrari Enzo", "https://en.wikipedia.org/wiki/Enzo_Ferrari_(automobile)"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari Enzo", "https://en.wikipedia.org/wiki/Enzo_Ferrari_(automobile)"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari Enzo",
  },
  {
    slug: "ferrari-f430",
    brand: "ferrari",
    nameKo: "페라리 F430",
    nameEn: "Ferrari F430",
    years: "2004–2009",
    body: "쿠페·스파이더",
    categories: [
        "sports"
      ],
    summary: "360의 후속. 4.3리터 V8, 490 PS. 전자 디퍼렌셜과 스티어링의 마네티노가 이 시대의 표식.",
    editorial: [
        "배기량이 360에서 4,308cc로 늘었다. 출력 490 PS.",
        "2007년 스쿠데리아가 510 PS의 가벼운 갈래. 스파이더 16M이 그 오픈."
      ],
    history: [
        "2004년 파리. 2009년 458에 자리를 넘길 때까지.",
        "엔진 매니폴드와 디퓨저는 F1 용어로 설명됐고, 마네티노 다이얼이 실내의 중심이 됐다."
      ],
    design: [
        "360의 둥근 엉덩이를 더 날카롭게 잘랐다. 코의 두 구멍은 유지.",
        "피닌파리나. 스파이더는 소프트톱."
      ],
    driving: [
        "토크가 360보다 아래부터 있다. e-diff가 코너 출구를 전자적으로 나눈다.",
        "스쿠데리아는 장비와 방음을 빼 트랙 쪽. 일반 F430은 그 이전 세대보다 도로에서 덜 예민하다."
      ],
    facts: [
        "2004–2009년.",
        "4.3L V8, 490 PS.",
        "마네티노와 전자 디퍼렌셜.",
        "스쿠데리아 510 PS."
      ],
    specs: [
      ["엔진", "4.3L V8"],
      ["출력", "490 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "미드십"],
      ["변속", "6단 F1 또는 수동"]
    ],
    sources: [
      ["Wikipedia — Ferrari F430", "https://en.wikipedia.org/wiki/Ferrari_F430"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari F430", "https://en.wikipedia.org/wiki/Ferrari_F430"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari F430",
  },
  {
    slug: "ferrari-458",
    brand: "ferrari",
    nameKo: "페라리 458 이탈리아",
    nameEn: "Ferrari 458 Italia",
    years: "2009–2015",
    body: "쿠페·스파이더",
    categories: [
        "sports",
        "supercar"
      ],
    summary: "자연흡기 V8의 정점. 4.5리터, 570 PS, 9,000rpm. 스페치알레가 마지막 갈래다.",
    editorial: [
        "458은 직분사 4,499cc. 리터당 출력이 이 시대 양산 V8의 기준이 됐다.",
        "2011년 스파이더, 2013년 스페치알레 605 PS. 2015년 터보 488이 자연흡기 줄을 닫았다."
      ],
    history: [
        "2009년 프랑크푸르트. 피닌파리나 마지막 단독 양산 페라리로 자주 언급된다. 이후 스타일링은 사내 센터 비중이 커진다.",
        "듀얼 클러치 7단만. 수동 게이트는 이 차에서 빠졌다."
      ],
    design: [
        "코에서 옆 흡입, 뒤 디퓨저까지 공기가 한 경로다. 삼중 배기구.",
        "스티어링의 버튼이 방향지시와 와이퍼를 맡는다. 칼럼 레버가 없다."
      ],
    driving: [
        "9,000rpm까지 자연흡기. 터보 488보다 아래 토크는 얇고, 위의 반응은 즉각적이다.",
        "0–100km/h 3.4초, 최고속 325km/h가 공장 표기로 널리 인용된다."
      ],
    facts: [
        "2009–2015년.",
        "4.5L V8, 570 PS, 9,000rpm.",
        "7단 듀얼클러치만.",
        "스페치알레는 605 PS."
      ],
    specs: [
      ["엔진", "4.5L V8"],
      ["출력", "570 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "미드십"],
      ["변속", "7단 듀얼클러치"]
    ],
    sources: [
      ["Wikipedia — Ferrari 458 Italia", "https://en.wikipedia.org/wiki/Ferrari_458"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari 458 Italia", "https://en.wikipedia.org/wiki/Ferrari_458"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari 458 Italia",
  },
  {
    slug: "ferrari-laferrari",
    brand: "ferrari",
    nameKo: "페라리 라페라리",
    nameEn: "LaFerrari",
    years: "2013–2018",
    body: "쿠페·아페르타",
    categories: [
        "supercar",
        "ev"
      ],
    summary: "엔초의 후속 하이브리드 플래그십. V12와 전기 모터 합산 963 PS. 쿠페 499대.",
    editorial: [
        "HY-KERS. 6.3리터 V12 800 PS에 전기 모터가 더해져 합산 963 PS. 플러그인으로 충전하는 구조는 아니다.",
        "아페르타는 2016년 오픈 한정. 쿠페와 별도 대수다."
      ],
    history: [
        "2013년 제네바. 쿠페 499대. 생산은 2016년 전후 쿠페가 끝나고 아페르타가 2018년까지.",
        "F1의 에너지 회수를 로드카 문장으로 쓴 첫 페라리 플래그십. 후속은 2024년 F80."
      ],
    design: [
        "사내 스타일링 센터, 플라비오 만초니. 코가 떠 있고 뒷 펜더가 바퀴를 삼킨다.",
        "버터플라이 도어. 실내는 운전자를 둘러싼 좌석 위치 조절이 페달 쪽과 함께 움직인다."
      ],
    driving: [
        "전기 모터가 터보 지연이 아닌 V12의 빈 회전을 메운다. 0–100km/h 3초 미만, 최고속 350km/h 이상.",
        "배터리는 작아 전기만으로 장거리를 가는 차가 아니다. 합산 출력이 목적이다."
      ],
    facts: [
        "2013–2016년 쿠페 499대.",
        "6.3L V12 + 모터, 합산 963 PS.",
        "아페르타는 별도 오픈 한정.",
        "후속 플래그십은 F80."
      ],
    specs: [
      ["엔진", "6.3L V12 하이브리드"],
      ["출력", "합산 963 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "미드십"],
      ["변속", "7단 듀얼클러치"],
      ["생산", "쿠페 499대"]
    ],
    sources: [
      ["Wikipedia — LaFerrari", "https://en.wikipedia.org/wiki/LaFerrari"]
    ],
    furtherReading: [
      ["Wikipedia — LaFerrari", "https://en.wikipedia.org/wiki/LaFerrari"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "LaFerrari",
  },
  {
    slug: "ferrari-488",
    brand: "ferrari",
    nameKo: "페라리 488 GTB",
    nameEn: "Ferrari 488 GTB",
    years: "2015–2019",
    body: "쿠페·스파이더",
    categories: [
        "sports",
        "supercar"
      ],
    summary: "458의 자리를 이은 첫 터보 V8 미드십. 3.9리터, 670 PS. 피스타가 트랙 갈래다.",
    editorial: [
        "자연흡기 9,000rpm 대신 트윈터보와 낮은 회전의 토크. 다운사이징의 시대가 이 줄에도 왔다.",
        "2018년 피스타 720 PS. 2019년 F8 트리뷰토가 같은 엔진을 720 PS로 정리하며 이름을 닫는다."
      ],
    history: [
        "2015년 제네바. 형식 엔진 F154, 3,902cc, 670 PS.",
        "이름은 1970년대 내구 레이스 488 GTB 경주차에서 가져왔다. 로드카 488과는 기계가 다르다."
      ],
    design: [
        "458의 곡선을 유지한 채 옆 흡입구가 커졌다. 터보의 공기가 이유다.",
        "배기구는 위로 올라와 디퓨저가 넓어졌다."
      ],
    driving: [
        "토크가 458보다 훨씬 아래부터 있다. 회전 한계는 자연흡기 때보다 낮다.",
        "0–100km/h 3.0초, 최고속 330km/h가 공장 표기다."
      ],
    facts: [
        "2015–2019년.",
        "3.9L 트윈터보 V8, 670 PS.",
        "피스타는 720 PS.",
        "이름은 경주차 488에서 왔으나 기계는 다르다."
      ],
    specs: [
      ["엔진", "3.9L 트윈터보 V8"],
      ["출력", "670 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "미드십"],
      ["변속", "7단 듀얼클러치"]
    ],
    sources: [
      ["Wikipedia — Ferrari 488 GTB", "https://en.wikipedia.org/wiki/Ferrari_488"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari 488 GTB", "https://en.wikipedia.org/wiki/Ferrari_488"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari 488 GTB",
  },
  {
    slug: "ferrari-f8",
    brand: "ferrari",
    nameKo: "페라리 F8 트리뷰토",
    nameEn: "Ferrari F8 Tributo",
    years: "2019–2023",
    body: "쿠페·스파이더",
    categories: [
        "sports",
        "supercar"
      ],
    summary: "488 계열의 마지막 이름. 같은 3.9리터 트윈터보를 720 PS로 끌어올린 미드십.",
    editorial: [
        "트리뷰토는 헌정. 페라리가 자연흡기 이후 다듬어 온 V8에 대한 작별 인사로 홍보했다.",
        "2022년 296 GTB의 V6 하이브리드가 이 배기량 자리를 대체하기 시작했다."
      ],
    history: [
        "2019년 제네바. 488 피스타의 출력을 더 도로용 차체에 옮긴 차로 설명된다.",
        "스파이더가 함께 있었고 생산은 2023년 무렵 정리됐다."
      ],
    design: [
        "488보다 램프가 얇고 코의 S-덕트가 드러난다. 엔진 커버의 렉산 루버.",
        "옆 흡입은 488의 큰 구멍을 더 다듬었다."
      ],
    driving: [
        "720 PS. 0–100km/h 2.9초. 토크가 두꺼워 기어를 아껴도 나간다.",
        "488보다 냉각과 다운포스를 보강한 진화이지, 새 플랫폼은 아니다."
      ],
    facts: [
        "2019–2023년.",
        "3.9L 트윈터보 V8, 720 PS.",
        "488 혈통의 마지막 이름.",
        "후속 자리는 296."
      ],
    specs: [
      ["엔진", "3.9L 트윈터보 V8"],
      ["출력", "720 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "미드십"],
      ["변속", "7단 듀얼클러치"]
    ],
    sources: [
      ["Wikipedia — Ferrari F8 Tributo", "https://en.wikipedia.org/wiki/Ferrari_F8"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari F8 Tributo", "https://en.wikipedia.org/wiki/Ferrari_F8"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari F8 Tributo",
  },
  {
    slug: "ferrari-812",
    brand: "ferrari",
    nameKo: "페라리 812 슈퍼패스트",
    nameEn: "Ferrari 812 Superfast",
    years: "2017–2024",
    body: "쿠페·GTS",
    categories: [
        "gt",
        "supercar"
      ],
    summary: "프론트 미드 V12 GT. 6.5리터, 800 PS. F12의 후속이고 12칠린드리가 뒤를 잇는다.",
    editorial: [
        "슈퍼패스트는 1964년 500 슈퍼패스트의 이름을 빌렸다. 기계는 6,496cc 자연흡기 V12.",
        "2019년 오픈 GTS, 2021년 컴페티치오네. 2024년 12칠린드리가 이름만 남기고 세대를 갈았다."
      ],
    history: [
        "2017년 제네바. F12베를리네타의 후속. 800 PS, 8,500rpm.",
        "후륜, 7단 듀얼클러치, 뒷바퀴 조향이 고속과 저속을 동시에 맡는다."
      ],
    design: [
        "긴 보닛과 둥근 리어 램프. 대시보드를 가로지르는 흑선은 데이토나의 밴드를 현대적으로 인용한 것으로 설명됐다.",
        "2인승. 트렁크는 프론트 엔진 GT로서는 얕다."
      ],
    driving: [
        "자연흡기 800 PS는 터보 없이 회전으로 만든다. 0–100km/h 2.9초.",
        "차체가 길어 도심보다 고속 투어와 서킷 직선이 본분이다."
      ],
    facts: [
        "2017–2024년.",
        "6.5L V12, 800 PS.",
        "F12의 후속, 12칠린드리의 이전.",
        "GTS는 오픈."
      ],
    specs: [
      ["엔진", "6.5L V12"],
      ["출력", "800 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "프론트 미드 엔진"],
      ["변속", "7단 듀얼클러치"]
    ],
    sources: [
      ["Wikipedia — Ferrari 812 Superfast", "https://en.wikipedia.org/wiki/Ferrari_812_Superfast"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari 812 Superfast", "https://en.wikipedia.org/wiki/Ferrari_812_Superfast"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari 812 Superfast",
  },
  {
    slug: "ferrari-sf90",
    brand: "ferrari",
    nameKo: "페라리 SF90 스트라달레",
    nameEn: "Ferrari SF90 Stradale",
    years: "2019–2024",
    body: "쿠페·스파이더",
    categories: [
        "supercar",
        "ev"
      ],
    summary: "브랜드 첫 양산 플러그인 하이브리드 미드십. 4.0 트윈터보 V8과 세 모터, 합산 1,000 PS.",
    editorial: [
        "SF90은 스쿠데리아 페라리 90주년. 스트라달레는 도로용이라는 뜻.",
        "V8이 780 PS, 전기가 나머지를 채워 합산 1,000 PS. 앞 두 모터 때문에 사륜이 된다."
      ],
    history: [
        "2019년 공개. 2023년 더 하드코어한 XX가 트랙 한정으로 추가됐다.",
        "2025년 849 테스타로사가 이 하이브리드 V8 플래그십의 뒤를 잇는 이름으로 발표됐다."
      ],
    design: [
        "낮은 지붕과 떠 있는 듯한 리어 윙의 닫힌 위치. 눈은 얇은 슬릿.",
        "실내는 16인치 곡면 계기가 먼저 보인다. 물리적 버튼은 스티어링에 모였다."
      ],
    driving: [
        "전기만으로 짧은 거리를 갈 수 있는 첫 페라리 양산 스포츠카. 배터리는 7.9kWh.",
        "합산 출력의 사륜이라 젖은 노면의 출발이 후륜 미드십과 다르다. 0–100km/h 2.5초."
      ],
    facts: [
        "2019–2024년 본편.",
        "4.0L 트윈터보 V8 + 3모터, 합산 1,000 PS.",
        "플러그인 하이브리드, 앞 모터로 사륜.",
        "후속 이름은 849 테스타로사."
      ],
    specs: [
      ["엔진", "4.0L 트윈터보 V8 하이브리드"],
      ["출력", "합산 1,000 PS"],
      ["구동", "사륜구동"],
      ["레이아웃", "미드십"],
      ["변속", "8단 듀얼클러치"]
    ],
    sources: [
      ["Wikipedia — Ferrari SF90 Stradale", "https://en.wikipedia.org/wiki/Ferrari_SF90_Stradale"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari SF90 Stradale", "https://en.wikipedia.org/wiki/Ferrari_SF90_Stradale"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari SF90 Stradale",
  },
  {
    slug: "ferrari-roma",
    brand: "ferrari",
    nameKo: "페라리 로마",
    nameEn: "Ferrari Roma",
    years: "2020–2025",
    body: "쿠페·스파이더",
    categories: [
        "gt"
      ],
    summary: "프론트 엔진 2+ 쿠페. 3.9리터 트윈터보 V8, 620 PS. 포르토피노보다 지붕이 고정된 GT.",
    editorial: [
        "로마는 1950–60년대 도로 GT의 비율을 현대 터보 V8에 입힌 차다. 2인승에 작은 뒷자리가 있다.",
        "2023년 소프트톱 스파이더. 2025년 아말피가 이 자리를 이어 받는 이름으로 나왔다."
      ],
    history: [
        "2019년 공개, 생산은 2020년부터. 엔진은 포르토피노와 친척인 F154 V8.",
        "2026년 들어 로마 스파이더 인도는 수명 주기상 줄어든다고 회사가 실적 자료에서 밝혔다."
      ],
    design: [
        "수직에 가까운 그릴과 긴 보닛, 패스트백. 팝업도 큰 날개도 없다.",
        "실내는 가로로 긴 화면과 금속 게이트 버튼. 디지털이되 시프트 게이트의 기억을 남겼다."
      ],
    driving: [
        "620 PS, 8단 듀얼클러치. 0–100km/h 3.4초. 최고속 320km/h.",
        "미드십 488보다 승차와 시야가 투어 쪽. 뒷좌석은 짐칸에 가깝다."
      ],
    facts: [
        "2020–2025년 쿠페가 중심.",
        "3.9L 트윈터보 V8, 620 PS.",
        "프론트 엔진 2+.",
        "후속 자리는 아말피."
      ],
    specs: [
      ["엔진", "3.9L 트윈터보 V8"],
      ["출력", "620 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "프론트 미드 엔진"],
      ["변속", "8단 듀얼클러치"]
    ],
    sources: [
      ["Wikipedia — Ferrari Roma", "https://en.wikipedia.org/wiki/Ferrari_Roma"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari Roma", "https://en.wikipedia.org/wiki/Ferrari_Roma"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari Roma",
  },
  {
    slug: "ferrari-portofino",
    brand: "ferrari",
    nameKo: "페라리 포르토피노",
    nameEn: "Ferrari Portofino",
    years: "2017–2023",
    body: "리트랙터블 하드톱 컨버터블",
    categories: [
        "gt"
      ],
    summary: "캘리포니아의 후속 오픈 GT. 3.9리터 트윈터보 V8. 초기 600 PS, M은 620 PS.",
    editorial: [
        "2008년 캘리포니아가 연 접이식 하드톱 2+를 더 가볍게 다시 만든 차다.",
        "M은 2021년 페이스리프트. 출력을 620 PS로 올리고 앞모습을 고쳤다."
      ],
    history: [
        "2017년 프랑크푸르트. 캘리포니아 T의 3.9리터를 이어 600 PS.",
        "생산은 2023년 무렵 로마 스파이더와 역할이 겹치며 정리됐다."
      ],
    design: [
        "캘리포니아보다 코가 날카롭고 트렁크 리드가 하드톱을 삼킨다.",
        "2+2를 표방하지만 뒷좌석은 짧다. 지붕을 닫으면 쿠페에 가깝다."
      ],
    driving: [
        "토크가 낮은 회전에서 두껍다. 오픈 상태의 고속은 방풍 스크린에 달려 있다.",
        "무게는 미드십 8기통보다 앞쪽에 있고, 그래서 투어에 치우친다."
      ],
    facts: [
        "2017–2020년 포르토피노, 600 PS.",
        "2021–2023년 포르토피노 M, 620 PS.",
        "접이식 하드톱.",
        "이전은 캘리포니아, 성격이 가까운 쿠페는 로마."
      ],
    specs: [
      ["엔진", "3.9L 트윈터보 V8"],
      ["출력", "600 PS, M은 620 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "프론트 엔진"],
      ["변속", "7단, M은 8단 듀얼클러치"]
    ],
    sources: [
      ["Wikipedia — Ferrari Portofino", "https://en.wikipedia.org/wiki/Ferrari_Portofino"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari Portofino", "https://en.wikipedia.org/wiki/Ferrari_Portofino"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari Portofino",
  },
  {
    slug: "ferrari-california",
    brand: "ferrari",
    nameKo: "페라리 캘리포니아",
    nameEn: "Ferrari California",
    years: "2008–2017",
    body: "리트랙터블 하드톱 컨버터블",
    categories: [
        "gt"
      ],
    summary: "접이식 하드톱의 프론트 엔진 2+. 초기 4.3리터 자연흡기, 2014년 캘리포니아 T가 3.9 터보다.",
    editorial: [
        "1950년대 250 GT 캘리포니아와 이름은 같고 기계는 다르다. 일상 GT를 넓히려는 차였다.",
        "T는 브랜드 V8 로드카의 터보 전환을 이 줄에서 먼저 했다."
      ],
    history: [
        "2008년 파리. 4,297cc V8, 460 PS. 7단 듀얼클러치.",
        "2014년 캘리포니아 T, 3,855cc 트윈터보, 560 PS. 2017년 포르토피노로 교체."
      ],
    design: [
        "긴 데크가 하드톱을 접어 넣는다. 코는 450 시대의 둥근 페라리.",
        "뒷좌석은 어린이 또는 짐. 마케팅의 2+는 그 수준이다."
      ],
    driving: [
        "자연흡기 초기형은 회전을 올려야 하고, T는 토크가 일찍 온다.",
        "무겁다. 스포츠카의 기록보다 지붕을 연 장거리가 목적에 가깝다."
      ],
    facts: [
        "2008–2014년 4.3L 자연흡기 460 PS.",
        "2014–2017년 캘리포니아 T, 3.9L 터보 560 PS.",
        "접이식 하드톱 2+.",
        "250 GT 캘리포니아와는 다른 차."
      ],
    specs: [
      ["엔진", "4.3L V8, 이후 3.9L 트윈터보"],
      ["출력", "460 PS, T는 560 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "프론트 엔진"],
      ["변속", "7단 듀얼클러치"]
    ],
    sources: [
      ["Wikipedia — Ferrari California", "https://en.wikipedia.org/wiki/Ferrari_California"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari California", "https://en.wikipedia.org/wiki/Ferrari_California"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari California",
  },
  {
    slug: "ferrari-296",
    brand: "ferrari",
    nameKo: "페라리 296 GTB",
    nameEn: "Ferrari 296 GTB",
    years: "2021–",
    body: "쿠페·GTS",
    categories: [
        "sports",
        "ev"
      ],
    summary: "120도 트윈터보 V6 플러그인 하이브리드. 합산 830 PS. 8기통 미드십의 아래 자리를 이은 차.",
    editorial: [
        "296은 배기량 2,992cc와 6기통을 더한 이름. 디노 이후 오래간만의 로드카 V6.",
        "엔진 663 PS, 전기 모터와 합쳐 830 PS. 뒤 구동."
      ],
    history: [
        "2021년 공개. 2022년부터 고객 인도. GTS는 하드톱 오픈.",
        "2025년 스페치알레가 더 가벼운 갈래로 추가됐다."
      ],
    design: [
        "짧은 데크와 둥근 리어는 250 LM을 인용했다고 회사가 설명했다.",
        "실내는 SF90과 같은 세대의 곡면 계기. 차는 SF90보다 좁고 낮다."
      ],
    driving: [
        "전기 모드로 도심 몇 킬로미터를 간다. 배터리는 7.45kWh.",
        "터보 V6는 소리가 12기통과 다르고, 합산 토크는 그보다 즉각적이다. 0–100km/h 2.9초."
      ],
    facts: [
        "2021년 공개, 2022년 인도.",
        "2,992cc 120도 트윈터보 V6 + 모터.",
        "합산 830 PS. 엔진 단독 663 PS.",
        "후륜 플러그인 하이브리드."
      ],
    specs: [
      ["엔진", "3.0L 트윈터보 V6 하이브리드"],
      ["출력", "합산 830 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "미드십"],
      ["변속", "8단 듀얼클러치"]
    ],
    sources: [
      ["Wikipedia — Ferrari 296 GTB", "https://en.wikipedia.org/wiki/Ferrari_296"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari 296 GTB", "https://en.wikipedia.org/wiki/Ferrari_296"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari 296 GTB",
  },
  {
    slug: "ferrari-purosangue",
    brand: "ferrari",
    nameKo: "페라리 푸로산게",
    nameEn: "Ferrari Purosangue",
    years: "2022–",
    body: "4도어 4인승",
    categories: [
        "suv",
        "gt"
      ],
    summary: "브랜드 첫 양산 4도어. 6.5리터 자연흡기 V12, 725 PS. 네 명이 타는 키 높은 GT.",
    editorial: [
        "푸로산게는 순종마. 회사는 이 차를 SUV라는 말 대신 4도어 4인승으로 소개하는 쪽을 택해 왔다. 형태는 키가 있고 문이 넷이다.",
        "앞 문만 아니라 뒤 문도 앞으로 열린다. 엔진은 812와 같은 혈통의 V12."
      ],
    history: [
        "2022년 9월 공개, 인도는 2023년. 로마와 플랫폼을 일부 나눈다고 정리된다.",
        "4인승이 기본. 2+2 쿠페 시대의 가족 페라리를 다른 실루엣으로 바꾼 차다."
      ],
    design: [
        "긴 보닛과 짧은 앞 오버행, 쿠페처럼 떨어지는 지붕. 지상고는 세단보다 높다.",
        "실내는 네 개의 독립 좌석. 뒤도 성인 자리다."
      ],
    driving: [
        "725 PS, 8단 듀얼클러치, 사륜. 0–100km/h 3.3초, 최고속 310km/h가 공장 표기다.",
        "차체가 높아 코너의 감각은 812와 다르다. V12의 소리와 토크는 그 차이를 가리는 장치다."
      ],
    facts: [
        "2022년 공개, 2023년 인도.",
        "6.5L 자연흡기 V12, 725 PS.",
        "4도어 4인승, 사륜.",
        "브랜드 첫 양산 4도어."
      ],
    specs: [
      ["엔진", "6.5L V12"],
      ["출력", "725 PS"],
      ["구동", "사륜구동"],
      ["레이아웃", "프론트 미드 엔진"],
      ["변속", "8단 듀얼클러치"]
    ],
    sources: [
      ["Wikipedia — Ferrari Purosangue", "https://en.wikipedia.org/wiki/Ferrari_Purosangue"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari Purosangue", "https://en.wikipedia.org/wiki/Ferrari_Purosangue"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari Purosangue",
  },
  {
    slug: "ferrari-12cilindri",
    brand: "ferrari",
    nameKo: "페라리 12칠린드리",
    nameEn: "Ferrari 12Cilindri",
    years: "2024–",
    body: "쿠페·스파이더",
    categories: [
        "gt",
        "supercar"
      ],
    summary: "812의 후속 프론트 V12. 6.5리터, 830 PS. 이름 그대로 12기통 GT.",
    editorial: [
        "2024년 마이애미에서 쿠페와 스파이더가 함께 공개됐다. 자연흡기를 유지한다.",
        "데이토나의 검은 보닛 밴드를 코의 그래픽으로 다시 썼다."
      ],
    history: [
        "812 슈퍼패스트의 자리. 출력은 830 PS로 812보다 30 PS 높다.",
        "2026년에도 회사 라인업의 V12 GT로 남아 있고, 수동 한정 마누알레도 특별 시리즈로 더해졌다."
      ],
    design: [
        "가로로 긴 램프와 매우 낮은 코. 지붕이 천천히 떨어진다.",
        "2인승. 스파이더는 소프트톱."
      ],
    driving: [
        "9,500rpm까지 도는 자연흡기. 0–100km/h 2.9초.",
        "뒷바퀴 조향과 사륜 조향 쪽이 아니라 후륜이 기본이다. 고속 GT의 직진이 본분."
      ],
    facts: [
        "2024년 공개.",
        "6.5L V12, 830 PS.",
        "쿠페와 스파이더.",
        "812의 후속."
      ],
    specs: [
      ["엔진", "6.5L V12"],
      ["출력", "830 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "프론트 미드 엔진"],
      ["변속", "8단 듀얼클러치"]
    ],
    sources: [
      ["Wikipedia — Ferrari 12Cilindri", "https://en.wikipedia.org/wiki/Ferrari_12Cilindri"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari 12Cilindri", "https://en.wikipedia.org/wiki/Ferrari_12Cilindri"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari 12Cilindri",
  },
  {
    slug: "ferrari-f80",
    brand: "ferrari",
    nameKo: "페라리 F80",
    nameEn: "Ferrari F80",
    years: "2025–",
    body: "2도어 쿠페",
    categories: [
        "supercar",
        "ev"
      ],
    summary: "라페라리의 후속 한정 플래그십. 창립 80주년. 3.0 트윈터보 V6 하이브리드, 합산 1,200 PS. 799대 계획.",
    editorial: [
        "2024년 10월 17일 공개, 생산은 2025년에 시작됐다. 형식명은 F250으로도 불린다.",
        "엔진은 르망 하이퍼카 499P에서 가져온 120도 V6. 엔진 900 PS, 모터 300 PS, 합산 1,200 PS."
      ],
    history: [
        "F40의 40주년, F80의 80주년. 회사가 그 계보를 직접 말했다.",
        "799대 계획, 2027년 무렵 생산 종료가 예고됐다. 드라이 중량은 1,525kg으로 발표됐다."
      ],
    design: [
        "스타일링 센터, 플라비오 만초니. 보닛의 검은 밴드는 데이토나와 12칠린드리와 통한다.",
        "버터플라이 도어. 길이는 4,840mm, 높이는 1,138mm."
      ],
    driving: [
        "0–100km/h 2.15초, 0–200km/h 5.75초, 최고속 350km/h.",
        "350km/h에서 1,050kg의 다운포스. 피오라노 랩 1분 15초 30을 회사가 도로용 페라리 기록으로 제시했다.",
        "사륜. 8단 듀얼클러치. 배터리는 2.28kWh로, 전기 주행거리용이 아니다."
      ],
    facts: [
        "2024년 10월 공개, 2025년 생산 시작.",
        "합산 1,200 PS. 엔진 900 PS, 모터 300 PS.",
        "799대 계획.",
        "0–100km/h 2.15초, 최고속 350km/h."
      ],
    specs: [
      ["엔진", "3.0L 트윈터보 V6 하이브리드"],
      ["출력", "합산 1,200 PS"],
      ["구동", "사륜구동"],
      ["레이아웃", "미드십"],
      ["변속", "8단 듀얼클러치"],
      ["생산", "799대 계획"]
    ],
    sources: [
      ["Wikipedia — Ferrari F80", "https://en.wikipedia.org/wiki/Ferrari_F80"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari F80", "https://en.wikipedia.org/wiki/Ferrari_F80"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari F80",
  },
  {
    slug: "ferrari-amalfi",
    brand: "ferrari",
    nameKo: "페라리 아말피",
    nameEn: "Ferrari Amalfi",
    years: "2025–",
    body: "쿠페·스파이더",
    categories: [
        "gt"
      ],
    summary: "로마를 잇는 프론트 엔진 V8 GT. 2025년 쿠페, 2026년 스파이더가 공개됐다.",
    editorial: [
        "로마의 자리, 즉 일상 쪽에 가까운 프론트 V8 쿠페의 다음 이름이다.",
        "2026년 1분기 실적에서 회사는 아말피 인도가 시작됐다고 밝혔다. 스파이더는 2026년 4월 공개, 인도는 2027년으로 예고됐다."
      ],
    history: [
        "2025년 쿠페 공개. 로마 스파이더의 수명 주기 감소와 맞물려 라인업이 넘어가는 중이다.",
        "기계의 세세한 출력은 연식 발표에 따르되, 자리는 로마의 620 PS급 프론트 V8 GT의 후속이다."
      ],
    design: [
        "로마의 패스트백을 더 얇은 램프로 다듬은 얼굴. 긴 보닛의 GT 비례는 유지된다.",
        "스파이더는 소프트톱. 2인승에 작은 뒷자리라는 로마의 공식을 잇는다."
      ],
    driving: [
        "프론트 엔진 GT의 시야와 승차가 목적이다. 미드십 296과는 다른 줄.",
        "고속 투어와 도심을 한 차로 처리하려는 입문 페라리의 자리다."
      ],
    facts: [
        "2025년 쿠페, 2026년 스파이더 공개.",
        "로마의 후속 프론트 엔진 GT.",
        "2026년 1분기부터 쿠페 인도.",
        "스파이더 인도는 2027년으로 예고."
      ],
    specs: [
      ["엔진", "트윈터보 V8"],
      ["구동", "후륜구동"],
      ["레이아웃", "프론트 엔진"],
      ["자리", "로마의 후속"]
    ],
    sources: [
      ["Wikipedia — Ferrari Amalfi", "https://en.wikipedia.org/wiki/Ferrari_Amalfi"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari Amalfi", "https://en.wikipedia.org/wiki/Ferrari_Amalfi"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari Amalfi",
  },
  {
    slug: "ferrari-849-testarossa",
    brand: "ferrari",
    nameKo: "페라리 849 테스타로사",
    nameEn: "Ferrari 849 Testarossa",
    years: "2025–",
    body: "쿠페·스파이더",
    categories: [
        "supercar",
        "ev"
      ],
    summary: "SF90을 잇는 플러그인 하이브리드 V8 미드십. 1980년대 테스타로사 이름을 하이브리드 시대에 다시 썼다.",
    editorial: [
        "2025년 발표, 2026년 1분기부터 인도가 시작됐다고 회사가 밝혔다.",
        "1984년 테스타로사와 기계는 공유하지 않는다. 이름은 빨간 캠 커버의 전통을 호출한다."
      ],
    history: [
        "SF90 스트라달레의 양산 후속 자리. XX는 한동안 특별 시리즈로 병행됐다.",
        "스파이더가 함께 라인업에 있다."
      ],
    design: [
        "SF90의 낮은 코와 떠 있는 리어 그래픽을 더 날카롭게 다듬은 얼굴.",
        "미드십 하이브리드 특유의 옆 냉각 구멍이 그대로 크다."
      ],
    driving: [
        "플러그인 하이브리드라 전기 모드의 짧은 이동과 합산 출력의 사륜 가속이 공존한다.",
        "1980년대 테스타로사의 넓은 플랫 12 감각과는 다른, 토크가 즉시 붙는 하이브리드다."
      ],
    facts: [
        "2025년 발표, 2026년 인도 시작.",
        "SF90의 후속 플러그인 하이브리드 V8.",
        "쿠페와 스파이더.",
        "1984년 테스타로사와는 다른 차."
      ],
    specs: [
      ["엔진", "트윈터보 V8 플러그인 하이브리드"],
      ["구동", "사륜구동"],
      ["레이아웃", "미드십"],
      ["자리", "SF90의 후속"]
    ],
    sources: [
      ["Wikipedia — Ferrari 849 Testarossa", "https://en.wikipedia.org/wiki/Ferrari_849_Testarossa"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari 849 Testarossa", "https://en.wikipedia.org/wiki/Ferrari_849_Testarossa"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari 849 Testarossa",
  },
  {
    slug: "ferrari-luce",
    brand: "ferrari",
    nameKo: "페라리 루체",
    nameEn: "Ferrari Luce",
    years: "2026–",
    body: "리프트백 세단",
    categories: [
        "ev",
        "sedan"
      ],
    summary: "브랜드 첫 양산 전기차. 2026년 공개된 미드사이즈 리프트백.",
    editorial: [
        "루체는 빛. 내연 V12·V8 라인 옆에 처음 놓인 배터리 전기 페라리다.",
        "2026년 5월 전후 월드 프리미어가 예고됐고, 그해 라인업에 이름을 올렸다. 출력과 주행거리는 발표 수치만 적어야 하므로, 확인 전 숫자는 여기 적지 않는다."
      ],
    history: [
        "회사는 2026년 1분기 실적에서 프리미어를 앞둔 차라고 불렀다. 그 이전의 페라리 전기차는 양산 이름이 없었다.",
        "자리는 스포츠 쿠페가 아니라 네 명이 타는 리프트백이다. 푸로산게와도 다른 실루엣."
      ],
    design: [
        "전기차 특유의 짧은 코와 긴 휠베이스가 예상되는 형식. 세부 양산 사양은 프리미어 자료를 따른다.",
        "실내는 운전 위치를 페라리답게 낮추는 쪽이 브랜드의 명제였다."
      ],
    driving: [
        "배터리 전기라 변속 충격과 배기음이 없다. 토크는 즉시 나온다.",
        "거동을 내연 미드십과 비교하는 것은 다른 종목이다. 브랜드가 말하는 운전의 정확도가 평가 기준이 된다."
      ],
    facts: [
        "2026년 공개된 첫 양산 전기 페라리.",
        "미드사이즈 리프트백.",
        "내연 라인과 별도 이름.",
        "확정 전 출력·주행거리는 적지 않음."
      ],
    specs: [
      ["동력", "배터리 전기"],
      ["차체", "리프트백"],
      ["시기", "2026년 공개"]
    ],
    sources: [
      ["Wikipedia — Ferrari Luce", "https://en.wikipedia.org/wiki/Ferrari_Luce"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari Luce", "https://en.wikipedia.org/wiki/Ferrari_Luce"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari Luce",
  },
  {
    slug: "ferrari-330-p4",
    brand: "ferrari",
    nameKo: "페라리 330 P4",
    nameEn: "Ferrari 330 P4",
    years: "1967",
    body: "2인승 스포츠 프로토타입",
    categories: [
        "sports"
      ],
    summary: "1967년 내구 레이스용 스포츠 프로토타입. 4리터 V12. 도로용 250 GT가 아니다.",
    editorial: [
        "P4는 번호판 모델이 아니라 그룹 4 스포츠 프로토타입이다. 이 카탈로그에 넣은 이유는 1967년 데이토나와 르망의 기록, 그리고 영화 속 페라리로 불려서다.",
        "새 차 3대와, P3에서 개조된 한 대가 그 시즌의 핵심으로 집계된다."
      ],
    history: [
        "1967년 데이토나 24시간에서 1-2-3을 했다. 그 승리가 365 GTB/4의 별칭 데이토나와 연결된다.",
        "르망에서는 포드 GT40에 종합 우승을 내줬다. 프로토타입 규정이 바뀌며 1967년이 이 차의 해다."
      ],
    design: [
        "낮은 스파이더 또는 쿠페 톱. 긴 꼬리와 거대한 휠 아치. 피닌파리나 계열의 경주 차체.",
        "도로용 데이토나와 얼굴이 비슷해 보이지만 구조는 경주 섀시다."
      ],
    driving: [
        "4리터 레이스 V12. 출력은 450 PS 안팎으로 인용된다. 다운포스보다 당시의 최고속이 목적에 가깝다.",
        "도로 시승의 대상이 아니다. 기록은 내구 레이스 결과로 읽는다."
      ],
    facts: [
        "1967년 스포츠 프로토타입.",
        "4.0L 레이스 V12.",
        "데이토나 24시간 1-2-3.",
        "도로용 양산차가 아님."
      ],
    specs: [
      ["엔진", "4.0L 레이스 V12"],
      ["출력", "약 450 PS"],
      ["구동", "후륜구동"],
      ["용도", "스포츠 프로토타입"],
      ["생산", "새 차 3대"]
    ],
    sources: [
      ["Wikipedia — Ferrari 330 P4", "https://en.wikipedia.org/wiki/Ferrari_330_P4"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari 330 P4", "https://en.wikipedia.org/wiki/Ferrari_330_P4"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari 330 P4",
  },
  {
    slug: "ferrari-512-s",
    brand: "ferrari",
    nameKo: "페라리 512 S",
    nameEn: "Ferrari 512 S",
    years: "1970–1971",
    body: "스포츠 프로토타입",
    categories: [
        "sports"
      ],
    summary: "1970년 5리터 스포츠 규정에 맞춘 프로토타입. 플랫 12. 포르쉐 917의 맞상대.",
    editorial: [
        "512 S는 25대 호몰로게이션을 채우기 위해 급히 만들어진 경주차다. 로드카 512 BB와 이름이 비슷할 뿐 같은 차가 아니다.",
        "1971년 512 M으로 진화했다. 영화 르망에서 917의 맞은편에 선 페라리다."
      ],
    history: [
        "1970년 시즌. 배기량 5리터 플랫 12, 출력 550 PS 안팎.",
        "데이토나 등에서 이겼지만 르망 종합은 917이 가져갔다."
      ],
    design: [
        "긴 꼬리의 내구 레이스 실루엣. 색은 로소와 스폰서 스트라이프.",
        "도로용 박서와의 외형 유사성은 시대의 공기역학 때문이지 부품 공유가 아니다."
      ],
    driving: [
        "그룹 5 프로토타입. 최고속은 시속 340km를 넘기는 직선용 기어비가 쓰였다.",
        "드라이버는 공장 팀과 고객 팀이 나뉘었다."
      ],
    facts: [
        "1970–1971년 경주차.",
        "5.0L 플랫 12, 약 550 PS.",
        "호몰로게이션 25대.",
        "512 BB 로드카와 다름."
      ],
    specs: [
      ["엔진", "5.0L 플랫 12"],
      ["출력", "약 550 PS"],
      ["용도", "스포츠 프로토타입"],
      ["생산", "25대"]
    ],
    sources: [
      ["Wikipedia — Ferrari 512 S", "https://en.wikipedia.org/wiki/Ferrari_512_S"]
    ],
    furtherReading: [
      ["Wikipedia — Ferrari 512 S", "https://en.wikipedia.org/wiki/Ferrari_512_S"],
      ["Ferrari — 공식 라인업", "https://www.ferrari.com/en-EN/auto"]
    ],
    imageQuery: "Ferrari 512 S",
  }
];
