import type { FilmCar, WikiImage } from "@/lib/types";
import movieImages from "@/data/movie-images.json";

const images = movieImages as Record<string, WikiImage>;

/** Wikipedia-checked Italian cars in films. Replicas are labeled in the note. */
export const movieCars: FilmCar[] = [
  {
    id: "graduate-spider",
    filmKo: "졸업",
    filmEn: "The Graduate",
    year: 1967,
    medium: "영화",
    carKo: "알파 로메오 스파이더 두에토",
    carEn: "Alfa Romeo Spider Duetto",
    driver: "벤저민 브래독",
    note: "더스틴 호프먼이 모는 1966–67년형 라운드테일 스파이더. 별명 오스 디 세피아.",
    modelSlug: "alfa-romeo-spider",
    source: { label: "Wikipedia — The Graduate", href: "https://en.wikipedia.org/wiki/The_Graduate" },
  },
  {
    id: "sorpasso-aurelia",
    filmKo: "일 소르파소",
    filmEn: "Il Sorpasso",
    year: 1962,
    medium: "영화",
    carKo: "란치아 아우렐리아 B24",
    carEn: "Lancia Aurelia B24",
    driver: "브루노 코르토나",
    note: "비토리오 가스만이 모는 오픈 아우렐리아. 이탈리아 코미디의 도로 영화.",
    modelSlug: "lancia-aurelia",
    source: { label: "Wikipedia — Il Sorpasso", href: "https://en.wikipedia.org/wiki/Il_Sorpasso" },
  },
  {
    id: "italian-job-miura",
    filmKo: "이탈리안 잡",
    filmEn: "The Italian Job",
    year: 1969,
    medium: "영화",
    carKo: "람보르기니 미우라",
    carEn: "Lamborghini Miura",
    driver: "오프닝의 운전자",
    note: "오프닝에서 산길을 달리다 터널 안에서 부서지는 미우라. 본편의 미니는 영국차다.",
    modelSlug: "lamborghini-miura",
    source: { label: "Wikipedia — The Italian Job", href: "https://en.wikipedia.org/wiki/The_Italian_Job" },
  },
  {
    id: "ferris-california",
    filmKo: "페리스의 휴일",
    filmEn: "Ferris Bueller's Day Off",
    year: 1986,
    medium: "영화",
    carKo: "페라리 250 GT 캘리포니아",
    carEn: "Ferrari 250 GT California Spyder",
    driver: "캐머런의 아버지 차",
    note: "화면에 나온 빨간 스파이더는 진품 250 GT 캘리포니아가 아니라 촬영용 레플리카다. 원형의 네임플레이트만 이 항목과 연결한다.",
    modelSlug: "ferrari-250-gt-california",
    source: { label: "Wikipedia — Ferris Bueller's Day Off", href: "https://en.wikipedia.org/wiki/Ferris_Bueller%27s_Day_Off" },
  },
  {
    id: "wolf-countach",
    filmKo: "더 울프 오브 월 스트리트",
    filmEn: "The Wolf of Wall Street",
    year: 2013,
    medium: "영화",
    carKo: "람보르기니 카운타크",
    carEn: "Lamborghini Countach",
    driver: "조던 벨포트",
    note: "레오나르도 디카프리오가 모는 흰 카운타크. 25주년형에 가까운 넓은 차체로 나온다.",
    modelSlug: "lamborghini-countach",
    source: { label: "Wikipedia — The Wolf of Wall Street (2013 film)", href: "https://en.wikipedia.org/wiki/The_Wolf_of_Wall_Street_(2013_film)" },
  },
  {
    id: "lemans-512s",
    filmKo: "르망",
    filmEn: "Le Mans",
    year: 1971,
    medium: "영화",
    carKo: "페라리 512 S",
    carEn: "Ferrari 512 S",
    driver: "페라리 팀",
    note: "스티브 매퀸의 포르쉐 917 맞은편에 선 페라리 스포츠 프로토타입. 로드카 512 BB와는 다른 차다.",
    modelSlug: "ferrari-512-s",
    source: { label: "Wikipedia — Le Mans (film)", href: "https://en.wikipedia.org/wiki/Le_Mans_(film)" },
  },
  {
    id: "fordvferrari-p4",
    filmKo: "포드 v 페라리",
    filmEn: "Ford v Ferrari",
    year: 2019,
    medium: "영화",
    carKo: "페라리 330 P",
    carEn: "Ferrari 330 P3/P4",
    driver: "페라리 내구 레이스 팀",
    note: "1966년 르망을 다룬 영화의 페라리 스포츠 프로토타입. 이 카탈로그의 330 P4 항목으로 연결한다. 주인공의 GT40는 미국·영국 프로그램의 차다.",
    modelSlug: "ferrari-330-p4",
    source: { label: "Wikipedia — Ford v Ferrari", href: "https://en.wikipedia.org/wiki/Ford_v_Ferrari" },
  },
  {
    id: "cars-luigi",
    filmKo: "카",
    filmEn: "Cars",
    year: 2006,
    medium: "애니메이션",
    carKo: "피아트 500",
    carEn: "Fiat 500",
    driver: "루이지",
    note: "픽사의 루이지는 1959년형 누오바 500을 모델로 한 애니메이션 캐릭터다. 실사 차량이 아니다.",
    modelSlug: "fiat-500",
    source: { label: "Wikipedia — Cars (film)", href: "https://en.wikipedia.org/wiki/Cars_(film)" },
  },
];

export function moviesForModel(modelSlug: string) {
  return movieCars.filter((car) => car.modelSlug === modelSlug);
}

export function movieImage(id: string): WikiImage | undefined {
  return images[id];
}

export function movieImageRows() {
  return movieCars.flatMap((car) => {
    const image = movieImage(car.id);
    return image ? [{ id: car.id, label: `${car.filmKo} · ${car.carKo}`, image }] : [];
  });
}
