interface OfferProps {
  label?: string;
}

const Offer = ({ label = "Offer" }: OfferProps) => {
  return (
    <div className="flex min-h-10 items-center justify-center rounded-full bg-[#CF3F3F] px-3 py-2 text-xs font-semibold text-white">
      {label}
    </div>
  )
}

export default Offer
