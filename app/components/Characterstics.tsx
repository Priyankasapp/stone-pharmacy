import IconClock from "./icons/IconClock";
import IconPerson from "./icons/IconPerson";
import IconShield from "./icons/IconShield";

const Characterstics = () => {
  const items = [

    { icon: <IconClock />, label: "Convenient Appointment Booking" },
    { icon: <IconPerson />, label: "Personalized Care" },
    { icon: <IconShield />, label: "Trusted Quality Assurance" },
  ];

  return (
    <ul
      className="
        flex w-full flex-wrap items-center justify-center
        gap-4 px-4 py-4 sm:gap-6
        rounded-[12px] 
        font-nyght text-[18px] sm:text-[20px]
        md:gap-[60px] lg:gap-[120px]
        bg-[#A7E8E81A]

      "
    >
      {items.map((item, i) => (
        <li
          key={i}
          className="flex min-w-0 max-w-full font-nightSerif items-center gap-3 text-center sm:gap-4 sm:text-left"
        >
          <span className="shrink-0 ">{item.icon}</span>
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default Characterstics;