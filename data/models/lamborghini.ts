import type { RawModel } from "@/data/raw";

export const lamborghiniModels: RawModel[] = [
  {
    slug: "lamborghini-350-gt",
    brand: "lamborghini",
    nameKo: "람보르기니 350 GT",
    nameEn: "Lamborghini 350 GT",
    years: "1964–1966",
    body: "2도어 쿠페",
    categories: [
        "gt"
      ],
    summary: "브랜드 첫 양산차. 3.5리터 V12, 투어링 차체. 약 120대.",
    editorial: [
        "페루치오 람보르기니는 트랙터로 번 돈으로 GT를 만들었다. 350 GT가 그 첫 판매 차다.",
        "엔진은 조토 비자리니가 설계한 V12를 도로용으로 누그러뜨린 것이다."
      ],
    history: [
        "1964–1966년. 배기량 3,464cc, 약 280 PS. 카로체리아 투어링의 슈퍼레제라.",
        "1966년 4리터 400 GT로 이어진다. 2+2 400 GT 2+2가 그 다음 양이다."
      ],
    design: [
        "둥근 눈과 긴 보닛의 1960년대 GT. 페라리 250과 같은 시대의 문법이다.",
        "알루미늄 패널. 실내는 가죽 2인승에 작은 뒷자리."
      ],
    driving: [
        "여섯 개의 웨버 카뷰레터. 회전은 높고 소리는 12기통이다.",
        "최고속은 250km/h 안팎으로 인용된다. 경주차의 날카로움보다 고속 GT다."
      ],
    facts: [
        "1964–1966년 첫 양산 람보르기니.",
        "3.5L V12, 약 280 PS.",
        "약 120대.",
        "후속은 400 GT."
      ],
    specs: [
      ["엔진", "3.5L V12"],
      ["출력", "약 280 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "프론트 엔진"],
      ["생산", "약 120대"]
    ],
    sources: [
      ["Wikipedia — Lamborghini 350 GT", "https://en.wikipedia.org/wiki/Lamborghini_350_GT"]
    ],
    furtherReading: [
      ["Wikipedia — Lamborghini 350 GT", "https://en.wikipedia.org/wiki/Lamborghini_350_GT"],
      ["Lamborghini — 공식 모델", "https://www.lamborghini.com/en-en/models"]
    ],
    imageQuery: "Lamborghini 350 GT",
  },
  {
    slug: "lamborghini-miura",
    brand: "lamborghini",
    nameKo: "람보르기니 미우라",
    nameEn: "Lamborghini Miura",
    years: "1966–1973",
    body: "2도어 쿠페",
    categories: [
        "supercar",
        "sports"
      ],
    summary: "가로로 누인 V12 미드십. 베르토네의 마르첼로 간디니. P400, S, SV. 합계 764대.",
    editorial: [
        "미우라는 투우 목장의 이름이다. 람보르기니의 투우 작명이 여기서 본격화됐다.",
        "1966년 제네바의 섀시 공개 뒤, 차체가 붙어 슈퍼카라는 말의 기준이 됐다."
      ],
    history: [
        "P400은 3,929cc, 350 PS. 1969년 S, 1971년 SV가 출력을 올렸다. SV는 385 PS.",
        "생산 합계 764대. 1973년 카운타크에 자리를 넘긴다."
      ],
    design: [
        "속눈썹 헤드램프. 코가 매우 낮고 엉덩이가 둥글다. 간디니의 첫 대표작.",
        "SV는 펜더가 더 넓고 속눈썹이 사라진다. 엔진과 변속기가 한 덩어리로 가로로 놓인다."
      ],
    driving: [
        "가로 V12는 기름과 열에 민감하다는 소유 기록이 많다. 운전은 소리와 시야의 낮음이 먼저다.",
        "SV는 서스펜션이 따로 놀도록 고쳐 핸들링이 한 칸 안정된다."
      ],
    facts: [
        "1966–1973년. 합계 764대.",
        "가로 배치 3.9L V12.",
        "P400, S, SV.",
        "차체는 베르토네, 마르첼로 간디니."
      ],
    specs: [
      ["엔진", "3.9L V12"],
      ["출력", "350–385 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "미드십, 가로 배치"],
      ["생산", "764대"]
    ],
    sources: [
      ["Wikipedia — Lamborghini Miura", "https://en.wikipedia.org/wiki/Lamborghini_Miura"]
    ],
    furtherReading: [
      ["Wikipedia — Lamborghini Miura", "https://en.wikipedia.org/wiki/Lamborghini_Miura"],
      ["Lamborghini — 공식 모델", "https://www.lamborghini.com/en-en/models"]
    ],
    imageQuery: "Lamborghini Miura",
    generations: [
      {
        id: "p400",
        heading: "미우라 P400",
        years: "1966–1969",
        summary: "첫 양산. 350 PS.",
        points: [
            "350 PS.",
            "속눈썹 헤드램프.",
            "가로 V12."
          ]
      },
      {
        id: "s",
        heading: "미우라 S",
        years: "1969–1971",
        summary: "출력과 실내를 올린 중기.",
        points: [
            "370 PS 안팎.",
            "1969년.",
            "토크와 냉각을 보강."
          ]
      },
      {
        id: "sv",
        heading: "미우라 SV",
        years: "1971–1973",
        summary: "넓은 펜더, 385 PS. 속눈썹이 없다.",
        points: [
            "385 PS.",
            "별도 윤활의 엔진과 변속기.",
            "1971–1973년."
          ]
      }
    ],
  },
  {
    slug: "lamborghini-espada",
    brand: "lamborghini",
    nameKo: "람보르기니 에스파다",
    nameEn: "Lamborghini Espada",
    years: "1968–1978",
    body: "4인승 쿠페",
    categories: [
        "gt"
      ],
    summary: "미우라의 V12를 앞에 두고 네 명이 타는 GT. 간디니의 낮은 지붕. 약 1,217대.",
    editorial: [
        "에스파다는 투우사의 검. 4인승이면서 높이가 극단적으로 낮다.",
        "1968–1978년, 시리즈 I·II·III. 람보르기니 최초의 진짜 가족 GT."
      ],
    history: [
        "1968년 제네바. 4리터 V12, 325에서 350 PS로 시대에 따라 변했다.",
        "생산 약 1,217대. 같은 시대 자라마, 이슬레로보다 훨씬 많다."
      ],
    design: [
        "유리 면적이 크고 코가 길다. 헤드램프는 숨었다 나온다.",
        "뒷좌석은 성인이 앉는 자리다. 미우라와 같은 회사의 차라는 게 실루엣만으로는 잘 안 보인다."
      ],
    driving: [
        "프론트 V12의 토크가 고속 크루징에 맞다. 지붕이 낮아 승차는 스포츠카에 가깝다.",
        "파워 스티어링이 후기에 붙으며 도심이 조금 쉬워졌다."
      ],
    facts: [
        "1968–1978년.",
        "4.0L V12.",
        "약 1,217대.",
        "4인승 풀 GT."
      ],
    specs: [
      ["엔진", "4.0L V12"],
      ["출력", "325–350 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "프론트 엔진"],
      ["생산", "약 1,217대"]
    ],
    sources: [
      ["Wikipedia — Lamborghini Espada", "https://en.wikipedia.org/wiki/Lamborghini_Espada"]
    ],
    furtherReading: [
      ["Wikipedia — Lamborghini Espada", "https://en.wikipedia.org/wiki/Lamborghini_Espada"],
      ["Lamborghini — 공식 모델", "https://www.lamborghini.com/en-en/models"]
    ],
    imageQuery: "Lamborghini Espada",
  },
  {
    slug: "lamborghini-jarama",
    brand: "lamborghini",
    nameKo: "람보르기니 자라마",
    nameEn: "Lamborghini Jarama",
    years: "1970–1976",
    body: "2+2 쿠페",
    categories: [
        "gt"
      ],
    summary: "이슬레로의 후속 2+2. 4리터 V12를 앞에 둔 짧은 GT. 베르토네.",
    editorial: [
        "미국 안전 규정을 의식해 코가 이슬레로보다 길다. 그래도 자리는 2+2 프론트 V12.",
        "400 GT와 GTS. 후자는 출력을 365 PS로 올렸다."
      ],
    history: [
        "1970–1976년. 생산은 300대 안팎. 에스파다보다 훨씬 적다.",
        "이름은 마드리드 근처의 투우 지방."
      ],
    design: [
        "각진 펜더와 숨은 헤드램프. 간디니지만 미우라의 곡선은 아니다.",
        "실내는 1970년대 람보르기니의 가죽과 각."
      ],
    driving: [
        "무겁고 스티어링이 바쁘다. V12의 소리는 미우라와 같은 혈통.",
        "GTS가 출력과 변속, 인테리어에서 한 칸 위다."
      ],
    facts: [
        "1970–1976년.",
        "4.0L 프론트 V12.",
        "2+2.",
        "약 300대 안팎."
      ],
    specs: [
      ["엔진", "4.0L V12"],
      ["구동", "후륜구동"],
      ["레이아웃", "프론트 엔진"],
      ["변속", "5단 수동"]
    ],
    sources: [
      ["Wikipedia — Lamborghini Jarama", "https://en.wikipedia.org/wiki/Lamborghini_Jarama"]
    ],
    furtherReading: [
      ["Wikipedia — Lamborghini Jarama", "https://en.wikipedia.org/wiki/Lamborghini_Jarama"],
      ["Lamborghini — 공식 모델", "https://www.lamborghini.com/en-en/models"]
    ],
    imageQuery: "Lamborghini Jarama",
  },
  {
    slug: "lamborghini-countach",
    brand: "lamborghini",
    nameKo: "람보르기니 카운타크",
    nameEn: "Lamborghini Countach",
    years: "1974–1990",
    body: "2도어 쿠페",
    categories: [
        "supercar"
      ],
    summary: "간디니의 쐐기. 세로 V12 미드십, 시저 도어. LP400에서 25주년형까지.",
    editorial: [
        "1971년 프로토타입 LP500, 양산은 1974년 LP400. 미우라의 곡선을 직선으로 바꿨다.",
        "1980년대 오버펜더와 리어 윙은 LP400S 이후의 얼굴이다. 순정 초기형은 윙이 없다."
      ],
    history: [
        "LP400, LP400S, LP500S, 5000 콰트로발볼레, 25주년형. 생산은 1990년까지 1,983대로 집계된다.",
        "엔진은 세로. 변속기는 운전석 쪽으로 나와 게이트가 앞에 있다."
      ],
    design: [
        "낮은 쐐기, 위로 열리는 문, 나막신 옆선. 퍼시스코피오라 불린 지붕의 홈은 LP400의 표식.",
        "25주년형은 뒷모습을 다듬어 디아블로에 가까운 공기를 넣었다."
      ],
    driving: [
        "초기 LP400이 가장 좁고 가볍다. 후기는 출력과 타이어가 커지며 폭이 운전의 적이 된다.",
        "후진 시야가 거의 없어 문을 열고 앉은 채 보는 장면이 이 차의 일상으로 남았다."
      ],
    facts: [
        "1974–1990년. 1,983대.",
        "세로 V12 미드십.",
        "시저 도어.",
        "LP400에는 공장 리어 윙이 없다."
      ],
    anecdote: "카운타크가 피에몬테 방언의 감탄사에서 왔다는 설명은 람보르기니가 오래 반복해 왔다. 작업장에서 누가 처음 그 말을 했는지까지는 기록이라기보다 전해지는 이야기다.",
    specs: [
      ["엔진", "4.0L 이후 5.2L V12"],
      ["구동", "후륜구동"],
      ["레이아웃", "미드십"],
      ["변속", "5단 수동"],
      ["생산", "1,983대"]
    ],
    sources: [
      ["Wikipedia — Lamborghini Countach", "https://en.wikipedia.org/wiki/Lamborghini_Countach"]
    ],
    furtherReading: [
      ["Wikipedia — Lamborghini Countach", "https://en.wikipedia.org/wiki/Lamborghini_Countach"],
      ["Lamborghini — 공식 모델", "https://www.lamborghini.com/en-en/models"]
    ],
    imageQuery: "Lamborghini Countach",
    generations: [
      {
        id: "lp400",
        heading: "LP400",
        years: "1974–1978",
        summary: "좁은 차체, 퍼리스코피오. 윙 없는 원래 쐐기.",
        points: [
            "4.0L, 약 375 PS.",
            "좁은 펜더.",
            "1974년 양산."
          ]
      },
      {
        id: "lp400s",
        heading: "LP400S",
        years: "1978–1982",
        summary: "와이드 아치와 피렐리 P7. 리어 윙은 선택.",
        points: [
            "넓은 펜더.",
            "1978년.",
            "많은 사진의 카운타크는 이 이후."
          ]
      },
      {
        id: "qv",
        heading: "5000 콰트로발볼레",
        years: "1985–1988",
        summary: "5.2L 4밸브, 455 PS.",
        points: [
            "5.2L.",
            "455 PS.",
            "4밸브 헤드."
          ]
      },
      {
        id: "25th",
        heading: "25주년형",
        years: "1988–1990",
        summary: "창립 25년. 공기역학과 실내를 고친 마지막.",
        points: [
            "1988–1990년.",
            "디아블로 직전.",
            "생산 대수의 상당 부분."
          ]
      }
    ],
  },
  {
    slug: "lamborghini-urraco",
    brand: "lamborghini",
    nameKo: "람보르기니 우라코",
    nameEn: "Lamborghini Urraco",
    years: "1972–1979",
    body: "2+2 쿠페",
    categories: [
        "sports"
      ],
    summary: "페라리 디노에 대한 대답. 가로 V8 미드십 2+2. P250과 P300.",
    editorial: [
        "우라코는 작은 황소. V12 플래그십 아래의 양.",
        "베르토네 간디니. 2+2라 뒷유리 면적이 넓다."
      ],
    history: [
        "1970년 공개, 생산은 1972–1979년. P250은 2.5리터, P300은 3리터 250 PS.",
        "미국형 P111 등 배출 사양이 출력을 깎았다."
      ],
    design: [
        "쐐기지만 카운타크보다 높고 짧다. 루버가 엔진을 덮는다.",
        "실내는 1970년대의 각진 대시. 뒷좌석은 비상용."
      ],
    driving: [
        "V8은 V12보다 가볍고 예민하다. P300이 이 차의 본 실력.",
        "일상 미드십이라는 목표가 분명한 차라 카운타크와 비교하면 크기가 인간적이다."
      ],
    facts: [
        "1972–1979년.",
        "가로 V8. P300은 3.0L 250 PS.",
        "2+2.",
        "디노의 맞상대 포지션."
      ],
    specs: [
      ["엔진", "2.5L 또는 3.0L V8"],
      ["출력", "P300 250 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "미드십"],
      ["변속", "5단 수동"]
    ],
    sources: [
      ["Wikipedia — Lamborghini Urraco", "https://en.wikipedia.org/wiki/Lamborghini_Urraco"]
    ],
    furtherReading: [
      ["Wikipedia — Lamborghini Urraco", "https://en.wikipedia.org/wiki/Lamborghini_Urraco"],
      ["Lamborghini — 공식 모델", "https://www.lamborghini.com/en-en/models"]
    ],
    imageQuery: "Lamborghini Urraco",
  },
  {
    slug: "lamborghini-silhouette",
    brand: "lamborghini",
    nameKo: "람보르기니 실루엣",
    nameEn: "Lamborghini Silhouette",
    years: "1976–1979",
    body: "타르가",
    categories: [
        "sports"
      ],
    summary: "우라코 P300 기반의 타르가. 생산 54대. 넓은 펜더의 짧은 실험.",
    editorial: [
        "실루엣은 우라코의 오픈 스포츠 버전이다. 2인승.",
        "대수가 적어 다음 잘파보다 드물다."
      ],
    history: [
        "1976–1979년. 3리터 V8, 265 PS. 54대.",
        "미국 판매는 거의 이뤄지지 않았다."
      ],
    design: [
        "타르가 롤바, 넓은 휠 아치. 우라코의 얼굴을 더 낮게.",
        "베르토네."
      ],
    driving: [
        "우라코 P300보다 가볍고 넓다. 출력이 크게 다르진 않다.",
        "부품은 우라코와 통하여 유지가 불가능한 일회성 차는 아니다."
      ],
    facts: [
        "1976–1979년. 54대.",
        "3.0L V8, 265 PS.",
        "타르가 2인승.",
        "후속 성격은 잘파."
      ],
    specs: [
      ["엔진", "3.0L V8"],
      ["출력", "265 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "미드십"],
      ["생산", "54대"]
    ],
    sources: [
      ["Wikipedia — Lamborghini Silhouette", "https://en.wikipedia.org/wiki/Lamborghini_Silhouette"]
    ],
    furtherReading: [
      ["Wikipedia — Lamborghini Silhouette", "https://en.wikipedia.org/wiki/Lamborghini_Silhouette"],
      ["Lamborghini — 공식 모델", "https://www.lamborghini.com/en-en/models"]
    ],
    imageQuery: "Lamborghini Silhouette",
  },
  {
    slug: "lamborghini-jalpa",
    brand: "lamborghini",
    nameKo: "람보르기니 잘파",
    nameEn: "Lamborghini Jalpa",
    years: "1981–1988",
    body: "타르가",
    categories: [
        "sports"
      ],
    summary: "실루엣의 후속. 3.5리터 V8, 255 PS. 1980년대의 작은 람보르기니.",
    editorial: [
        "잘파는 투우의 혈통 이름. V8 타르가가 카운타크 아래에서 판매를 받쳤다.",
        "1981–1988년. 약 410대."
      ],
    history: [
        "배기량 3,485cc. 출력을 실루엣보다 숫자상 낮춘 대신 토크와 규제를 맞췄다.",
        "1988년 이후 이 V8 줄은 끊기고, 다음 작은 차는 2003년 가야르도다."
      ],
    design: [
        "플라스틱 범퍼와 각진 코. 타르가 지붕.",
        "카운타크의 축소가 아니라 우라코 가족의 마지막."
      ],
    driving: [
        "도심에서 카운타크보다 훨씬 쉽다. 소리는 V8.",
        "고속은 플래그십에 양보한다. 일상 스포츠카가 목적."
      ],
    facts: [
        "1981–1988년.",
        "3.5L V8, 255 PS.",
        "약 410대.",
        "우라코·실루엣 혈통의 끝."
      ],
    specs: [
      ["엔진", "3.5L V8"],
      ["출력", "255 PS"],
      ["구동", "후륜구동"],
      ["레이아웃", "미드십"],
      ["변속", "5단 수동"]
    ],
    sources: [
      ["Wikipedia — Lamborghini Jalpa", "https://en.wikipedia.org/wiki/Lamborghini_Jalpa"]
    ],
    furtherReading: [
      ["Wikipedia — Lamborghini Jalpa", "https://en.wikipedia.org/wiki/Lamborghini_Jalpa"],
      ["Lamborghini — 공식 모델", "https://www.lamborghini.com/en-en/models"]
    ],
    imageQuery: "Lamborghini Jalpa",
  },
  {
    slug: "lamborghini-lm002",
    brand: "lamborghini",
    nameKo: "람보르기니 LM002",
    nameEn: "Lamborghini LM002",
    years: "1986–1993",
    body: "4도어 픽업 SUV",
    categories: [
        "suv"
      ],
    summary: "카운타크의 V12를 올린 군용 유래 오프로더. 브랜드 첫 SUV. 약 300대.",
    editorial: [
        "LM은 Lamborghini Militaria. 치타 프로토타입의 민수 버전.",
        "4.8에서 5.2리터 V12. 차체가 크고 연료 탱크도 크다."
      ],
    history: [
        "1986–1993년. 생산은 300대 안팎. 2018년 우루스 이전의 유일한 양산 SUV.",
        "일부는 7.2리터 선박용 V12를 올린 특별 사양이 있다."
      ],
    design: [
        "각진 군용 차체, 뒤 오픈 데크, 거대한 타이어. 실내는 가죽으로 민수용을 주장했다.",
        "카운타크와 같은 시대에 정반대 실루엣."
      ],
    driving: [
        "공차 중량이 2.7톤에 가깝다. 가속은 숫자보다 소리가 먼저다.",
        "오프로드 기어가 있다. 도심 연비는 이 차의 논점이 아니다."
      ],
    facts: [
        "1986–1993년.",
        "V12, 카운타크 계열.",
        "약 300대.",
        "우루스 이전의 양산 SUV."
      ],
    specs: [
      ["엔진", "5.2L V12"],
      ["출력", "약 450 PS"],
      ["구동", "사륜구동"],
      ["레이아웃", "프론트 엔진"]
    ],
    sources: [
      ["Wikipedia — Lamborghini LM002", "https://en.wikipedia.org/wiki/Lamborghini_LM002"]
    ],
    furtherReading: [
      ["Wikipedia — Lamborghini LM002", "https://en.wikipedia.org/wiki/Lamborghini_LM002"],
      ["Lamborghini — 공식 모델", "https://www.lamborghini.com/en-en/models"]
    ],
    imageQuery: "Lamborghini LM002",
  },
  {
    slug: "lamborghini-diablo",
    brand: "lamborghini",
    nameKo: "람보르기니 디아블로",
    nameEn: "Lamborghini Diablo",
    years: "1990–2001",
    body: "쿠페·로드스터",
    categories: [
        "supercar"
      ],
    summary: "카운타크의 후속. 5.7리터 V12. VT부터 사륜. 이름도 투우.",
    editorial: [
        "1990년 모니카 디아블로의 이름을 빌렸다. 간디니의 원안에서 크라이슬러 시절의 다듬음이 들어갔다.",
        "SV, VT, SE30, 로드스터. VT는 비스코스 사륜."
      ],
    history: [
        "1990–2001년. 초기 후륜 492 PS에서 6.0리터 사양까지.",
        "1998년 아우디 인수 뒤 마지막 연식이 무르시엘라고로 넘어간다."
      ],
    design: [
        "카운타크보다 매끈한 쐐기. 시저 도어는 유지.",
        "팝업 헤드램프. 2000년대 초 페이스리프트는 램프를 고정했다."
      ],
    driving: [
        "후륜 초기형은 450 PS 이상을 운전자가 전부 받는다. VT는 젖은 노면에서 다르다.",
        "최고속 320km/h 이상이 이 차의 홍보 문장이었다."
      ],
    facts: [
        "1990–2001년.",
        "5.7L V12, 초기 약 492 PS.",
        "VT는 사륜.",
        "후속 무르시엘라고."
      ],
    specs: [
      ["엔진", "5.7L V12"],
      ["출력", "약 492 PS"],
      ["구동", "후륜, VT는 사륜"],
      ["레이아웃", "미드십"],
      ["변속", "5단 수동"]
    ],
    sources: [
      ["Wikipedia — Lamborghini Diablo", "https://en.wikipedia.org/wiki/Lamborghini_Diablo"]
    ],
    furtherReading: [
      ["Wikipedia — Lamborghini Diablo", "https://en.wikipedia.org/wiki/Lamborghini_Diablo"],
      ["Lamborghini — 공식 모델", "https://www.lamborghini.com/en-en/models"]
    ],
    imageQuery: "Lamborghini Diablo",
  },
  {
    slug: "lamborghini-murcielago",
    brand: "lamborghini",
    nameKo: "람보르기니 무르시엘라고",
    nameEn: "Lamborghini Murciélago",
    years: "2001–2010",
    body: "쿠페·로드스터",
    categories: [
        "supercar"
      ],
    summary: "아우디 시대 첫 V12. 6.2에서 6.5리터. 시저 도어와 사륜.",
    editorial: [
        "무르시엘라고는 19세기 투우의 이름. 디아블로의 자리를 이었다.",
        "LP640은 640 PS, LP670-4 SV는 670 PS."
      ],
    history: [
        "2001–2010년. 초기 6,192cc 580 PS. 2006년 LP640.",
        "2011년 아벤타도르가 각진 후속. 수제작 성격은 여기서도 유지됐다."
      ],
    design: [
        "활성 에어 인테이크가 속도에 따라 선다. 시저 도어.",
        "로드스터는 소프트톱이 아니라 지붕 패널."
      ],
    driving: [
        "사륜 비스코스. V12는 자연흡기. 저속 클러치가 무겁다.",
        "SV는 공기저항보다 다운포스와 무게 삭감."
      ],
    facts: [
        "2001–2010년.",
        "6.2L 이후 6.5L V12.",
        "LP640 640 PS, SV 670 PS.",
        "사륜, 시저 도어."
      ],
    specs: [
      ["엔진", "6.2L 이후 6.5L V12"],
      ["출력", "580–670 PS"],
      ["구동", "사륜구동"],
      ["레이아웃", "미드십"],
      ["변속", "6단 수동 또는 e기어"]
    ],
    sources: [
      ["Wikipedia — Lamborghini Murciélago", "https://en.wikipedia.org/wiki/Lamborghini_Murci%C3%A9lago"]
    ],
    furtherReading: [
      ["Wikipedia — Lamborghini Murciélago", "https://en.wikipedia.org/wiki/Lamborghini_Murci%C3%A9lago"],
      ["Lamborghini — 공식 모델", "https://www.lamborghini.com/en-en/models"]
    ],
    imageQuery: "Lamborghini Murcielago",
  },
  {
    slug: "lamborghini-gallardo",
    brand: "lamborghini",
    nameKo: "람보르기니 가야르도",
    nameEn: "Lamborghini Gallardo",
    years: "2003–2013",
    body: "쿠페·스파이더",
    categories: [
        "supercar",
        "sports"
      ],
    summary: "아우디 시대의 V10 양산 차. 브랜드 판매를 네 자릿수로 올린 이름. 14,022대.",
    editorial: [
        "가야르도는 투우의 혈통. 5.0에서 5.2리터 V10. LP560-4가 2008년 이후의 본편.",
        "슈퍼레제라, 발렌티노 발보니, 스콰드라 코르세 등 갈래가 많다."
      ],
    history: [
        "2003–2013년. 합계 14,022대. 그때까지 가장 많이 팔린 람보르기니.",
        "2014년 우라칸이 같은 V10 자리를 이었다."
      ],
    design: [
        "각진 쐐기, 작은 시저가 아닌 일반 문. 코가 낮고 엉덩이가 높다.",
        "스파이더는 소프트톱."
      ],
    driving: [
        "초기 5.0은 500 PS, LP560-4는 560 PS. 사륜이 기본.",
        "아우디의 변속과 전자장비가 들어가 카운타크 시대보다 떠날 때 쉽다."
      ],
    facts: [
        "2003–2013년. 14,022대.",
        "V10, LP560-4는 5.2L 560 PS.",
        "사륜.",
        "후속 우라칸."
      ],
    specs: [
      ["엔진", "5.0L 이후 5.2L V10"],
      ["출력", "500–570 PS"],
      ["구동", "사륜구동"],
      ["레이아웃", "미드십"],
      ["생산", "14,022대"]
    ],
    sources: [
      ["Wikipedia — Lamborghini Gallardo", "https://en.wikipedia.org/wiki/Lamborghini_Gallardo"]
    ],
    furtherReading: [
      ["Wikipedia — Lamborghini Gallardo", "https://en.wikipedia.org/wiki/Lamborghini_Gallardo"],
      ["Lamborghini — 공식 모델", "https://www.lamborghini.com/en-en/models"]
    ],
    imageQuery: "Lamborghini Gallardo",
    generations: [
      {
        id: "early",
        heading: "초기 5.0",
        years: "2003–2008",
        summary: "5리터 V10, 500 PS, 6단과 e기어.",
        points: [
            "500 PS.",
            "2003년 출시.",
            "수동과 자동 패들."
          ]
      },
      {
        id: "lp560",
        heading: "LP560-4",
        years: "2008–2013",
        summary: "5.2리터 560 PS. 페이스리프트 본편.",
        points: [
            "560 PS.",
            "직접분사.",
            "2008–2013년."
          ]
      }
    ],
  },
  {
    slug: "lamborghini-aventador",
    brand: "lamborghini",
    nameKo: "람보르기니 아벤타도르",
    nameEn: "Lamborghini Aventador",
    years: "2011–2022",
    body: "쿠페·로드스터",
    categories: [
        "supercar"
      ],
    summary: "카본 모노코크의 V12 플래그십. LP700-4는 700 PS. SVJ와 울티매까지.",
    editorial: [
        "아벤타도르는 1913년 사라고사의 황소. 무르시엘라고의 후속.",
        "시저 도어와 세로 V12, 사륜, 싱글 클러치 ISR 변속이 초기의 성격."
      ],
    history: [
        "2011–2022년. LP700-4, S, SV, SVJ, 울티매. SVJ는 770 PS.",
        "2023년 레부엘토가 V12 하이브리드로 교체."
      ],
    design: [
        "아주 날카로운 면. 엔진 커버가 육각형으로 열리며 보여 준다.",
        "로드스터는 지붕 패널 두 개."
      ],
    driving: [
        "자연흡기 6.5리터는 8,000rpm을 넘긴다. 변속 충격이 싱글 클러치의 특징.",
        "사륜이라 출발은 붙잡고, 소리는 뒤에서 운전석을 때린다."
      ],
    facts: [
        "2011–2022년.",
        "6.5L V12, LP700-4는 700 PS.",
        "SVJ 770 PS.",
        "카본 모노코크, 시저 도어."
      ],
    specs: [
      ["엔진", "6.5L V12"],
      ["출력", "700–780 PS"],
      ["구동", "사륜구동"],
      ["레이아웃", "미드십"],
      ["변속", "7단 ISR"]
    ],
    sources: [
      ["Wikipedia — Lamborghini Aventador", "https://en.wikipedia.org/wiki/Lamborghini_Aventador"]
    ],
    furtherReading: [
      ["Wikipedia — Lamborghini Aventador", "https://en.wikipedia.org/wiki/Lamborghini_Aventador"],
      ["Lamborghini — 공식 모델", "https://www.lamborghini.com/en-en/models"]
    ],
    imageQuery: "Lamborghini Aventador",
    generations: [
      {
        id: "lp700",
        heading: "LP700-4",
        years: "2011–2016",
        summary: "6.5L, 700 PS. 1세대.",
        points: [
            "700 PS.",
            "ISR 변속.",
            "2011년."
          ]
      },
      {
        id: "svj",
        heading: "SVJ",
        years: "2018–2020",
        summary: "770 PS. ALA 액티브 에어로. 뉘르부르크링 기록이 홍보였다.",
        points: [
            "770 PS.",
            "SV보다 한 칸 위.",
            "2018년."
          ]
      }
    ],
  },
  {
    slug: "lamborghini-huracan",
    brand: "lamborghini",
    nameKo: "람보르기니 우라칸",
    nameEn: "Lamborghini Huracán",
    years: "2014–2024",
    body: "쿠페·스파이더",
    categories: [
        "supercar",
        "sports"
      ],
    summary: "가야르도의 후속 V10. LP610-4는 610 PS. 페르포만테, STO, 스테라토까지.",
    editorial: [
        "우라칸은 투우의 이름이자 스페인어로 폭풍. 5.2리터 자연흡기 V10.",
        "사륜 LP610-4, 후륜 LP580-2, 트랙용 STO, 오프로드 스테라토."
      ],
    history: [
        "2014–2024년. 가야르도보다 많이 팔린 뒤 2024년 테메라리에 자리를 넘겼다.",
        "듀얼클러치가 가야르도의 e기어를 대체했다."
      ],
    design: [
        "면이 아벤타도르보다 낮고 넓다. 육각형 테마.",
        "스테라토는 지상고와 타이어가 달라 한눈에도 다른 차다."
      ],
    driving: [
        "8,000rpm 자연흡기. 0–100km/h 3.2초(LP610-4).",
        "페르포만테는 ALA로 다운포스를 나누고 출력이 640 PS."
      ],
    facts: [
        "2014–2024년.",
        "5.2L V10, 610 PS가 기본.",
        "자연흡기. 후속 테메라리는 터보 하이브리드.",
        "STO는 후륜 트랙 갈래."
      ],
    specs: [
      ["엔진", "5.2L V10"],
      ["출력", "610–640 PS"],
      ["구동", "사륜 또는 후륜"],
      ["레이아웃", "미드십"],
      ["변속", "7단 듀얼클러치"]
    ],
    sources: [
      ["Wikipedia — Lamborghini Huracán", "https://en.wikipedia.org/wiki/Lamborghini_Hurac%C3%A1n"]
    ],
    furtherReading: [
      ["Wikipedia — Lamborghini Huracán", "https://en.wikipedia.org/wiki/Lamborghini_Hurac%C3%A1n"],
      ["Lamborghini — 공식 모델", "https://www.lamborghini.com/en-en/models"]
    ],
    imageQuery: "Lamborghini Huracan",
    generations: [
      {
        id: "lp610",
        heading: "LP610-4",
        years: "2014–2019",
        summary: "5.2L 610 PS 사륜. 1세대.",
        points: [
            "610 PS.",
            "듀얼클러치.",
            "2014년."
          ]
      },
      {
        id: "performante",
        heading: "페르포만테",
        years: "2017–2019",
        summary: "640 PS, ALA 에어로.",
        points: [
            "640 PS.",
            "더 가벼운 갈래.",
            "서킷 기록으로 홍보."
          ]
      },
      {
        id: "sterrato",
        heading: "스테라토",
        years: "2023–2024",
        summary: "높인 지상고의 오프로드 우라칸. V10 시대의 마지막 실험.",
        points: [
            "오프로드 타이어.",
            "2023년.",
            "테메라리 직전."
          ]
      }
    ],
  },
  {
    slug: "lamborghini-urus",
    brand: "lamborghini",
    nameKo: "람보르기니 우루스",
    nameEn: "Lamborghini Urus",
    years: "2018–",
    body: "5도어 SUV",
    categories: [
        "suv"
      ],
    summary: "LM002 이후의 슈퍼 SUV. 4.0 트윈터보 V8로 시작해 2024년 SE 플러그인 하이브리드.",
    editorial: [
        "우루스는 들소. 2018년 4.0리터 650 PS, 사륜.",
        "2024년 우루스 SE는 전기 모터를 더해 합산 800 PS. 2026년 라인의 한 축이다."
      ],
    history: [
        "2017년 공개, 2018년 판매. 퍼포만테, S를 거쳤다.",
        "2026년 회사 사이트는 우루스 SE와 SE 퍼포만테를 현행으로 둔다. 테메라리·레부엘토와 함께 전 라인 하이브리드."
      ],
    design: [
        "쿠페처럼 떨어지는 지붕과 큰 그릴. 아벤타도르의 육각형을 SUV 비율로.",
        "실내는 4인승 또는 5인승. 에어 서스펜션."
      ],
    driving: [
        "초기형은 0–100km/h 3.6초, 최고속 305km/h. SUV의 숫자로는 스포츠카 영역.",
        "SE는 전기 모드의 짧은 이동이 추가된다. 무게는 초기형보다 무겁다."
      ],
    facts: [
        "2018년 4.0L 트윈터보 V8, 650 PS.",
        "2024년 SE 플러그인 하이브리드, 합산 800 PS.",
        "LM002 이후 첫 양산 SUV.",
        "2026년에도 현행."
      ],
    specs: [
      ["엔진", "4.0L 트윈터보 V8, SE는 하이브리드"],
      ["출력", "650 PS, SE 합산 800 PS"],
      ["구동", "사륜구동"],
      ["레이아웃", "프론트 엔진"]
    ],
    sources: [
      ["Wikipedia — Lamborghini Urus", "https://en.wikipedia.org/wiki/Lamborghini_Urus"]
    ],
    furtherReading: [
      ["Wikipedia — Lamborghini Urus", "https://en.wikipedia.org/wiki/Lamborghini_Urus"],
      ["Lamborghini — 공식 모델", "https://www.lamborghini.com/en-en/models"]
    ],
    imageQuery: "Lamborghini Urus",
    generations: [
      {
        id: "v8",
        heading: "우루스",
        years: "2018–2024",
        summary: "트윈터보 V8 650 PS. S와 퍼포만테가 갈래.",
        points: [
            "650 PS.",
            "2018년.",
            "사륜 SUV."
          ]
      },
      {
        id: "se",
        heading: "우루스 SE",
        years: "2024–",
        summary: "플러그인 하이브리드, 합산 800 PS.",
        points: [
            "800 PS.",
            "2024년.",
            "2026년 현행 포함 SE 퍼포만테."
          ]
      }
    ],
  },
  {
    slug: "lamborghini-revuelto",
    brand: "lamborghini",
    nameKo: "람보르기니 레부엘토",
    nameEn: "Lamborghini Revuelto",
    years: "2023–",
    body: "2도어 쿠페",
    categories: [
        "supercar",
        "ev"
      ],
    summary: "아벤타도르의 후속. 6.5리터 V12 플러그인 하이브리드. 합산 1,015 PS.",
    editorial: [
        "레부엘토는 한 투우의 이름. V12를 포기하지 않고 세 개의 모터를 더했다.",
        "앞 모터 두 개 때문에 사륜. 시저 도어는 유지."
      ],
    history: [
        "2023년 공개. 브랜드 첫 HPEV(고성능 전동화) V12.",
        "2026년에는 레부엘토 SV 등 파생이 라인에 더해졌다. 본편 합산은 1,015 PS."
      ],
    design: [
        "아벤타도르보다 면이 짧고 Y자 램프가 뚜렷하다.",
        "배터리는 센터 터널. 전기만의 주행은 짧다."
      ],
    driving: [
        "V12 825 PS에 모터가 더해 1,015 PS. 0–100km/h 2.5초.",
        "자연흡기 12기통의 소리와 전기 토크가 한 페달에 있다."
      ],
    facts: [
        "2023년–.",
        "6.5L V12 + 3모터, 합산 1,015 PS.",
        "플러그인 하이브리드 사륜.",
        "아벤타도르의 후속."
      ],
    specs: [
      ["엔진", "6.5L V12 하이브리드"],
      ["출력", "합산 1,015 PS"],
      ["구동", "사륜구동"],
      ["레이아웃", "미드십"],
      ["변속", "8단 듀얼클러치"]
    ],
    sources: [
      ["Wikipedia — Lamborghini Revuelto", "https://en.wikipedia.org/wiki/Lamborghini_Revuelto"]
    ],
    furtherReading: [
      ["Wikipedia — Lamborghini Revuelto", "https://en.wikipedia.org/wiki/Lamborghini_Revuelto"],
      ["Lamborghini — 공식 모델", "https://www.lamborghini.com/en-en/models"]
    ],
    imageQuery: "Lamborghini Revuelto",
  },
  {
    slug: "lamborghini-temerario",
    brand: "lamborghini",
    nameKo: "람보르기니 테메라리오",
    nameEn: "Lamborghini Temerario",
    years: "2024–",
    body: "2도어 쿠페",
    categories: [
        "supercar",
        "ev"
      ],
    summary: "우라칸을 이은 V8 하이브리드. 4.0 트윈터보가 10,000rpm, 엔진 800 PS, 합산 920 PS.",
    editorial: [
        "2024년 공개, 고객 인도는 2026년 1월부터라고 회사가 2025년 실적에서 밝혔다.",
        "자연흡기 V10이 끝나고, 핫V 트윈터보 V8과 세 모터가 들어왔다."
      ],
    history: [
        "우라칸의 자리. 배기량 3,995cc. 엔진 단독 800 PS, 합산 920 PS.",
        "앞 모터로 사륜. 브랜드가 2026년 전 라인 하이브리드를 완성한 마지막 조각."
      ],
    design: [
        "육각형과 Y 램프를 우라칸보다 더 낮게. 옆 흡입이 크다.",
        "실내 모드가 치타, 스트라다, 스포트, 코르사와 하이브리드 전략으로 조합된다."
      ],
    driving: [
        "10,000rpm은 터보 양산 스포츠카에서 드문 회전. 토크는 4,000rpm부터 두껍다.",
        "전기가 터보 지연을 메운다. 우라칸의 자연흡기 소리와는 다른 차다."
      ],
    facts: [
        "2024년 공개, 2026년 인도.",
        "4.0L 트윈터보 V8, 엔진 800 PS, 합산 920 PS.",
        "최고 회전 10,000rpm.",
        "우라칸의 후속."
      ],
    specs: [
      ["엔진", "4.0L 트윈터보 V8 하이브리드"],
      ["출력", "합산 920 PS"],
      ["구동", "사륜구동"],
      ["레이아웃", "미드십"],
      ["회전", "10,000rpm"]
    ],
    sources: [
      ["Wikipedia — Lamborghini Temerario", "https://en.wikipedia.org/wiki/Lamborghini_Temerario"]
    ],
    furtherReading: [
      ["Wikipedia — Lamborghini Temerario", "https://en.wikipedia.org/wiki/Lamborghini_Temerario"],
      ["Lamborghini — 공식 모델", "https://www.lamborghini.com/en-en/models"]
    ],
    imageQuery: "Lamborghini Temerario",
  },
  {
    slug: "lamborghini-centenario",
    brand: "lamborghini",
    nameKo: "람보르기니 센테나리오",
    nameEn: "Lamborghini Centenario",
    years: "2016–2017",
    body: "쿠페·로드스터",
    categories: [
        "supercar"
      ],
    summary: "페루치오 탄생 100년 한정. 아벤타도르 기반 6.5리터, 770 PS. 쿠페 20, 로드스터 20.",
    editorial: [
        "2016년 제네바. 센테나리오는 100주년.",
        "기계는 아벤타도르의 V12를 770 PS로 올린 것. 차체는 별도."
      ],
    history: [
        "쿠페 20대, 로드스터 20대. 전량 배정된 뒤 생산.",
        "번호판 있는 쇼카에 가깝지만 도로 등록 한정 양산이다."
      ],
    design: [
        "아벤타도르보다 더 잘린 면과 큰 디퓨저. 시저 도어.",
        "휠과 배기구가 이 차만의 그래픽."
      ],
    driving: [
        "770 PS, 사륜, 0–100km/h 2.8초. 최고속 350km/h.",
        "아벤타도르 SV와 출력이 같은 시대. 차체 공기역학이 차이."
      ],
    facts: [
        "2016–2017년.",
        "쿠페 20 + 로드스터 20.",
        "6.5L V12, 770 PS.",
        "페루치오 람보르기니 탄생 100년."
      ],
    specs: [
      ["엔진", "6.5L V12"],
      ["출력", "770 PS"],
      ["구동", "사륜구동"],
      ["레이아웃", "미드십"],
      ["생산", "40대"]
    ],
    sources: [
      ["Wikipedia — Lamborghini Centenario", "https://en.wikipedia.org/wiki/Lamborghini_Centenario"]
    ],
    furtherReading: [
      ["Wikipedia — Lamborghini Centenario", "https://en.wikipedia.org/wiki/Lamborghini_Centenario"],
      ["Lamborghini — 공식 모델", "https://www.lamborghini.com/en-en/models"]
    ],
    imageQuery: "Lamborghini Centenario",
  },
  {
    slug: "lamborghini-fenomeno",
    brand: "lamborghini",
    nameKo: "람보르기니 페노메노",
    nameEn: "Lamborghini Fenomeno",
    years: "2025–",
    body: "한정 쿠페",
    categories: [
        "supercar",
        "ev"
      ],
    summary: "2025년 몬터레이에서 공개된 한정 29대. V12 하이브리드 합산 1,080 PS.",
    editorial: [
        "회사가 2025년 실적 자료에서 29대, 합산 1,080 PS라고 밝혔다. 레부엘토 계열의 가장 위.",
        "디자인 매니페스토라고 불렀다. 센트로 스틸레 20주년과 겹친 공개."
      ],
    history: [
        "2025년 8월 몬터레이 카 위크. 양산 세 모델 밖의 한정.",
        "1,080 PS는 그때까지 람보르기니 V12 하이브리드의 최고 출력으로 발표됐다."
      ],
    design: [
        "기존 레부엘토보다 면을 더 극단으로 민 차체. 한정 차의 그래픽.",
        "29대라 도로에서 보기보다 발표 자료로 남는 차다."
      ],
    driving: [
        "합산 1,080 PS의 V12 하이브리드. 전기 토크와 12기통이 함께 간다.",
        "레부엘토 본편과 같은 종목의 상위 한정."
      ],
    facts: [
        "2025년 공개. 29대.",
        "V12 하이브리드, 합산 1,080 PS.",
        "몬터레이 카 위크.",
        "레부엘토 위의 한정."
      ],
    specs: [
      ["엔진", "V12 하이브리드"],
      ["출력", "합산 1,080 PS"],
      ["생산", "29대"],
      ["공개", "2025년"]
    ],
    sources: [
      ["Wikipedia — Lamborghini Fenomeno", "https://en.wikipedia.org/wiki/Lamborghini_Fenomeno"]
    ],
    furtherReading: [
      ["Wikipedia — Lamborghini Fenomeno", "https://en.wikipedia.org/wiki/Lamborghini_Fenomeno"],
      ["Lamborghini — 공식 모델", "https://www.lamborghini.com/en-en/models"]
    ],
    imageQuery: "Lamborghini Fenomeno",
  }
];
