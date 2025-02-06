// latte / frappe / macchiato / mocha
const palette = mocha;

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
      g: ['https://google.com/search?q=', 'Google'],
      i: ['https://ixquick.com/do/search?q=', 'Ixquick'],
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
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/cbg-09.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "raindrop",
              url: "https://app.raindrop.io",
              icon: "droplet-bolt",
              icon_color: palette.green,
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
          name: "workspace",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "sheets",
              url: "https://docs.google.com/spreadsheets",
              icon: "table",
              icon_color: palette.red,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "уп",
              url: "https://www.pravda.com.ua",
              icon: "news",
              icon_color: palette.green,
            },
            {
              name: "mil.in.ua",
              url: "https://mil.in.ua",
              icon: "badge-filled",
              icon_color: palette.peach,
            },
            {
              name: "куток",
              url: "https://kutok.io",
              icon: "border-radius",
              icon_color: palette.red,
            },
            {
              name: "ґрунт",
              url: "https://grnt.media",
              icon: "eye-bolt",
              icon_color: palette.blue,
            },
            {
              name: "village",
              url: "https://www.village.com.ua",
              icon: "home-2",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-07.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "neptune",
              url: "https://ui.neptune.ai",
              icon: "circle-triangle",
              icon_color: palette.peach,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.red,
            },
            {
              name: "aoc",
              url: "https://adventofcode.com",
              icon: "brand-linktree",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "dou",
              url: "https://dou.ua",
              icon: "brand-prisma",
              icon_color: palette.green,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "uber engineering",
              url: "https://www.uber.com/en-GB/blog/london/engineering",
              icon: "brand-uber",
              icon_color: palette.red,
            },
            {
              name: "netflix tech blog",
              url: "https://netflixtechblog.com",
              icon: "brand-netflix",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-08.gif",
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
              icon_color: '#a57685'
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
              name: "IGN",
              url: "https://www.ign.com/account/playlist/library",
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
              name: "epicgames",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: palette.red,
            },
            {
              name: "nintendo",
              url: "https://store.nintendo.co.uk",
              icon: "device-nintendo",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "patreon",
              url: "https://www.patreon.com",
              icon: "brand-patreon",
              icon_color: palette.red,
            },
            {
              name: "kyivstar",
              url: "https://tv.kyivstar.ua",
              icon: "star-filled",
              icon_color: palette.blue,
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
root.style.setProperty("--accent", palette.green);
