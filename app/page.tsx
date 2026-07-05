"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // FAQ accordion
    const faqBtns = document.querySelectorAll(".faq-q");
    faqBtns.forEach((btn) => {
      btn.addEventListener("click", () => btn.parentElement.classList.toggle("open"));
    });
    // hamburger drawer
    const burger = document.getElementById("navBurger");
    const drawer = document.getElementById("navDrawer");
    if (burger && drawer) {
      burger.addEventListener("click", () => drawer.classList.toggle("open"));
      drawer.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => drawer.classList.remove("open"))
      );
    }
    // carousel
    const track = document.getElementById("carTrack");
    if (track) {
      const slides = track.children.length;
      const dotsBox = document.getElementById("carDots");
      let idx = 0;
      let timer;
      for (let i = 0; i < slides; i++) {
        const d = document.createElement("button");
        d.className = "car-dot" + (i === 0 ? " on" : "");
        d.addEventListener("click", () => { go(i); reset(); });
        dotsBox.appendChild(d);
      }
      const dots = dotsBox.children;
      function go(i) {
        idx = (i + slides) % slides;
        track.style.transform = "translateX(-" + idx * 100 + "%)";
        for (let k = 0; k < slides; k++) dots[k].classList.toggle("on", k === idx);
      }
      function reset() { clearInterval(timer); timer = setInterval(() => go(idx + 1), 5000); }
      const prev = document.getElementById("carPrev");
      const next = document.getElementById("carNext");
      if (prev) prev.addEventListener("click", () => { go(idx - 1); reset(); });
      if (next) next.addEventListener("click", () => { go(idx + 1); reset(); });
      reset();
    }
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styleCss }} />
      <div className="itlab-page">
{/* NAV：對應 IA 四大類 */}
<nav className="nav">
  <a className="nav-logo" href="#top">
    <span className="nav-logo-mark">ITLab</span>
    <span className="nav-logo-sub">NCCU COMM</span>
  </a>
  <div className="nav-links">
    <a className="nav-link" href="#exhibitions">展覽資訊</a>
    <a className="nav-link" href="#venue">場地借用</a>
    <a className="nav-link" href="#equipment">器材借用</a>
    <a className="nav-link" href="#about">平台介紹</a>
    <a className="nav-link" href="#faq">FAQ</a>
  </div>
  <div className="nav-end">
    <a className="nav-cta" href="#equipment">器材借用 →</a>
    <button className="nav-burger" id="navBurger" aria-label="選單">☰</button>
  </div>
</nav>
<div className="nav-drawer" id="navDrawer">
  <a href="#exhibitions">展覽資訊</a>
  <a href="#venue">場地借用</a>
  <a href="#equipment">器材借用</a>
  <a href="#about">平台介紹</a>
  <a href="#faq">FAQ</a>
</div>

{/* 橫幅輪播 */}
<div className="carousel" id="top">
  <div className="car-track" id="carTrack">
    <div className="car-slide">
      <span className="car-imgtag">BANNER 1 — 展覽主視覺</span>
      <div className="car-caption">
        <div className="car-kicker"><span className="car-dot-live"></span>NOW SHOWING · 當學期展覽</div>
        <div className="car-title">《愉悅機器》見習展覽</div>
        <div className="car-meta">2026 春季 · 大勇樓三樓展區 · 自由參觀</div>
      </div>
    </div>
    <div className="car-slide">
      <span className="car-imgtag">BANNER 2 — 招新視覺</span>
      <div className="car-caption">
        <div className="car-kicker">RECRUITING · 招新資訊</div>
        <div className="car-title">第 22 屆幹部招新</div>
        <div className="car-meta">報名時間 · 資格說明 · 點擊看詳情</div>
      </div>
    </div>
    <div className="car-slide">
      <span className="car-imgtag">BANNER 3 — 活動視覺</span>
      <div className="car-caption">
        <div className="car-kicker">WORKSHOP · 近期活動</div>
        <div className="car-title">軟體工作坊：影像剪輯入門</div>
        <div className="car-meta">日期時間 · 報名方式</div>
      </div>
    </div>
  </div>
  <button className="car-arrow car-prev" id="carPrev">‹</button>
  <button className="car-arrow car-next" id="carNext">›</button>
  <div className="car-dots" id="carDots"></div>
