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

  const heroCards =
    homepage?.heroCards?.length
      ? homepage.heroCards
      : [
          {
            icon: '📷',
            title: '器材借用',
            description: '相機、燈具、收音',
            href: '#services',
            featured: true,
          },
          {
            icon: '🏫',
            title: '場地預約',
            description: '電腦教室時段',
            href: '#services',
            featured: false,
          },
          {
            icon: '🖼️',
            title: '看展覽',
            description: '歷屆作品',
            href: '#works',
            featured: false,
          },
        ];

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
          href={primaryButtonHref || '#'}
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
          {heroCards.map((card) => (
            <a
              key={card.title}
              href={card.href || '#'}
              style={{
                background: '#fff',
                border: card.featured
                  ? '2px solid #4a90d9'
                  : '1px solid #e2e2dd',
                borderRadius: '14px',
                padding: '28px 24px',
                cursor: 'pointer',
                textDecoration: 'none',
                color: '#1a1a1a',
              }}
            >
              <div
                style={{
                  fontSize: '32px',
                  color: card.featured ? '#4a90d9' : '#1a1a1a',
                }}
              >
                {card.icon}
              </div>

              <div
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  marginTop: '14px',
                }}
              >
                {card.title}
              </div>

              <div
                style={{
                  fontSize: '15px',
                  color: '#888',
                  marginTop: '6px',
                }}
              >
                {card.description}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section
        id="services"
        style={{
          borderTop: '1px solid #e2e2dd',
          padding: '64px 6vw',
        }}
      >
        <SectionTitle number="01" label="服務項目" />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '18px',
          }}
        >
          {[
            ['📷', '器材借用', '相機、燈具、收音設備'],
            ['🏫', '場地預約', '電腦教室開放時段'],
            ['🎬', '軟體工作坊', '設計、影像、程式培訓'],
            ['🖥️', '網路與伺服器', '傳院設備維護'],
          ].map(([icon, heading, text]) => (
            <div
              key={heading}
              style={{
                background: '#fff',
                border: '1px solid #e2e2dd',
                borderRadius: '14px',
                padding: '26px',
              }}
            >
              <div style={{ fontSize: '28px' }}>{icon}</div>

              <div
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginTop: '10px',
                }}
              >
                {heading}
              </div>

              <div
                style={{
                  fontSize: '15px',
                  color: '#888',
                  marginTop: '6px',
                }}
              >
                {text}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="works"
        style={{
          borderTop: '1px solid #e2e2dd',
          padding: '64px 6vw',
        }}
      >
        <SectionTitle number="02" label="展覽作品" />

        <div
          style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '24px',
            flexWrap: 'wrap',
          }}
        >
          {['全部', '2026', '2025', '大展'].map((tag, index) => (
            <span
              key={tag}
              style={{
                fontSize: '14px',
                background: index === 0 ? '#4a90d9' : '#fff',
                color: index === 0 ? '#fff' : '#888',
                border: index === 0 ? 'none' : '1px solid #e2e2dd',
                padding: '6px 16px',
                borderRadius: '999px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '18px',
          }}
        >
          {[
            ['愉悅機器', '2026 見習展', '#e6f1fb'],
            ['視覺噪音', '2025 大展', '#e1f5ee'],
            ['界線之外', '2024 大展', '#faeeda'],
          ].map(([heading, year, color]) => (
            <div key={heading}>
              <div
                style={{
                  background: color,
                  borderRadius: '14px',
                  height: '180px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '38px',
                }}
              >
                🖼️
              </div>

              <div
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginTop: '12px',
                }}
              >
                {heading}
              </div>

              <div
                style={{
                  fontSize: '14px',
                  color: '#aaa',
                  marginTop: '4px',
                }}
              >
                {year}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        style={{
          borderTop: '1px solid #e2e2dd',
          padding: '64px 6vw',
        }}
      >
        <SectionTitle number="03" label="關於 ITLab" />

        <p
          style={{
            fontSize: '18px',
            color: '#555',
            lineHeight: 1.8,
            margin: '0 0 30px',
            maxWidth: '760px',
          }}
        >
          數位平台位於政大大勇樓三樓，是傳播學院師生的資訊服務與數位創作支援單位。
          助理無償服務、自發學習，並在年度大展展現成果。
        </p>

        <div
          style={{
            display: 'flex',
            gap: '46px',
            flexWrap: 'wrap',
          }}
        >
          {[
            ['22屆', '平台歷史'],
            ['3間', '電腦教室'],
            ['168K', '累計造訪'],
          ].map(([number, label]) => (
            <div key={label}>
              <div
                style={{
                  fontSize: '38px',
                  fontWeight: 800,
                  color: '#1a1a1a',
                }}
              >
                {number}
              </div>

              <div
                style={{
                  fontSize: '14px',
                  color: '#999',
                  marginTop: '4px',
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="faq"
        style={{
          borderTop: '1px solid #e2e2dd',
          padding: '64px 6vw',
        }}
      >
        <SectionTitle number="04" label="常見問題" />

        <div
          style={{
            background: '#fff',
            border: '1px solid #e2e2dd',
            borderRadius: '14px',
            overflow: 'hidden',
          }}
        >
          <details
            style={{
              padding: '18px 20px',
              borderBottom: '1px solid #f0f0ed',
            }}
          >
            <summary
              style={{
                cursor: 'pointer',
                fontSize: '17px',
                fontWeight: 600,
                color: '#1a1a1a',
              }}
            >
              器材借用要怎麼申請？
            </summary>

            <p
              style={{
                fontSize: '15px',
                color: '#888',
                margin: '12px 0 0',
                lineHeight: 1.7,
              }}
            >
              請依照平台公告的表單與借還規範申請。
            </p>
          </details>

          <details
            open
            style={{
              padding: '18px 20px',
              borderBottom: '1px solid #f0f0ed',
              background: '#fafafa',
            }}
          >
            <summary
              style={{
                cursor: 'pointer',
                fontSize: '17px',
                fontWeight: 600,
                color: '#1a1a1a',
              }}
            >
              借用有押金嗎？
            </summary>

            <p
              style={{
                fontSize: '15px',
                color: '#888',
                margin: '12px 0 0',
                lineHeight: 1.7,
              }}
            >
              本平台器材借用不收押金，但需傳院師生身分並遵守借還規範。
            </p>
          </details>

          <details
            style={{
              padding: '18px 20px',
            }}
          >
            <summary
              style={{
                cursor: 'pointer',
                fontSize: '17px',
                fontWeight: 600,
                color: '#1a1a1a',
              }}
            >
              電腦教室開放時間？
            </summary>

            <p
              style={{
                fontSize: '15px',
                color: '#888',
                margin: '12px 0 0',
                lineHeight: 1.7,
              }}
            >
              開放時間依學期公告與課程使用狀況調整。
            </p>
          </details>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ number, label }: { number: string; label: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        gap: '14px',
        marginBottom: '28px',
      }}
    >
      <span
        style={{
          fontSize: '28px',
          fontWeight: 800,
          color: '#4a90d9',
          opacity: 0.35,
        }}
      >
        {number}
      </span>

      <span
        style={{
          fontSize: '13px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: '#999',
        }}
      >
        {label}
      </span>
    </div>
  );
}