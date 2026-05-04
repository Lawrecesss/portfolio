import ShineBorder from "@/components/magicui/shine-border";

const Certificates = ({
  certificate,
  description,
  issuer,
  date,
}: {
  certificate: string;
  description: string;
  issuer?: string;
  date?: string;
}) => {
  return (
    <div className="w-full h-full min-h-[260px]">
      <ShineBorder
        className="w-full h-full rounded-[2rem] bg-black/25 backdrop-blur-[18px] p-4 sm:p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.18)]"
        color={["#7C9EFE", "#A07CFE", "#5EBBFF"]}
      >
        <div className="flex h-full flex-col justify-start gap-4 sm:gap-6">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-[0.3em] text-slate-200 shadow-[0_0_16px_rgba(255,255,255,0.06)] sm:px-4 sm:py-1.5 sm:text-xs">
            Certified
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg font-semibold text-white sm:text-2xl">{certificate}</h3>
            <div className="space-y-1 text-xs sm:text-sm">
              {issuer && <p className="text-cyan-300 font-medium">{issuer}</p>}
              {date && <p className="text-slate-400">{date}</p>}
            </div>
          </div>

          <p className="hidden mt-auto text-slate-300 text-xs leading-6 sm:block sm:text-sm sm:leading-7">
            {description}
          </p>
        </div>
      </ShineBorder>
    </div>
  );
};

export default Certificates;