</div>

{/* 01 展覽資訊 */}
<section id="exhibitions">
  <div className="sec-head"><span className="sec-num">01</span><span className="sec-label">展覽資訊</span></div>
  <div className="sec-body">

    <div className="sub-label">當學期展覽介紹</div>
    <div className="feat">
      <div className="feat-img">KEY VISUAL / 展覽照片</div>
      <div className="feat-info">
        <div className="feat-tag">2026 春季 · 見習展 · 展出中</div>
        <div className="feat-name">《愉悅機器》</div>
        <div className="feat-meta">大勇樓三樓展區 · 自由參觀</div>
        <p className="feat-desc">策展理念與展場資訊的簡短介紹放這裡。</p>
        <a className="btn" href="#">看展覽介紹 →</a>
      </div>
    </div>

    <div className="sub-label">歷屆展覽</div>
    <div className="ex-grid">
      <div className="ex"><div className="ex-img">COVER</div><div className="ex-info"><div className="ex-name">視覺噪音</div><div className="ex-meta">2025 · 年度大展</div></div></div>
      <div className="ex"><div className="ex-img">COVER</div><div className="ex-info"><div className="ex-name">界線之外</div><div className="ex-meta">2024 · 年度大展</div></div></div>
    </div>
    <a className="more-link" href="#">查看全部歷屆展覽 →</a>

  </div>
</section>

{/* 02 場地借用 */}
<section id="venue">
  <div className="sec-head"><span className="sec-num">02</span><span className="sec-label">場地借用</span></div>
  <div className="sec-body">
    <div className="sub-label">開放時段</div>
    <div className="schedule-img">課表圖片（當學期開放時段課表，之後插入圖片）</div>
    <a className="btn ghost" href="#" style={{marginTop: "1.4rem"}}>查看場地借用規範 →</a>
    <div className="note-2nd">↳ 點擊進入第二層頁面，查看完整借用規範</div>
  </div>
</section>

{/* 03 器材借用 */}
<section id="equipment">
  <div className="sec-head"><span className="sec-num">03</span><span className="sec-label">器材借用</span></div>
  <div className="sec-body">

    <div className="sub-label">器材清單</div>
    <div className="eq-grid">
      <div className="eq"><div className="eq-icon">◉</div><div className="eq-name">相機</div><div className="eq-desc">單眼、運動攝影機</div></div>
      <div className="eq"><div className="eq-icon">✦</div><div className="eq-name">燈具</div><div className="eq-desc">攝影燈、補光設備</div></div>
      <div className="eq"><div className="eq-icon">♪</div><div className="eq-name">收音</div><div className="eq-desc">麥克風、錄音設備</div></div>
      <div className="eq"><div className="eq-icon">☰</div><div className="eq-name">其他</div><div className="eq-desc">腳架、轉接與配件</div></div>
    </div>

    <a className="btn" href="#" style={{marginTop: "1.6rem"}}>查看器材借用規範 →</a>
    <div className="note-2nd">↳ 點擊進入第二層頁面，查看完整借用規範</div>

  </div>
</section>

