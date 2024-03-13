import { PropsWithChildren } from "react";

const BenefitWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="benefit min-h-[400px] bg-LIGHTBLACK rounded-3xl overflow-hidden p-6 relative flex flex-col items-start justify-start gap-[38px]">
      {children}
    </div>
  );
};
export default BenefitWrapper;
