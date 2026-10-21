# Solo Life Guide · 一人生活手册

微信小程序 v0.1 — A practical guide to food, products, and everyday tasks for people living alone.

## English Introduction

Solo Life Guide is an open-source WeChat mini program for people living alone. It offers meal ideas for one, practical appliance buying guides, and everyday checklists for tasks such as moving, renting, and preparing for travel.

Its value to the ecosystem lies in turning scattered information into searchable, actionable guidance. Recommendations explain who they suit, their limitations, and available alternatives. Built with native WeChat technologies and no third-party dependencies, the project provides an accessible starting point for independent developers and community contributors building tools for solo living.

Repository: [Solo Life Guide](https://github.com/lennon727/solo-life-guide)

## 中文介绍

面向独居者的生活决策、消费推荐和办事指南。当前版本验证三个核心入口：

- 一人食：分量、时间、保存和少浪费；
- 一人用：从使用频率、占地、清洗和替代方案判断是否值得买；
- 一人办事：把租房、维修、搬家、出差等问题拆成可勾选清单。

## 已实现

- 首页跨分类搜索；
- 三类内容浏览与标签筛选；
- 18 张结构化种子内容卡；
- 内容详情、适合/不适合说明和来源边界；
- 本地收藏；
- 行动清单勾选状态本地保存；
- 微信分享入口。

## 本地运行

1. 安装并打开微信开发者工具。
2. 选择“导入项目”。
3. 项目目录选择仓库根目录（本地现有目录为 `miniapp`）。
4. 当前 `project.config.json` 使用测试 AppID `touristappid`，仅用于本地体验。
5. 准备发布时，替换为实际小程序 AppID，并按微信公众平台要求完成主体、类目、隐私和备案配置。

本项目是原生微信小程序，不需要安装 npm 依赖，也没有外部网络请求。

## 内容维护

种子内容位于 `utils/content.js`。每张内容卡必须包含：

- `type`：`food`、`goods` 或 `guide`；
- 标题、摘要、标签、更新时间；
- 一人适用度和明确结论；
- `bestFor` 与 `notFor`；
- 正文段落或可勾选清单；
- 信息来源与适用边界。

编辑内容时遵循 [内容与推荐规范](docs/CONTENT_POLICY.md)。

## 当前边界

- 无账号体系，收藏和清单只保存在当前设备；
- 无后台，内容随小程序版本更新；
- 无商品链接、广告、预约、交易和用户评论；
- 不提供医疗诊断、法律结论或紧急救援服务；
- 不收集手机号、位置、身份证件等个人信息。

## 下一阶段

1. 用 30—50 名真实独居用户测试搜索词和收藏行为；
2. 将高频但无结果的搜索词转为新内容；
3. 内容达到约 50 张后，再接入轻量内容后台；
4. 验证持续回访后再增加账号同步、订阅提醒和商业化能力；
5. App 立项应以留存和高频原生能力需求为前提，不按时间表自动启动。
