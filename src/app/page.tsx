const features = [
  {
    title: "Tin tức cộng đồng",
    description:
      "Cập nhật nhanh các thông tin địa phương, sự kiện, sinh hoạt và tin đáng chú ý của người Việt tại California.",
  },
  {
    title: "Rao vặt mua bán",
    description:
      "Trao đổi mua bán, tìm dịch vụ, việc làm và chia sẻ nhu cầu hằng ngày trong cộng đồng một cách thuận tiện.",
  },
  {
    title: "Kết nối người Việt",
    description:
      "Gặp gỡ đồng hương tại Orange County, San Jose, Los Angeles và mở rộng mạng lưới kết nối đáng tin cậy.",
  },
];

const stats = [
  "67K+ thành viên",
  "500+ bài/ngày",
  "Cộng đồng lớn nhất",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-10 border-b border-blue-100 pb-5">
          <p className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
            Người Việt Cali
          </p>
          <p className="mt-1 text-sm text-gray-600 sm:text-base">
            Cộng đồng người Việt California
          </p>
        </header>

        <section className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-white via-blue-50/40 to-white px-5 py-10 sm:px-8 sm:py-12">
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-100 blur-2xl" />
          <div className="absolute -bottom-16 left-0 h-36 w-36 rounded-full bg-blue-50 blur-2xl" />
          <div className="relative">
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-blue-700">
              Cộng đồng Việt tại California
            </span>
            <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight text-gray-900 sm:text-5xl">
              Cộng đồng người Việt lớn nhất California
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-600 sm:text-lg">
              67,000+ thành viên • Orange County • San Jose • Los Angeles
            </p>
            <a
              href="https://www.facebook.com/groups/1205665560928886"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:text-base"
            >
              Tham gia ngay →
            </a>
          </div>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_8px_30px_-20px_rgba(37,99,235,0.15)]"
            >
              <div className="mb-3 h-1.5 w-12 rounded-full bg-blue-600" />
              <h2 className="text-lg font-bold text-gray-900">{feature.title}</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                {feature.description}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-2xl border border-blue-100 bg-white p-4 sm:p-6">
          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat}
                className="rounded-xl bg-blue-50 px-4 py-4 text-center text-sm font-semibold text-blue-800 sm:text-base"
              >
                {stat}
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-12 border-t border-gray-100 pt-6 text-center text-sm text-gray-500">
          © 2026 Người Việt Cali
        </footer>
      </div>
    </main>
  );
}

