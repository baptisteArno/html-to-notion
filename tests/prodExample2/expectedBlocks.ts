const expectedBlocks: any = [
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: 'Hey there,' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: "Let's talk about" } },
        { type: 'text', text: { content: ' Online Courses' } },
        { type: 'text', text: { content: ' .' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [{ type: 'text', text: { content: 'What you’ll learn:' } }],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'Who made' } },
        { type: 'text', text: { content: ' $1 million' } },
        { type: 'text', text: { content: ' from a beta course?' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'What should you' } },
        { type: 'text', text: { content: ' teach' } },
        { type: 'text', text: { content: ' ?' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'How to stop' } },
        { type: 'text', text: { content: ' trading time for money' } },
        { type: 'text', text: { content: ' ?' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: "What's a" } },
        { type: 'text', text: { content: ' value ladder' } },
        { type: 'text', text: { content: ' ?' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'What are the' } },
        { type: 'text', text: { content: ' types' } },
        { type: 'text', text: { content: ' of courses?' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'What are the pros and cons of' } },
        { type: 'text', text: { content: ' cohort-based courses' } },
        { type: 'text', text: { content: ' ?' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: "(📈 Pro) What's" } },
        { type: 'text', text: { content: ' accountability-as-a-service' } },
        { type: 'text', text: { content: ' ?' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '(📈 Pro) How to build' } },
        { type: 'text', text: { content: ' profitable partnerships' } },
        { type: 'text', text: { content: ' ?' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '(📈 Pro) What are' } },
        { type: 'text', text: { content: ' starter' } },
        { type: 'text', text: { content: ' ,' } },
        { type: 'text', text: { content: ' spotlight' } },
        { type: 'text', text: { content: ' and' } },
        { type: 'text', text: { content: ' signature' } },
        { type: 'text', text: { content: ' courses?' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '(📈 Pro) How are courses being' } },
        { type: 'text', text: { content: ' indirectly monetized' } },
        { type: 'text', text: { content: ' ?' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: { content: "(📈 Pro) What's a low-lift way to add" },
        },
        { type: 'text', text: { content: ' massive value' } },
        { type: 'text', text: { content: ' to a course?' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '(📈 Pro) How to avoid' } },
        { type: 'text', text: { content: ' platform risk' } },
        { type: 'text', text: { content: ' ?' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [{ type: 'text', text: { content: 'Unlock Trends Pro' } }],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '✅' } },
        { type: 'text', text: { content: ' Access All' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [{ type: 'text', text: { content: 'Trends Pro Reports' } }],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '✅' } },
        { type: 'text', text: { content: ' Learn Together' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [{ type: 'text', text: { content: 'in our Book Club' } }],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '✅' } },
        { type: 'text', text: { content: ' Stay Accountable' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [{ type: 'text', text: { content: 'with Daily Standups' } }],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '✅' } },
        { type: 'text', text: { content: ' Meet Curious Entrepreneurs' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [{ type: 'text', text: { content: 'in Weekly Meetups' } }],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '✅' } },
        { type: 'text', text: { content: ' Discuss Reports' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [{ type: 'text', text: { content: 'with Domain Experts' } }],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '✅' } },
        { type: 'text', text: { content: ' Collaborate' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'on Upcoming Reports' } },
        {
          type: 'text',
          text: {
            content: ' Become a Trends Pro Member',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=a2016b6ee9&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [{ type: 'text', text: { content: 'Online Courses' } }],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content:
              '“Self-education is, I firmly believe, the only kind of education there is.”',
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'heading_2',
    heading_2: {
      text: [{ type: 'text', text: { content: '💎 Why It Matters' } }],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content:
              'Creators can stop trading time for money by helping students land their first software development jobs, get raises, launch businesses and more.',
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'heading_2',
    heading_2: {
      text: [
        { type: 'text', text: { content: '🔍' } },
        { type: 'text', text: { content: ' Problem' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'There’s a' } },
        { type: 'text', text: { content: ' gap' } },
        {
          type: 'text',
          text: { content: ' between where you are and where you want to be.' },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'heading_2',
    heading_2: {
      text: [
        { type: 'text', text: { content: '💡' } },
        { type: 'text', text: { content: ' Solution' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'Online courses are' } },
        { type: 'text', text: { content: ' bridges' } },
        { type: 'text', text: { content: ' that help you fill these gaps.' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: { content: 'You can find your way via trial and error.' },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: { content: 'Or learn from someone who’s done it before.' },
        },
        { type: 'text', text: { content: ' 🏁' } },
        { type: 'text', text: { content: ' Players' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [{ type: 'text', text: { content: 'Course Platforms' } }],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content: 'Khan Academy',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=27364ac8eb&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: { content: '• Free online classes for high-school students.' },
        },
        {
          type: 'text',
          text: {
            content: ' Coursera',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=90666c69a3&e=210a6b589e',
            },
          },
        },
        {
          type: 'text',
          text: {
            content:
              ' • Courses, certificates and degrees from universities and companies.',
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content: 'Egghead',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=29c79ed7ec&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content: '• Tutorials for intermediate and advanced developers.',
          },
        },
        {
          type: 'text',
          text: {
            content: ' Masterclass',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=5bc3602538&e=210a6b589e',
            },
          },
        },
        {
          type: 'text',
          text: { content: ' • Edutainment from influential instructors.' },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content: 'Maven',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=9db2881002&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: { content: '• Platform for cohort-based courses.' },
        },
        {
          type: 'text',
          text: {
            content: ' Udemy',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=059c2c95f7&e=210a6b589e',
            },
          },
        },
        {
          type: 'text',
          text: { content: ' • Marketplace for self-paced courses.' },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content: 'Lynda',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=e6b47ccf73&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content:
              '• Self-paced courses on software development, design, photography and more.',
          },
        },
        {
          type: 'text',
          text: {
            content: ' General Assembly',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=786d6e18fd&e=210a6b589e',
            },
          },
        },
        {
          type: 'text',
          text: { content: ' • Coding, data and design training programs.' },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: 'Tools' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content: 'Podia',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=69524fe01d&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content:
              '• Sell courses, webinars, memberships and other digital products.',
          },
        },
        {
          type: 'text',
          text: {
            content: ' Teachable',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=0d0236322e&e=210a6b589e',
            },
          },
        },
        {
          type: 'text',
          text: { content: ' • Offer online courses and coaching services.' },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content: 'Kajabi',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=dadf23865b&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content: '• Host courses, communities, coaching services and more.',
          },
        },
        {
          type: 'text',
          text: {
            content: ' Thinkific',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=926c5a3993&e=210a6b589e',
            },
          },
        },
        {
          type: 'text',
          text: { content: ' • Create online courses and membership sites.' },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content: 'Gumroad',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=1dc55dce7a&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '• Sell digital products.' } },
        { type: 'text', text: { content: ' Courses' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content: 'Produced Services OS',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=173d4751ba&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: { content: '• Learn to build a productized service.' },
        },
        {
          type: 'text',
          text: {
            content: ' The No-Code Beginner’s Course',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=468f3d2d22&e=210a6b589e',
            },
          },
        },
        {
          type: 'text',
          text: { content: ' • Learn the fundamentals of no-code.' },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content: 'Product Buffs',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=eeda560643&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content: '• 5 weeks of hands-on product discovery coaching.',
          },
        },
        {
          type: 'text',
          text: {
            content: ' Superpath',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=18b9bc3b73&e=210a6b589e',
            },
          },
        },
        {
          type: 'text',
          text: {
            content: ' • Courses and a community for content marketers.',
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content: 'SQL for Humans',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=ef53babdf9&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '• SQL lessons for developers.' } },
        {
          type: 'text',
          text: {
            content: ' Notion Mastery',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=fcaeaa1014&e=210a6b589e',
            },
          },
        },
        {
          type: 'text',
          text: { content: ' • Use Notion in your life and business.' },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content: 'OKO U',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=8a8f23c29c&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '• Training for “budtenders.”' } },
        {
          type: 'text',
          text: {
            content: ' Find Your Niche',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=6fa2cfe488&e=210a6b589e',
            },
          },
        },
        { type: 'text', text: { content: ' • Find creator-market fit.' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content: 'Consulting Club',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=a3a271c7a1&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content: '• Learn to build a lucrative consulting practice.',
          },
        },
        {
          type: 'text',
          text: {
            content: ' Freedom Business',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=2cf5ca52e6&e=210a6b589e',
            },
          },
        },
        {
          type: 'text',
          text: {
            content: ' • Learn to build a sellable business as a solopreneur.',
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content: 'Podcast Like The Pros',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=6155d3c3cb&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: { content: '• Learn to produce high-quality podcasts.' },
        },
        { type: 'text', text: { content: ' 🔮' } },
        { type: 'text', text: { content: ' Predictions' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content: 'More platforms will sponsor influential educators.',
          },
        },
        {
          type: 'text',
          text: {
            content: ' Pat Flynn',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=95b0ecf355&e=210a6b589e',
            },
          },
        },
        { type: 'text', text: { content: ' did a webinar for' } },
        {
          type: 'text',
          text: {
            content: ' Copy.ai',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=887899cfde&e=210a6b589e',
            },
          },
        },
        { type: 'text', text: { content: ' . Notion pays' } },
        {
          type: 'text',
          text: {
            content: ' Ali Abdaal',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=f0ff9d4269&e=210a6b589e',
            },
          },
        },
        { type: 'text', text: { content: ' . Influencers give platforms' } },
        { type: 'text', text: { content: ' documentation' } },
        { type: 'text', text: { content: ' and' } },
        { type: 'text', text: { content: ' distribution' } },
        { type: 'text', text: { content: ' .' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content:
              'We’ll see more “edutainers.” Famous teachers have always understood the power of',
          },
        },
        { type: 'text', text: { content: ' storytelling' } },
        {
          type: 'text',
          text: {
            content:
              ' . See Carl Sagan, Richard Feynman and Neil Degrasse Tyson. Barriers are falling. The best are rising to the top. There are new form factors like',
          },
        },
        {
          type: 'text',
          text: {
            content: ' TikTok tutorials',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=2122511a59&e=210a6b589e',
            },
          },
        },
        { type: 'text', text: { content: ' .' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'There will be more' } },
        { type: 'text', text: { content: ' interactive, adaptive' } },
        { type: 'text', text: { content: ' platforms like' } },
        {
          type: 'text',
          text: {
            content: ' Duolingo',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=e387ff800f&e=210a6b589e',
            },
          },
        },
        {
          type: 'text',
          text: {
            content:
              ' . They scale personalized, gamified, self-paced education with low marginal costs.',
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'heading_2',
    heading_2: {
      text: [
        { type: 'text', text: { content: '☁️' } },
        { type: 'text', text: { content: ' Opportunities' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [{ type: 'text', text: { content: 'Do it live the first time.' } }],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content:
              'Build fast feedback loops by consulting before making courses. Build the curriculum from questions, real-world struggles and feedback. Tyler Gillespie',
          },
        },
        {
          type: 'text',
          text: {
            content: ' built a few',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=c8563f9c64&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'productized services,' } },
        {
          type: 'text',
          text: {
            content: ' mentored founders',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=26a59d718e&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'and now he’s building a' } },
        {
          type: 'text',
          text: {
            content: ' course',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=173d4751ba&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '.' } },
        {
          type: 'text',
          text: {
            content: ' Presell',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=f84fc6198e&e=210a6b589e',
            },
          },
        },
        {
          type: 'text',
          text: {
            content:
              ' to reduce market risk. Marie Poulin used presales to get early feedback on the beta version of',
          },
        },
        {
          type: 'text',
          text: {
            content: ' her course',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=fcaeaa1014&e=210a6b589e',
            },
          },
        },
        { type: 'text', text: { content: ' . Trust' } },
        { type: 'text', text: { content: ' wallets over words' } },
        { type: 'text', text: { content: ' .' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'Base your course on an outcome' } },
        { type: 'text', text: { content: ' .' } },
        { type: 'text', text: { content: ' Use' } },
        { type: 'text', text: { content: ' capstone projects.' } },
        {
          type: 'text',
          text: {
            content:
              ' This is a forcing function to make sure your content is actionable.',
          },
        },
        {
          type: 'text',
          text: {
            content: ' Launch MBA',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=25b970c3e5&e=210a6b589e',
            },
          },
        },
        {
          type: 'text',
          text: {
            content:
              ' is based on the 12 startups in 12 months concept. Each project serves as social proof.',
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: 'Combine' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'courses and' } },
        {
          type: 'text',
          text: {
            content: ' communities',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=a76dea17d9&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content:
              '. Get benefits of cohorts (accountability, peer-to-peer learning) at scale without high marginal costs. See all-in-one platforms like',
          },
        },
        {
          type: 'text',
          text: {
            content: ' Kajabi',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=dadf23865b&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '.' } },
        { type: 'text', text: { content: ' Build a' } },
        { type: 'text', text: { content: ' value ladder.' } },
        {
          type: 'text',
          text: {
            content: ' Help people at different stages and diversify revenue.',
          },
        },
        {
          type: 'text',
          text: {
            content: ' Flavio',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=86247d77a4&e=210a6b589e',
            },
          },
        },
        {
          type: 'text',
          text: {
            content:
              ' does this with his blog (free), books ($), courses ($$) and bootcamps ($$$).',
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: 'Version' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'your course.' } },
        {
          type: 'text',
          text: {
            content: ' Paula Pant',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=db644ccdf1&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'earned over $1 million from a' } },
        {
          type: 'text',
          text: {
            content: ' “beta” course',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=db644ccdf1&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content:
              '. She’s done multiple versions. Use new versions as launch events.',
          },
        },
        { type: 'text', text: { content: ' 🔑' } },
        { type: 'text', text: { content: ' Key Lessons' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'These are' } },
        { type: 'text', text: { content: ' fragmented, micro-monopolies' } },
        {
          type: 'text',
          text: {
            content:
              ' . There are many options and many winners. Course creators have',
          },
        },
        {
          type: 'text',
          text: {
            content: ' pricing power',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=ff0c97e76a&e=210a6b589e',
            },
          },
        },
        {
          type: 'text',
          text: { content: ' . Feature parity applies to SaaS not pros.' },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: 'Markets' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'are taking over' } },
        { type: 'text', text: { content: ' .' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content: 'Colleges can’t keep up with talent needs. Companies like',
          },
        },
        {
          type: 'text',
          text: {
            content: ' Salesfofce',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=ea37a46529&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'and' } },
        {
          type: 'text',
          text: {
            content: ' Google',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=839dd8a191&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: { content: 'take it upon themselves to train employees.' },
        },
        { type: 'text', text: { content: ' Consider tradeoffs:' } },
        { type: 'text', text: { content: ' Cohort-based' } },
        {
          type: 'text',
          text: {
            content:
              ' courses are high-fidelity, boost accountability and have higher completion rates than self-paced courses',
          },
        },
        { type: 'text', text: { content: ' .' } },
        {
          type: 'text',
          text: {
            content:
              ' But students are kept at the same pace. Like classrooms.',
          },
        },
        { type: 'text', text: { content: ' Self-paced' } },
        {
          type: 'text',
          text: {
            content:
              ' courses let you move fast or slow. They are more financially accessible than cohort-based courses. But completion rates are lower. Communities can ebb some of these downsides.',
          },
        },
        { type: 'text', text: { content: ' Interactive platforms' } },
        {
          type: 'text',
          text: {
            content:
              ' adapt to you. They have high engagement and low marginal costs. You may need one-on-one support to fill in gaps.',
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'heading_2',
    heading_2: {
      text: [
        { type: 'text', text: { content: '😠' } },
        { type: 'text', text: { content: ' Haters' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: '“I' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: 'don’t know' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [{ type: 'text', text: { content: 'enough to teach a course.”' } }],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: { content: 'What do you wish you knew 3 years ago?' },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content:
              'Teach that. You may be better than an expert because you don’t suffer from the expert’s curse. Or teach as you learn. This is what Tim Ferriss, Shane Parrish and I am doing.',
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: '“Most people' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: 'don’t finish' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: 'courses.”' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content:
              'The same goes for books and other form factors. Cohorts and interactive, adaptive platforms can help with this.',
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [{ type: 'text', text: { content: '“Education should be' } }],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: 'free' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: '.”' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content:
              'It is. Get after it. Quality and cost aren’t always correlated. You’ll still have to',
          },
        },
        { type: 'text', text: { content: ' pay' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: 'attention.' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [{ type: 'text', text: { content: '“Course revenue is' } }],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: 'spiky' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: '.”' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content:
              'This applies to most digital products. There are ways around it: memberships, value ladders and evergreen funnels. Or embrace the spikiness with open and closed enrollment.',
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [{ type: 'text', text: { content: '“Courses are just' } }],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: 'money grabs' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: '.”' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'You can find' } },
        { type: 'text', text: { content: ' bad intentions' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'in any market.' } },
        { type: 'text', text: { content: ' How to avoid it?' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: 'Time' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content:
              'is smarter than we are. Be a late adopter and let the chicken come home to roost.',
          },
        },
        {
          type: 'text',
          text: {
            content: ' How does this person’s reputation perform over time?',
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'Or look for' } },
        { type: 'text', text: { content: ' reviews' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'in unmoderated environments.' } },
        { type: 'text', text: { content: ' 🔗' } },
        { type: 'text', text: { content: ' Links' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content: 'Who has a course?',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=456e1a32c4&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '• The tweet behind this report.' } },
        {
          type: 'text',
          text: {
            content: ' Create Your Online Course Template',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=c8987617de&e=210a6b589e',
            },
          },
        },
        {
          type: 'text',
          text: { content: ' • A step-by-step process for creating courses.' },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content: 'Interactive Course Platforms',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=51b9f6707b&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '• A tweetstorm on new platforms.' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: 'What else?' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content: 'Trends',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=a2016b6ee9&e=210a6b589e',
            },
          },
        },
        {
          type: 'text',
          text: {
            content: ' PRO — Online Courses',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=a2016b6ee9&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'has more insights' } },
        { type: 'text', text: { content: '.' } },
        { type: 'text', text: { content: ' What you’ll get:' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: '24' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'Course Platforms (200% More)' } },
        { type: 'text', text: { content: ' 16' } },
        { type: 'text', text: { content: ' Course Tools (220% More)' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: '28' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'Courses (154% More)' } },
        { type: 'text', text: { content: ' 7' } },
        { type: 'text', text: { content: ' Predictions (133% More)' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: '11' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'Opportunities (83% More)' } },
        { type: 'text', text: { content: ' 6' } },
        { type: 'text', text: { content: ' Key Lessons (100% More)' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: '10' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'Links (233% More)' } },
        { type: 'text', text: { content: ' 24' } },
        { type: 'text', text: { content: ' Related' } },
        { type: 'text', text: { content: ' Reports' } },
        { type: 'text', text: { content: ' (' } },
        { type: 'text', text: { content: ' 📈' } },
        { type: 'text', text: { content: ' Trends Pro Exclusive)' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [{ type: 'text', text: { content: '19-minute audio episode' } }],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content:
              'with exclusive Online Courses stories, insights and opportunities.',
          },
        },
        { type: 'text', text: { content: " With Trends Pro you'll learn:" } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: '(' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '📈' } },
        { type: 'text', text: { content: ' Pro)' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'How to' } },
        { type: 'text', text: { content: ' generate recurring revenue' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: { content: 'with online courses? Who is already doing it?' },
        },
        { type: 'text', text: { content: ' (' } },
        { type: 'text', text: { content: ' 📈' } },
        { type: 'text', text: { content: ' Pro)' } },
        { type: 'text', text: { content: " What's" } },
        { type: 'text', text: { content: ' accountability-as-a-service' } },
        { type: 'text', text: { content: ' ?' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: '(' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '📈' } },
        { type: 'text', text: { content: ' Pro)' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'How to build' } },
        { type: 'text', text: { content: ' profitable partnerships' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '?' } },
        { type: 'text', text: { content: ' (' } },
        { type: 'text', text: { content: ' 📈' } },
        { type: 'text', text: { content: ' Pro)' } },
        { type: 'text', text: { content: ' What are' } },
        { type: 'text', text: { content: ' starter' } },
        { type: 'text', text: { content: ' ,' } },
        { type: 'text', text: { content: ' spotlight' } },
        { type: 'text', text: { content: ' and' } },
        { type: 'text', text: { content: ' signature' } },
        { type: 'text', text: { content: ' courses?' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: '(' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '📈' } },
        { type: 'text', text: { content: ' Pro)' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'How are courses being' } },
        { type: 'text', text: { content: ' indirectly monetized' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '?' } },
        { type: 'text', text: { content: ' (' } },
        { type: 'text', text: { content: ' 📈' } },
        { type: 'text', text: { content: ' Pro)' } },
        { type: 'text', text: { content: ' Why do' } },
        { type: 'text', text: { content: ' niches' } },
        { type: 'text', text: { content: ' matter?' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: '(' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '📈' } },
        { type: 'text', text: { content: ' Pro)' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'How to think about' } },
        { type: 'text', text: { content: ' competition' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '?' } },
        { type: 'text', text: { content: ' (' } },
        { type: 'text', text: { content: ' 📈' } },
        { type: 'text', text: { content: ' Pro)' } },
        { type: 'text', text: { content: " What's the future of" } },
        { type: 'text', text: { content: ' free education' } },
        { type: 'text', text: { content: ' ?' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: '(' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '📈' } },
        { type: 'text', text: { content: ' Pro)' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: "What's a low-lift way to add" } },
        { type: 'text', text: { content: ' massive value' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'to a course?' } },
        { type: 'text', text: { content: ' (' } },
        { type: 'text', text: { content: ' 📈' } },
        { type: 'text', text: { content: ' Pro)' } },
        { type: 'text', text: { content: ' How to avoid' } },
        { type: 'text', text: { content: ' platform risk' } },
        { type: 'text', text: { content: ' ?' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: '(' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '📈' } },
        { type: 'text', text: { content: ' Pro)' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'An inside look into' } },
        { type: 'text', text: { content: " Ali Abdaal's" } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'value ladder and income streams.' } },
        { type: 'text', text: { content: ' and a lot more…' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [{ type: 'text', text: { content: 'Unlock Trends Pro' } }],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '✅' } },
        { type: 'text', text: { content: ' Access All' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [{ type: 'text', text: { content: 'Trends Pro Reports' } }],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '✅' } },
        { type: 'text', text: { content: ' Learn Together' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [{ type: 'text', text: { content: 'in our Book Club' } }],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '✅' } },
        { type: 'text', text: { content: ' Stay Accountable' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [{ type: 'text', text: { content: 'with Daily Standups' } }],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '✅' } },
        { type: 'text', text: { content: ' Meet Curious Entrepreneurs' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [{ type: 'text', text: { content: 'in Weekly Meetups' } }],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '✅' } },
        { type: 'text', text: { content: ' Discuss Reports' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [{ type: 'text', text: { content: 'with Domain Experts' } }],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: '✅' } },
        { type: 'text', text: { content: ' Collaborate' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [{ type: 'text', text: { content: 'on Upcoming Reports' } }],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        {
          type: 'text',
          text: {
            content: 'Become a Trends Pro Member',
            link: {
              url: 'https://trends.us3.list-manage.com/track/click?u=5a0620ca3ebb8b31f0c94ed0d&id=a2016b6ee9&e=210a6b589e',
            },
          },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: 'Thanks,' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: { text: [{ type: 'text', text: { content: 'Dru Riley' } }] },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'Founder, Trends.vc' } },
        {
          type: 'text',
          text: { content: ' Want to change how you receive these emails?' },
        },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'You can' } },
        {
          type: 'text',
          text: {
            content: ' update your preferences',
            link: {
              url: 'https://trends.us3.list-manage.com/profile?u=5a0620ca3ebb8b31f0c94ed0d&id=7f3f716b5c&e=210a6b589e&c=0b5e797f85',
            },
          },
        },
        { type: 'text', text: { content: ' or' } },
        {
          type: 'text',
          text: {
            content: ' unsubscribe',
            link: {
              url: 'https://trends.us3.list-manage.com/unsubscribe?u=5a0620ca3ebb8b31f0c94ed0d&id=7f3f716b5c&e=210a6b589e&c=0b5e797f85',
            },
          },
        },
        { type: 'text', text: { content: ' .' } },
      ],
    },
  },
  {
    object: 'block',
    type: 'paragraph',
    paragraph: {
      text: [
        { type: 'text', text: { content: 'Our mailing address:' } },
        {
          type: 'text',
          text: { content: ' 101 Marietta Street NorthwestAtlanta, GA 30303' },
        },
      ],
    },
  },
];

export default expectedBlocks;
