# TikTok Campaign Workbench Demo

公开验收地址：<https://fifiiiiili.github.io/afka-campaign-demo/>

这是 TikTok Campaign 工作台的静态验收版，覆盖 Campaign、Group、Ads、素材、新建 Campaign 和数据巡检等页面，并可切换 ROK、PTSLG、SAMO、W3、PGAME、AFK、IGAME、WGAME 八个游戏。

## 数据边界

- 页面顶部始终显示“验收演示 · 非实时数据”。
- AFK 的 Campaign / Ads 名称与区间指标参考项目中保存的 DAP 29681 快照；AFK Group 是用于验收层级交互的展示分组。
- 其他七个游戏的名称、ID 和指标均为交互验收样本，不代表线上投放数据。
- 该站点不会请求真实工作台接口，也不会修改广告账户。

后续合并工作台时，实体 ID 应由 TikTok Ads 提供，效果指标按相同产品、广告主、OS 和日期窗关联 DAP，iOS SKAN 单独按 Campaign 聚合。真实链路接通前必须逐游戏抽样核对 Campaign → Group → Ads → 素材的父子关系和数量。

