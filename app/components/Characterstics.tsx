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
   <section className="flex w-full  bg-[#A7E8E81A] justify-center items-center ">
    <div className="w-full max-w-[1098px]   flex  p-[16px] gap-[60px]  justify-center">
      <ul className="flex items-center gap-[120px]">
        {items.map((item, i) => (
          <li 
          key={i}
          className="flex min-w-0 max-w-full font-nightSerif items-center gap-3 text-center sm:gap-4 sm:text-left">
            <span className="shrink-0">{item.icon}</span>
            {item.label}
          </li>
        ))}


      </ul>
    </div>
   </section>
  );
};

export default Characterstics;
