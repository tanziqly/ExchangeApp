import Exchange from "../Components/Exchange";
import Title from "../Components/Title";

export default function ExchangePage() {
  return (
    <div className="flex flex-col items-center mt-24">
      <Title button={"hidden"} />
      <Exchange />
    </div>
  );
}