{/* 04 平台介紹 */}
<section id="about">
  <div className="sec-head"><span className="sec-num">04</span><span className="sec-label">平台介紹</span></div>
  <div className="sec-body">

    <div className="sub-label">關於數位平台</div>
    <p className="about-text">
      數位平台（ITLab）位於政大大勇樓三樓，是傳播學院師生的資訊服務與數位創作支援單位。
      助理夥伴以無償服務、自發學習為精神，支援器材與場地營運，並在每年的年度展覽中展現創作成果。
    </p>

    <div className="sub-label">現任幹部</div>
    <div className="members">
      <div className="member lead"><div className="member-avatar">主</div><div className="member-name">平台主任</div></div>
      <div className="member"><div className="member-avatar">副</div><div className="member-name">副主任</div></div>
      <div className="member"><div className="member-avatar">A</div><div className="member-name">幹部</div></div>
      <div className="member"><div className="member-avatar">B</div><div className="member-name">幹部</div></div>
      <div className="member"><div className="member-avatar">C</div><div className="member-name">助理</div></div>
    </div>

    <div className="duo" style={{marginTop: ".4rem"}}>
      <div>
        <div className="sub-label">歷屆助理訪談</div>
        <div className="interview">
          <p className="iv-quote">「在 ITLab 學到的不只是技術⋯⋯」（訪談摘句佔位）</p>
          <div className="iv-who">第 20 屆助理 · 訪談連結</div>
        </div>
        <a className="more-link" href="#">看更多訪談 →</a>
      </div>
      <div>
        <div className="sub-label">課程、活動紀錄</div>
        <div className="records">
          <div className="rec"><span className="rec-name">軟體工作坊：影像剪輯入門</span><span className="rec-meta">2026 春</span></div>
          <div className="rec"><span className="rec-name">網頁設計課程紀錄</span><span className="rec-meta">2025 秋</span></div>
        </div>
        <a className="more-link" href="#">查看全部紀錄 →</a>
      </div>
    </div>

  </div>
</section>

{/* 05 FAQ */}
<section id="faq">
  <div className="sec-head"><span className="sec-num">05</span><span className="sec-label">常見問題 FAQ</span></div>
  <div className="sec-body">
    <div className="faq-item"><button className="faq-q">器材借用要怎麼申請？</button><div className="faq-a">請由「器材借用」進入借用系統，選擇品項與時段後送出申請。</div></div>
    <div className="faq-item open"><button className="faq-q">借用有押金嗎？</button><div className="faq-a">本平台器材借用不收押金，但需具傳院師生身分，並遵守借還規範。</div></div>
    <div className="faq-item"><button className="faq-q">電腦教室的開放時間？</button><div className="faq-a">開放時段依學期課表調整，請見「場地借用」的開放時段。</div></div>
    <div className="faq-item"><button className="faq-q">要怎麼加入 ITLab？</button><div className="faq-a">每學年招新期間會公告報名方式，歡迎關注橫幅的招新資訊。</div></div>
  </div>
</section>

{/* FOOTER */}
<footer>
  <div className="foot-grid">
    <div>
      <div className="foot-name">ITLab 數位平台</div>
      <div className="foot-info">政大大勇樓三樓<br/>nccuitlab@gmail.com</div>
    </div>
    <div>
      <div className="foot-label">社群</div>
      <div className="foot-years"><a href="#">Facebook</a><a href="#">Instagram</a><a href="#">Threads</a><a href="#">LinkedIn</a></div>
    </div>
  </div>
  <div className="foot-bottom">© 2026 國立政治大學傳播學院數位平台 · ITLab ｜ Wireframe v3（依 IA 改版）</div>
</footer>
      </div>
    </>
  );
}

