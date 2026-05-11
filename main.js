// 静态页面配置数据
const PAGE_CONFIG = {
  activityName: "56.9钻石福袋 · 尊享典藏",
  color: "#b64dff",
  coverUrl: "./images/b587e3720e6c4432840d350a772420fc11775552966900.png",
  headImgUrl: "./images/202113d9ea5941a5914a2cf7b3f3968a11775552956102.png",
  ruleUrl: "https://h5.3dmgame.com/detail?id=1532731&type=1",
  purchaseSpecs: [
    { id: 99, name: "福袋开1次", blindBoxNum: 1, payPrice: 56.90, hasStock: 1 },
    { id: 100, name: "福袋开5次", blindBoxNum: 5, payPrice: 280.00, hasStock: 1, discount: "4.5" }
  ],
  prizeChance: {
    legendary: "9",
    epic: "18",
    rare: "33",
    normal: "40"
  },
  description: `【3DM福袋活动说明】
1、点击"开1次"、"开5次"的游戏福袋开启按钮，获得对应数量的游戏Key。
2、此次福袋"开五次"必得传说级或史诗级游戏保底，开五次可享4.5元优惠。
3、各个级别游戏的开中概率分别为
黄金福袋：传说级10%，史诗级17%，稀有级36%，普通级37%
铂金福袋：传说级11%，史诗级16%，稀有级35%，普通级38%
钻石福袋：传说级9%，史诗级18%，稀有级33%，普通级40%
4、福袋具有概率性和重复性，开出的游戏有概率存在重复。

【福袋交换规则】
1、每个福袋只能交换一次，交换成功后无法再次进行交换。
2、交换成功的福袋不支持任何形式的退款。
3、仅版本更新后购买的，且未查看激活码的福袋支持交换。

【购买须知】
1、福袋存在概率性，请慎重考虑后下单开启，未满18周岁未成年禁止参与。
2、由于福袋属于特殊商品，一经购买不支持退款。
3、支付成功后，请到"我的订单—福袋订单"中查看相应的cdkey。
4、本活动与Apple Inc.无关。
5、本福袋内为steam平台游戏。
6、福袋开启在通过支付宝完成支付时，由于港币与人民币的实时动态汇率，可能导致实际支付的价格有细微的浮动，实付金额以当前支付宝系统结算时的汇率为准。

【关于售后】
1、游戏福袋属于特殊商品，具有概率性和随机性，开出的游戏可能重复，获取CDK后，无质量问题不接受任何理由的退款和换货申请。
2、福袋遇到缺货问题，可联系商城客服换取等价游戏，若一周内未联系，将自动退还实付金额，如遇节假日无法及时回复，节后统一处理。
3、有任何订单问题可以咨询商城客服，工作人员会在工作日内处理。`
};

