import { type ReactNode, useId } from "react";
import type { MatrixLevel } from "@/lib/content/types";
import type { InsightChartView } from "@/lib/content/view";
import type { Locale } from "@/lib/i18n/config";

/**
 * OS GRAFICOS DO ESTUDO DE CASO.
 *
 * Desenhados aqui, e nao recortados do PDF, por tres motivos: seguem o tema
 * (claro e escuro) pelos tokens, falam o idioma da pagina, e continuam
 * legiveis num celular. O dado e o mesmo do relatorio; a pagina original
 * fica a um clique, no dialogo.
 *
 * Cor so por token. Intensidade de mapa de calor e largura de barra sao
 * proporcao de dado, entao entram por `style` (opacidade e largura), nunca
 * como cor.
 */

type Chart<K extends InsightChartView["kind"]> = Extract<InsightChartView, { kind: K }>;

function fmt(locale: Locale) {
  const int = new Intl.NumberFormat(locale);
  const pct0 = new Intl.NumberFormat(locale, { style: "percent", maximumFractionDigits: 0 });
  const pct1 = new Intl.NumberFormat(locale, {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  const dec1 = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  return {
    int: (v: number) => int.format(v),
    pct: (v: number) => pct0.format(v),
    pct1: (v: number) => pct1.format(v),
    times: (v: number) => `${dec1.format(v)}×`,
  };
}

/** Rotulo pequeno de secao dentro de um grafico. */
function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[0.625rem] tracking-wide text-ink-subtle uppercase">{children}</p>
  );
}

/* ── chao do armazem ─────────────────────────────────────────────────── */

const W = 680;
const BENCH_W = 22;
const X0 = 52;
const RACK_H = 21;
const BACK_GAP = 3;
const AISLE_GAP = 24;
const BAYS = 17;
const CW = (W - X0) / BAYS;

