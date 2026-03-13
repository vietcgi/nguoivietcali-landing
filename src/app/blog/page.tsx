import Link from "next/link"

const posts = [
  {
    slug: "black-april-2026",
    title: "Black April 2026: 51 Years — Little Saigon Remembers",
    excerpt: "On April 30, 2026, the Vietnamese-American community marks 51 years since the Fall of Saigon. Little Saigon in Westminster holds vigils, parades, and ceremonies to honor the journey of a generation.",
    date: "2026-03-07",
    keywords: "black april vietnamese, fall of saigon anniversary 2026, vietnamese california"
  },
  {
    slug: "fall-of-saigon-stories",
    title: "Fall of Saigon Stories: First-Generation Vietnamese in California Share Their Journey",
    excerpt: "For the 51st anniversary of the Fall of Saigon, Vietnamese-Americans in California share their stories of escape, arrival, and building a new life. These are the voices of a generation.",
    date: "2026-03-07",
    keywords: "fall of saigon stories, vietnamese refugee stories california, vietnamese american stories"
  },
  {
    slug: "vietnamese-heritage-month-events",
    title: "Vietnamese Heritage Month Events in Southern California — April 2026",
    excerpt: "Your guide to Vietnamese Heritage Month events in Southern California for April 2026, including Black April commemorations, cultural festivals, and community gatherings in Little Saigon.",
    date: "2026-03-07",
    keywords: "vietnamese california events, vietnamese heritage month 2026, little saigon events april 2026"
  }
]

export const metadata = {
  title: "Blog | Người Việt Cali",
  description: "Stories from the Vietnamese-American community in California",
  keywords: "vietnamese california, blog, community stories, black april, little saigon"
}

export default function BlogIndex() {
  return (
    <div className="relative min-h-screen bg-[#08080f] text-white">
      {/* Background glow effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="animate-glow absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="animate-glow absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-amber-600/8 blur-[100px]" />
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 sm:px-10">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/20 text-sm font-black text-amber-400 ring-1 ring-amber-500/30">
            NV
          </div>
          <span className="text-sm font-semibold text-white/90">Người Việt Cali</span>
        </Link>
        <a
          href="https://www.facebook.com/groups/1205665560928886"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-amber-500 px-4 py-2 text-xs font-bold text-black transition hover:bg-amber-400"
        >
          Tham gia →
        </a>
      </nav>

      {/* Header */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-16 pb-12 sm:px-10">
        <h1 className="text-4xl font-black text-white sm:text-5xl">Câu chuyện cộng đồng</h1>
        <p className="mt-4 text-white/60">Từ Little Saigon đến toàn California — những câu chuyện từ cộng đồng người Việt</p>
      </div>

      {/* Blog Posts */}
      <main className="relative z-10 mx-auto max-w-4xl px-6 pb-20 sm:px-10">
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 transition hover:border-amber-500/20 hover:bg-amber-500/5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white group-hover:text-amber-400 transition">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-white/40">{new Date(post.date).toLocaleDateString('vi-VN')}</span>
                    <span className="text-xs text-amber-400 group-hover:text-amber-300">Đọc →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.06] px-6 py-6 text-center sm:px-10">
        <p className="text-xs text-white/30">
          © 2026 Người Việt Cali · nguoivietcali.com · Cộng đồng người Việt California
        </p>
      </footer>
    </div>
  )
}