// 游戏列表数据
const GAMES_DATA = [
  // 传说级 (level 1)
  { name: "红色沙漠", verticalFaceUrl: "./images/174546802048906de7bf692504c4d9ee3b96bd92619c4.jpg", price: 268.00, level: 1 },
  { name: "仁王3", verticalFaceUrl: "./images/a49749674a484402b3a305561902950311770282168185.png", price: 348.00, level: 1 },
  { name: "生化危机9：安魂曲", verticalFaceUrl: "./images/745b9e14b24743898f8c5ed2d58511bf11770282284159.png", price: 348.00, level: 1 },
  { name: "黑神话：悟空", verticalFaceUrl: "./images/175627872044028c19f7daa224b9484bbac58460346f7.jpg", price: 328.00, level: 1 },
  { name: "光与影：33号远征队", verticalFaceUrl: "./images/1756210434618a045d28332c84b38948ef2e64e89371a.jpg", price: 218.00, level: 1 },
  { name: "剑星", verticalFaceUrl: "./images/17558673994175bc974f49ae941d0a762257cca1b7d3b.jpg", price: 268.00, level: 1 },
  { name: "NBA 2K26", verticalFaceUrl: "./images/1755865763591164237f4abe542beac7488114eadc1a3.jpg", price: 509.00, level: 1 },
  { name: "明末：渊虚之羽", verticalFaceUrl: "./images/17562684006707ad9a1954ea4407fbbe516be6d05d984.jpg", price: 248.00, level: 1 },
  { name: "匹诺曹的谎言", verticalFaceUrl: "./images/1755631105187b742e552f44445269edbdb7c0a04e048.jpg", price: 298.00, level: 1 },
  { name: "艾尔登法环：黑夜君临", verticalFaceUrl: "./images/17557835037684020fd887a8b460da32ce29f01234273.jpg", price: 198.00, level: 1 },
  { name: "潜行者2：切尔诺贝利之心", verticalFaceUrl: "./images/1756163934571fee4a01fb0a141ca8f0085b9c6ce5f06.jpg", price: 268.00, level: 1 },
  { name: "只狼：影逝二度", verticalFaceUrl: "./images/1756005960065d95519aef1f14313ad92f78454e37e8c.jpg", price: 268.00, level: 1 },
  { name: "生化危机4：重制版", verticalFaceUrl: "./images/1756237937805e42f4dba0e4a4cbca0797ec89dfc444d.jpg", price: 248.00, level: 1 },
  { name: "仁王2 完全版", verticalFaceUrl: "./images/1753387477019a3f9ed755865480b95219a39a53526b2.jpg", price: 249.00, level: 1 },
  { name: "黑暗之魂2：原罪学者", verticalFaceUrl: "./images/17559137452946e97bf4b012c4306a9bf588263d7b9e3.jpg", price: 198.00, level: 1 },
  { name: "云族裔/inZOI", verticalFaceUrl: "./images/1755763645591242e698e93844fdc93ced095fccd9d9e.jpg", price: 188.00, level: 1 },
  { name: "小小梦魇3", verticalFaceUrl: "./images/17561149809180da04e9831264ddb9fe9f0ea1dfe9d8b.jpg", price: 178.00, level: 1 },
  { name: "开球！REMATCH", verticalFaceUrl: "./images/175625022509653429bafff41467ca6695fa879482fd8.jpg", price: 108.00, level: 1 },
  { name: "女神异闻录5皇家版", verticalFaceUrl: "./images/17561719953995c38815206d440308078a59fb315ce74.jpg", price: 329.00, level: 1 },
  { name: "狂野星球复仇记", verticalFaceUrl: "./images/17558041852994810ebc1d46f42f1b7324752df5330c5.jpg", price: 111.00, level: 1 },
  { name: "灵魂面甲", verticalFaceUrl: "./images/17557875470245db52a31112542e886e6f7a95663cbdf.jpg", price: 108.00, level: 1 },
  // 史诗级 (level 2)
  { name: "苏丹的游戏", verticalFaceUrl: "./images/17558332980893e26dc77fcca48459fc838a25960b853.jpg", price: 80.00, level: 2 },
  { name: "我不背锅", verticalFaceUrl: "./images/1756262209831d1ec78f8d44945c8ac60f546758b0ed1.jpg", price: 92.00, level: 2 },
  { name: "霸剑霄云录", verticalFaceUrl: "./images/175625307244406ca316636084dfd9f7495ad5387d80a.jpg", price: 89.00, level: 2 },
  { name: "重装前哨", verticalFaceUrl: "./images/1756151349798f86c7a81921d4dd9a8ac440a386c5124.jpg", price: 88.00, level: 2 },
  { name: "卡库远古封印", verticalFaceUrl: "./images/175607510272925863f38528c4a4cacaac9d2df1e9f1e.jpg", price: 89.00, level: 2 },
  { name: "山门与幻境", verticalFaceUrl: "./images/17562269819654f54e95f62c7404485efb5096a1c4a6e.jpg", price: 78.00, level: 2 },
  { name: "神舞幻想", verticalFaceUrl: "./images/1755452783569e900e8ab80d84c99a83ad682b53aa56f.jpg", price: 89.00, level: 2 },
  { name: "阿西, 美女室友竟然...？2", verticalFaceUrl: "./images/1756874841869e5d2a85e60514c7cb30a5af979c26fb8.jpg", price: 88.00, level: 2 },
  { name: "弑神者的战棋", verticalFaceUrl: "./images/17558102005353d20223309dd44c78a8935e69442a50f.jpg", price: 76.00, level: 2 },
  { name: "我的幻想乡", verticalFaceUrl: "./images/174546424156676b759a555c24f8aba2e4c25fcaf020d.jpg", price: 76.00, level: 2 },
  { name: "冰封之焰", verticalFaceUrl: "./images/1755989340544672f80634ce740f99d6cc9b0294948ce.jpg", price: 76.00, level: 2 },
  { name: "The Front 前线", verticalFaceUrl: "./images/1756269372544bfc9b8752bc7437bbe85c39564cbd260.jpg", price: 76.00, level: 2 },
  { name: "晨昏线", verticalFaceUrl: "./images/1755764114371407c85bc86874ef39faa627f32023aaf.jpg", price: 68.00, level: 2 },
  // 稀有级 (level 3)
  { name: "嘘, 美女拍摄中", verticalFaceUrl: "./images/3cd6400019494c0cb089d927850542fc11765779773073.jpg", price: 76.00, level: 3 },
  { name: "冬日幸存者", verticalFaceUrl: "./images/17561153741409d1e3ad02d88404b8d26bb0e09446f6e.jpg", price: 69.00, level: 3 },
  { name: "湮灭线", verticalFaceUrl: "./images/175622398006837f318195e6845dea9484708fc2c1dcd.jpg", price: 69.00, level: 3 },
  { name: "觉醒者", verticalFaceUrl: "./images/1745468542936aa9a853600d2408a9237755fc562d2cd.jpg", price: 68.88, level: 3 },
  { name: "三国之志4", verticalFaceUrl: "./images/17552521782091e95849a347847608e10be76652c0232.jpg", price: 68.00, level: 3 },
  { name: "我的可爱皇后", verticalFaceUrl: "./images/1756238350991ce8a1e5aa9664aadbbf7d745d76d5723.jpg", price: 68.00, level: 3 },
  { name: "英雄立志传：三国志", verticalFaceUrl: "./images/175582523109900518a357c174b4a90e78f15c62a8e1d.jpg", price: 68.00, level: 3 },
  { name: "满庭芳：宋上繁华", verticalFaceUrl: "./images/1756225061227e4cbdd8876e44f8b8c121c83d231ddba.jpg", price: 68.00, level: 3 },
  { name: "牧野之歌", verticalFaceUrl: "./images/175610717634039f41211f6a14b059114e79dd9cce086.jpg", price: 68.00, level: 3 },
  { name: "铁轨与墓穴", verticalFaceUrl: "./images/17560703271448d63bd7a01d74012bdffe1f6e7d02963.jpg", price: 68.00, level: 3 },
  { name: "饮魔人", verticalFaceUrl: "./images/17559612304360053f6e463824b3181c023077e76755d.jpg", price: 68.00, level: 3 },
  { name: "人格解体", verticalFaceUrl: "./images/1756134719445a0bbba149d9b429db2e506d3fcb14d90.jpg", price: 68.00, level: 3 },
  { name: "命运游戏3：王者棋局", verticalFaceUrl: "./images/1749015984524e34708d27b9e4fb0906c761ffa7bdb79.jpg", price: 66.00, level: 3 },
  // 普通级 (level 4)
  { name: "刀剑江湖路", verticalFaceUrl: "./images/175627902601434a87678863b45b3bd617a1086f7716d.jpg", price: 58.00, level: 4 },
  { name: "杯杯倒满", verticalFaceUrl: "./images/1756275482424736008a1f9f049e8aa4203184038c4c0.jpg", price: 58.00, level: 4 },
  { name: "山河旅探", verticalFaceUrl: "./images/175618326856741d9316344254379be3ba1358d0a8fd0.jpg", price: 58.00, level: 4 },
  { name: "命运游戏2：百年之约", verticalFaceUrl: "./images/17558417901173a5f86711339433dac755502162daa55.jpg", price: 58.00, level: 4 },
  { name: "战火英雄", verticalFaceUrl: "./images/17562299560938d1d0fad4f234e2f8e6d98402305bfbe.jpg", price: 58.00, level: 4 },
  { name: "吾今有世家", verticalFaceUrl: "./images/17557689093163e172d217d59428d89b3e89216f704e6.jpg", price: 58.00, level: 4 },
  { name: "一方灵田", verticalFaceUrl: "./images/175607971888632e735c363da4037bbc7657a6ab9d741.jpg", price: 58.00, level: 4 },
  { name: "降妖散记", verticalFaceUrl: "./images/1756212957373290b39a241c44c3bba59c71f1228bc14.jpg", price: 58.00, level: 4 },
  { name: "纸片萌兽：小小迷途", verticalFaceUrl: "./images/1756230012054db7ae01d562c49878c329c64721a431a.jpg", price: 58.00, level: 4 },
  { name: "无人在线", verticalFaceUrl: "./images/176242031947956db5289129e4284ad144c7418b3d28c.jpg", price: 58.00, level: 4 },
  { name: "雅皮士精神", verticalFaceUrl: "./images/1755967549355168803658f574a6b937348b8adfdbcd1.jpg", price: 58.00, level: 4 }
];

