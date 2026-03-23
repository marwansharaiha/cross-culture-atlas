import { LANGUAGE_FAMILIES } from "@/data/countries";

export default function Legend() {
  return (
    <div className="rounded-xl border border-border bg-card/90 backdrop-blur-sm p-3 shadow-lg max-w-[220px]">
      <h4 className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
        Language Families
      </h4>
      <div className="grid grid-cols-1 gap-1">
        {LANGUAGE_FAMILIES.slice(0, 10).map((lf) => (
          <div key={lf.key} className="flex items-center gap-2">
            <span
              className="h-2.5 w-2.5 rounded-full shrink-0"
              style={{ backgroundColor: lf.color }}
            />
            <span className="text-[11px] text-card-foreground">{lf.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 pt-2 border-t border-border">
        <p className="text-[10px] text-muted-foreground">
          <span className="font-medium">●</span> Dots show regional language diversity within countries
        </p>
      </div>
    </div>
  );
}
