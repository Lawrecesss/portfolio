import ShineBorder from "@/components/magicui/shine-border";

const Certificates = ({
  certificate,
  image,
}: {
  certificate: string;
  image: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <p className=" text-white font-semibold text-xl my-5">{certificate}</p>
      <ShineBorder
        className="w-[90%] rounded-lg bg-black md:shadow-xl"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <img className="rounded-lg" src={image} />
      </ShineBorder>
    </div>
  );
};

export default Certificates;
