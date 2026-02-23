const stats = [
  { value: "67K+", label: "Thành viên" },
  { value: "500+", label: "Bài đăng/ngày" },
  { value: "#1", label: "California" },
];

const features = [
  {
    icon: "📰",
    title: "Tin tức cộng đồng",
    description: "Cập nhật nhanh tin tức, sự kiện và hoạt động của người Việt tại California.",
  },
  {
    icon: "🛒",
    title: "Rao vặt mua bán",
    description: "Trao đổi mua bán, tìm việc làm, nhà đất và dịch vụ trong cộng đồng.",
  },
  {
    icon: "🤝",
    title: "Kết nối đồng hương",
    description: "Gặp gỡ người Việt tại Orange County, San Jose, Los Angeles và toàn California.",
  },
  {
    icon: "🎉",
    title: "Sự kiện & sinh hoạt",
    description: "Chợ Tết, văn nghệ, lễ hội và các hoạt động cộng đồng gần bạn nhất.",
  },
  {
    icon: "💼",
    title: "Cơ hội việc làm",
    description: "Tìm việc làm phù hợp hoặc đăng tin tuyển dụng miễn phí.",
  },
  {
    icon: "🏡",
    title: "Nhà đất & dịch vụ",
    description: "Cho thuê, mua bán nhà đất và các dịch vụ địa phương uy tín.",
  },
];

const cities = ["Orange County", "San Jose", "Los Angeles", "San Diego", "Sacramento", "Fresno"];

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#08080f] text-white">

      {/* Background glow effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="animate-glow absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="animate-glow absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-amber-600/8 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-amber-500/5 blur-[80px]" />
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 sm:px-10">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-sm font-black text-amber-400 ring-1 ring-amber-500/30">
            NV
          </div>
          <span className="text-sm font-semibold text-white/90">Người Việt Cali</span>
        </div>
        <a
          href="https://www.facebook.com/groups/1205665560928886"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-amber-500 px-4 py-2 text-xs font-bold text-black transition hover:bg-amber-400"
        >
          Tham gia →
        </a>
      </nav>

      {/* Hero */}
      <main className="relative z-10 mx-auto max-w-5xl px-6 pt-16 pb-8 text-center sm:pt-24 sm:px-10">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-400">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          Cộng đồng lớn nhất California
        </div>

        <h1 className="mt-4 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Nơi hội tụ của{" "}
          <span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent">
            người Việt California
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
          Hơn 67,000 thành viên tại Orange County, San Jose và Los Angeles — chia sẻ tin tức, mua bán, tìm việc và kết nối cộng đồng mỗi ngày.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="https://www.facebook.com/groups/1205665560928886"
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-bold text-black shadow-[0_0_30px_rgba(245,158,11,0.3)] transition hover:bg-amber-400 hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] sm:w-auto"
          >
            Tham gia nhóm miễn phí →
          </a>
          <span className="text-xs text-white/40">Miễn phí • Không cần đăng ký</span>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-14 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.04]">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-[#0d0d18] px-4 py-5 text-center">
              <div className="text-2xl font-black text-amber-400 sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </main>

      {/* Features */}
      <section className="relative z-10 mx-auto mt-20 max-w-5xl px-6 sm:px-10">
        <h2 className="text-center text-2xl font-black text-white sm:text-3xl">
          Tất cả mọi thứ bạn cần
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-sm text-white/50">
          Từ tin tức đến rao vặt, từ tìm việc đến kết bạn — tất cả trong một cộng đồng.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 transition hover:border-amber-500/20 hover:bg-amber-500/5"
            >
              <div className="mb-3 text-2xl">{feature.icon}</div>
              <h3 className="text-sm font-bold text-white">{feature.title}</h3>
              <p className="mt-1.5 text-xs leading-5 text-white/50">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cities */}
      <section className="relative z-10 mx-auto mt-20 max-w-5xl px-6 sm:px-10">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-white/30">
          Phủ khắp California
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {cities.map((city) => (
            <span
              key={city}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/60"
            >
              {city}
            </span>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative z-10 mx-auto mt-20 max-w-5xl px-6 pb-20 sm:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-amber-600/5 to-transparent p-8 text-center sm:p-12">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent" />
          <div className="relative">
            <h2 className="text-2xl font-black text-white sm:text-4xl">
              Gia nhập cộng đồng ngay hôm nay
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-white/60">
              67,000+ người Việt đang chờ bạn. Miễn phí, không cần đăng ký.
            </p>
            <a
              href="https://www.facebook.com/groups/1205665560928886"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-amber-500 px-8 py-3.5 text-sm font-bold text-black shadow-[0_0_40px_rgba(245,158,11,0.4)] transition hover:bg-amber-400"
            >
              Tham gia miễn phí →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.06] px-6 py-6 text-center sm:px-10">
        <p className="text-xs text-white/30">
          © 2026 Người Việt Cali · nguoivietcali.com · Cộng đồng người Việt California
        </p>
      </footer>
    </div>
  );
}