// 中奖用户数据
const WINNERS_DATA = [
  { userName: "犹豫的百褶裙10", gameLevel: 3, gameLevelDesc: "稀有", gameName: "我的可爱皇后", avatar: "./images/default.jpg" },
  { userName: "愤怒的夕阳5", gameLevel: 4, gameLevelDesc: "普通", gameName: "战火英雄", avatar: "./images/default.jpg" },
  { userName: "丰富的白羊8", gameLevel: 3, gameLevelDesc: "稀有", gameName: "湮灭线", avatar: "./images/default.jpg" },
  { userName: "传统的橘子9", gameLevel: 4, gameLevelDesc: "普通", gameName: "纸片萌兽：小小迷途", avatar: "./images/default.jpg" },
  { userName: "3dm_29725145", gameLevel: 1, gameLevelDesc: "传说", gameName: "灵魂面甲", avatar: "./images/default.jpg" },
  { userName: "风趣的荷花8", gameLevel: 3, gameLevelDesc: "稀有", gameName: "饮魔人", avatar: "./images/default.jpg" },
  { userName: "羞涩的衬衫20", gameLevel: 2, gameLevelDesc: "史诗", gameName: "我的幻想乡", avatar: "./images/default.jpg" },
  { userName: "粗暴的高跟鞋6", gameLevel: 4, gameLevelDesc: "普通", gameName: "雅皮士精神", avatar: "./images/default.jpg" },
  { userName: "粗暴的高跟鞋6", gameLevel: 2, gameLevelDesc: "史诗", gameName: "卡库远古封印", avatar: "./images/default.jpg" },
  { userName: "奋斗的星月7", gameLevel: 1, gameLevelDesc: "传说", gameName: "潜行者2：切尔诺贝利之心", avatar: "./images/default.jpg" },
  { userName: "外向的金针菇12", gameLevel: 1, gameLevelDesc: "传说", gameName: "明末：渊虚之羽", avatar: "./images/default.jpg" },
  { userName: "不说结束。", gameLevel: 1, gameLevelDesc: "传说", gameName: "灵魂面甲", avatar: "./images/default.jpg" },
  { userName: "开心超人OvOld", gameLevel: 2, gameLevelDesc: "史诗", gameName: "神舞幻想", avatar: "./images/1730976069_285786_s1.jpeg" },
  { userName: "Freebro丶小奇", gameLevel: 2, gameLevelDesc: "史诗", gameName: "山门与幻境", avatar: "./images/default.jpg" },
  { userName: "外向的黑米15", gameLevel: 2, gameLevelDesc: "史诗", gameName: "我的幻想乡", avatar: "./images/default.jpg" },
  { userName: "听话的可乐16", gameLevel: 2, gameLevelDesc: "史诗", gameName: "阿西, 美女室友竟然...", avatar: "./images/default.jpg" },
  { userName: "漂亮的西牛11", gameLevel: 2, gameLevelDesc: "史诗", gameName: "重装前哨", avatar: "./images/default.jpg" },
  { userName: "杏仁饼饼", gameLevel: 2, gameLevelDesc: "史诗", gameName: "我不背锅", avatar: "./images/1728208697_495172_s1.png" },
  { userName: "丰富的白羊8", gameLevel: 2, gameLevelDesc: "史诗", gameName: "我的幻想乡", avatar: "./images/default.jpg" },
  { userName: "丰富的白羊8", gameLevel: 2, gameLevelDesc: "史诗", gameName: "山门与幻境", avatar: "./images/default.jpg" }
];

