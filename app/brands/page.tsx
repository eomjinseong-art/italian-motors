import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { brands, models } from "@/lib/catalog";
import { pageMetadata, SITE_URL } from "@/lib/site";

export const metadata = pageMetadata({
  title: "브랜드",
  description:
    "페라리, 람보르기니, 마세라티, 알파 로메오, 피아트, 아바르트, 란치아, 파가니와 데 토마소, 이자, 오토비안키 등 이탈리아 배지.",
  path: "/brands",
});

export default function BrandsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "브랜드", item: `${SITE_URL}/brands` },
          ],
        }}
      />
      <header className="mb-10 max-w-3xl">
        <p className="mb-2 text-xs tracking-[0.2em] text-accent uppercase">Brands</p>
        <h1 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">브랜드</h1>
        <p className="mt-4 text-base leading-relaxed text-muted">
          현행 {brands.filter((brand) => brand.status === "current").length}곳, 단종{" "}
          {brands.filter((brand) => brand.status === "defunct").length}곳. 코치빌더의 일회성 작업은 빼고, 배지를 단
          네임플레이트를 모았습니다.
        </p>
      </header>
      <div className="grid gap-4">
        {brands.map((brand) => (
          <Link key={brand.slug} href={`/brands/${brand.slug}`} className="rounded-2xl border border-line bg-card p-5 hover:border-accent">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-serif text-2xl">{brand.nameKo}</h2>
              <p className="text-sm text-muted">{brand.nameEn}</p>
            </div>
            {brand.status === "defunct" ? <p className="mt-1 text-xs text-accent">단종 브랜드 · {brand.ended}</p> : null}
            <p className="mt-2 text-sm leading-relaxed text-muted">{brand.summary}</p>
            <p className="mt-3 text-xs text-muted">모델 {models.filter((model) => model.brand === brand.slug).length}개</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
