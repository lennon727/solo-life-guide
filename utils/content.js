const TYPE_META = {
  food: {
    name: '一人食',
    shortName: '吃什么',
    color: '#E36F45',
    softColor: '#FFF0E8'
  },
  goods: {
    name: '一人用',
    shortName: '买什么',
    color: '#2E6A83',
    softColor: '#EAF4F7'
  },
  guide: {
    name: '一人办事',
    shortName: '怎么办',
    color: '#1F5D50',
    softColor: '#E8F2EE'
  }
}

const CONTENT = [
  {
    id: 'food-weeknight-10min',
    type: 'food',
    title: '下班后10分钟，一人晚餐怎么搭',
    summary: '不用复杂菜谱，用“主食＋蛋白质＋蔬菜”的固定公式减少选择和剩菜。',
    tags: ['10分钟', '工作日', '少洗锅'],
    readMinutes: 3,
    updatedAt: '2026-08-01',
    fitScore: 92,
    verdict: '推荐把常备食材固定下来，每晚只替换一种口味，不建议每天临时买齐一套新食材。',
    bestFor: ['晚上不想点外卖', '只有一个锅或微波炉', '希望控制剩菜'],
    notFor: ['需要严格医学饮食管理的人', '对常用食材有明确过敏史的人'],
    sections: [
      {
        title: '一人份组合公式',
        kind: 'bullets',
        items: ['主食选一种：米饭、面、玉米或全麦面包', '蛋白质选一种：鸡蛋、豆腐、鱼虾或熟制肉类', '蔬菜选一至两种：优先耐储存、可分次取用的品类']
      },
      {
        title: '今晚照着做',
        kind: 'checklist',
        items: ['先处理最容易坏的食材', '只取一餐分量，其余立即冷藏或冷冻', '把明天能复用的食材单独留出', '吃完记录哪种组合最省时间']
      },
      {
        title: '判断是否真的省事',
        kind: 'text',
        body: '不要只看烹饪时间，还要计算取放、清洗和剩余食材处理。总耗时能稳定控制在20分钟内，才算适合工作日晚餐。'
      }
    ],
    sources: ['内容方法：一人生活手册编辑规则', '营养需求存在个体差异，本卡不替代专业营养或医疗建议']
  },
  {
    id: 'food-rice-cooker-onepot',
    type: 'food',
    title: '一人份电饭煲焖饭基础公式',
    summary: '用一只锅完成主食和配菜，重点不是菜谱数量，而是控制水分和食材切块。',
    tags: ['电饭煲', '一锅出', '新手'],
    readMinutes: 4,
    updatedAt: '2026-08-01',
    fitScore: 89,
    verdict: '适合不擅长同时操作多个锅具的人；第一次先用半杯至一杯米的小分量测试自家电饭煲。',
    bestFor: ['厨房空间小', '不想看火', '希望同时准备第二天便当'],
    notFor: ['需要追求锅气口感', '电饭煲没有基础煮饭功能或内胆损坏'],
    sections: [
      {
        title: '搭配原则',
        kind: 'bullets',
        items: ['耐煮食材放下层，易熟蔬菜后放或出锅再拌', '高含水食材要相应减少煮饭用水', '酱汁先少量加入，出锅后再补味']
      },
      {
        title: '开煮前检查',
        kind: 'checklist',
        items: ['确认总量没有超过内胆标线', '生熟食材使用不同案板或完成清洁', '肉类已彻底解冻并切成易熟小块', '为剩余成品准备干净密封盒']
      },
      {
        title: '减少浪费',
        kind: 'text',
        body: '同一批基础食材可以分成焖饭、汤面和炒饭三种吃法。先规划复用关系，再决定采购量。'
      }
    ],
    sources: ['以具体电饭煲说明书的容量和安全要求为准']
  },
  {
    id: 'food-no-fire',
    type: 'food',
    title: '不开火的一人食，怎样吃得像一顿饭',
    summary: '把即食食品重新组合，而不是只靠零食或单一主食解决一餐。',
    tags: ['不开火', '夏天', '宿舍'],
    readMinutes: 3,
    updatedAt: '2026-08-01',
    fitScore: 86,
    verdict: '适合作为偶尔的低负担方案；长期依赖时应关注食品标签、保存条件和整体搭配。',
    bestFor: ['暂时没有厨房', '天气炎热不想开火', '偶尔需要快速解决一餐'],
    notFor: ['需要严格控制钠、糖或其他营养指标的人'],
    sections: [
      {
        title: '三件套思路',
        kind: 'bullets',
        items: ['基础：即食谷物、全麦面包或饭团', '补充：牛奶、无糖酸奶、豆制品或合规熟食', '蔬果：可直接食用且便于小份保存的品类']
      },
      {
        title: '购买时检查',
        kind: 'checklist',
        items: ['查看生产日期和保存条件', '确认冷链食品没有长时间离开冷藏环境', '避免一次买入过多开封后难保存的产品', '按标签要求在开封后及时食用']
      }
    ],
    sources: ['食品保存与食用方式以包装标签为准']
  },
  {
    id: 'food-weekly-grocery',
    type: 'food',
    title: '一人一周采购，先列“可复用食材”',
    summary: '采购清单不按菜名写，改按能组合几顿、能保存多久来写。',
    tags: ['采购清单', '少浪费', '周末'],
    readMinutes: 4,
    updatedAt: '2026-08-01',
    fitScore: 94,
    verdict: '先规划3天而不是7天，更容易坚持，也能为临时外食留出空间。',
    bestFor: ['经常买多', '冰箱空间有限', '一周会有临时安排'],
    notFor: ['每日都有稳定供餐', '无法安全储存生鲜食品'],
    sections: [
      {
        title: '采购顺序',
        kind: 'checklist',
        items: ['检查冰箱和保质期', '确定未来3天有几顿在家吃', '选择2种可复用蛋白质和3种蔬菜', '补充一份冷冻或常温备用餐', '回家后立即分装并标记日期']
      },
      {
        title: '清单判断题',
        kind: 'bullets',
        items: ['这个食材能否用于至少两种吃法', '开封后能否在计划时间内吃完', '是否已有功能相近的替代品', '临时外食后是否仍能安全保存']
      }
    ],
    sources: ['一人生活手册内容实验：以3天滚动计划替代一次性7天计划']
  },
  {
    id: 'food-freezer-portions',
    type: 'food',
    title: '冷冻小份食材怎么选，才不是囤积',
    summary: '重点看能否单次取用、包装是否可重新密封，以及真实食用频率。',
    tags: ['冷冻', '小份', '备餐'],
    readMinutes: 3,
    updatedAt: '2026-08-01',
    fitScore: 88,
    verdict: '优先选择天然分块或独立小包装，不因为促销购买无法分次取用的大包装。',
    bestFor: ['下班时间不固定', '需要备用餐', '附近生鲜购买不方便'],
    notFor: ['冷冻空间很小', '停电频繁或冷冻条件不稳定'],
    sections: [
      {
        title: '购买判断',
        kind: 'checklist',
        items: ['单次能否只取一份', '包装能否可靠密封', '是否有清楚的保存说明', '预计一个月内能否吃完', '冰箱是否有明确存放位置']
      },
      {
        title: '不推荐的情况',
        kind: 'text',
        body: '必须整包解冻、解冻后不能再次安全保存，而一顿又吃不完的产品，通常不适合一个人购买。'
      }
    ],
    sources: ['保存温度、解冻和复热要求以产品标签为准']
  },
  {
    id: 'food-solo-dining',
    type: 'food',
    title: '一个人去餐厅，先看菜单结构',
    summary: '比“是否贴着一人食标签”更重要的是单点分量、最低消费和座位效率。',
    tags: ['外食', '餐厅', '预算'],
    readMinutes: 3,
    updatedAt: '2026-08-01',
    fitScore: 90,
    verdict: '优先选择可以按件、按盘或按小份组合的菜单，而不是为了“一人食”概念支付额外溢价。',
    bestFor: ['经常一个人外食', '希望控制预算', '不想点多造成浪费'],
    notFor: ['需要多人共享才能体验完整菜单的聚餐场景'],
    sections: [
      {
        title: '进店前看四件事',
        kind: 'checklist',
        items: ['是否存在最低消费或强制套餐', '主食和配菜能否小份单点', '一个座位是否需要承担双人位成本', '剩余食物是否适合打包保存']
      },
      {
        title: '一人友好信号',
        kind: 'bullets',
        items: ['菜单明确标注分量或建议人数', '吧台位或单人位充足', '点单和结账流程简单', '不强迫通过凑单获得正常价格']
      }
    ],
    sources: ['《中华人民共和国反食品浪费法》鼓励提供小份餐和分量信息']
  },
  {
    id: 'goods-rice-cooker',
    type: 'goods',
    title: '一人电饭煲：1.2L左右是否够用',
    summary: '容量只是第一步，还要看最低煮饭量、内胆清洗和预约安全设计。',
    tags: ['电饭煲', '厨房', '选购'],
    readMinutes: 4,
    updatedAt: '2026-08-01',
    fitScore: 91,
    verdict: '经常只做一至两餐时，小容量更合适；偶尔需要备两顿饭，则不要买得过小。',
    bestFor: ['每次煮半杯至一杯米', '台面空间有限', '不需要复杂烹饪程序'],
    notFor: ['经常招待朋友', '习惯一次准备三天以上主食'],
    sections: [
      {
        title: '一人适用指数',
        kind: 'bullets',
        items: ['容量：能稳定完成最低煮饭量', '占地：盖子打开后不碰吊柜', '清洗：上盖和蒸汽阀容易拆洗', '频率：每周至少使用两至三次', '安全：具备合规标识和清晰说明书']
      },
      {
        title: '购买前量一下',
        kind: 'checklist',
        items: ['测量台面宽度和上方空间', '确认插座位置与功率承载', '查看最低和最高煮饭量', '确认替换内胆和售后渠道']
      }
    ],
    sources: ['具体容量、功率和安全要求以产品说明书及能效标识为准']
  },
  {
    id: 'goods-air-fryer',
    type: 'goods',
    title: '2—3L空气炸锅，适不适合一个人',
    summary: '适合高频复热和简单烤制；如果主要需求只是加热剩菜，微波炉可能更直接。',
    tags: ['空气炸锅', '厨房', '避坑'],
    readMinutes: 4,
    updatedAt: '2026-08-01',
    fitScore: 78,
    verdict: '先看每周使用频率和清洗意愿，不要只因为“小容量”和低价格购买。',
    bestFor: ['喜欢烤制口感', '每周预计使用三次以上', '有固定台面位置'],
    notFor: ['主要需求是加热汤饭', '讨厌清洗油污', '厨房没有长期摆放空间'],
    sections: [
      {
        title: '替代方案比较',
        kind: 'bullets',
        items: ['只复热：优先比较微波炉', '要烘焙：比较小烤箱的温控和空间', '要少油烤制：空气炸锅更匹配', '一年只用几次：考虑不购买']
      },
      {
        title: '购买前检查',
        kind: 'checklist',
        items: ['炸篮能否完整取出清洗', '实际内腔能否放下常吃食材', '机器四周是否需要较大散热空间', '售后和配件是否可获得']
      }
    ],
    sources: ['不以“迷你”标签作为推荐依据；需核对产品说明书']
  },
  {
    id: 'goods-fridge',
    type: 'goods',
    title: '一个人住，冰箱不是越小越好',
    summary: '120—180L只是常见比较区间，真正要看冷冻需求、采购频率和摆放条件。',
    tags: ['冰箱', '大件', '租房'],
    readMinutes: 4,
    updatedAt: '2026-08-01',
    fitScore: 87,
    verdict: '经常做饭或一次采购三天以上时，过小冰箱反而会增加浪费和外食成本。',
    bestFor: ['准备长期独居', '每周做饭三次以上', '需要储存冷冻食材'],
    notFor: ['短租且搬家频繁', '房东已经提供可用冰箱'],
    sections: [
      {
        title: '选择顺序',
        kind: 'checklist',
        items: ['测量门、电梯和摆放位置', '确认冷冻与冷藏的真实比例', '查看能效标识和日耗电量', '确认噪声与卧室距离', '考虑下一次搬家成本']
      },
      {
        title: '常见误区',
        kind: 'text',
        body: '几十升的小冰箱看起来省空间，但冷冻能力、温度稳定性和储存结构可能不适合持续做饭。先从生活方式推导容量，而不是从“一人用”标签推导。'
      }
    ],
    sources: ['参数以中国能效标识及厂商说明书为准']
  },
  {
    id: 'goods-vacuum',
    type: 'goods',
    title: '小户型清洁：吸尘器还是扫地机器人',
    summary: '地面面积不是唯一标准，家具高度、杂物数量和是否愿意提前整理更关键。',
    tags: ['清洁', '小户型', '比较'],
    readMinutes: 4,
    updatedAt: '2026-08-01',
    fitScore: 84,
    verdict: '杂物多、边角多的小户型通常更适合轻量手持吸尘器；地面连续、能保持整洁时再考虑机器人。',
    bestFor: ['想降低日常清洁负担', '需要处理床铺和缝隙', '愿意每周固定清洁'],
    notFor: ['没有充电或收纳位置', '无法接受耗材和维护成本'],
    sections: [
      {
        title: '比较维度',
        kind: 'bullets',
        items: ['手持：机动性强，但需要本人操作', '机器人：自动化高，但要求地面环境友好', '两者都要考虑噪声、耗材、清理尘盒和售后']
      },
      {
        title: '购买前实验',
        kind: 'checklist',
        items: ['记录一周实际清洁次数', '检查床底和家具高度', '确定机器与配件收纳位置', '估算一年耗材费用']
      }
    ],
    sources: ['不按品牌排序；实际参数以产品说明书为准']
  },
  {
    id: 'goods-dishwasher',
    type: 'goods',
    title: '一个人需要洗碗机吗',
    summary: '关键不是每天几只碗，而是做饭频率、锅具兼容和上下水条件。',
    tags: ['洗碗机', '厨房', '决策'],
    readMinutes: 4,
    updatedAt: '2026-08-01',
    fitScore: 73,
    verdict: '每周做饭五次以上且讨厌清洗，才更可能形成稳定价值；租房改造成本要单独计算。',
    bestFor: ['高频做饭', '厨房有稳定上下水', '能积累到合理装载量'],
    notFor: ['几乎不做饭', '主要使用不兼容机洗的锅具', '短租且不允许改造'],
    sections: [
      {
        title: '先回答四个问题',
        kind: 'checklist',
        items: ['一周实际做饭多少次', '常用锅具能否放入', '台面或橱柜空间是否足够', '安装和搬家成本是否可接受']
      },
      {
        title: '不要只看“几套”',
        kind: 'text',
        body: '标称套数不能完全代表能否容纳你的锅具。带着常用锅和盘子的尺寸核对内腔结构，比容量标签更有用。'
      }
    ],
    sources: ['安装条件、适用餐具和洗涤程序以产品说明书为准']
  },
  {
    id: 'goods-mini-washer',
    type: 'goods',
    title: '迷你洗衣机：默认不推荐购买',
    summary: '除非有明确的分洗需求和固定安装条件，否则容易变成占地设备。',
    tags: ['洗衣机', '迷你家电', '不推荐'],
    readMinutes: 3,
    updatedAt: '2026-08-01',
    fitScore: 48,
    verdict: '“一个人住”不是购买理由；只有稳定、明确、每周发生的分洗需求才值得考虑。',
    bestFor: ['有明确的小件分洗需求', '已有可靠进排水位置', '使用频率能够达到每周多次'],
    notFor: ['只是被迷你外观吸引', '需要手动接排水且空间紧张', '主要衣物仍需另一台洗衣机'],
    sections: [
      {
        title: '购买前反问',
        kind: 'checklist',
        items: ['它解决的是哪个稳定问题', '现有洗衣机程序能否替代', '进排水是否长期可靠', '清洁机器本身是否更麻烦', '半年后搬家是否方便处理']
      },
      {
        title: '推荐原则',
        kind: 'text',
        body: '一人用推荐不鼓励为“专属感”增加设备。能复用现有家电、洗衣袋或公共服务解决的问题，优先不新增硬件。'
      }
    ],
    sources: ['依据一人经济研究报告“供应链复用者赢、概念原生者亏”的判断原则']
  },
  {
    id: 'guide-rental-checkin',
    type: 'guide',
    title: '一个人租房入住，当天检查什么',
    summary: '用照片、读数和书面记录建立交接证据，避免退租时说不清。',
    tags: ['租房', '入住', '清单'],
    readMinutes: 5,
    updatedAt: '2026-08-01',
    fitScore: 96,
    verdict: '先完成房屋状态记录，再开始大规模清洁和搬入物品。',
    bestFor: ['第一次独立租房', '通过中介或平台签约', '需要独自完成交接'],
    notFor: ['本卡不替代合同审查或专业法律意见'],
    sections: [
      {
        title: '入住当天',
        kind: 'checklist',
        items: ['拍摄全屋连续视频和已有损伤', '记录水、电、燃气表读数', '测试门锁、窗户、插座和照明', '测试热水、排水和主要家电', '核对钥匙、门禁卡和物品清单', '把问题通过可留痕方式发给出租方']
      },
      {
        title: '单独留存',
        kind: 'bullets',
        items: ['合同及补充约定', '付款记录和押金凭证', '出租方与维修联系人', '物业、停水停电和报修渠道']
      }
    ],
    sources: ['合同和当地租赁规则存在差异，涉及争议时咨询专业人士']
  },
  {
    id: 'guide-home-repair',
    type: 'guide',
    title: '维修人员上门，一个人怎么准备',
    summary: '提前确认身份、服务范围和报价，并让服务过程保持可追溯。',
    tags: ['维修', '上门服务', '安全'],
    readMinutes: 4,
    updatedAt: '2026-08-01',
    fitScore: 95,
    verdict: '优先通过物业、品牌售后或可查询订单的平台预约，不接受临时增加的大额项目。',
    bestFor: ['独自在家接待上门人员', '家电或水电维修', '租住房屋报修'],
    notFor: ['燃气泄漏、火灾等紧急情况应立即离开危险区域并联系专业应急渠道'],
    sections: [
      {
        title: '上门前',
        kind: 'checklist',
        items: ['确认订单、姓名和预计到达时间', '询问检测费、材料费和报价方式', '收起证件、现金和贵重物品', '把地址和服务时间告知可信联系人', '确保手机电量充足']
      },
      {
        title: '服务过程中',
        kind: 'checklist',
        items: ['先核对身份再开门', '要求新增费用先说明并留痕', '更换配件时保留型号和凭证', '完成后现场测试并索要服务记录']
      }
    ],
    sources: ['紧急危险以110、119、120及当地专业应急指引为准']
  },
  {
    id: 'guide-trip-shutdown',
    type: 'guide',
    title: '独自出差一周，离家前检查表',
    summary: '按水、电、燃气、门窗、食物和宠物六个区域完成，不靠临出门回忆。',
    tags: ['出差', '旅行', '检查表'],
    readMinutes: 3,
    updatedAt: '2026-08-01',
    fitScore: 97,
    verdict: '提前一晚完成大部分检查，出门前只保留必须使用的项目。',
    bestFor: ['离家三天以上', '家中无人代管', '容易在路上担心遗漏'],
    notFor: ['有特殊设备、宠物或医疗用品时需增加专门方案'],
    sections: [
      {
        title: '离家前',
        kind: 'checklist',
        items: ['处理易腐食物和垃圾', '关闭无需运行的电器并拔掉插头', '按设备要求处理水阀和燃气', '关好门窗并检查锁具', '暂停不需要的定期配送', '确认宠物、植物和快递安排', '把行程和紧急联系方式留给可信联系人']
      },
      {
        title: '最后一分钟',
        kind: 'checklist',
        items: ['证件、钥匙、手机和充电设备齐全', '门已反锁', '重要设备状态已经拍照']
      }
    ],
    sources: ['燃气、水电关闭方式应遵循物业和设备说明']
  },
  {
    id: 'guide-solo-moving',
    type: 'guide',
    title: '一个人搬家，先把任务拆成四批',
    summary: '把决定、打包、运输和复位分开，避免搬家当天同时做所有事。',
    tags: ['搬家', '计划', '清单'],
    readMinutes: 5,
    updatedAt: '2026-08-01',
    fitScore: 93,
    verdict: '贵重物品和第一晚用品由自己携带，大件运输交给可追踪订单的正规服务。',
    bestFor: ['独自租房搬迁', '物品数量中等', '没有家人朋友长期帮忙'],
    notFor: ['大型钢琴、危险品等需要专项运输的物品'],
    sections: [
      {
        title: '提前七天',
        kind: 'checklist',
        items: ['确认新旧地址进出和停车规则', '完成丢弃、转赠和出售决策', '预约可留痕的搬运服务', '修改常用收货地址', '准备标签和第一晚用品箱']
      },
      {
        title: '搬家当天',
        kind: 'checklist',
        items: ['证件、电脑、药品和钥匙自己携带', '大件装车前后拍照', '核对件数再离开旧址', '完成水电读数和房屋状态记录']
      }
    ],
    sources: ['特殊物品运输需遵循承运方规则和当地规定']
  },
  {
    id: 'guide-emergency-card',
    type: 'guide',
    title: '给自己做一张紧急信息卡',
    summary: '只保留真正需要的信息，并同时准备纸质版和手机可访问版本。',
    tags: ['安全', '紧急联系人', '准备'],
    readMinutes: 4,
    updatedAt: '2026-08-01',
    fitScore: 94,
    verdict: '信息卡应让可信联系人知道放在哪里，但不要在公开位置暴露身份证号等敏感信息。',
    bestFor: ['长期独居', '经常出差旅行', '希望减少突发情况的信息断层'],
    notFor: ['不要把全部账户密码直接写入信息卡'],
    sections: [
      {
        title: '建议记录',
        kind: 'checklist',
        items: ['两位紧急联系人及关系', '需要特别说明的健康信息', '常用医院或就医资料位置', '宠物临时照看安排', '房屋物业和维修渠道', '重要文件存放位置']
      },
      {
        title: '隐私边界',
        kind: 'bullets',
        items: ['不记录完整支付密码和验证码', '敏感文件采用受控访问方式', '联系人发生变化后及时更新', '每三个月检查一次有效性']
      }
    ],
    sources: ['个人信息应遵循最少、必要和可控的保存原则']
  },
  {
    id: 'guide-medical-visit',
    type: 'guide',
    title: '一个人去医院，提前准备哪些信息',
    summary: '把证件、既往资料、用药信息和返程安排提前放在一起。',
    tags: ['就医', '准备', '清单'],
    readMinutes: 4,
    updatedAt: '2026-08-01',
    fitScore: 90,
    verdict: '本卡只帮助整理就医信息，不判断病情；出现紧急症状应立即联系120或当地急救服务。',
    bestFor: ['普通门诊或复诊准备', '需要独自完成挂号和检查', '容易遗漏既往资料'],
    notFor: ['急危重症', '需要麻醉、手术或院方明确要求陪同的项目'],
    sections: [
      {
        title: '出发前',
        kind: 'checklist',
        items: ['带好有效证件和就医凭证', '整理症状发生时间和变化', '列出现用药物及已知过敏信息', '带上相关检查和既往病历', '确认是否需要空腹或其他检查准备', '把行程告知可信联系人']
      },
      {
        title: '离院前',
        kind: 'checklist',
        items: ['确认药物使用说明', '确认检查结果获取方式', '记录复诊时间和注意事项', '身体状态不适合独自返程时及时求助']
      }
    ],
    sources: ['具体诊疗和检查要求以医疗机构与专业医务人员意见为准']
  }
]

function getAllContent() {
  return CONTENT.map(withMeta)
}

function getContentByType(type) {
  return CONTENT.filter((item) => item.type === type).map(withMeta)
}

function getContentById(id) {
  const item = CONTENT.find((contentItem) => contentItem.id === id)
  return item ? withMeta(item) : null
}

function searchContent(keyword) {
  const normalized = String(keyword || '').trim().toLowerCase()
  if (!normalized) return []

  return CONTENT.filter((item) => {
    const sectionText = item.sections
      .map((section) => [section.title, section.body || '', ...(section.items || [])].join(' '))
      .join(' ')
    const haystack = [item.title, item.summary, item.verdict, ...item.tags, sectionText]
      .join(' ')
      .toLowerCase()
    return haystack.includes(normalized)
  }).map(withMeta)
}

function getFeaturedContent(limit = 6) {
  return [...CONTENT]
    .sort((a, b) => b.fitScore - a.fitScore)
    .slice(0, limit)
    .map(withMeta)
}

function withMeta(item) {
  return {
    ...item,
    typeMeta: TYPE_META[item.type]
  }
}

module.exports = {
  TYPE_META,
  getAllContent,
  getContentByType,
  getContentById,
  searchContent,
  getFeaturedContent
}