// 简单 Toast
let toastTimer = null;
function showToast(message) {
  if (!message) return;
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  } else {
    container.innerHTML = "";
  }

  const el = document.createElement("div");
  el.className = "toast-message";
  el.textContent = String(message);
  container.appendChild(el);

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    if (el.parentNode === container) {
      container.removeChild(el);
    }
    if (!container.childNodes.length && container.parentNode) {
      container.parentNode.removeChild(container);
    }
    toastTimer = null;
  }, 2000);
}

// 创建元素
function createEl(tag, className, innerHTML) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (innerHTML != null) el.innerHTML = innerHTML;
  return el;
}

// 获取等级样式类
function getLevelClass(level) {
  return `item-${level}`;
}

// 渲染中奖滚动
function renderWinners() {
  const container = document.getElementById("winner-scroll");
  if (!container) return;

  container.innerHTML = "";
  // 复制数据3次实现无缝滚动
  const repeatedData = [...WINNERS_DATA, ...WINNERS_DATA, ...WINNERS_DATA];

  repeatedData.forEach((item) => {
    const itemEl = createEl("div", "item");
    itemEl.innerHTML = `
      <img src="${item.avatar}" alt="">
      <div class="item-name">${item.userName}</div>
      <div class="item-get">获得</div>
      <div class="item-game ${getLevelClass(item.gameLevel)}">
        <span style="color: #fff;margin-right:6px;">${item.gameLevelDesc}</span>
        <span class="item-b-${item.gameLevel}">${item.gameName}</span>
      </div>
    `;
    container.appendChild(itemEl);
  });
}

