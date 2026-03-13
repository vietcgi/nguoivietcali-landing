import Link from "next/link"
import { notFound } from "next/navigation"
import fs from "fs"
import path from "path"

// Simple markdown-to-HTML converter for blog posts
function markdownToHtml(markdown: string): string {
  let html = markdown
    // Headers
    .replace(/^### (.*?)$/gm, '<h3 className="text-lg font-bold mt-6 mb-3 text-white">$1</h3>')
    .replace(/^## (.*?)$/gm, '<h2 className="text-2xl font-bold mt-8 mb-4 text-white">$1</h2>')
    .replace(/^# (.*?)$/gm, '<h1 className="text-3xl font-bold mb-4 text-white">$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong className="font-bold">$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em className="italic">$1</em>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" className="text-amber-400 hover:text-amber-300" target="_blank" rel="noreferrer">$1</a>')
    // Lists
    .replace(/^- (.*?)$/gm, '<li className="ml-4 text-white/80">$1</li>')
    // Line breaks
    .replace(/\n\n/g, '</p><p className="text-white/70 leading-relaxed">')

  return `<div className="prose prose-invert max-w-none"><p className="text-white/70 leading-relaxed">${html}</p></div>`
}

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), 'src/app/blog')
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'))
  
  return files.map(file => ({
    slug: file.replace('.md', '')
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), `src/app/blog/${params.slug}.md`)
  
  if (!fs.existsSync(filePath)) {
    return notFound()
  }

  const content = fs.readFileSync(filePath, 'utf-8')
  const match = content.match(/title: "(.*?)"/)
  const title = match ? match[1] : 'Blog Post'

  return {
    title: `${title} | Người Việt Cali`,
    description: title
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), `src/app/blog/${params.slug}.md`)
  
  if (!fs.existsSync(filePath)) {
    return notFound()
  }

  const content = fs.readFileSync(filePath, 'utf-8')
  const lines = content.split('\n')
  
  // Parse frontmatter
  let frontmatterEnd = 0
  const frontmatter: Record<string, string> = {}
  
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] === '---') {
      frontmatterEnd = i
      break
    }
    const [key, ...rest] = lines[i].split(':')
    if (key) {
      frontmatter[key.trim()] = rest.join(':').trim().replace(/^"|"$/g, '')
    }
  }
  
  const bodyContent = lines.slice(frontmatterEnd + 1).join('\n').trim()

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
        <div className="flex gap-4">
          <Link href="/blog" className="text-xs text-white/60 hover:text-white">Blog</Link>
          <a
            href="https://www.facebook.com/groups/1205665560928886"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-amber-500 px-4 py-2 text-xs font-bold text-black transition hover:bg-amber-400"
          >
            Tham gia →
          </a>
        </div>
      </nav>

      {/* Article */}
      <main className="relative z-10 mx-auto max-w-2xl px-6 pt-12 pb-20 sm:px-10">
        <div className="mb-8">
          <Link href="/blog" className="text-xs text-white/50 hover:text-white/70">← Quay lại Blog</Link>
        </div>
        
        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-black mb-4 text-white">{frontmatter.title}</h1>
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10">
            <span className="text-sm text-white/50">
              {frontmatter.date ? new Date(frontmatter.date).toLocaleDateString('vi-VN') : ''}
            </span>
          </div>
          
          <div className="space-y-4 text-white/70 leading-relaxed">
            {bodyContent.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('#')) {
                const level = paragraph.match(/^#+/)?.[0].length || 1
                const text = paragraph.replace(/^#+\s/, '')
                const sizes = ['text-3xl', 'text-2xl', 'text-xl', 'text-lg']
                return (
                  <h2 key={i} className={`${sizes[level - 2] || 'text-base'} font-bold mt-8 mb-4 text-white`}>
                    {text}
                  </h2>
                )
              }
              
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={i} className="list-disc list-inside space-y-2 ml-4">
                    {paragraph.split('\n').map((item, j) => (
                      <li key={j} className="text-white/70">{item.replace(/^- /, '')}</li>
                    ))}
                  </ul>
                )
              }
              
              return (
                <p key={i} className="text-white/70 leading-relaxed">
                  {paragraph.split('\n').map((line, j) => (
                    <span key={j}>
                      {line
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .split(/\[(.*?)\]\((.*?)\)/g)
                        .map((part, k) => {
                          if (k % 3 === 0) return part
                          if (k % 3 === 1) return <a key={k} href={arguments[k + 1]} className="text-amber-400 hover:text-amber-300" target="_blank" rel="noreferrer">{part}</a>
                          return ''
                        })}
                      <br />
                    </span>
                  ))}
                </p>
              )
            })}
          </div>
        </article>

        {/* CTA */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">Gia nhập cộng đồng</h3>
          <a
            href="https://www.facebook.com/groups/1205665560928886"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold text-black hover:bg-amber-400 transition"
          >
            Tham gia Người Việt Cali trên Facebook →
          </a>
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
