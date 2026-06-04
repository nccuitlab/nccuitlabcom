import { reader } from './reader';

// Static data for sections not yet in CMS
const WORKS = [
  { bg: '#e6f1fb', emoji: '🖼️', title: '愉悅機器', year: '2026 見習展' },
  { bg: '#e1f5ee', emoji: '🖼️', title: '視覺噪音', year: '2025 大展' },
  { bg: '#faeeda', emoji: '🖼️', title: '界線之外', year: '2024 大展' },
];

const TEAM = {
  admin: [
    { label: '主', name: '平台主任' },
    { label: '副', name: '副主任' },
  ],
  tech: [
    { label: 'A', name: '幹部' },
    { label: 'B', name: '幹部' },
    { label: 'C', name: '助理' },
  ],
};

export default async function Home() {
  const data = await reader.singletons.homepage.read();

  if (!data) {
    return <div style={{ padding: '2rem' }}>CMS 資料讀取失敗，請確認 content/homepage.yaml 存在。</div>;
  }

  const {
    eyebrow, title, description, primaryButtonText, primaryButtonHref,
    heroCards, services, aboutText, aboutStats, faq, footerAddress, footerEmail,
  } = data;

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        background: '#f7f7f4',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif',
        color: '#1a1a1a',
      }}
    >
      {/* Nav */}
      <nav
        style={{
          background: '#0f0f0f',
          display: 'flex',
          alignItems: 'center',
          padding: '0 28px',
          height: '64px',
          gap: '22px',
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}
      >
        <span style={{ fontSize: '20px', fontWeight: 700, color: '#fff', letterSpacing: '-.5px' }}>
          ITLab
        </span>
        <div style={{ display: 'flex', gap: '18px', marginLeft: '8px' }}>
          {[
            { href: '#services', label: '服務', active: true },
            { href: '#works', label: '展覽', active: false },
            { href: '#about', label: '關於', active: false },
            { href: '#team', label: '成員', active: false },
            { href: '#faq', label: 'FAQ', active: false },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: '14px',
                color: link.active ? '#fff' : 'rgba(255,255,255,.65)',
                borderBottom: link.active ? '2px solid #4a90d9' : 'none',
                paddingBottom: link.active ? '3px' : '0',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={primaryButtonHref}
          style={{
            marginLeft: 'auto',
            background: '#4a90d9',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 18px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            textDecoration: 'none',
          }}
        >
          {primaryButtonText}
        </a>
      </nav>

      {/* Hero */}
      <section style={{ padding: '72px 6vw 44px' }}>
        <div style={{ fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', color: '#999', marginBottom: '18px' }}>
          {eyebrow}
        </div>
        <h1
          style={{
            fontSize: 'clamp(34px, 5vw, 54px)',
            fontWeight: 800,
            color: '#1a1a1a',
            lineHeight: 1.12,
            letterSpacing: '-1.8px',
            margin: '0 0 18px',
          }}
        >
          {title.split('，').map((part, i, arr) => (
            <span key={i}>{part}{i < arr.length - 1 ? '，' : ''}{i < arr.length - 1 && <br />}</span>
          ))}
        </h1>
        <p style={{ fontSize: '18px', color: '#777', margin: '0 0 36px', maxWidth: '540px', lineHeight: 1.7 }}>
          {description}
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '18px',
          }}
        >
          {heroCards.map((card, i) => (
            <a
              key={i}
              href={card.href}
              style={{
                background: '#fff',
                border: card.featured ? '2px solid #4a90d9' : '1px solid #e2e2dd',
                borderRadius: '14px',
                padding: '28px 24px',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'block',
                transition: 'transform .15s, border-color .15s',
              }}
            >
              <div style={{ fontSize: '32px', color: card.featured ? '#4a90d9' : '#1a1a1a' }}>{card.icon}</div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a', marginTop: '14px' }}>{card.title}</div>
              <div style={{ fontSize: '15px', color: '#888', marginTop: '6px' }}>{card.description}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ borderTop: '1px solid #e2e2dd', padding: '64px 6vw' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '28px' }}>
          <span style={{ fontSize: '28px', fontWeight: 800, color: '#4a90d9', opacity: .35 }}>01</span>
          <span style={{ fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', color: '#999' }}>服務項目</span>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '18px',
          }}
        >
          {services.map((svc, i) => (
            <div
              key={i}
              style={{ background: '#fff', border: '1px solid #e2e2dd', borderRadius: '14px', padding: '26px' }}
            >
              <div style={{ fontSize: '26px', color: '#4a90d9' }}>{svc.icon}</div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a', marginTop: '10px' }}>{svc.title}</div>
              <div style={{ fontSize: '15px', color: '#888', marginTop: '6px' }}>{svc.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Works (static) */}
      <section id="works" style={{ borderTop: '1px solid #e2e2dd', padding: '64px 6vw' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '28px' }}>
          <span style={{ fontSize: '28px', fontWeight: 800, color: '#4a90d9', opacity: .35 }}>02</span>
          <span style={{ fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', color: '#999' }}>展覽作品</span>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', flexWrap: 'wrap' }}>
          {['全部', '2026', '2025', '大展'].map((tag, i) => (
            <span
              key={tag}
              style={{
                fontSize: '14px',
                background: i === 0 ? '#4a90d9' : '#fff',
                color: i === 0 ? '#fff' : '#888',
                border: i === 0 ? 'none' : '1px solid #e2e2dd',
                padding: '6px 16px',
                borderRadius: '999px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '18px' }}>
          {WORKS.map((work) => (
            <div key={work.title} style={{ cursor: 'pointer' }}>
              <div
                style={{
                  background: work.bg,
                  borderRadius: '14px',
                  height: '180px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '38px',
                }}
              >
                {work.emoji}
              </div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginTop: '12px' }}>{work.title}</div>
              <div style={{ fontSize: '14px', color: '#aaa', marginTop: '4px' }}>{work.year}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ borderTop: '1px solid #e2e2dd', padding: '64px 6vw' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '28px' }}>
          <span style={{ fontSize: '28px', fontWeight: 800, color: '#4a90d9', opacity: .35 }}>03</span>
          <span style={{ fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', color: '#999' }}>關於 ITLab</span>
        </div>
        <p style={{ fontSize: '18px', color: '#555', lineHeight: 1.8, margin: '0 0 30px', maxWidth: '760px' }}>
          {aboutText}
        </p>
        <div style={{ display: 'flex', gap: '46px', flexWrap: 'wrap' }}>
          {aboutStats.map((stat) => (
            <div key={stat.label}>
              <div style={{ fontSize: '38px', fontWeight: 800, color: '#1a1a1a' }}>{stat.value}</div>
              <div style={{ fontSize: '14px', color: '#999', marginTop: '4px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team (static) */}
      <section id="team" style={{ borderTop: '1px solid #e2e2dd', padding: '64px 6vw' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '28px' }}>
          <span style={{ fontSize: '28px', fontWeight: 800, color: '#4a90d9', opacity: .35 }}>04</span>
          <span style={{ fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', color: '#999' }}>籌辦團隊</span>
        </div>
        {[
          { groupLabel: '行政組', members: TEAM.admin, colors: ['#4a90d9', '#0f0f0f'] },
          { groupLabel: '技術組', members: TEAM.tech, colors: ['#0f0f0f', '#0f0f0f', '#0f0f0f'] },
        ].map((group) => (
          <div key={group.groupLabel} style={{ marginBottom: '28px' }}>
            <div style={{ fontSize: '14px', color: '#888', marginBottom: '12px' }}>{group.groupLabel}</div>
            <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
              {group.members.map((member, i) => (
                <div key={member.label} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: '56px', height: '56px', borderRadius: '14px',
                      background: group.colors[i] ?? '#0f0f0f',
                      color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '20px', fontWeight: 700,
                    }}
                  >
                    {member.label}
                  </div>
                  <div style={{ fontSize: '13px', color: '#888', marginTop: '8px' }}>{member.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section id="faq" style={{ borderTop: '1px solid #e2e2dd', padding: '64px 6vw' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '28px' }}>
          <span style={{ fontSize: '28px', fontWeight: 800, color: '#4a90d9', opacity: .35 }}>05</span>
          <span style={{ fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', color: '#999' }}>常見問題</span>
        </div>
        <div style={{ background: '#fff', border: '1px solid #e2e2dd', borderRadius: '14px', overflow: 'hidden' }}>
          {faq.map((item, i) => (
            <details
              key={i}
              style={{
                padding: '18px 20px',
                borderBottom: i < faq.length - 1 ? '1px solid #f0f0ed' : 'none',
              }}
            >
              <summary style={{ cursor: 'pointer', fontSize: '17px', fontWeight: 600, color: '#1a1a1a' }}>
                {item.question}
              </summary>
              <p style={{ fontSize: '15px', color: '#888', margin: '12px 0 0', lineHeight: 1.7 }}>
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0f0f0f', padding: '42px 6vw' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px', marginBottom: '28px' }}>
          <div>
            <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>ITLab 數位平台</div>
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,.5)', lineHeight: 1.8 }}>
              {footerAddress}<br />
              {footerEmail}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', marginBottom: '12px' }}>
              歷年展覽
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              {['2025', '2024', '2023', '更多 ↗'].map((y) => (
                <span key={y} style={{ fontSize: '14px', color: 'rgba(255,255,255,.6)', cursor: 'pointer' }}>{y}</span>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '22px', color: 'rgba(255,255,255,.6)' }}>f</span>
            <span style={{ fontSize: '22px', color: 'rgba(255,255,255,.6)' }}>◎</span>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.1)', paddingTop: '16px', fontSize: '12px', color: 'rgba(255,255,255,.35)' }}>
          © 2026 國立政治大學傳播學院數位平台 · ITLab
        </div>
      </footer>
    </div>
  );
}