// 中奖滚动动画
let winnerTimer = null;
function startWinnerScroll() {
  const content = document.querySelector(".scroll-content");
  const container = document.querySelector(".scroll-container");
  if (!content || !container) return;

  clearInterval(winnerTimer);

  const items = content.querySelectorAll(".item");
  if (items.length === 0) return;

  const computedStyle = window.getComputedStyle(items[0]);
  const heightNumber = parseFloat(computedStyle.getPropertyValue("height"));

  let currentIndex = 0;
  const totalItems = items.length / 3; // 实际数据条数

  content.style.top = "0px";

  winnerTimer = setInterval(() => {
    currentIndex++;
    if (currentIndex >= totalItems) {
      currentIndex = 0;
      content.style.transition = "none";
      content.style.top = "0px";
      setTimeout(() => {
        content.style.transition = "top 0.5s ease";
      }, 50);
    } else {
      content.style.top = `-${currentIndex * heightNumber}px`;
    }
  }, 3000);
}

// 渲染游戏列表
function renderGames() {
  const container = document.getElementById("prize-offset");
  if (!container) return;

  container.innerHTML = "";

  GAMES_DATA.forEach((game) => {
    const blockEl = createEl("div", "offset-block");
    blockEl.innerHTML = `
      <div class="all-img all-img${game.level}"></div>
      <img src="${game.verticalFaceUrl}" alt="${game.name}"/>
      <div class="all-content">
        <p class="all-name">${game.name}</p>
        <p class="all-price"><span>¥</span>${game.price}</p>
      </div>
    `;
    container.appendChild(blockEl);
  });

  // 更新总数
  const countEl = document.getElementById("games-count");
  if (countEl) {
    countEl.textContent = `共${GAMES_DATA.length}款商品`;
  }
}

// 渲染规则
function renderRules() {
  const container = document.getElementById("rule-content");
  if (!container) return;

  // 将换行符转换为<br>
  const html = PAGE_CONFIG.description.replace(/\n/g, "<br>").replace(/。<br>【/g, "。<br><br>【");
  container.innerHTML = html;
}

// 渲染弹窗规则
function renderDialogRules() {
  const container = document.getElementById("rule-dialog-content");
  if (!container) return;

  const html = PAGE_CONFIG.description.replace(/\n/g, "<br>").replace(/。<br>【/g, "。<br><br>【");
  container.innerHTML = html;
}

// 渲染概率
function renderRates() {
  document.getElementById("legendary-rate").textContent = PAGE_CONFIG.prizeChance.legendary;
  document.getElementById("epic-rate").textContent = PAGE_CONFIG.prizeChance.epic;
  document.getElementById("rare-rate").textContent = PAGE_CONFIG.prizeChance.rare;
  document.getElementById("normal-rate").textContent = PAGE_CONFIG.prizeChance.normal;
}

// 初始化背景和样式
function initStyles() {
  // 设置背景色
  const activity = document.getElementById("activity");
  if (activity) {
    activity.style.backgroundColor = PAGE_CONFIG.color;
  }

  // 设置 banner 背景图
  const banner = document.getElementById("banner-top");
  if (banner) {
    banner.style.backgroundImage = `url("${PAGE_CONFIG.headImgUrl}")`;
  }

  // 设置底部购买区背景色
  const prizeBuy = document.getElementById("prize-buy");
  if (prizeBuy) {
    prizeBuy.style.backgroundColor = PAGE_CONFIG.color;
  }

  // 更新价格文本
  const spec1 = PAGE_CONFIG.purchaseSpecs[0];
  const spec5 = PAGE_CONFIG.purchaseSpecs[1];

  document.getElementById("lottery-text-1").textContent = `¥${spec1.payPrice}`;
  document.getElementById("lottery-text-5").textContent = `¥${spec5.payPrice}`;
  document.getElementById("buy-text-1").textContent = `¥${spec1.payPrice}`;
  document.getElementById("buy-text-5").textContent = `¥${spec5.payPrice}`;

  // 隐藏/显示折扣标签
  if (!spec5.discount) {
    document.querySelector(".lottery-badge2").style.display = "none";
    document.querySelector(".buy-badge2").style.display = "none";
  }
}

// 抽奖逻辑
let currentLotteryCount = 1;
let animation = null;

function lottery(count) {
  currentLotteryCount = count;
  // 显示确认订单弹窗
  showOrderPopup(count);
}

function openDownloadDialog(message) {
  const overlay = document.getElementById('downloadOverlay');
  const msgElement = document.getElementById('downloadMessage');
  if (overlay) {
    overlay.classList.add('show');
    if (msgElement && message) {
      msgElement.textContent = message;
    }
  }
}

function closeDownloadDialog() {
  const overlay = document.getElementById('downloadOverlay');
  if (overlay) {
    overlay.classList.remove('show');
  }
}

function showLoadingDialog() {
  const overlay = document.getElementById('loading-dialog');
  if (overlay) {
    overlay.classList.add('show');
  }
}

function hideLoadingDialog() {
  const overlay = document.getElementById('loading-dialog');
  if (overlay) {
    overlay.classList.remove('show');
  }
}

