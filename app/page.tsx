export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f2ea] text-[#1f1f1f]">
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-20">
        <p className="mb-4 text-sm tracking-[0.3em] uppercase">
          NCCU IT LAB
        </p>

        <h1 className="max-w-4xl text-5xl md:text-8xl font-bold leading-tight">
          一個關於科技、設計與創作的實驗場域
        </h1>

        <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed">
          我們希望打造一個讓學生探索資訊技術、互動設計、數位內容與跨領域創作的平台。
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#about"
            className="rounded-full bg-black px-6 py-3 text-white"
          >
            了解更多
          </a>
          <a
            href="#info"
            className="rounded-full border border-black px-6 py-3"
          >
            活動資訊
          </a>
        </div>
      </section>

      <section id="about" className="px-8 py-24 md:px-20">
        <h2 className="text-4xl md:text-6xl font-bold">About</h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed">
          NCCU IT Lab 是一個以學生為核心的實驗型團隊，關注科技如何與設計、社群、教育與創意實作結合。
          這個網站將作為我們展示活動、作品、文章與團隊資訊的入口。
        </p>
      </section>

      <section id="info" className="bg-black px-8 py-24 text-white md:px-20">
        <h2 className="text-4xl md:text-6xl font-bold">Info</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/30 p-6">
            <p className="text-sm text-white/60">Time</p>
            <h3 className="mt-3 text-2xl font-bold">2026 Spring</h3>
            <p className="mt-3 text-white/70">活動時間可在這裡填寫</p>
          </div>

          <div className="rounded-3xl border border-white/30 p-6">
            <p className="text-sm text-white/60">Location</p>
            <h3 className="mt-3 text-2xl font-bold">NCCU</h3>
            <p className="mt-3 text-white/70">地點可以放政大或線上活動</p>
          </div>

          <div className="rounded-3xl border border-white/30 p-6">
            <p className="text-sm text-white/60">Format</p>
            <h3 className="mt-3 text-2xl font-bold">Workshop</h3>
            <p className="mt-3 text-white/70">工作坊、講座、展覽或招募都可以</p>
          </div>
        </div>
      </section>

      <section id="schedule" className="px-8 py-24 md:px-20">
        <h2 className="text-4xl md:text-6xl font-bold">Schedule</h2>

        <div className="mt-10 space-y-6">
          <div className="border-t border-black py-6 md:flex md:gap-12">
            <p className="w-40 font-bold">Day 01</p>
            <div>
              <h3 className="text-2xl font-bold">Opening & Introduction</h3>
              <p className="mt-2 text-black/70">
                介紹活動目標、團隊理念與參與方式。
              </p>
            </div>
          </div>

          <div className="border-t border-black py-6 md:flex md:gap-12">
            <p className="w-40 font-bold">Day 02</p>
            <div>
              <h3 className="text-2xl font-bold">Workshop & Practice</h3>
              <p className="mt-2 text-black/70">
                進行實作、討論與小組創作。
              </p>
            </div>
          </div>

          <div className="border-y border-black py-6 md:flex md:gap-12">
            <p className="w-40 font-bold">Final</p>
            <div>
              <h3 className="text-2xl font-bold">Showcase</h3>
              <p className="mt-2 text-black/70">
                展示成果、分享作品與回饋。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="bg-[#e5ddcf] px-8 py-24 md:px-20">
        <h2 className="text-4xl md:text-6xl font-bold">Team</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {["Planning", "Design", "Development"].map((role) => (
            <div key={role} className="rounded-3xl bg-white p-6">
              <div className="mb-6 h-40 rounded-2xl bg-black/10" />
              <h3 className="text-2xl font-bold">{role}</h3>
              <p className="mt-3 text-black/70">
                這裡可以放團隊成員、講師或工作坊負責人介紹。
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="px-8 py-24 md:px-20">
        <h2 className="text-4xl md:text-6xl font-bold">FAQ</h2>

        <div className="mt-10 space-y-4">
          <details className="rounded-2xl border border-black p-6">
            <summary className="cursor-pointer text-xl font-bold">
              這個網站可以之後自己改內容嗎？
            </summary>
            <p className="mt-4 text-black/70">
              可以。之後可以把首頁文案、活動資訊、FAQ、團隊資料接到 Keystatic 後台。
            </p>
          </details>

          <details className="rounded-2xl border border-black p-6">
            <summary className="cursor-pointer text-xl font-bold">
              現在這版是正式設計嗎？
            </summary>
            <p className="mt-4 text-black/70">
              不是。這是先把首頁改成一頁式架構，之後可以再加入正式主視覺、動畫和互動效果。
            </p>
          </details>
        </div>
      </section>

      <footer className="px-8 py-10 md:px-20">
        <p className="text-sm text-black/60">
          © 2026 NCCU IT Lab. Built with Next.js and Keystatic.
        </p>
      </footer>
    </main>
  );
}