function BaysChart({ chart, alt }: { chart: Chart<"bays">; alt: string }) {
  const uid = useId().replace(/:/g, "");
  const max = Math.max(...chart.racks.flatMap((r) => r.picks));
  const aisles = new Set(chart.aisleAfter);

  // y de cada estante, e a faixa de cada corredor logo abaixo dela
  const top: Record<string, number> = {};
  const aisleBand: { n: number; y: number }[] = [];
  let y = 4;
  chart.racks.forEach((r, i) => {
    top[r.rack] = y;
    y += RACK_H;
    if (aisles.has(r.rack)) {
      aisleBand.push({ n: aisleBand.length + 1, y });
      y += AISLE_GAP;
    } else if (i < chart.racks.length - 1) {
      y += BACK_GAP;
    }
  });
  const floorBottom = y;
  const H = floorBottom + 16;

  const cx = (bay: number) => X0 + (bay - 1) * CW + CW / 2;
  const cell = (code: string) => {
    const [rack, bay] = code.split("-");
    return { rack, bay: Number(bay) };
  };
  const span = (codes: readonly string[]) => {
    const cells = codes.map(cell);
    const bays = cells.map((c) => c.bay);
    return { rack: cells[0].rack, mid: (Math.min(...bays) + Math.max(...bays)) / 2 };
  };
  const strength = (v: number) => (v <= 0 ? 0 : 0.14 + 0.86 * Math.sqrt(v / max));
  const bandBelow = (rack: string) => {
    const idx = chart.racks.findIndex((r) => r.rack === rack);
    for (let i = idx; i < chart.racks.length; i++) {
      if (aisles.has(chart.racks[i].rack)) {
        const yb = top[chart.racks[i].rack] + RACK_H;
        return { top: yb, mid: yb + AISLE_GAP / 2, bottom: yb + AISLE_GAP };
      }
    }
    return { top: floorBottom, mid: floorBottom, bottom: floorBottom };
  };

  const fromSet = new Set(chart.moves.flatMap((m) => m.from));
  const toSet = new Set(chart.moves.flatMap((m) => m.to));

  // As setas: mesma estante -> curva pelo corredor de baixo; estante diferente
  // -> desce reto ate o corredor de destino e entra pela frente da posicao.
  const paths = chart.moves.map((m, i) => {
    const a = span(m.from);
    const b = span(m.to);
    const ay = top[a.rack] + RACK_H;
    if (a.rack === b.rack) {
      const band = bandBelow(a.rack);
      const d = `M ${cx(a.mid)} ${ay + 1} C ${cx(a.mid)} ${band.mid + 7}, ${cx(b.mid)} ${band.mid + 7}, ${cx(b.mid)} ${ay + 4}`;
      return { d, badge: { x: (cx(a.mid) + cx(b.mid)) / 2, y: band.mid + 5 }, n: i + 1 };
    }
    const by = top[b.rack];
    const band = bandBelow(
      chart.racks[chart.racks.findIndex((r) => r.rack === b.rack) - 1]?.rack ?? b.rack,
    );
    const d = `M ${cx(a.mid)} ${ay + 1} L ${cx(a.mid)} ${band.top + 4} C ${cx(a.mid)} ${band.mid + 4}, ${cx(b.mid)} ${band.mid + 4}, ${cx(b.mid)} ${by - 4}`;
    return { d, badge: { x: cx(a.mid) + 13, y: band.top + 2 }, n: i + 1 };
  });

  return (
    <div className="flex flex-col gap-4">
      {/* No celular o mapa inteiro em 300px vira mosaico sem numero; com
          largura minima ele rola de lado e continua legivel. */}
      <div className="-mx-3 overflow-x-auto px-3 pb-1 sm:mx-0 sm:px-0 sm:pb-0">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label={alt}
          className="h-auto w-full min-w-[34rem] overflow-visible"
        >
          <defs>
            <marker
              id={`head-${uid}`}
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto"
            >
              <path d="M0 0 L10 5 L0 10 z" className="fill-ink" />
            </marker>
          </defs>

          <rect
            x="0"
            y="4"
            width={BENCH_W}
            height={floorBottom - 4}
            rx="5"
            className="fill-subtle"
          />
          <text
            x={BENCH_W / 2}
            y={(floorBottom + 4) / 2}
            transform={`rotate(-90 ${BENCH_W / 2} ${(floorBottom + 4) / 2})`}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-ink-subtle font-mono text-[8px] tracking-[0.18em] uppercase"
          >
            {chart.benches}
          </text>

          {aisleBand.map((a) => (
            <g key={a.n}>
              <rect
                x={X0}
                y={a.y + 2}
                width={W - X0}
                height={AISLE_GAP - 4}
                className="fill-sunken"
              />
              <text
                x={W - 4}
                y={a.y + AISLE_GAP / 2 + 0.5}
                textAnchor="end"
                dominantBaseline="middle"
                className="fill-ink-subtle font-mono text-[8px] tracking-[0.14em] uppercase"
              >
                {chart.aisle} {a.n}
              </text>
            </g>
          ))}

          {chart.racks.map((r) => (
            <g key={r.rack}>
              <text
                x={(BENCH_W + X0) / 2 + 2}
                y={top[r.rack] + RACK_H / 2 + 0.5}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-ink-muted text-[11px] font-semibold"
              >
                {r.rack}
              </text>
              {r.picks.map((v, i) => {
                const bay = i + 1;
                const code = `${r.rack}-${String(bay).padStart(2, "0")}`;
                const s = strength(v);
                const x = X0 + i * CW + 1.5;
                return (
                  <g key={code}>
                    <rect
                      x={x}
                      y={top[r.rack]}
                      width={CW - 3}
                      height={RACK_H}
                      rx="3"
                      className={s > 0 ? "fill-accent" : "fill-subtle"}
                      fillOpacity={s > 0 ? s : 0.6}
                    />
                    {v >= 10 && (
                      <text
                        x={x + (CW - 3) / 2}
                        y={top[r.rack] + RACK_H / 2 + 0.5}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className={`text-[9.5px] tabular-nums ${s > 0.62 ? "fill-on-accent font-semibold" : "fill-ink"}`}
                      >
                        {v}
                      </text>
                    )}
                    {(fromSet.has(code) || toSet.has(code)) && (
                      <rect
                        x={x - 1}
                        y={top[r.rack] - 1}
                        width={CW - 1}
                        height={RACK_H + 2}
                        rx="4"
                        fill="none"
                        strokeWidth="2"
                        strokeDasharray={toSet.has(code) ? "3 2" : undefined}
                        className={toSet.has(code) ? "stroke-ok" : "stroke-ink"}
                      />
                    )}
                  </g>
                );
              })}
            </g>
          ))}

          {paths.map((p) => (
            <g key={p.n}>
              <path
                d={p.d}
                fill="none"
                strokeWidth="5"
                strokeLinecap="round"
                className="stroke-canvas"
              />
              <path
                d={p.d}
                fill="none"
                strokeWidth="1.8"
                className="stroke-ink"
                markerEnd={`url(#head-${uid})`}
              />
            </g>
          ))}
          {paths.map((p) => (
            <g key={`b${p.n}`}>
              <circle cx={p.badge.x} cy={p.badge.y} r="8.5" className="fill-ink" />
              <text
                x={p.badge.x}
                y={p.badge.y + 0.5}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-canvas text-[10px] font-bold"
              >
                {p.n}
              </text>
            </g>
          ))}

          {Array.from({ length: BAYS }, (_, i) => (
            <text
              // biome-ignore lint/suspicious/noArrayIndexKey: o numero da posicao e a propria chave.
              key={i}
              x={cx(i + 1)}
              y={H - 3}
              textAnchor="middle"
              className="fill-ink-subtle text-[9px] tabular-nums"
            >
              {i + 1}
            </text>
          ))}
        </svg>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <ol className="flex flex-col gap-2">
          {chart.moves.map((m, i) => (
            <li key={m.label} className="flex gap-2.5 text-xs leading-relaxed text-ink-muted">
              <span className="grid size-[1.125rem] shrink-0 place-items-center rounded-full bg-ink text-[0.625rem] font-bold text-ink-inverse">
                {i + 1}
              </span>
              <span className="text-pretty">{m.label}</span>
            </li>
          ))}
        </ol>
        <div className="flex shrink-0 items-center gap-2 text-[0.625rem] text-ink-subtle">
          <span>{chart.fewer}</span>
          <span className="flex gap-0.5" aria-hidden="true">
            {[0.15, 0.35, 0.55, 0.75, 1].map((o) => (
              <span key={o} className="size-3 rounded-sm bg-accent" style={{ opacity: o }} />
            ))}
          </span>
          <span>{chart.more}</span>
          <span className="text-ink-faint" aria-hidden="true">
            ·
          </span>
          <span>{chart.unit}</span>
        </div>
      </div>
    </div>
  );
}