function simulateLotteryResult(count) {
  // 随机选择游戏
  const results = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * GAMES_DATA.length);
    results.push(GAMES_DATA[randomIndex]);
  }

  // 确保5连有传说或史诗
  if (count === 5) {
    const hasHighLevel = results.some(g => g.level <= 2);
    if (!hasHighLevel) {
      const randomIndex = Math.floor(Math.random() * 10);
      results[0] = GAMES_DATA[randomIndex];
    }
  }

  showLotteryResult(results);
}

function showLotteryResult(results) {
  // 尝试播放动画
  initAnimation();
  const overlay = document.getElementById("animation-overlay");

  if (animation && overlay) {
    overlay.classList.add('show');
    animation.goToAndPlay(0, true);

    setTimeout(() => {
      animation.stop();
      overlay.classList.remove('show');
      if (results.length === 1) {
        showWinner1Dialog(results[0]);
      } else {
        showWinner5Dialog(results);
      }
    }, 3300);
  } else {
    if (results.length === 1) {
      showWinner1Dialog(results[0]);
    } else {
      showWinner5Dialog(results);
    }
  }
}

function showWinner1Dialog(game) {
  const container = document.getElementById("winner1-prize");
  if (!container) return;

  container.innerHTML = `
    <div class="offset-block">
      <div class="all-img all-img${game.level}"></div>
      <img src="${game.verticalFaceUrl}" alt="${game.name}"/>
      <div class="all-content">
        <p class="all-name">${game.name}</p>
        <p class="all-price"><span>¥</span>${game.price}</p>
      </div>
    </div>
  `;

  // 设置标题图片 - 根据等级设置不同标题
  const titleImg = document.getElementById("winner1-title");
  if (titleImg) {
    if (game.level === 1) {
      titleImg.src = "./images/luck2.png";
    } else if (game.level === 2 || game.level === 3) {
      titleImg.src = "./images/luck3.png";
    } else {
      titleImg.src = "./images/luck1.png";
    }
  }

  openDialog("winner1-dialog");
}

