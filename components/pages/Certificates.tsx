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
    <div className="flex flex-col items-center]">
      <ShineBorder
        className="w-full rounded-xl bg-black/50 backdrop-blur-sm md:shadow-xl p-8 min-h-[300px]"
        color={["#A07CFE", "#7C9EFE", "#5EBBFF"]}
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-bold text-2xl">{certificate}</h3>
          <div className="flex flex-col gap-1">
            {issuer && (
              <p className="text-gray-400 text-sm font-medium">{issuer}</p>
            )}
            {date && (
              <p className="text-gray-500 text-sm">{date}</p>
            )}
          </div>
          <p className="text-gray-300 text-base leading-relaxed">{description}</p>
        </div>
      </ShineBorder>
    </div>
  );
};

export default Certificates;
