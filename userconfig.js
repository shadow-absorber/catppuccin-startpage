// latte / frappe / macchiato / mocha const palette = mocha;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Gothenburg",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  search: {
    engines: {
      sx: ['https://searx.ikl.lol/search?q=', 'Searxng'],
      st: ['https://stract.com/search?q=', 'Stract'],
      g: ['https://google.com/search?q=', 'Google'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
    }
  },
  keybindings: {
    "t": 'todo-list',
    "s": 'search-bar'
  },
  disabled: [],
  fastlink: "https://searx.ikl.lol/",
  openLastVisitedTab: true,
  tabs: [
     {
      name: 'boards',
      background_url: 'src/img/banners/cbg-13.gif',
      categories: [{
        name: 'fun',
        links: [
          {
            url: 'https://8chan.moe/wsg/',
            name: '/wsg/'
          },
          {
            name: '/out/',
            url: 'https://8chan.moe/out',
            icon: 'leaf',
            icon_color: palette.green,
          },
          {
            name: '/lit/',
            url: 'https://8chan.moe/lit/',
            icon: 'book',
            icon_color: palette.peach,
          },
          {
            name: '/v/',
            url: 'https://8chan.moe/v/',
            icon: 'device-gamepad',
            icon_color: palette.maroon,
          },
          {
            name: '/p/',
            url: 'https://8chan.moe/p/',
            icon: 'camera',
            icon_color: palette.rosewater,
          }
        ]
      },
      {
        name: 'Comfy',
        links: [
         {
            name: '/r/wholesome',
            url: 'https://reddit.com/r/wholesome'
          },
          {
            name: '/r/UpliftingNews',
            url: 'https://reddit.com/rUpliftingNews'
          },
          {
            name: '/r/MadeMeSmile',
            url: 'https://reddit.com/r/MadeMeSmile'
          },
          {
            name: '/r/UpliftingTrends',
            url: 'https://reddit.com/r/UpliftingTrends'
          }

        ]
      },
      {
        name: 'Technology',
        links: [
          {
            name: '/g/',
            url: 'https://8chan.moe/g/',
          },
          {
            name: '/r/privacy',
            url: 'https://www.reddit.com/r/privacy/'
          },
          {
            name: 'privacy wiki',
            url: 'https://www.reddit.com/r/privacy/wiki/index/'
          },
          {
            name: 'IG wiki',
            url: 'https://igwiki.lyci.de/'
          }
        ]
      }
      ]
    },
        {
      name: 'music',
      background_url: 'src/img/banners/cbg-14.gif',
      categories: [
        {
          name: 'music services',
          links: [
            {
              url: 'https://soundcloud.com/',
              icon: 'brand-soundcloud',
              icon_color: palette.peach,
            },
            {
              url: 'https://youtu.be/',
              icon: 'brand-youtube',
              icon_color: palette.red,
            },
            {
              url: 'https://r-a-d.io/',
              icon: 'radio',
              icon_color: palette.blue,
            },
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
          ],
        },
      {
        name: 'music boards',
          links: [
            {
              name: '/mu/',
              url: 'https://boards.8chan.moe/mu/',
            },
          ],
      },
        {
          name: 'music buy',
          links: [
            {
              name: 'bandcamp',
              url: 'https://bandcamp.com/',
              icon: 'brand-bandcamp',
              icon_color: palette.blue,
            },
            {
              name: 'qobuz',
              url: 'https://www.qobuz.com/us-en/shop'
            },
            {
              name: 'beatport',
              url: 'https://www.beatport.com/'
            },
          ]
        }
      ]
    },
   {
      name: "tech",
      background_url: "src/img/banners/cbg-15.gif",
      categories: [
        {
          name: 'subreddits',
          links: [
            {
              name: 'r/startpages/',
              url: 'https://www.reddit.com/r/startpages/'
            },
            {
              name: 'r/unixporn',
              url: 'https://www.reddit.com/r/unixporn/'
            },
            {
              name: 'r/firefoxcss',
              url: 'https://www.reddit.com/r/firefoxcss/'
            },
            {
              name: 'r/mechkbds/',
              url: 'https://www.reddit.com/r/MechanicalKeyboards/',
              icon: 'keyboard',
              icon_color: palette.red,
            },
            {
              name: 'r/programming',
              url: 'https://www.reddit.com/r/programming/'
            }
          ]
        },
        {
          name: "gaming",
          links: [
            {
              name: "GOG",
              url: "https://www.gog.com",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "itch.io",
              url: "https://itch.io",
              icon: "brand-itch",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "video",
          links: [
           {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "twitch",
              url: "https://www.twitch.tv",
              icon: "brand-twitch",
              icon_color: palette.lavender,
            },
         ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.red);
