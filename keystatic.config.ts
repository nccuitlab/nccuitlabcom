import { config, collection, singleton, fields, } from '@keystatic/core';

export const markdocConfig = fields.markdoc.createMarkdocConfig({});

export default config({
  storage: {
    kind: 'github',
    repo: 'nccuitlab/nccuitlabcom',
  },

  singletons: {
    homepage: singleton({
      label: '首頁設定',
      path: 'content/homepage',
      schema: {
        // ---------- 展覽區塊 ----------
        exhibitionSectionTitle: fields.text({
          label: '展覽區塊標題',
          defaultValue: '展覽資訊',
        }),
  
        currentExhibitionLabel: fields.text({
          label: '當學期展覽小標',
          defaultValue: '當學期展覽介紹',
        }),
  
        pastExhibitionLabel: fields.text({
          label: '歷屆展覽小標',
          defaultValue: '歷屆展覽',
        }),
  
        pastExhibitionButtonText: fields.text({
          label: '查看歷屆展覽按鈕文字',
          defaultValue: '查看全部歷屆展覽 →',
        }),
  
        pastExhibitionButtonHref: fields.text({
          label: '查看歷屆展覽按鈕連結',
          defaultValue: '/exhibitions',
        }),
  
        // ---------- 器材區塊 ----------
        equipmentSectionTitle: fields.text({
          label: '器材借用區塊標題',
          defaultValue: '器材借用',
        }),
  
        equipmentListLabel: fields.text({
          label: '器材清單小標',
          defaultValue: '器材清單',
        }),
  
        equipmentButtonText: fields.text({
          label: '器材規範按鈕文字',
          defaultValue: '查看器材借用規範 →',
        }),
  
        equipmentButtonHref: fields.text({
          label: '器材規範按鈕連結',
          defaultValue: '/equipment/rules',
        }),
  
        // ---------- 平台介紹 ----------
        aboutSectionTitle: fields.text({
          label: '平台介紹區塊標題',
          defaultValue: '平台介紹',
        }),
  
        aboutText: fields.text({
          label: '平台介紹文字',
          multiline: true,
          defaultValue:
            '數位平台位於政大大勇樓三樓，是傳播學院師生的資訊服務與數位創作支援單位。',
        }),
  
        // ---------- Footer ----------
        footerSiteName: fields.text({
          label: 'Footer 網站名稱',
          defaultValue: 'ITLab 數位平台',
        }),
  
        footerAddress: fields.text({
          label: '地址',
          defaultValue: '政大大勇樓三樓',
        }),
  
        footerEmail: fields.text({
          label: 'Email',
          defaultValue: 'itlab@nccu.edu.tw',
        }),
  
        facebookUrl: fields.text({
          label: 'Facebook 連結',
          defaultValue: '',
        }),
  
        instagramUrl: fields.text({
          label: 'Instagram 連結',
          defaultValue: '',
        }),
  
        threadsUrl: fields.text({
          label: 'Threads 連結',
          defaultValue: '',
        }),
  
        linkedinUrl: fields.text({
          label: 'LinkedIn 連結',
          defaultValue: '',
        }),
  
        footerCopyright: fields.text({
          label: '版權文字',
          defaultValue:
            '© 2026 國立政治大學傳播學院數位平台 · ITLab',
        }),
      },
    }),
  
    venue: singleton({
      label: '場地借用設定',
      path: 'content/venue',
      schema: {
        sectionTitle: fields.text({
          label: '區塊標題',
          defaultValue: '場地借用',
        }),
  
        scheduleLabel: fields.text({
          label: '開放時段小標',
          defaultValue: '開放時段',
        }),
  
        scheduleImage: fields.image({
          label: '當學期課表圖片',
          directory: 'public/images/venue',
          publicPath: '/images/venue/',
        }),
  
        scheduleImageAlt: fields.text({
          label: '課表圖片替代文字',
          defaultValue: '當學期場地開放時段課表',
        }),
  
        rulesButtonText: fields.text({
          label: '場地規範按鈕文字',
          defaultValue: '查看場地借用規範 →',
        }),
  
        rulesButtonHref: fields.text({
          label: '場地規範按鈕連結',
          defaultValue: '/venue/rules',
        }),
      },
    }),
  
    faq: singleton({
      label: '常見問題 FAQ',
      path: 'content/faq',
      schema: {
        sectionTitle: fields.text({
          label: 'FAQ 區塊標題',
          defaultValue: '常見問題 FAQ',
        }),
  
        items: fields.array(
          fields.object({
            question: fields.text({
              label: '問題',
              defaultValue: '',
            }),
  
            answer: fields.text({
              label: '答案',
              multiline: true,
              defaultValue: '',
            }),
          }),
          {
            label: '問題與答案',
            itemLabel: (props) =>
              props.fields.question.value || 'FAQ 問題',
          }
        ),
      },
    }),
  },

  
  collections: {
    banners: collection({
      label: '首頁 Banner',
      slugField: 'title',
      path: 'content/banners/*',
      schema: {
        title: fields.slug({
          name: {
            label: 'Banner 標題',
          },
        }),

        kicker: fields.text({
          label: 'Banner 小標',
          defaultValue: '',
        }),

        meta: fields.text({
          label: '補充資訊',
          defaultValue: '',
        }),

        image: fields.image({
          label: 'Banner 圖片',
          directory: 'public/images/banners',
          publicPath: '/images/banners/',
        }),

        imageAlt: fields.text({
          label: '圖片替代文字',
          defaultValue: '',
        }),

        href: fields.text({
          label: '點擊連結',
          defaultValue: '',
        }),

        order: fields.integer({
          label: '排序',
          defaultValue: 0,
        }),

        isVisible: fields.checkbox({
          label: '是否顯示',
          defaultValue: true,
        }),
      },
    }),

    exhibitions: collection({
      label: '展覽資訊',
      slugField: 'title',
      path: 'content/exhibitions/*',
      schema: {
        title: fields.slug({
          name: {
            label: '展覽名稱',
          },
        }),

        year: fields.integer({
          label: '年份',
          defaultValue: 2026,
        }),

        semester: fields.select({
          label: '學期',
          options: [
            { label: '春季', value: 'spring' },
            { label: '秋季', value: 'fall' },
            { label: '其他', value: 'other' },
          ],
          defaultValue: 'spring',
        }),

        exhibitionType: fields.text({
          label: '展覽類型',
          defaultValue: '年度大展',
        }),

        status: fields.select({
          label: '展覽狀態',
          options: [
            { label: '即將展出', value: 'upcoming' },
            { label: '展出中', value: 'current' },
            { label: '已結束', value: 'ended' },
          ],
          defaultValue: 'ended',
        }),

        location: fields.text({
          label: '展覽地點',
          defaultValue: '',
        }),

        admission: fields.text({
          label: '參觀資訊',
          defaultValue: '自由參觀',
        }),

        description: fields.text({
          label: '簡短介紹',
          multiline: true,
          defaultValue: '',
        }),

        coverImage: fields.image({
          label: '封面圖片',
          directory: 'public/images/exhibitions',
          publicPath: '/images/exhibitions/',
        }),

        coverImageAlt: fields.text({
          label: '封面圖片替代文字',
          defaultValue: '',
        }),

        href: fields.text({
          label: '展覽介紹頁連結',
          defaultValue: '',
        }),

        isCurrent: fields.checkbox({
          label: '設為當學期展覽',
          defaultValue: false,
        }),

        isVisible: fields.checkbox({
          label: '是否顯示',
          defaultValue: true,
        }),

        order: fields.integer({
          label: '排序',
          defaultValue: 0,
        }),
      },
    }),

    equipmentCategories: collection({
      label: '器材類別清單',
      slugField: 'title',
      path: 'content/equipment-categories/*',
      schema: {
        title: fields.slug({
          name: {
            label: '器材類別名稱',
          },
        }),

        icon: fields.text({
          label: '圖示',
          defaultValue: '◉',
        }),

        description: fields.text({
          label: '器材內容簡述',
          description: '例如：相機、燈具',
          defaultValue: '',
        }),

        href: fields.text({
          label: '器材類別連結',
          defaultValue: '',
        }),

        order: fields.integer({
          label: '排序',
          defaultValue: 0,
        }),

        isVisible: fields.checkbox({
          label: '是否顯示',
          defaultValue: true,
        }),
      },
    }),

    assistants: collection({
      label: '現任助理',
      slugField: 'name',
      path: 'content/assistants/*',
      schema: {
        name: fields.slug({
          name: {
            label: '助理名稱',
          },
        }),
    
        role: fields.text({
          label: '職位',
          defaultValue: '助理',
        }),
    
        photo: fields.image({
          label: '照片',
          directory: 'public/images/assistants',
          publicPath: '/images/assistants/',
        }),
    
        photoAlt: fields.text({
          label: '照片替代文字',
          defaultValue: '',
        }),
    
        introduction: fields.text({
          label: '簡短介紹',
          multiline: true,
          defaultValue: '',
        }),
    
        order: fields.integer({
          label: '顯示順序',
          defaultValue: 0,
        }),
    
        isVisible: fields.checkbox({
          label: '是否顯示',
          defaultValue: true,
        }),
      },
    }),

    assistantInterviews: collection({
      label: '歷屆助理訪談',
      slugField: 'title',
      path: 'content/assistant-interviews/*',
      format: {
        contentField: 'content',
      },
      schema: {
        title: fields.slug({
          name: {
            label: '訪談標題',
          },
        }),
    
        interviewee: fields.text({
          label: '受訪者',
          defaultValue: '',
        }),
    
        generation: fields.text({
          label: '屆次',
          description: '例如：第 20 屆助理',
          defaultValue: '',
        }),
    
        excerpt: fields.text({
          label: '訪談摘要',
          multiline: true,
          defaultValue: '',
        }),
    
        coverImage: fields.image({
          label: '封面圖片',
          directory: 'public/images/interviews',
          publicPath: '/images/interviews/',
        }),
    
        coverImageAlt: fields.text({
          label: '封面圖片替代文字',
          defaultValue: '',
        }),
    
        content: fields.markdoc({
          label: '完整訪談內容',
        }),
    
        order: fields.integer({
          label: '顯示順序',
          defaultValue: 0,
        }),
    
        isVisible: fields.checkbox({
          label: '是否顯示',
          defaultValue: true,
        }),
      },
    }),

    activityRecords: collection({
      label: '課程與活動紀錄',
      slugField: 'title',
      path: 'content/activity-records/*',
      format: {
        contentField: 'content',
      },
      schema: {
        title: fields.slug({
          name: {
            label: '課程或活動名稱',
          },
        }),
    
        term: fields.text({
          label: '學期或時間',
          description: '例如：2026 春',
          defaultValue: '',
        }),
    
        activityType: fields.select({
          label: '紀錄類型',
          options: [
            { label: '課程', value: 'course' },
            { label: '工作坊', value: 'workshop' },
            { label: '講座', value: 'lecture' },
            { label: '其他活動', value: 'other' },
          ],
          defaultValue: 'workshop',
        }),
    
        excerpt: fields.text({
          label: '簡短摘要',
          multiline: true,
          defaultValue: '',
        }),
    
        coverImage: fields.image({
          label: '封面圖片',
          directory: 'public/images/activity-records',
          publicPath: '/images/activity-records/',
        }),
    
        coverImageAlt: fields.text({
          label: '封面圖片替代文字',
          defaultValue: '',
        }),
    
        content: fields.markdoc({
          label: '完整內容',
        }),
    
        order: fields.integer({
          label: '顯示順序',
          defaultValue: 0,
        }),
    
        isVisible: fields.checkbox({
          label: '是否顯示',
          defaultValue: true,
        }),
      },
    }),

    // 暫時保留舊文章，以免既有資料或頁面仍有使用
    posts: collection({
      label: 'Posts（舊文章）',
      slugField: 'title',
      path: 'posts/*',
      format: {
        contentField: 'content',
      },
      schema: {
        title: fields.slug({
          name: {
            label: 'Title',
          },
        }),

        content: fields.markdoc({
          label: 'Content',
        }),
      },
    }),
  },
});