import { config, collection, singleton, fields } from '@keystatic/core';

export const markdocConfig = fields.markdoc.createMarkdocConfig({});

export default config({
  storage: {
    kind: 'github',
    repo: 'nccuitlab/nccuitlabcom',
  },

  singletons: {
    homepage: singleton({
      label: 'Homepage',
      path: 'content/homepage',
      schema: {
        // Hero
        eyebrow: fields.text({
          label: 'Hero 小標',
          defaultValue: '傳播學院 · 數位創作基地',
        }),
        title: fields.text({
          label: 'Hero 大標',
          defaultValue: '需要什麼，一進來就找得到',
        }),
        description: fields.text({
          label: 'Hero 說明文字',
          multiline: true,
          defaultValue: '器材、場地、展覽——常用功能直接放在這。',
        }),
        primaryButtonText: fields.text({
          label: '主要按鈕文字',
          defaultValue: '器材借用 →',
        }),
        primaryButtonHref: fields.text({
          label: '主要按鈕連結',
          defaultValue: '#services',
        }),
        heroCards: fields.array(
          fields.object({
            icon: fields.text({ label: '圖示', defaultValue: '📷' }),
            title: fields.text({ label: '卡片標題', defaultValue: '器材借用' }),
            description: fields.text({ label: '卡片說明', defaultValue: '相機、燈具、收音' }),
            href: fields.text({ label: '卡片連結', defaultValue: '#services' }),
            featured: fields.checkbox({ label: '是否為主打卡片', defaultValue: false }),
          }),
          {
            label: 'Hero 入口卡片',
            itemLabel: (props) => props.fields.title.value || '入口卡片',
          }
        ),

        // Services
        services: fields.array(
          fields.object({
            icon: fields.text({ label: '圖示', defaultValue: '📷' }),
            title: fields.text({ label: '服務名稱', defaultValue: '' }),
            description: fields.text({ label: '服務說明', defaultValue: '' }),
          }),
          {
            label: '服務項目',
            itemLabel: (props) => props.fields.title.value || '服務',
          }
        ),

        // About
        aboutText: fields.text({
          label: '關於說明文字',
          multiline: true,
          defaultValue: '',
        }),
        aboutStats: fields.array(
          fields.object({
            value: fields.text({ label: '數值', defaultValue: '' }),
            label: fields.text({ label: '說明', defaultValue: '' }),
          }),
          {
            label: '統計數字',
            itemLabel: (props) => props.fields.label.value || '數字',
          }
        ),

        // FAQ
        faq: fields.array(
          fields.object({
            question: fields.text({ label: '問題', defaultValue: '' }),
            answer: fields.text({ label: '答案', multiline: true, defaultValue: '' }),
          }),
          {
            label: 'FAQ',
            itemLabel: (props) => props.fields.question.value || '問題',
          }
        ),

        // Footer
        footerAddress: fields.text({
          label: '地址',
          defaultValue: '政大大勇樓三樓',
        }),
        footerEmail: fields.text({
          label: 'Email',
          defaultValue: 'itlab@nccu.edu.tw',
        }),
      },
    }),
  },

  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: { label: 'Title' },
        }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});
