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
        gap-[24px] px-4 py-[16px]
        rounded-[12px] bg-button-text/10
        font-nyght text-[18px] sm:text-[20px]
        md:gap-[60px] lg:gap-[120px]
      "
    >
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-center gap-[12px] sm:gap-[16px] whitespace-nowrap"
        >
          <span className="shrink-0">{item.icon}</span>
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default Characterstics;