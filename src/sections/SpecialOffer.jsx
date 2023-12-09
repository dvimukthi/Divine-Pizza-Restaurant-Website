import { offer } from "../assets/images";
import Button from "../components/Button";

export const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col gap-10 max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="ont-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-light-red inline-block mt-3">
            Divine Special
          </span>{" "}
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          This month’s showcase pizza features a tomato base, mozzarella, bacon,
          cherry tomatoes, olives and sausages.
          <br />
          Priced from $23.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Try something new with our pizza dish of the month series. All pizzas
          available for a limited time only!
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Daily specials exclude the active Pizza Of The Month promotion.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Order Now" />
          <Button
            label="Our Menu"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
    </section>
  );
};

export default SpecialOffer;
