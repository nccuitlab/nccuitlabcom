import { reader } from "./reader";
import HomeClient from "./HomeClient";

export default async function Home() {
  const homepage = await reader.singletons.homepage.read();
  const faqSettings = await reader.singletons.faq.read();

  const data = {
    aboutText:
      homepage?.aboutText && homepage.aboutText.trim().length > 0
        ? homepage.aboutText
        : "數位平台（ITLab）位於政大大勇樓三樓，是傳播學院師生的資訊服務與數位創作支援單位。助理夥伴以無償服務、自發學習為精神，支援器材與場地營運，並在每年的年度展覽中展現創作成果。",

    faq:
      faqSettings?.items && faqSettings.items.length > 0
        ? faqSettings.items.map((item) => ({
            question: item.question,
            answer: item.answer,
          }))
        : [
            {
              question: "器材借用要怎麼申請？",
              answer: "請由「器材借用」進入借用系統，選擇品項與時段後送出申請。",
            },
            {
              question: "借用有押金嗎？",
              answer: "本平台器材借用不收押金，但需具傳院師生身分，並遵守借還規範。",
            },
            {
              question: "電腦教室的開放時間？",
              answer: "開放時段依學期課表調整，請見「場地借用」的開放時段。",
            },
            {
              question: "要怎麼加入 ITLab？",
              answer: "每學年招新期間會公告報名方式，歡迎關注橫幅的招新資訊。",
            },
          ],

    footerAddress: homepage?.footerAddress ?? "政大大勇樓三樓",
    footerEmail: homepage?.footerEmail ?? "nccuitlab@gmail.com",
  };

  return <HomeClient data={data} />;
}