const styleCss = `

  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --ink: #222222; --paper: #f2f2f2; --white: #ffffff;
    --g1: #e8e8e8; --g2: #d4d4d4; --g3: #aaaaaa; --g4: #777777;
    --border2: 2px solid #222222; --border1: 1px solid #222222;
  }
  html { scroll-behavior: smooth; }
  section, .carousel { scroll-margin-top: 54px; }
  body { background: var(--paper); color: var(--ink); font-family: 'Noto Sans TC', sans-serif; font-size: 14px; line-height: 1.5; padding-top: 54px; }

  /* NAV */
  .nav { display: flex; align-items: stretch; border-bottom: var(--border2); background: var(--ink); position: fixed; top: 0; left: 0; right: 0; z-index: 100; }
  .nav-logo { display: flex; flex-direction: column; justify-content: center; padding: 0 1.25rem; border-right: 2px solid #444; background: #444; text-decoration: none; }
  .nav-logo-mark { font-size: 18px; font-weight: 700; color: #fff; letter-spacing: -1px; line-height: 1; }
  .nav-logo-sub { font-size: 9px; color: rgba(255,255,255,.7); letter-spacing: .5px; text-transform: uppercase; }
  .nav-links { display: flex; flex: 1; }
  .nav-link { padding: 0 1.1rem; display: flex; align-items: center; font-size: 12.5px; color: rgba(255,255,255,.65); border-right: 1px solid rgba(255,255,255,.12); height: 52px; text-decoration: none; }
  .nav-link:hover { color: #fff; background: rgba(255,255,255,.06); }
  .nav-end { margin-left: auto; display: flex; align-items: center; padding: 0 1rem; }
  .nav-cta { background: #fff; color: var(--ink); font-size: 11px; font-weight: 700; padding: 6px 14px; cursor: pointer; border: none; font-family: inherit; text-decoration: none; }
  .nav-burger { display: none; background: none; border: 1px solid rgba(255,255,255,.3); color: #fff; font-size: 16px; padding: 5px 10px; margin-left: 8px; cursor: pointer; font-family: inherit; }
  .nav-drawer { display: none; position: fixed; top: 54px; left: 0; right: 0; z-index: 99; background: var(--ink); border-bottom: var(--border2); flex-direction: column; }
  .nav-drawer a { padding: 14px 1.5rem; color: rgba(255,255,255,.8); text-decoration: none; font-size: 14px; border-top: 1px solid rgba(255,255,255,.1); }
  .nav-drawer.open { display: flex; }

  /* CAROUSEL */
  .carousel { position: relative; border-bottom: var(--border2); background: var(--g2); overflow: hidden; }
  .car-track { display: flex; transition: transform .5s ease; }
  .car-slide { min-width: 100%; height: clamp(240px, 38vw, 420px); position: relative; display: flex; align-items: flex-end; }
  .car-slide:nth-child(1) { background: repeating-linear-gradient(45deg, #d8d8d8, #d8d8d8 14px, #cfcfcf 14px, #cfcfcf 28px); }
  .car-slide:nth-child(2) { background: repeating-linear-gradient(-45deg, #d2d2d2, #d2d2d2 14px, #c8c8c8 14px, #c8c8c8 28px); }
  .car-slide:nth-child(3) { background: repeating-linear-gradient(90deg, #dcdcdc, #dcdcdc 14px, #d0d0d0 14px, #d0d0d0 28px); }
  .car-imgtag { position: absolute; top: 16px; right: 20px; font-size: 10px; letter-spacing: 2px; color: var(--g4); border: 1px dashed var(--g4); padding: 4px 10px; }
  .car-caption { background: rgba(34,34,34,.92); color: #fff; padding: 1rem 2rem 1.1rem; width: 100%; }
  .car-kicker { font-size: 10px; letter-spacing: 3px; color: #bbb; text-transform: uppercase; margin-bottom: 4px; display: flex; align-items: center; gap: 8px; }
  .car-dot-live { width: 7px; height: 7px; border-radius: 50%; background: #fff; animation: pulse 1.6s infinite; }
  @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:.25;} }
  .car-title { font-size: clamp(19px, 3.2vw, 30px); font-weight: 700; letter-spacing: -0.5px; }
  .car-meta { font-size: 12px; color: rgba(255,255,255,.6); margin-top: 3px; }
  .car-arrow { position: absolute; top: 50%; transform: translateY(-50%); width: 42px; height: 42px; background: rgba(34,34,34,.85); color: #fff; border: none; font-size: 18px; cursor: pointer; z-index: 5; font-family: inherit; }
  .car-prev { left: 0; } .car-next { right: 0; }
  .car-dots { position: absolute; bottom: 12px; right: 20px; display: flex; gap: 8px; z-index: 5; }
  .car-dot { width: 10px; height: 10px; border-radius: 50%; border: 1px solid #fff; background: transparent; cursor: pointer; padding: 0; }
  .car-dot.on { background: #fff; }

  /* SECTION SHELL */
  section { border-bottom: var(--border2); }
  .sec-head { display: flex; align-items: baseline; gap: 14px; padding: 1.6rem 2rem 0; }
  .sec-num { font-size: 26px; font-weight: 700; color: var(--g3); }
  .sec-label { font-size: 13px; letter-spacing: 3px; color: var(--g4); text-transform: uppercase; font-weight: 700; }
  .sec-body { padding: 1.3rem 2rem 2.2rem; }
  .sub-label { font-size: 12px; letter-spacing: 2px; color: var(--g4); margin: 1.6rem 0 .8rem; padding-left: 10px; border-left: 3px solid var(--ink); font-weight: 700; }
  .sub-label:first-child { margin-top: 0; }

  /* 展覽 */
  .feat { display: grid; grid-template-columns: 1.2fr 1fr; border: var(--border2); background: var(--white); }
  .feat-img { min-height: 170px; border-right: var(--border2); display: flex; align-items: center; justify-content: center; font-size: 11px; letter-spacing: 2px; color: var(--g4); background: repeating-linear-gradient(45deg, var(--g1), var(--g1) 12px, #ececec 12px, #ececec 24px); }
  .feat-info { padding: 1.4rem 1.4rem; display: flex; flex-direction: column; justify-content: center; }
  .feat-tag { font-size: 10px; letter-spacing: 2px; color: var(--g4); margin-bottom: 6px; }
  .feat-name { font-size: 22px; font-weight: 700; margin-bottom: 4px; }
  .feat-meta { font-size: 12px; color: var(--g4); margin-bottom: 1rem; }
  .feat-desc { font-size: 13px; color: var(--g4); line-height: 1.8; margin-bottom: 1.2rem; }
  .btn { display: inline-block; background: var(--ink); color: #fff; font-size: 13px; font-weight: 700; padding: 9px 20px; text-decoration: none; align-self: flex-start; }
  .btn:hover { background: #000; }
  .btn.ghost { background: var(--white); color: var(--ink); border: var(--border2); }
  .ex-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
  .ex { border: var(--border2); background: var(--white); cursor: pointer; }
  .ex:hover { transform: translateY(-3px); }
  .ex-img { aspect-ratio: 16/7; display: flex; align-items: center; justify-content: center; font-size: 11px; letter-spacing: 2px; color: var(--g4); border-bottom: var(--border2); background: repeating-linear-gradient(45deg, var(--g1), var(--g1) 10px, #ececec 10px, #ececec 20px); }
  .ex-info { padding: .9rem 1rem; }
  .ex-name { font-size: 15px; font-weight: 700; }
  .ex-meta { font-size: 11px; color: var(--g3); margin-top: 2px; }
  .more-link { display: inline-block; margin-top: 1.1rem; font-size: 13px; font-weight: 700; color: var(--ink); text-decoration: none; border-bottom: 2px solid var(--ink); padding-bottom: 2px; }
  .more-link:hover { color: var(--g4); border-color: var(--g4); }

  /* 場地：開放時段 + 規範 */
  .duo { display: grid; grid-template-columns: 1fr; gap: .4rem; align-items: start; }
  .schedule-img { border: var(--border2); background: repeating-linear-gradient(45deg, var(--g1), var(--g1) 12px, #ececec 12px, #ececec 24px); aspect-ratio: 16/7; display: flex; align-items: center; justify-content: center; font-size: 12px; letter-spacing: 1px; color: var(--g4); text-align: center; padding: 1rem; }
  .timetable { border: var(--border2); background: var(--white); }
  .tt-row { display: grid; grid-template-columns: 90px 1fr; border-bottom: var(--border1); }
  .tt-row:last-child { border-bottom: none; }
  .tt-day { padding: .7rem .9rem; font-weight: 700; font-size: 13px; border-right: var(--border1); background: var(--g1); }
  .tt-slot { padding: .7rem .9rem; font-size: 13px; color: var(--g4); }
  .rules { border: var(--border2); background: var(--white); padding: 1.1rem 1.2rem; }
  .rules li { list-style: none; font-size: 13px; color: var(--g4); padding: .45rem 0 .45rem 1.1rem; position: relative; line-height: 1.7; }
  .rules li::before { content: '—'; position: absolute; left: 0; color: var(--ink); }

  /* 器材清單 */
  .eq-grid { display: grid; grid-template-columns: repeat(4, 1fr); border: var(--border2); }
  .eq { padding: 1.4rem 1.1rem; border-right: var(--border1); background: var(--white); }
  .eq:last-child { border-right: none; }
  .eq:hover { background: var(--g1); }
  .eq-icon { width: 32px; height: 32px; border: var(--border2); display: flex; align-items: center; justify-content: center; margin-bottom: .8rem; font-size: 14px; background: var(--g2); }
  .eq-name { font-size: 14px; font-weight: 700; margin-bottom: .2rem; }
  .eq-desc { font-size: 12px; color: var(--g4); }

  /* 平台介紹 */
  .about-grid { display: grid; grid-template-columns: 1fr; gap: 1.2rem; align-items: start; }
  .about-text { font-size: 14px; color: var(--g4); line-height: 2; }
  .stats { display: grid; grid-template-columns: repeat(3, 1fr); border: var(--border2); }
  .stat { padding: 1rem; border-right: var(--border1); background: var(--white); text-align: center; }
  .stat:last-child { border-right: none; }
  .stat-num { font-size: 22px; font-weight: 700; }
  .stat-label { font-size: 11px; color: var(--g3); margin-top: 2px; }
  .members { display: flex; gap: 1.1rem; flex-wrap: wrap; }
  .member { text-align: center; }
  .member-avatar { width: 60px; height: 60px; border: var(--border2); background: var(--g1); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 15px; margin-bottom: .4rem; }
  .member.lead .member-avatar { background: var(--ink); color: #fff; }
  .member-name { font-size: 11px; color: var(--g4); }
  .interview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .interview { border: var(--border2); background: var(--white); padding: 1.1rem 1.2rem; }
  .iv-quote { font-size: 14px; font-weight: 500; line-height: 1.8; margin-bottom: .7rem; }
  .iv-who { font-size: 11px; color: var(--g3); }
  .records { border: var(--border2); background: var(--white); }
  .rec { display: flex; justify-content: space-between; align-items: center; padding: .85rem 1.2rem; border-bottom: var(--border1); font-size: 13px; }
  .rec:last-child { border-bottom: none; }
  .rec:hover { background: var(--g1); }
  .rec-name { font-weight: 500; }
  .rec-meta { font-size: 11px; color: var(--g3); }

  .note-2nd { font-size: 11px; color: var(--g3); margin-top: .6rem; letter-spacing: .5px; }

  /* FAQ */
  .faq-item { border: var(--border2); background: var(--white); margin-bottom: -2px; }
  .faq-q { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.2rem; font-size: 14px; font-weight: 500; background: none; border: none; cursor: pointer; font-family: inherit; text-align: left; }
  .faq-q::after { content: '+'; font-size: 18px; color: var(--g4); }
  .faq-item.open .faq-q::after { content: '−'; }
  .faq-a { display: none; padding: 0 1.2rem 1rem; font-size: 13px; color: var(--g4); line-height: 1.8; }
  .faq-item.open .faq-a { display: block; }

  /* FOOTER */
  footer { background: var(--ink); color: #fff; padding: 2.2rem 2rem 1.4rem; }
  .foot-grid { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 1.6rem; margin-bottom: 1.6rem; }
  .foot-name { font-size: 16px; font-weight: 700; margin-bottom: .5rem; }
  .foot-info { font-size: 12px; color: rgba(255,255,255,.5); line-height: 1.8; }
  .foot-label { font-size: 10px; letter-spacing: 2px; color: rgba(255,255,255,.4); text-transform: uppercase; margin-bottom: .7rem; }
  .foot-years { display: flex; gap: 12px; }
  .foot-years a { font-size: 13px; color: rgba(255,255,255,.65); text-decoration: none; }
  .foot-bottom { border-top: 1px solid rgba(255,255,255,.12); padding-top: 1rem; font-size: 11px; color: rgba(255,255,255,.35); }

  @media (max-width: 860px) {
    .nav-links { display: none; }
    .nav-burger { display: block; }
    .feat, .duo, .interview-grid, .about-grid { grid-template-columns: 1fr; }
    .feat-img { border-right: none; border-bottom: var(--border2); }
    .eq-grid { grid-template-columns: 1fr 1fr; }
    .eq:nth-child(2n) { border-right: none; }
    .eq:nth-child(-n+2) { border-bottom: var(--border1); }
    .ex-grid { grid-template-columns: 1fr; }
  }

`;
