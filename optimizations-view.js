(function () {
  'use strict';

  const rangePresets = {
    '7d': { label: '近 7 天', start: '2026-10-15', end: '2026-10-21' },
    '14d': { label: '近 14 天', start: '2026-10-08', end: '2026-10-21' },
    '30d': { label: '近 30 天', start: '2026-09-22', end: '2026-10-21' },
    lastWeek: { label: '上周', start: '2026-10-12', end: '2026-10-18' },
    mtd: { label: '本月至今', start: '2026-10-01', end: '2026-10-21' }
  };

  const materialSurges = [
    { os: 'iOS', name: '怪兽8号联动素材2奇可露战斗展示', daily: 1374, change: 1.62, roi: .061, previousRoi: .102, cpi: 31.4, isNew: false },
    { os: 'iOS', name: 'lostpause怪8联动剪辑03', daily: 944, change: 2.08, roi: .048, previousRoi: .091, cpi: 38.6, isNew: false },
    { os: 'iOS', name: '怪兽8号联动微动0923释放', daily: 618, change: 0, roi: .073, previousRoi: null, cpi: 28.8, isNew: true },
    { os: 'Android', name: 'AFKA_V_EN_AI_狗血数字吞噬01_初版_方向测试', daily: 1158, change: .88, roi: .084, previousRoi: .096, cpi: 22.7, isNew: false },
    { os: 'Android', name: 'TikTok One_0027_AFK Arena x Solo Leveling', daily: 791, change: 1.31, roi: .079, previousRoi: .087, cpi: 25.9, isNew: false },
    { os: 'Android', name: 'AFKA_V_EN_剪辑2D_1227抽卡展示_一拳超人联动', daily: 462, change: 0, roi: .092, previousRoi: null, cpi: 21.6, isNew: true }
  ];

  const reports = {
    iOS: {
      rule: 'C',
      verdict: '严重稀释',
      verdictText: '花更多钱 · 回收明显下降',
      costChange: .31,
      roiChange: -.36,
      netChange: -.16,
      focusTier: 'T1',
      focusCountry: 'FR',
      k71: 6.85,
      benchmark: { roi1: .0154, spend: 6280, cpi: 20.1 },
      trend: [
        { date: '10-15', spend: 6550, installs: 319, roi1: .0149 },
        { date: '10-16', spend: 6920, installs: 332, roi1: .0144 },
        { date: '10-17', spend: 7310, installs: 345, roi1: .0138 },
        { date: '10-18', spend: 7770, installs: 355, roi1: .0127 },
        { date: '10-19', spend: 8130, installs: 361, roi1: .0117 },
        { date: '10-20', spend: 8490, installs: 369, roi1: .0105 },
        { date: '10-21', spend: 8360, installs: 351, roi1: .0097 }
      ],
      tiers: [
        { tier: 'T0', desc: 'US / CA / AU / NZ', share: .25, baseShare: .29, roi1: .0168, baseRoi1: .0161, cpi: 19.3, baseCpi: 20.1 },
        { tier: 'T1', desc: 'JP / KR / GB / DE / FR', share: .43, baseShare: .32, roi1: .0088, baseRoi1: .0151, cpi: 29.7, baseCpi: 21.9 },
        { tier: 'T2', desc: 'LATAM / IT / ES', share: .19, baseShare: .22, roi1: .0119, baseRoi1: .0134, cpi: 17.5, baseCpi: 17.9 },
        { tier: 'T3', desc: 'SEA / IN / BR', share: .13, baseShare: .17, roi1: .0137, baseRoi1: .0128, cpi: 12.8, baseCpi: 13.6 }
      ],
      countries: [
        { country: 'FR', tier: 'T1', cost: 12480, roi30: .104, roi7: .052 },
        { country: 'JP', tier: 'T1', cost: 11920, roi30: .098, roi7: .063 },
        { country: 'US', tier: 'T0', cost: 11360, roi30: .112, roi7: .106 },
        { country: 'DE', tier: 'T1', cost: 7840, roi30: .101, roi7: .074 },
        { country: 'GB', tier: 'T1', cost: 6520, roi30: .095, roi7: .078 },
        { country: 'CA', tier: 'T0', cost: 5180, roi30: .109, roi7: .114 },
        { country: 'KR', tier: 'T1', cost: 4870, roi30: .091, roi7: .069 },
        { country: 'ES', tier: 'T2', cost: 3960, roi30: .087, roi7: .082 },
        { country: 'IT', tier: 'T2', cost: 3430, roi30: .082, roi7: .075 },
        { country: 'AU', tier: 'T0', cost: 2860, roi30: .116, roi7: .121 },
        { country: 'BR', tier: 'T3', cost: 2380, roi30: .079, roi7: .086 },
        { country: 'MX', tier: 'T2', cost: 1940, roi30: .073, roi7: .077 }
      ],
      attribution: {
        kind: 'single',
        campaign: 'AFKA-IOS-T1T2T3排US-VO-MaximumDelivery-261010',
        roi30: .096,
        roi7: .049,
        share: .48,
        others: -.07
      },
      action: '立即收紧异常 Campaign 预算，保留 T0 / T3 投放并观察 24 小时',
      skanKpi: .085,
      skanReason: '连续 3 天低于 KPI',
      skan: [
        ['10-08', 5960, 301, .128, .094], ['10-09', 6120, 309, .119, .091],
        ['10-10', 6290, 316, .114, .089], ['10-11', 6510, 322, .108, .087],
        ['10-12', 6670, 327, .103, .086], ['10-13', 6840, 329, .101, .083],
        ['10-14', 7030, 333, .097, .081], ['10-15', 7190, 338, .094, .079],
        ['10-16', 7380, 341, .091, .077], ['10-17', 7510, 344, .089, .076]
      ]
    },
    Android: {
      rule: 'B',
      verdict: '轻微稀释',
      verdictText: '扩量后 ROI 小幅回落，净付费仍增长',
      costChange: .18,
      roiChange: -.07,
      netChange: .10,
      focusTier: 'T2',
      focusCountry: 'MX',
      k71: 7.12,
      benchmark: { roi1: .0135, spend: 5440, cpi: 17.8 },
      trend: [
        { date: '10-15', spend: 5320, installs: 301, roi1: .0136 },
        { date: '10-16', spend: 5480, installs: 305, roi1: .0134 },
        { date: '10-17', spend: 5720, installs: 318, roi1: .0132 },
        { date: '10-18', spend: 5980, installs: 326, roi1: .0129 },
        { date: '10-19', spend: 6160, installs: 331, roi1: .0127 },
        { date: '10-20', spend: 6370, installs: 337, roi1: .0125 },
        { date: '10-21', spend: 6410, installs: 338, roi1: .0124 }
      ],
      tiers: [
        { tier: 'T0', desc: 'US / CA / AU / NZ', share: .31, baseShare: .33, roi1: .0147, baseRoi1: .0144, cpi: 18.9, baseCpi: 19.1 },
        { tier: 'T1', desc: 'JP / KR / GB / DE / FR', share: .22, baseShare: .23, roi1: .0134, baseRoi1: .0137, cpi: 20.4, baseCpi: 20.0 },
        { tier: 'T2', desc: 'LATAM / IT / ES', share: .29, baseShare: .23, roi1: .0111, baseRoi1: .0133, cpi: 16.1, baseCpi: 15.3 },
        { tier: 'T3', desc: 'SEA / IN / BR', share: .18, baseShare: .17, roi1: .0131, baseRoi1: .0126, cpi: 12.9, baseCpi: 13.4 }
      ],
      countries: [
        { country: 'US', tier: 'T0', cost: 13840, roi30: .107, roi7: .104 },
        { country: 'BR', tier: 'T3', cost: 10960, roi30: .091, roi7: .069 },
        { country: 'MX', tier: 'T2', cost: 8140, roi30: .086, roi7: .072 },
        { country: 'GB', tier: 'T1', cost: 6690, roi30: .098, roi7: .093 },
        { country: 'FR', tier: 'T1', cost: 5820, roi30: .101, roi7: .096 },
        { country: 'CA', tier: 'T0', cost: 5330, roi30: .105, roi7: .108 },
        { country: 'DE', tier: 'T1', cost: 4680, roi30: .099, roi7: .095 },
        { country: 'ES', tier: 'T2', cost: 4170, roi30: .084, roi7: .077 },
        { country: 'TH', tier: 'T3', cost: 3260, roi30: .081, roi7: .086 },
        { country: 'ID', tier: 'T3', cost: 2840, roi30: .078, roi7: .082 },
        { country: 'AU', tier: 'T0', cost: 2470, roi30: .109, roi7: .113 },
        { country: 'IT', tier: 'T2', cost: 2160, roi30: .083, roi7: .079 }
      ],
      attribution: {
        kind: 'widespread',
        badCount: 4,
        totalCount: 11,
        campaign: 'AFKA_AND_WWUS_XX_常规回捞_VO_HV_261015'
      },
      action: '观察 1-2 天，暂不立即操作；若 T2 继续下滑再降低 10% 预算'
    }
  };

  let root = null;
  let refreshTimer = null;
  const state = {
    os: 'iOS',
    preset: '7d',
    start: rangePresets['7d'].start,
    end: rangePresets['7d'].end,
    selectedCountry: null,
    loading: false,
    updatedAt: '刚刚更新'
  };

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char];
    });
  }

  function money(value) {
    return '$' + Math.round(Number(value || 0)).toLocaleString('en-US');
  }

  function pct(value, digits) {
    if (!Number.isFinite(value)) return '—';
    return (value * 100).toFixed(digits == null ? 1 : digits) + '%';
  }

  function signed(value, digits) {
    if (!Number.isFinite(value)) return '—';
    return (value >= 0 ? '+' : '') + (value * 100).toFixed(digits == null ? 0 : digits) + '%';
  }

  function daysBetween(start, end) {
    const from = new Date(start + 'T00:00:00Z');
    const to = new Date(end + 'T00:00:00Z');
    return Math.max(1, Math.round((to - from) / 86400000) + 1);
  }

  function weightedRoi(trend) {
    const spend = trend.reduce(function (sum, row) { return sum + row.spend; }, 0);
    return spend ? trend.reduce(function (sum, row) { return sum + row.roi1 * row.spend; }, 0) / spend : 0;
  }

  function trendMetrics(report) {
    const spendTotal = report.trend.reduce(function (sum, row) { return sum + row.spend; }, 0);
    const installs = report.trend.reduce(function (sum, row) { return sum + row.installs; }, 0);
    const roi1 = weightedRoi(report.trend);
    return [
      { key: 'roi1', label: 'D1 ROI', note: '区间 cost 加权平均', values: report.trend.map(function (row) { return row.roi1; }), current: roi1, benchmark: report.benchmark.roi1, type: 'pct', higher: true },
      { key: 'proi7', label: 'pROI_7', note: '= D1 ROI × K71 (' + report.k71.toFixed(2) + ')', values: report.trend.map(function (row) { return row.roi1 * report.k71; }), current: roi1 * report.k71, benchmark: report.benchmark.roi1 * report.k71, type: 'pct', higher: true },
      { key: 'spend', label: '消耗', note: '区间日均 spend', values: report.trend.map(function (row) { return row.spend; }), current: spendTotal / report.trend.length, benchmark: report.benchmark.spend, type: 'money', higher: null },
      { key: 'cpi', label: 'CPI', note: 'cost / install', values: report.trend.map(function (row) { return row.spend / row.installs; }), current: spendTotal / installs, benchmark: report.benchmark.cpi, type: 'money2', higher: false }
    ];
  }

  function formatMetric(value, type) {
    if (type === 'pct') return pct(value, 2);
    if (type === 'money2') return '$' + value.toFixed(2);
    return money(value);
  }

  function alertSummary() {
    return Object.keys(reports).map(function (os) {
      const report = reports[os];
      return '<button type="button" class="opt-alert-card ' + (report.rule === 'C' ? 'danger' : '') + (state.os === os ? ' active' : '') + '" data-opt-os="' + os + '">' +
        '<span class="opt-alert-top"><b>AFKA</b><span class="opt-os-tag">' + os + '</span><span class="opt-rule-tag">Rule ' + report.rule + '</span></span>' +
        '<span class="opt-alert-metrics">消耗 <b>' + signed(report.costChange) + '</b> · ROI <b class="down">' + signed(report.roiChange) + '</b> · net_pay <b class="' + (report.netChange < 0 ? 'down' : '') + '">' + signed(report.netChange) + '</b></span>' +
        '</button>';
    }).join('');
  }

  function surgesMarkup() {
    const rows = materialSurges.filter(function (row) { return row.os === state.os; });
    return '<section class="opt-panel warning">' +
      '<div class="opt-panel-head"><div><div class="opt-eyebrow">素材消耗激增 · AFKA · ' + state.start.slice(5) + ' ~ ' + state.end.slice(5) + '</div><div class="opt-panel-title">共 <b>' + rows.length + '</b> 条素材区间日均 ≥ 前一等长区间 × 1.8（或新起量）</div></div></div>' +
      '<div class="opt-alert-grid">' + rows.map(function (row) {
        const danger = row.roi < .06 || (row.previousRoi && row.roi / row.previousRoi - 1 < -.3);
        return '<div class="opt-alert-card opt-surge-card ' + (danger ? 'danger' : '') + '">' +
          '<span class="opt-alert-top">' + (row.isNew ? '<span class="opt-status-tag">新起量</span>' : '') + '<b title="' + escapeHtml(row.name) + '">' + escapeHtml(row.name) + '</b></span>' +
          '<span class="opt-alert-metrics">' + money(row.daily) + '/日 · <b class="' + (danger ? 'down' : '') + '">' + (row.isNew ? '新' : '+' + Math.round(row.change * 100) + '%') + '</b> · ROI <b class="' + (danger ? 'down' : '') + '">' + pct(row.roi, 2) + '</b>' + (row.previousRoi ? '（前 ' + pct(row.previousRoi, 2) + '）' : '') + ' · CPI $' + row.cpi.toFixed(2) + '</span>' +
          '</div>';
      }).join('') + '</div></section>';
  }

  function toolbarMarkup() {
    return '<div class="opt-toolbar">' +
      '<div class="opt-segment" aria-label="系统"><button type="button" data-opt-os="iOS" class="' + (state.os === 'iOS' ? 'active' : '') + '">iOS</button><button type="button" data-opt-os="Android" class="' + (state.os === 'Android' ? 'active' : '') + '">Android</button></div>' +
      '<select class="opt-control" data-opt-range aria-label="日期预设">' + Object.keys(rangePresets).map(function (key) { return '<option value="' + key + '"' + (state.preset === key ? ' selected' : '') + '>' + rangePresets[key].label + '</option>'; }).join('') + '<option value="custom"' + (state.preset === 'custom' ? ' selected' : '') + '>自定义</option></select>' +
      '<div class="opt-date-pair"><input class="opt-control" data-opt-start type="date" value="' + state.start + '" max="2026-10-21"><span>至</span><input class="opt-control" data-opt-end type="date" value="' + state.end + '" max="2026-10-21"></div>' +
      '<span class="opt-range-days">共 ' + daysBetween(state.start, state.end) + ' 天</span>' +
      '<span class="opt-toolbar-spacer"></span>' + (state.loading ? '<span class="opt-loading-note">正在重算巡检结果…</span>' : '<span class="opt-range-days">' + state.updatedAt + '</span>') +
      '<button type="button" class="opt-refresh ' + (state.loading ? 'loading' : '') + '" data-opt-refresh ' + (state.loading ? 'disabled' : '') + '><i data-lucide="refresh-cw"></i>刷新</button>' +
      '</div>';
  }

  function trendRow(metric, rule) {
    const max = Math.max.apply(null, metric.values.concat([metric.benchmark])) || 1;
    const delta = metric.benchmark ? metric.current / metric.benchmark - 1 : 0;
    let tone = '';
    if (metric.higher === true) tone = delta < -.1 ? 'bad' : delta > .08 ? 'good' : '';
    if (metric.higher === false) tone = delta > .1 ? 'bad' : delta < -.08 ? 'good' : '';
    if (metric.key === 'spend') tone = rule === 'C' && delta > .1 ? 'bad' : delta > .08 ? 'good' : '';
    const benchmarkPosition = Math.min(94, metric.benchmark / max * 100);
    return '<div class="opt-trend-row"><div class="opt-trend-label"><b>' + metric.label + '</b><small>' + metric.note + '</small></div>' +
      '<div class="opt-spark" role="img" aria-label="' + metric.label + ' 最近 7 日趋势">' +
      '<span class="opt-benchmark" style="bottom:' + benchmarkPosition.toFixed(1) + '%"></span>' +
      metric.values.map(function (value) { return '<span class="opt-bar ' + tone + '" style="height:' + Math.max(7, value / max * 100).toFixed(1) + '%"></span>'; }).join('') +
      '</div><div class="opt-trend-value"><b>' + formatMetric(metric.current, metric.type) + '</b><small class="' + tone + '">' + (delta >= 0 ? '↑ ' : '↓ ') + Math.abs(delta * 100).toFixed(0) + '% vs 30d 均 ' + formatMetric(metric.benchmark, metric.type) + '</small></div></div>';
  }

  function healthMarkup(report) {
    const ruleClass = 'rule-' + report.rule.toLowerCase();
    return '<div class="opt-health ' + ruleClass + '"><div class="opt-health-label">扩量健康度 · Rule ' + report.rule + '<b>' + report.verdict + '</b></div>' +
      '<div class="opt-health-formula">消耗 <b class="' + (report.costChange >= 0 ? 'up' : 'down') + '">' + signed(report.costChange) + '</b> · ROI <b class="' + (report.roiChange >= 0 ? 'up' : 'down') + '">' + signed(report.roiChange) + '</b> · net_pay <b class="' + (report.netChange >= 0 ? 'up' : 'down') + '">' + signed(report.netChange) + '</b></div>' +
      '<div class="opt-health-result">' + report.verdictText + '</div></div>' +
      '<div class="opt-rule-key"><span><b>Rule A</b> ROI 稳定，扩量健康</span><span><b>Rule B</b> ROI 小幅回落，继续观察</span><span><b>Rule C</b> 回收显著下降，立即定位</span></div>';
  }

  function tierCell(primary, secondary, tone, marked) {
    return '<div class="opt-tier-cell ' + (tone || '') + (marked ? ' mark' : '') + '"><b>' + primary + '</b><small>' + secondary + '</small></div>';
  }

  function tierMatrixMarkup(report) {
    const rows = [
      { key: 'share', name: '消耗占比' },
      { key: 'roi1', name: 'ROI_1' },
      { key: 'proi7', name: 'pROI_7' },
      { key: 'cpi', name: 'CPI' }
    ];
    const head = '<div class="opt-tier-row opt-tier-head"><div>指标 / Tier</div>' + report.tiers.map(function (tier) { return '<div><span class="opt-tier-name">' + tier.tier + '</span><span class="opt-tier-desc">' + tier.desc + '</span></div>'; }).join('') + '<div>Tier 判定</div></div>';
    const body = rows.map(function (row) {
      const cells = report.tiers.map(function (tier) {
        const marked = tier.tier === report.focusTier;
        if (row.key === 'share') {
          const delta = tier.share - tier.baseShare;
          return tierCell(pct(tier.share, 1), (delta >= 0 ? '+' : '') + (delta * 100).toFixed(1) + 'pp', delta > .05 ? 'hot' : delta < -.04 ? 'cool' : '', marked);
        }
        if (row.key === 'roi1' || row.key === 'proi7') {
          const factor = row.key === 'proi7' ? report.k71 : 1;
          const current = tier.roi1 * factor;
          const baseline = tier.baseRoi1 * factor;
          const delta = baseline ? current / baseline - 1 : 0;
          return tierCell(pct(current, 2), (delta >= 0 ? '↑ ' : '↓ ') + Math.abs(delta * 100).toFixed(0) + '%', delta < -.2 ? 'hot' : delta > .1 ? 'cool' : '', marked);
        }
        const delta = tier.cpi / tier.baseCpi - 1;
        return tierCell('$' + tier.cpi.toFixed(2), (delta >= 0 ? '↑ ' : '↓ ') + Math.abs(delta * 100).toFixed(0) + '%', delta > .15 ? 'hot' : delta < -.1 ? 'cool' : '', marked);
      }).join('');
      const verdict = row.key === 'share' ? '主导 · ' + report.focusTier + ' 占比抬升' : row.key === 'cpi' ? '质量 · ' + report.focusTier + ' 成本观测' : '异常源 · ' + report.focusTier + ' 回收下滑';
      return '<div class="opt-tier-row"><div class="opt-metric-name"><b>' + row.name + '</b></div>' + cells + '<div class="opt-tier-judgment">诊断<b>' + verdict + '</b></div></div>';
    }).join('');
    return '<div class="opt-scroll"><div class="opt-tier-matrix">' + head + body + '</div></div>';
  }

  function countrySeries(country, report) {
    const delta = country.roi30 ? country.roi7 / country.roi30 - 1 : 0;
    const weights = [0, .12, .26, .43, .61, .81, 1];
    const roi7 = weights.map(function (weight) { return country.roi30 * (1 + delta * weight); });
    const daily = country.cost / 30;
    return {
      roi1: roi7.map(function (value) { return value / report.k71; }),
      proi7: roi7,
      netPay: roi7.map(function (value, index) { return daily * (1 + (index - 3) * .035) * value; }),
      spend: weights.map(function (_, index) { return daily * (1 + (index - 3) * .035); })
    };
  }

  function countryMarkup(report) {
    const selectedCode = state.selectedCountry || report.focusCountry;
    const selected = report.countries.find(function (row) { return row.country === selectedCode; }) || report.countries[0];
    const series = countrySeries(selected, report);
    const delta = selected.roi7 / selected.roi30 - 1;
    const dates = reports.iOS.trend.map(function (row) { return row.date; });
    const rows = [
      ['ROI_1', series.roi1, selected.roi30 / report.k71, 'pct'],
      ['pROI_7', series.proi7, selected.roi30, 'pct'],
      ['net_pay', series.netPay, selected.cost / 30 * selected.roi30, 'money2'],
      ['消耗', series.spend, selected.cost / 30, 'money']
    ];
    const table = '<div class="opt-scroll"><table class="opt-country-table"><thead><tr><th>国家</th><th>Tier</th><th>30d cost</th><th>ROI 30d</th><th>ROI 7d</th><th>变化</th></tr></thead><tbody>' + report.countries.map(function (country) {
      const change = country.roi7 / country.roi30 - 1;
      const tone = change <= -.2 ? 'bad' : change >= .08 ? 'good' : '';
      return '<tr data-opt-country="' + country.country + '" class="' + (country.country === selected.country ? 'selected' : '') + '"><td><b>' + country.country + '</b>' + (country.country === report.focusCountry ? ' · 重点' : '') + '</td><td>' + country.tier + '</td><td>' + money(country.cost) + '</td><td>' + pct(country.roi30, 2) + '</td><td class="' + tone + '">' + pct(country.roi7, 2) + '</td><td class="' + tone + '">' + (change >= 0 ? '↑ ' : '↓ ') + Math.abs(change * 100).toFixed(0) + '%</td></tr>';
    }).join('') + '</tbody></table></div>';
    const seriesGrid = '<div class="opt-scroll"><div class="opt-country-series"><div class="head">' + selected.country + ' 自身</div>' + dates.map(function (date) { return '<div class="head">' + date + '</div>'; }).join('') + '<div class="head">30d 均</div>' + rows.map(function (row) {
      return '<div class="name">' + row[0] + '</div>' + row[1].map(function (value, index) { return '<div class="' + (index === row[1].length - 1 ? 'current' : '') + '">' + formatMetric(value, row[3]) + '</div>'; }).join('') + '<div>' + formatMetric(row[2], row[3]) + '</div>';
    }).join('') + '</div></div>';
    return '<div class="opt-country-box"><div class="opt-country-head"><b>Step 03 · ' + report.focusTier + ' 层各国家排行</b><span class="opt-os-tag">' + report.focusCountry + ' 最差</span><span class="opt-country-note">近 30 日账户参考 · 按 cost 排序 · 点击国家切换下钻</span></div>' + table +
      '<div class="opt-country-drill"><div class="opt-country-summary"><b>' + selected.country + ' · ' + (delta <= -.2 ? '回收真恶化' : delta >= .08 ? '改善' : '正常波动') + '</b><p>近 7 日 ROI ' + pct(selected.roi7, 2) + '，较 30 日均值 ' + signed(delta) + '；30 日消耗 ' + money(selected.cost) + '。' + (delta <= -.2 ? '建议继续向下定位 Campaign 与素材贡献。' : '暂未触发强制调整门槛。') + '</p></div>' + seriesGrid + '</div></div>';
  }

  function badgesMarkup(report) {
    const tier = report.tiers.find(function (row) { return row.tier === report.focusTier; });
    const shareDelta = tier ? tier.share - tier.baseShare : 0;
    const badTiers = report.tiers.filter(function (row) { return row.roi1 / row.baseRoi1 - 1 <= -.2; }).length;
    return '<div class="opt-badges"><span class="opt-badge ' + (Math.abs(shareDelta) > .08 ? 'warn' : 'pass') + '">L1 · 梯度 <b>' + report.focusTier + ' ' + (shareDelta >= 0 ? '+' : '') + (shareDelta * 100).toFixed(0) + 'pp</b></span>' +
      '<span class="opt-badge warn">L2 · 归因 <b>' + report.focusCountry + '</b></span>' +
      '<span class="opt-badge ' + (badTiers >= 2 ? 'danger' : badTiers ? 'warn' : 'pass') + '">L3 · 时序 <b>' + badTiers + '/4 tier 恶化</b></span>' +
      '<span class="opt-badge ' + (report.rule === 'C' ? 'danger' : report.rule === 'B' ? 'warn' : 'pass') + '">L4 · 稀释 <b>net_pay ' + signed(report.netChange) + ' · Rule ' + report.rule + '</b></span></div>';
  }

  function attributionMarkup(report) {
    const item = report.attribution;
    if (item.kind === 'single') {
      return '<div class="opt-attribution"><div class="opt-attribution-title">归因：由单一 Campaign 拖累</div><div class="opt-attribution-name">' + escapeHtml(item.campaign) + '</div><div class="opt-attribution-metrics">ROI 30d <b>' + pct(item.roi30, 2) + '</b> → 7d <b>' + pct(item.roi7, 2) + '</b> · 跌 <b>' + Math.abs((item.roi7 / item.roi30 - 1) * 100).toFixed(0) + '%</b> · 占 ' + report.focusTier + ' 消耗 <b>' + pct(item.share, 0) + '</b> · 其他 Campaign 均变化 <b>' + signed(item.others) + '</b></div></div>';
    }
    return '<div class="opt-attribution warn"><div class="opt-attribution-title">普遍下滑 · 非单点问题</div><div class="opt-attribution-name">' + item.badCount + '/' + item.totalCount + ' 个 Campaign 跌幅超过 20%</div><div class="opt-attribution-metrics">当前更接近市场、素材或竞价层面的系统性变化，建议继续观察并拆分定位。</div></div>';
  }

  function actionMarkup(report) {
    return '<div class="opt-action-row"><span class="opt-action-label">行动</span><span class="opt-action-text">' + report.action + '</span><button type="button" class="opt-action-button" data-opt-navigate><i data-lucide="arrow-right"></i>去 Campaign 管理定位</button></div>';
  }

  function skanMarkup(report) {
    if (state.os !== 'iOS' || !report.skan) return '';
    return '<section class="opt-report-card opt-skan-card"><div class="opt-card-head"><div class="opt-card-title">iOS SKAN 修正 ROI · 硬 KPI 检查 <span class="opt-os-tag">第二源</span></div><span class="opt-verdict">' + report.skanReason + '</span><span class="opt-card-meta">KPI ' + pct(report.skanKpi, 1) + '</span></div>' +
      '<div class="opt-section-title">SKAN 10 天时序（跳尾部 4 天）</div><div class="opt-scroll"><table class="opt-skan-table"><thead><tr><th>日期</th><th>消耗</th><th>Install</th><th>null 率</th><th>SKAN 修正 ROI</th></tr></thead><tbody>' + report.skan.map(function (row) {
        return '<tr><td>' + row[0] + '</td><td>' + money(row[1]) + '</td><td>' + row[2].toLocaleString('en-US') + '</td><td>' + pct(row[3], 1) + '</td><td class="' + (row[4] < report.skanKpi ? 'bad' : '') + '">' + pct(row[4], 2) + '</td></tr>';
      }).join('') + '</tbody></table></div></section>';
  }

  function reportMarkup(report) {
    const ruleClass = 'rule-' + report.rule.toLowerCase();
    return '<section class="opt-report-card ' + ruleClass + '"><div class="opt-card-head"><div class="opt-card-title">AFKA <span class="opt-os-tag">' + state.os + '</span></div><span class="opt-verdict ' + ruleClass + '">' + report.focusTier + ' · ' + report.verdict + '</span><span class="opt-card-meta">T-0 = ' + state.end + '</span></div>' +
      '<div class="opt-section-title">7 日趋势 · 主指标</div>' + trendMetrics(report).map(function (metric) { return trendRow(metric, report.rule); }).join('') +
      healthMarkup(report) + '<div class="opt-section-title">Tier 梯度矩阵 · 横向盘</div>' + tierMatrixMarkup(report) + countryMarkup(report) + badgesMarkup(report) + attributionMarkup(report) + actionMarkup(report) + '</section>' + skanMarkup(report);
  }

  function renderOptimizationsView(target) {
    if (target) root = typeof target === 'string' ? document.querySelector(target) : target;
    if (!root) root = document.querySelector('#optimizationsView') || document.querySelector('[data-optimizations-view]');
    if (!root) return null;
    const report = reports[state.os];
    if (!state.selectedCountry || !report.countries.some(function (row) { return row.country === state.selectedCountry; })) state.selectedCountry = report.focusCountry;
    root.innerHTML = '<div class="opt-view"><section class="opt-panel"><div class="opt-panel-head"><div><div class="opt-eyebrow">AFKA 双端预警汇总 · T-0 = ' + state.end + '</div><div class="opt-panel-title">共 <b>2</b> 个端 · 命中 <b class="danger">2</b> 条预警（1 danger · 1 warn）</div></div><span class="opt-range-days">AFKA 展示样本 · DAP 口径</span></div><div class="opt-alert-grid">' + alertSummary() + '</div></section>' + surgesMarkup() + toolbarMarkup() + reportMarkup(report) + '</div>';
    if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();
    return root;
  }

  function navigateToCampaigns() {
    const report = reports[state.os];
    const campaignName = report.attribution.campaign;
    const detail = { product: 'AFKA', os: state.os, tier: report.focusTier, country: state.selectedCountry, campaignName: campaignName };
    root.dispatchEvent(new CustomEvent('optimizations:navigate-campaigns', { bubbles: true, detail: detail }));
    if (typeof window.showAppView === 'function') window.showAppView('campaigns');
    const search = document.querySelector('#manageSearch');
    if (search && campaignName) {
      search.value = campaignName;
      search.dispatchEvent(new Event('input', { bubbles: true }));
      search.focus();
    }
    const url = new URL(window.location.href);
    url.searchParams.set('view', 'campaigns');
    window.history.pushState({ view: 'campaigns', campaignName: campaignName }, '', url);
  }

  function handleClick(event) {
    const osButton = event.target.closest('[data-opt-os]');
    if (osButton) {
      state.os = osButton.dataset.optOs;
      state.selectedCountry = reports[state.os].focusCountry;
      renderOptimizationsView();
      return;
    }
    const countryRow = event.target.closest('[data-opt-country]');
    if (countryRow) {
      state.selectedCountry = countryRow.dataset.optCountry;
      renderOptimizationsView();
      return;
    }
    if (event.target.closest('[data-opt-refresh]')) {
      if (state.loading) return;
      state.loading = true;
      renderOptimizationsView();
      window.clearTimeout(refreshTimer);
      refreshTimer = window.setTimeout(function () {
        state.loading = false;
        state.updatedAt = '刚刚更新';
        renderOptimizationsView();
      }, 650);
      return;
    }
    if (event.target.closest('[data-opt-navigate]')) navigateToCampaigns();
  }

  function handleChange(event) {
    if (event.target.matches('[data-opt-range]')) {
      state.preset = event.target.value;
      if (rangePresets[state.preset]) {
        state.start = rangePresets[state.preset].start;
        state.end = rangePresets[state.preset].end;
      }
      renderOptimizationsView();
      return;
    }
    if (event.target.matches('[data-opt-start], [data-opt-end]')) {
      const startInput = root.querySelector('[data-opt-start]');
      const endInput = root.querySelector('[data-opt-end]');
      let start = startInput.value;
      let end = endInput.value;
      if (start > end) {
        if (event.target.matches('[data-opt-start]')) end = start;
        else start = end;
      }
      state.start = start;
      state.end = end;
      state.preset = 'custom';
      renderOptimizationsView();
    }
  }

  function initOptimizationsView(target) {
    root = typeof target === 'string' ? document.querySelector(target) : target || document.querySelector('#optimizationsView') || document.querySelector('[data-optimizations-view]');
    if (!root) {
      console.warn('Optimizations view container was not found.');
      return null;
    }
    if (!root.dataset.optimizationsInitialized) {
      root.addEventListener('click', handleClick);
      root.addEventListener('change', handleChange);
      root.dataset.optimizationsInitialized = 'true';
    }
    return renderOptimizationsView(root);
  }

  window.initOptimizationsView = initOptimizationsView;
  window.renderOptimizationsView = renderOptimizationsView;
})();
