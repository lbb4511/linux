window.$docsify = {
  name: "Linux学习与运用",
  logo: '_img/logo.svg',
  repo: "lbb4511/linux",
  maxLevel: 1,
  coverpage: true,
  onlyCover: true,
  loadSidebar: "SUMMARY.md",
  search: {
    maxAge: 86400000, // 过期时间，单位毫秒，默认一天
    paths: [
      '/application/',
      '/command/', // => /README.md
      '/file/', // => /guide.md
      '/software/', // => /get-started.md
      '/command/', // => /zh-cn/README.md
    ],
    placeholder: '搜索',
    noData: '找不到结果',
    depth: 2
  },
};

const gitalk = new Gitalk({
  clientID: '8194e2d7dba9b720d111',
  clientSecret: '801009aef54ad4261602b62d58ec1f4d6c571ae4',
  repo: 'https://github.com/lbb4511/linux',
  owner: 'Github repo owner',
  admin: ['Github repo collaborators, only these guys can initialize github issues'],
  // facebook-like distraction free mode
  distractionFreeMode: false
})