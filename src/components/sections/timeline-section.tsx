import Image from "next/image";

const TimelineSection = () => {
  return <div className="hidden lg:block dotted-bg py-12 px-0">

    <div className="">
      <h2 className="text-center text-2xl lg:text-4xl font-extrabold text-black uppercase font-familjen">
        The Timeline is Talking
      </h2>
    </div>

    <div className="flex items-center justify-between relative mt-[50pt]">
      <div className="w-full h-96 ">

      </div>

      <Image alt="image" src="/attachments/timeline.svg" height={2000} width={2000} className="absolute w-fit left-[20%] top-0" />
    </div>
  </div >;
};

export default TimelineSection;
