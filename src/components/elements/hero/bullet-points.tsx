import BulletPoint from "./bullet-point";

const bulletPoints = [
  "Unparalleled Authority in Your Niche",
  "30 Qualified Leads Every Month",
  "All in 90 Days - No Exceptions",
];

const BulletPoints = () => {
  return (
    <div className="flex items-center justify-between gap-6">
      {bulletPoints.map((point, index) => {
        return <BulletPoint key={index} name={point} />;
      })}
    </div>
  );
};
export default BulletPoints;