function showWinner5Dialog(games) {
  const container = document.getElementById("winner5-prize");
  if (!container) return;

  let html = '<div class="prize-offset">';
  games.forEach((game) => {
    html += `
      <div class="offset-block">
        <div class="all-img all-img${game.level}"></div>
        <img src="${game.verticalFaceUrl}" alt="${game.name}"/>
        <div class="all-content">
          <p class="all-name">${game.name}</p>
          <p class="all-price"><span>¥</span>${game.price}</p>
        </div>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;

  // 设置标题图片（参考 blindCfg.vue）
  // level 1 (传说) -> luck2.png
  // level 2-3 (史诗/稀有) -> luck3.png
  // level 4 (普通) -> luck1.png
  const minLevel = Math.min(...games.map(g => g.level));
  let titleImgSrc = "./images/luck1.png"; // 默认普通
  if (minLevel === 1) {
    titleImgSrc = "./images/luck2.png";
  } else if (minLevel === 2 || minLevel === 3) {
    titleImgSrc = "./images/luck3.png";
  }
  const titleImg = document.getElementById("winner5-title");
  if (titleImg) {
    titleImg.src = titleImgSrc;
  }

  openDialog("winner5-dialog");
}

// 动画初始化
function initAnimation() {
  if (animation) return;
  const container = document.getElementById("animation-container");
  const lottie = window.lottie;
  if (!container || !lottie) return;

  // 与 blindCfg.vue 一致：开奖 Lottie 为 public/cfg1（静态页为 ./animation/cfg1），非 animation/main（首页动效）
  const animationPath = "./animation/myst/data.json";

  try {
    animation = lottie.loadAnimation({
      container: container,
      renderer: "svg",
      loop: true,
      autoplay: false,
      path: animationPath,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    });
  } catch (e) {
    console.error("Animation load failed", e);
  }
}

// 弹窗控制
function openDialog(dialogId) {
  const el = document.getElementById(dialogId);
  if (el) el.classList.add("show");
}

function closeDialog(dialogId) {
  const el = document.getElementById(dialogId);
  if (el) el.classList.remove("show");
}

// 订单弹窗
function showOrderPopup(count) {
  const overlay = document.getElementById("order-popup-overlay");
  const popup = document.getElementById("order-popup");

  if (!overlay || !popup) return;

  const spec = count === 1 ? PAGE_CONFIG.purchaseSpecs[0] : PAGE_CONFIG.purchaseSpecs[1];

  document.getElementById("order-img").src = PAGE_CONFIG.coverUrl;
  document.getElementById("order-name").textContent = `${PAGE_CONFIG.activityName}开${count}次`;
  document.getElementById("order-desc").textContent = `奖品数量 x${count}`;
  document.getElementById("order-price").textContent = spec.payPrice;

  const badge = document.getElementById("order-badge");
  if (badge) {
    badge.style.display = count === 1 ? "none" : "inline-block";
  }

  overlay.classList.add("show");
  setTimeout(() => {
    popup.classList.add("show");
  }, 10);
}

function hideOrderPopup() {
  const overlay = document.getElementById("order-popup-overlay");
  const popup = document.getElementById("order-popup");

  if (popup) popup.classList.remove("show");
  if (overlay) {
    setTimeout(() => {
      overlay.classList.remove("show");
    }, 300);
  }
}

// 绑定事件
function bindEvents() {
  // 抽奖按钮
  const lottery1 = document.getElementById("lottery-1");
  const lottery5 = document.getElementById("lottery-5");
  const buy1 = document.getElementById("buy-1");
  const buy5 = document.getElementById("buy-5");

  if (lottery1) lottery1.addEventListener("click", () => lottery(1));
  if (lottery5) lottery5.addEventListener("click", () => lottery(5));
  if (buy1) buy1.addEventListener("click", () => lottery(1));
  if (buy5) buy5.addEventListener("click", () => lottery(5));

  // 购买文本点击
  const lotteryText1 = document.getElementById("lottery-text-1");
  const lotteryText5 = document.getElementById("lottery-text-5");
  if (lotteryText1) lotteryText1.addEventListener("click", () => lottery(1));
  if (lotteryText5) lotteryText5.addEventListener("click", () => lottery(5));

  const buyText1 = document.getElementById("buy-text-1");
  const buyText5 = document.getElementById("buy-text-5");
  if (buyText1) buyText1.addEventListener("click", () => lottery(1));
  if (buyText5) buyText5.addEventListener("click", () => lottery(5));

  // 订单按钮
  const buyOrder = document.getElementById("buy-order");
  if (buyOrder) {
    buyOrder.addEventListener("click", () => {
      openDownloadDialog("本活动需要在3DM游戏APP内参与哦~打开最新版3DM游戏APP，点击【社区-活动福袋】即可参与！");
    });
  }

  const gotoOrder = document.getElementById("goto-order");
  if (gotoOrder) {
    gotoOrder.addEventListener("click", () => {
      openDownloadDialog("本活动需要在3DM游戏APP内参与哦~打开最新版3DM游戏APP，点击【社区-活动福袋】即可参与！");
    });
  }

  // 兑换区域按钮
  const gotoExchange = document.getElementById("goto-exchange");
  if (gotoExchange) {
    gotoExchange.addEventListener("click", () => {
      openDownloadDialog("本活动需要在3DM游戏APP内参与哦~打开最新版3DM游戏APP，点击【社区-兑换中心】即可参与！");
    });
  }

  // 规则按钮
  const ruleLink = document.getElementById("rule-link");
  if (ruleLink) {
    ruleLink.addEventListener("click", () => {
      openDialog("rule-dialog");
    });
  }

  const closeRule = document.getElementById("close-rule");
  if (closeRule) {
    closeRule.addEventListener("click", () => {
      closeDialog("rule-dialog");
    });
  }

  // 弹窗关闭按钮
  const closeWinner1 = document.getElementById("close-winner1");
  if (closeWinner1) {
    closeWinner1.addEventListener("click", () => {
      closeDialog("winner1-dialog");
    });
  }

  const closeWinner5 = document.getElementById("close-winner5");
  if (closeWinner5) {
    closeWinner5.addEventListener("click", () => {
      closeDialog("winner5-dialog");
    });
  }

  // 再来一次按钮
  const winner1Again = document.getElementById("winner1-again");
  if (winner1Again) {
    winner1Again.addEventListener("click", () => {
      closeDialog("winner1-dialog");
      lottery(1);
    });
  }

  const winner5Again = document.getElementById("winner5-again");
  if (winner5Again) {
    winner5Again.addEventListener("click", () => {
      closeDialog("winner5-dialog");
      lottery(5);
    });
  }

  // 我的福袋按钮
  const winner1Order = document.getElementById("winner1-order");
  if (winner1Order) {
    winner1Order.addEventListener("click", () => {
      closeDialog("winner1-dialog");
      openDownloadDialog("本活动需要在3DM游戏APP内参与哦~打开最新版3DM游戏APP，点击【社区-活动福袋】即可参与！");
    });
  }

  const winner5Order = document.getElementById("winner5-order");
  if (winner5Order) {
    winner5Order.addEventListener("click", () => {
      closeDialog("winner5-dialog");
      openDownloadDialog("本活动需要在3DM游戏APP内参与哦~打开最新版3DM游戏APP，点击【社区-活动福袋】即可参与！");
    });
  }

  // 订单弹窗
  const orderPopupClose = document.getElementById("order-popup-close");
  if (orderPopupClose) {
    orderPopupClose.addEventListener("click", hideOrderPopup);
  }

  const orderPopupOverlay = document.getElementById("order-popup-overlay");
  if (orderPopupOverlay) {
    orderPopupOverlay.addEventListener("click", hideOrderPopup);
  }

  // 支付方式切换
  const cbWx = document.getElementById("cb-wx");
  const cbZfb = document.getElementById("cb-zfb");
  const payWxRow = document.getElementById("pay-wx-row");
  const payZfbRow = document.getElementById("pay-zfb-row");

  if (payWxRow) {
    payWxRow.addEventListener("click", () => {
      if (cbWx) cbWx.classList.add("checked");
      if (cbZfb) cbZfb.classList.remove("checked");
    });
  }

  if (payZfbRow) {
    payZfbRow.addEventListener("click", () => {
      if (cbZfb) cbZfb.classList.add("checked");
      if (cbWx) cbWx.classList.remove("checked");
    });
  }

  // 支付按钮
  const btnPayNow = document.getElementById("btn-pay-now");
  if (btnPayNow) {
    btnPayNow.addEventListener("click", () => {
      // 1. 隐藏订单弹窗
      hideOrderPopup();
      
      // 2. 显示 loading 动画
      setTimeout(() => {
        showLoadingDialog();
        
        // 3. 模拟支付请求
        setTimeout(() => {
          hideLoadingDialog();
          
          // 4. 显示支付成功 toast
          showToast("支付成功，准备开奖...");
          
          // 5. 执行开奖流程
          setTimeout(() => {
            simulateLotteryResult(currentLotteryCount);
          }, 800);
        }, 1500);
      }, 300);
    });
  }

  // 规则弹窗点击关闭
  const ruleDialog = document.getElementById("rule-dialog");
  if (ruleDialog) {
    ruleDialog.addEventListener("click", (e) => {
      if (e.target === ruleDialog) {
        closeDialog("rule-dialog");
      }
    });
  }

  // 中奖弹窗点击关闭
  const winner1Dialog = document.getElementById("winner1-dialog");
  if (winner1Dialog) {
    winner1Dialog.addEventListener("click", (e) => {
      if (e.target === winner1Dialog) {
        closeDialog("winner1-dialog");
      }
    });
  }

  const winner5Dialog = document.getElementById("winner5-dialog");
  if (winner5Dialog) {
    winner5Dialog.addEventListener("click", (e) => {
      if (e.target === winner5Dialog) {
        closeDialog("winner5-dialog");
      }
    });
  }

  // 底部购买区滚动显示
  const fixedElement = document.getElementById("prize-buy");
  if (fixedElement) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        fixedElement.style.opacity = "1";
      } else {
        fixedElement.style.opacity = "0";
      }
    });
  }
}

// 初始化
window.addEventListener("DOMContentLoaded", () => {
  // 初始化样式
  initStyles();

  // 渲染内容
  renderWinners();
  renderGames();
  renderRules();
  renderDialogRules();
  renderRates();

  // 绑定事件
  bindEvents();

  // 预初始化开奖 Lottie（与 blindCfg.vue 一致，页面加载后尽早加载资源）
  setTimeout(() => {
    initAnimation();
  }, 100);

  // 启动中奖滚动
  setTimeout(() => {
    startWinnerScroll();
  }, 1000);

  // 预加载图片
  const gameImages = GAMES_DATA.map(g => g.verticalFaceUrl);
  const winnerAvatars = WINNERS_DATA.map(w => w.avatar);
  [...gameImages, ...winnerAvatars, PAGE_CONFIG.headImgUrl, PAGE_CONFIG.coverUrl].forEach(src => {
    const img = new Image();
    img.src = src;
  });

  // 页面可见性变化时重启滚动
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      startWinnerScroll();
    }
  });

  // 下载弹窗事件绑定
  const downloadCloseBtn = document.getElementById('downloadCloseBtn');
  if (downloadCloseBtn) {
    downloadCloseBtn.addEventListener('click', closeDownloadDialog);
  }

  const handleDownloadBtn = document.getElementById('handle-download-btn');
  if (handleDownloadBtn) {
    handleDownloadBtn.addEventListener('click', () => {
      // 跳转下载页
      window.location.href = 'https://www.3dmgame.com/down/';
    });
  }

  const downloadOverlay = document.getElementById('downloadOverlay');
  if (downloadOverlay) {
    downloadOverlay.addEventListener('click', (e) => {
      if (e.target === downloadOverlay) {
        closeDownloadDialog();
      }
    });
  }
});
