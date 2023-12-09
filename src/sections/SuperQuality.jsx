/* eslint-disable react/no-unescaped-entities */
import Button from "../components/Button";
import { PizzaShop } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="ont-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-light-red inline-block mt-3">Divine Pizza</span>{" "}
          Restaurant
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          The moment you set foot into the doors of Divine Pizza Restaurant, you
          immediately feel like you’ve walked into Italy! The melodious Italian
          tarantella music, Italian waiters shouting across the room, patrons
          tapping their feet to the music, checkered table cloth, terracotta
          walls, aroma of garlic, Italian knick knacks on the walls are all part
          of the charm in this cosy home-style restaurant.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          We believe that our success is measured by our diner's satisfaction.
          Our day starts with you in mind.
        </p>
        <div className="mt-11">
          <Button label="Our Story" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={PizzaShop}
          alt="PizzaShop"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