/* ── vendidos juntos ─────────────────────────────────────────────────── */

function PairsChart({ chart, locale }: { chart: Chart<"pairs">; locale: Locale }) {
  const f = fmt(locale);
  return (
    <div className="flex flex-col gap-1">
      <p className="text-right text-[0.625rem] text-ink-subtle">{chart.perMonth}</p>
      <ul className="flex flex-col divide-y divide-line">
        {chart.rows.map((r) => (
          <li
            key={r.a}
            className="grid grid-cols-[1fr_auto] gap-x-5 gap-y-1.5 py-3.5 first:pt-0 last:pb-0"
          >
            <p className="text-sm leading-snug text-pretty">
              <span className="font-semibold">{r.a}</span>{" "}
              <span className="text-ink-subtle">{chart.also}</span>{" "}
              <span className="font-medium">{r.b}</span>
            </p>
            <p className="row-span-3 min-w-8 self-center text-right font-mono text-base font-semibold tabular-nums">
              {f.int(r.perMonth)}
            </p>
            <div className="flex items-center gap-3">
              <span className="relative h-2 flex-1 overflow-hidden rounded-full bg-subtle">
                <span
                  className="absolute inset-y-0 left-0 rounded-full bg-accent"
                  style={{ width: `${r.share * 100}%` }}
                />
              </span>
              <span className="w-10 text-right font-mono text-xs font-semibold text-accent tabular-nums">
                {f.pct(r.share)}
              </span>
            </div>
            <p className="font-mono text-[0.625rem] text-ink-subtle">
              {r.from} <span aria-hidden="true">→</span> {r.to}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── pedidos por hora ────────────────────────────────────────────────── */

function HoursChart({ chart, locale }: { chart: Chart<"hours">; locale: Locale }) {
  const f = fmt(locale);
  const max = Math.max(...chart.rows.flatMap((r) => r.values));
  const hours = chart.rows[0]?.values.map((_, i) => chart.firstHour + i) ?? [];
  return (
    <div className="grid grid-cols-[2.25rem_repeat(12,minmax(0,1fr))_2.75rem] gap-[3px] text-center">
      <span />
      {hours.map((h) => (
        <span
          key={h}
          className="pb-1 font-mono text-[0.5625rem] text-ink-subtle tabular-nums sm:text-[0.625rem]"
        >
          {String(h).padStart(2, "0")}
        </span>
      ))}
      <span className="pb-1 text-right text-[0.5625rem] text-ink-subtle sm:text-[0.625rem]">
        {chart.totalLabel}
      </span>
      {chart.rows.map((r) => (
        <div key={r.day} className="contents">
          <span className="self-center text-left text-xs text-ink-muted">{r.day}</span>
          {r.values.map((v, i) => {
            const s = v <= 0 ? 0 : 0.12 + 0.88 * (v / max);
            return (
              <span
                key={hours[i]}
                className="relative grid h-8 place-items-center overflow-hidden rounded-[4px] bg-subtle/60"
              >
                <span className="absolute inset-0 bg-accent" style={{ opacity: s }} />
                {v > 0 && (
                  <span
                    className={`relative font-mono text-[0.625rem] tabular-nums sm:text-[0.6875rem] ${s > 0.6 ? "font-semibold text-on-accent" : "text-ink-muted"}`}
                  >
                    {v}
                  </span>
                )}
              </span>
            );
          })}
          <span className="self-center text-right font-mono text-xs font-semibold tabular-nums">
            {f.int(r.total)}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ── repesagem ───────────────────────────────────────────────────────── */

function ReweighChart({ chart, locale }: { chart: Chart<"reweigh">; locale: Locale }) {
  const f = fmt(locale);
  const rate = (c: { reweighed: number; shipments: number }) => c.reweighed / c.shipments;
  const maxRate = Math.max(...chart.carriers.map(rate));
  const SCALE = 4;
  const at = (v: number) => `${(Math.min(v, SCALE) / SCALE) * 100}%`;

  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-3">
        <Eyebrow>{chart.byCarrier}</Eyebrow>
        <ul className="flex flex-col gap-2.5">
          {chart.carriers.map((c) => {
            const r = rate(c);
            const top = r === maxRate && r > 0;
            return (
              <li
                key={c.name}
                className="grid grid-cols-[4.5rem_1fr_7.75rem] items-center gap-3 sm:grid-cols-[5.25rem_1fr_10rem]"
              >
                <span className="text-sm">{c.name}</span>
                <span className="relative h-2.5 overflow-hidden rounded-full bg-subtle">
                  {r > 0 && (
                    <span
                      className={`absolute inset-y-0 left-0 rounded-full ${top ? "bg-accent" : "bg-ink-subtle"}`}
                      style={{ width: `${Math.max((r / maxRate) * 100, 2)}%` }}
                    />
                  )}
                </span>
                <span className="text-right text-xs leading-snug text-ink-subtle tabular-nums">
                  {r > 0 ? (
                    <>
                      <b className={`font-mono font-semibold ${top ? "text-accent" : "text-ink"}`}>
                        {f.pct1(r)}
                      </b>{" "}
                      · {f.int(c.reweighed)} {chart.of} {f.int(c.shipments)}
                    </>
                  ) : (
                    <>
                      <b className="font-mono font-semibold text-ink">0</b> · {c.note}
                    </>
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <Eyebrow>{chart.sizesTitle}</Eyebrow>
        {chart.sizes.map((s) => (
          <div key={s.booked} className="grid gap-2 sm:grid-cols-[11rem_1fr] sm:gap-5">
            <div>
              <p className="text-sm font-semibold leading-snug">{s.label}</p>
              <p className="text-[0.6875rem] text-ink-subtle">{s.cases}</p>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="relative h-5">
                <span
                  className="absolute inset-y-0 left-0 rounded bg-line-strong"
                  style={{ width: at(1) }}
                />
                <span
                  className="absolute inset-y-0 flex items-center pl-2 text-[0.6875rem] whitespace-nowrap text-ink-muted"
                  style={{ left: at(1) }}
                >
                  {chart.bookedLabel} {s.booked}
                </span>
              </div>
              <div className="relative h-5">
                <span
                  className="absolute inset-y-0 left-0 flex items-center rounded bg-accent pl-2 text-[0.6875rem] font-semibold whitespace-nowrap text-on-accent"
                  style={{ width: at(s.median) }}
                >
                  {chart.measuredLabel} {f.times(s.median)}
                </span>
                <span
                  className="absolute top-1/2 h-px -translate-y-1/2 bg-ink"
                  style={{ left: at(s.p25), width: `calc(${at(s.p75)} - ${at(s.p25)})` }}
                />
                <span
                  className="absolute top-1/2 h-2.5 w-px -translate-y-1/2 bg-ink"
                  style={{ left: at(s.p25) }}
                />
                <span
                  className="absolute top-1/2 h-2.5 w-px -translate-y-1/2 bg-ink"
                  style={{ left: at(s.p75) }}
                />
              </div>
            </div>
          </div>
        ))}
        <div className="grid sm:grid-cols-[11rem_1fr] sm:gap-5">
          <span className="hidden sm:block" />
          <div className="relative h-4 border-t border-line">
            {[0, 1, 2, 3, 4].map((v) => (
              <span
                key={v}
                className="absolute top-1 -translate-x-1/2 font-mono text-[0.625rem] text-ink-subtle first:translate-x-0 last:-translate-x-full"
                style={{ left: at(v) }}
              >
                {v}×
              </span>
            ))}
          </div>
        </div>
        <p className="text-[0.6875rem] text-ink-subtle">{chart.rangeNote}</p>
      </div>
    </div>
  );
}

/* ── prazo de entrega ────────────────────────────────────────────────── */

const BAND_CLASS = ["bg-ok", "bg-ok/45", "bg-accent/45", "bg-accent"];

function DeliveryChart({ chart, locale }: { chart: Chart<"delivery">; locale: Locale }) {
  const f = fmt(locale);
  const total = chart.rows.reduce((t, r) => t + r.consignments, 0);
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-[5.75rem_1fr_3.5rem] items-end gap-3">
        <span />
        <span />
        <span className="text-right text-[0.625rem] leading-tight text-ink-subtle">
          {chart.fastLabel}
        </span>
      </div>
      <ul className="-mt-2 flex flex-col gap-3">
        {chart.rows.map((r) => {
          const delivered = r.bands.reduce((t, v) => t + v, 0) || 1;
          return (
            <li key={r.name} className="grid grid-cols-[5.75rem_1fr_3.5rem] items-center gap-3">
              <span>
                <span className="block text-sm leading-tight">{r.name}</span>
                <span className="block text-[0.625rem] text-ink-subtle">
                  {f.pct(r.consignments / total)} {chart.shareLabel}
                </span>
              </span>
              <span className="flex h-3 overflow-hidden rounded-full">
                {r.bands.map((v, i) => (
                  <span
                    // biome-ignore lint/suspicious/noArrayIndexKey: a faixa e posicional (0 = mais rapida).
                    key={i}
                    className={BAND_CLASS[i]}
                    style={{ width: `${(v / delivered) * 100}%` }}
                  />
                ))}
              </span>
              <span className="text-right font-mono text-sm font-semibold tabular-nums">
                {f.pct(r.bands[0] / delivered)}
              </span>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-wrap gap-x-4 gap-y-1.5 border-t border-line pt-3">
        {chart.bands.map((b, i) => (
          <li key={b} className="flex items-center gap-1.5 text-[0.6875rem] text-ink-subtle">
            <span className={`size-2.5 rounded-sm ${BAND_CLASS[i]}`} aria-hidden="true" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── processo ────────────────────────────────────────────────────────── */

/* Classe inteira por quantidade, para o Tailwind achar a string no codigo. */
const STEP_COLS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
  5: "sm:grid-cols-5",
};

function ProcessChart({ chart }: { chart: Chart<"process"> }) {
  const cols = STEP_COLS[chart.steps.length] ?? "sm:grid-cols-5";
  return (
    <div className="flex flex-col gap-2">
      <ol className={`grid gap-2.5 ${cols}`}>
        {chart.steps.map((s, i) => (
          <li
            key={s.title}
            className="relative flex flex-col gap-1.5 rounded-lg border border-line bg-sunken p-3"
          >
            <span className="flex items-center gap-2">
              <span className="grid size-5 place-items-center rounded-full bg-ink font-mono text-[0.625rem] font-bold text-ink-inverse">
                {i + 1}
              </span>
              <span className="text-sm font-semibold tracking-tight">{s.title}</span>
            </span>
            <span className="text-xs leading-relaxed text-ink-muted text-pretty">{s.body}</span>
            {i < chart.steps.length - 1 && (
              <span
                className="absolute top-1/2 -right-[0.6rem] z-10 hidden -translate-y-1/2 text-ink-subtle sm:block"
                aria-hidden="true"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 12 12"
                  className="size-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M4 2l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            )}
          </li>
        ))}
      </ol>
      {chart.loop && (
        <div className={`hidden sm:grid sm:gap-2.5 ${cols}`} aria-hidden="true">
          <div
            className="flex items-center justify-center gap-1.5 rounded-b-lg border-x border-b border-dashed border-line-strong pt-1 pb-1.5 font-mono text-[0.625rem] text-ink-subtle"
            style={{ gridColumn: `${chart.loop.from} / ${chart.loop.to + 1}` }}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="size-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path
                d="M13 8a5 5 0 1 1-1.5-3.5M13 3v2.5h-2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {chart.loop.label}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── plataforma em camadas ───────────────────────────────────────────── */

/**
 * Quem usa, o que o portal oferece e os sistemas por baixo, de cima para
 * baixo. Caixas em grade dentro de cada camada; uma seta curta entre as
 * camadas. Sem SVG: o texto quebra sozinho no celular.
 */
/* Seis caixas em 3 colunas; quatro em 2 no tablet e 4 no largo. */
function tierCols(n: number): string {
  if (n % 3 === 0) return "sm:grid-cols-3";
  if (n >= 4) return "sm:grid-cols-2 md:grid-cols-4";
  return n === 2 ? "sm:grid-cols-2" : "";
}

function LayersChart({ chart }: { chart: Chart<"layers"> }) {
  return (
    <ol className="flex flex-col">
      {chart.tiers.map((tier, t) => (
        <li key={tier.label} className="flex flex-col">
          {t > 0 && (
            <span className="mx-auto flex h-7 flex-col items-center" aria-hidden="true">
              <span className="w-px flex-1 bg-line-strong" />
              <svg
                viewBox="0 0 12 8"
                className="size-3 text-line-strong"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M0 0h12L6 8z" />
              </svg>
            </span>
          )}
          <div className="rounded-lg border border-line bg-sunken p-3">
            <p className="mb-2 font-mono text-[0.625rem] tracking-wide text-ink-subtle uppercase">
              {tier.label}
            </p>
            <ul className={`grid gap-2 ${tierCols(tier.items.length)}`}>
              {tier.items.map((item) => (
                <li
                  key={item.title}
                  className={`flex flex-col gap-1 rounded-md border p-2.5 ${
                    item.accent ? "border-accent/50 bg-accent-soft" : "border-line bg-canvas"
                  }`}
                >
                  <span
                    className={`text-sm font-semibold tracking-tight ${item.accent ? "text-accent" : ""}`}
                  >
                    {item.title}
                  </span>
                  <span className="text-xs leading-relaxed text-ink-muted text-pretty">
                    {item.body}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ── quem acessa o que ───────────────────────────────────────────────── */

const LEVELS: readonly MatrixLevel[] = ["full", "work", "use", "view", "grant"];

/** Quantas das quatro barras acendem em cada nivel. */
const FILLED: Record<MatrixLevel, number> = { full: 4, work: 3, use: 2, view: 1, grant: 0 };
const BAR_H = ["h-1.5", "h-2", "h-2.5", "h-3"];
const BAR_H_SMALL = ["h-1", "h-1.5", "h-2", "h-2.5"];

/**
 * O nivel desenhado como medidor de sinal: quatro barras que sobem, acesas
 * conforme o tanto do modulo que o papel recebe. "Liberado pessoa a pessoa"
 * nao e um nivel menor, e outra coisa, e por isso e um circulo tracejado com
 * um mais. A forma diz o nivel sem depender de cor.
 */
function LevelMark({ level, small = false }: { level: MatrixLevel; small?: boolean }) {
  if (level === "grant") {
    return (
      <span
        className={`inline-grid place-items-center rounded-full border border-dashed border-ink-subtle font-semibold text-ink-muted ${small ? "size-3.5 text-[0.5rem]" : "size-5 text-[0.6875rem]"}`}
        aria-hidden="true"
      >
        +
      </span>
    );
  }
  const heights = small ? BAR_H_SMALL : BAR_H;
  return (
    <span className="inline-flex items-end gap-[2px]" aria-hidden="true">
      {heights.map((h, i) => (
        <span
          key={h}
          className={`rounded-[1px] ${small ? "w-[3px]" : "w-1"} ${h} ${i < FILLED[level] ? "bg-accent" : "bg-line-strong"}`}
        />
      ))}
    </span>
  );
}

/**
 * Um papel por linha, um modulo por coluna. O medidor de cada celula e
 * repetido em texto (leitor de tela e legenda), para nao depender do desenho.
 */
function MatrixChart({ chart }: { chart: Chart<"matrix"> }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="-mx-3 overflow-x-auto px-3 sm:mx-0 sm:px-0">
        <table className="w-full min-w-[34rem] border-separate border-spacing-0 text-left text-xs">
          <thead>
            <tr>
              <th className="sticky left-0 bg-canvas pb-2" />
              {chart.columns.map((c) => (
                <th
                  key={c}
                  scope="col"
                  className="px-1 pb-2 text-center align-bottom font-mono text-[0.625rem] font-normal tracking-wide text-ink-subtle uppercase"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {chart.rows.map((r) => (
              <tr key={r.role}>
                <th
                  scope="row"
                  className="sticky left-0 border-t border-line bg-canvas py-2.5 pr-3 align-top font-normal"
                >
                  <span className="block text-sm font-semibold tracking-tight">{r.role}</span>
                  {r.note && (
                    <span className="block text-[0.6875rem] leading-snug text-ink-subtle">
                      {r.note}
                    </span>
                  )}
                </th>
                {r.cells.map((cell, i) => (
                  <td
                    // biome-ignore lint/suspicious/noArrayIndexKey: a coluna e posicional (um modulo por indice).
                    key={i}
                    className="border-t border-line px-1 py-2.5 text-center align-middle"
                    title={chart.legend[cell]}
                  >
                    <LevelMark level={cell} />
                    <span className="sr-only">{chart.legend[cell]}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="flex flex-col gap-1.5 border-t border-line pt-3">
        {LEVELS.map((l) => (
          <li key={l} className="flex items-center gap-2 text-[0.6875rem] text-ink-muted">
            <span className="grid w-5 shrink-0 place-items-center">
              <LevelMark level={l} small />
            </span>
            {chart.legend[l]}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── kit de testes ───────────────────────────────────────────────────── */

/**
 * As pastas de um kit de testes, em ordem, com o que cada uma prova. A
 * contagem de verificacoes ganha uma barra curta para o olho achar onde o
 * kit e mais denso sem ler os numeros.
 */
function SuiteChart({ chart, locale }: { chart: Chart<"suite">; locale: Locale }) {
  const f = fmt(locale);
  const max = Math.max(...chart.rows.map((r) => r.checks));
  const requests = chart.rows.reduce((t, r) => t + r.requests, 0);
  const checks = chart.rows.reduce((t, r) => t + r.checks, 0);
  return (
    <div className="flex flex-col gap-3">
      <p className="text-right font-mono text-[0.625rem] text-ink-subtle">
        {chart.requestsLabel} · {chart.checksLabel}
      </p>
      <ol className="-mt-1 flex flex-col divide-y divide-line">
        {chart.rows.map((r, i) => (
          <li
            key={r.name}
            className="grid grid-cols-[1.75rem_1fr] gap-x-3 gap-y-1 py-2.5 first:pt-0 sm:grid-cols-[1.75rem_11rem_1fr_7.5rem] sm:items-baseline"
          >
            <span className="font-mono text-xs text-ink-subtle tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-semibold tracking-tight">{r.name}</span>
            <span className="col-start-2 text-xs leading-relaxed text-ink-muted text-pretty sm:col-start-3">
              {r.proves}
            </span>
            <span className="col-start-2 flex items-center gap-2 sm:col-start-4 sm:justify-end">
              <span className="font-mono text-[0.6875rem] text-ink-subtle tabular-nums whitespace-nowrap">
                {f.int(r.requests)} · {f.int(r.checks)}
              </span>
              <span className="relative h-1.5 w-12 overflow-hidden rounded-full bg-subtle">
                <span
                  className="absolute inset-y-0 left-0 rounded-full bg-accent"
                  style={{ width: `${(r.checks / max) * 100}%` }}
                />
              </span>
            </span>
          </li>
        ))}
      </ol>
      <p className="flex flex-wrap items-baseline justify-between gap-2 border-t border-line pt-3 text-xs text-ink-subtle">
        <span>{chart.totalLabel}</span>
        <span className="font-mono tabular-nums">
          <b className="font-semibold text-ink">{f.int(requests)}</b> {chart.requestsLabel} ·{" "}
          <b className="font-semibold text-accent">{f.int(checks)}</b> {chart.checksLabel}
        </span>
      </p>
    </div>
  );
}

/* ── conexoes ────────────────────────────────────────────────────────── */

const TONE: Record<Chart<"connections">["links"][number]["tone"], string> = {
  read: "bg-ok/12 text-ok",
  model: "bg-accent-soft text-accent",
  own: "bg-subtle text-ink-muted",
};

/**
 * O sistema no centro e as ligacoes dele, cada uma com o acesso que tem.
 * Desenhado com caixas e traco, sem SVG: o texto quebra sozinho no celular.
 */
function ConnectionsChart({ chart }: { chart: Chart<"connections"> }) {
  return (
    <div className="flex flex-col items-stretch">
      <div className="mx-auto w-full max-w-md rounded-lg border-2 border-accent/60 bg-sunken p-3.5 text-center">
        <p className="text-sm font-semibold tracking-tight">{chart.hub.title}</p>
        <p className="mt-1 text-xs leading-relaxed text-ink-muted text-pretty">{chart.hub.body}</p>
      </div>
      <span className="mx-auto h-5 w-px bg-line-strong" aria-hidden="true" />
      <ul className="grid gap-2.5 border-t border-line-strong pt-4 sm:grid-cols-2">
        {chart.links.map((link) => (
          <li
            key={link.title}
            className="relative flex flex-col gap-1.5 rounded-lg border border-line bg-canvas p-3"
          >
            <span className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm font-semibold tracking-tight">{link.title}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[0.6875rem] font-medium whitespace-nowrap ${TONE[link.tone]}`}
              >
                {link.access}
              </span>
            </span>
            <span className="text-xs leading-relaxed text-ink-muted text-pretty">{link.body}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function InsightChartBlock({
  chart,
  locale,
  alt,
}: {
  chart: InsightChartView;
  locale: Locale;
  alt: string;
}) {
  switch (chart.kind) {
    case "bays":
      return <BaysChart chart={chart} alt={alt} />;
    case "pairs":
      return <PairsChart chart={chart} locale={locale} />;
    case "hours":
      return <HoursChart chart={chart} locale={locale} />;
    case "reweigh":
      return <ReweighChart chart={chart} locale={locale} />;
    case "delivery":
      return <DeliveryChart chart={chart} locale={locale} />;
    case "process":
      return <ProcessChart chart={chart} />;
    case "connections":
      return <ConnectionsChart chart={chart} />;
    case "suite":
      return <SuiteChart chart={chart} locale={locale} />;
    case "layers":
      return <LayersChart chart={chart} />;
    case "matrix":
      return <MatrixChart chart={chart} />;
  }
}
