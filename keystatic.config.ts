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
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});