import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

export default async function CmsTestPage() {
  const reader = createReader(process.cwd(), keystaticConfig);
  const homepage = await reader.singletons.homepage.read();

  const eyebrow = homepage?.eyebrow || '傳播學院 · 數位創作基地';
  const title = homepage?.title || '需要什麼，一進來就找得到';
  const description =
    homepage?.description || '器材、場地、展覽——常用功能直接放在這。';
  const primaryButtonText = homepage?.primaryButtonText || '器材借用 →';
  const primaryButtonHref = homepage?.primaryButtonHref || '#services';

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#f7f7f4',
        color: '#1a1a1a',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif',
      }}
    >
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
        <span
          style={{
            fontSize: '20px',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: '-0.5px',
          }}
        >
          ITLab
        </span>

        <div
          style={{
            display: 'flex',
            gap: '18px',
            marginLeft: '8px',
          }}
        >
          <a
            href="#services"
            style={{
              fontSize: '14px',
              color: '#fff',
              borderBottom: '2px solid #4a90d9',
              paddingBottom: '3px',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            服務
          </a>
          <a
            href="#works"
            style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,.65)',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            展覽
          </a>
          <a
            href="#about"
            style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,.65)',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            關於
          </a>
          <a
            href="#team"
            style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,.65)',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            成員
          </a>
          <a
            href="#faq"
            style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,.65)',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            FAQ
          </a>
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

      <section style={{ padding: '72px 6vw 44px' }}>
        <div
          style={{
            fontSize: '13px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#999',
            marginBottom: '18px',
          }}
        >
          {eyebrow}
        </div>

        <h1
          style={{
            fontSize: '54px',
            fontWeight: 800,
            color: '#1a1a1a',
            lineHeight: 1.12,
            letterSpacing: '-1.8px',
            margin: '0 0 18px',
            maxWidth: '720px',
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: '18px',
            color: '#777',
            margin: '0 0 36px',
            maxWidth: '540px',
            lineHeight: 1.7,
          }}
        >
          {description}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '18px',
          }}
        >
          <a
            href="#services"
            style={{
              background: '#fff',
              border: '2px solid #4a90d9',
              borderRadius: '14px',
              padding: '28px 24px',
              cursor: 'pointer',
              textDecoration: 'none',
              color: '#1a1a1a',
            }}
          >
            <div style={{ fontSize: '32px', color: '#4a90d9' }}>📷</div>
            <div
              style={{
                fontSize: '20px',
                fontWeight: 700,
                marginTop: '14px',
              }}
            >
              器材借用
            </div>
            <div style={{ fontSize: '15px', color: '#888', marginTop: '6px' }}>
              相機、燈具、收音
            </div>
          </a>

          <a
            href="#services"
            style={{
              background: '#fff',
              border: '1px solid #e2e2dd',
              borderRadius: '14px',
              padding: '28px 24px',
              cursor: 'pointer',
              textDecoration: 'none',
              color: '#1a1a1a',
            }}
          >
            <div style={{ fontSize: '32px' }}>🏫</div>
            <div
              style={{
                fontSize: '20px',
                fontWeight: 700,
                marginTop: '14px',
              }}
            >
              場地預約
            </div>
            <div style={{ fontSize: '15px', color: '#888', marginTop: '6px' }}>
              電腦教室時段
            </div>
          </a>

          <a
            href="#works"
            style={{
              background: '#fff',
              border: '1px solid #e2e2dd',
              borderRadius: '14px',
              padding: '28px 24px',
              cursor: 'pointer',
              textDecoration: 'none',
              color: '#1a1a1a',
            }}
          >
            <div style={{ fontSize: '32px' }}>🖼️</div>
            <div
              style={{
                fontSize: '20px',
                fontWeight: 700,
                marginTop: '14px',
              }}
            >
              看展覽
            </div>
            <div style={{ fontSize: '15px', color: '#888', marginTop: '6px' }}>
              歷屆作品
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}