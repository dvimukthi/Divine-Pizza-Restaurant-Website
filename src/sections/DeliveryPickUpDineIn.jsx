import { threeOptions } from "../constants";
import DeliveryPickUpDineInCard from "../components/DeliveryPickUpDineInCard";

const DeliveryPickUpDineIn = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {threeOptions.map((service) => (
        <DeliveryPickUpDineInCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default DeliveryPickUpDineIn;
