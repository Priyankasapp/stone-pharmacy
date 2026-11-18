import Image from "next/image";
import NSH from "../../public/images/NSH.svg";
import RegisteredPharmacy from "../../public/images/registered-pharmacy.svg";
import secureSSL from "../../public/images/secureSSL.svg";
import FacebookIcon from "./FacebookIcon";
import TwitterIcon from "./TwitterIcon";
import InstagramIcon from "./InstagramIcon";
import { LinkedIn } from "./icons/LinkedIn";
import { MapIconFooter } from "./icons/MapIconFooter";
import { EmailIcon } from "./icons/EmailIcon";
import { PhoneIcon } from "./icons/PhoneIcon";
import ExternalLink from "./icons/ExternalLink";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-dark-charcoal px-4 py-12 sm:px-6 sm:py-16 lg:px-10 xl:px-16">
      <div className="flex w-full max-w-[1098px] flex-col gap-8 sm:gap-10">
        {/* row 1  */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 text-sm sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6 xl:gap-x-10">
          <div className="flex flex-col gap-4 font-[400] font-acumin">
            <div>
              <p className="text-white/50">GPhC Registration:</p>
              <p className="text-white">Pharmacy: 1234567</p>
              <Link href="#" className="flex items-center gap-1 text-ice-blue">
                Verify Registration <ExternalLink />
              </Link>
            </div>
            <div>
              <p className="text-white/50">Superinted Pharmacist:</p>
              <p className="text-white">Dr.Sarah Johnson</p>
              <p className="text-white">GPhC Reg: 2345678</p>
            </div>

            <div>
              <p className="text-white/50">Pharmacy Owner:</p>
              <p className="text-white">Digital Health Pharmacy Ltd</p>
              <p className="text-white">Company No: 12345678</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-poppins text-lg font-[400] text-white">Quick Links</p>
            <div className="flex flex-col gap-2 text-sm font-[400] text-white">
              
              <Link href='#'>Private Pharmacy</Link>
              <Link href='#'>Health & Advice</Link>
              <Link href='#'>Contact Us</Link>
              <Link href='#'>Care Home Service</Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-poppins text-lg font-[400] text-white">Other Links</p>
            <div className="flex flex-col gap-2 text-sm font-[400] text-white">
             
              <Link href='#'>NHS Pharmacy</Link>
              <Link href='#'>Private Pharmacy</Link>
              <Link href='#'>Health & Advice</Link>
              <Link href='#'>Contact Us</Link>
              <Link href="#">Care Home Service</Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:col-span-2 lg:col-span-1">
            <p className="font-poppins text-lg font-[400] text-white">Opening Hours</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-8">
              <div className="flex flex-col gap-2 text-sm font-[400] text-white">
                <p>Monday - Friday</p>
                <p>Saturday</p>
                <p>Sunday</p>
              </div>
              <div className="flex flex-col gap-2 text-sm font-[400] text-white">
                <p>09:00AM to 06:00PM</p>
                <p>11:00AM to 03:00PM</p>
                <p>Emergency Only</p>
              </div>
            </div>
          </div>
        </div>
        {/* row 2 */}
        <div className="grid grid-cols-1 gap-5 rounded-lg bg-white/5 p-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="flex min-w-0 items-center gap-4">
            <MapIconFooter />

            <div className="flex min-w-0 flex-col font-poppins font-[400]">
              <span className="text-silver">Pharmacy Address</span>
              <span className="break-words text-white">
                10 Mary Way, Murrayhaven, DD8 4EX
              </span>
            </div>
          </div>

          <div className="flex min-w-0 items-center gap-4">
            <EmailIcon />

            <div className="flex min-w-0 flex-col font-poppins font-[400]">
              <span className="text-silver">Email Address</span>
              <span className="break-words text-white">healthya@gmail.com</span>
            </div>
          </div>

          <div className="flex min-w-0 items-center gap-4">
            <PhoneIcon />

            <div className="flex min-w-0 flex-col font-poppins font-[400]">
              <span className="text-silver">Phone Number</span>
              <span className="text-white">+44 (123) 456-7890</span>
            </div>
          </div>
        </div>
        {/* row 3 */}
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:flex-wrap sm:justify-between sm:text-left">
          <span className="text-sm font-poppins font-[400] leading-5 text-white">
            Copyright 2025/WCAG Compilant
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Image
              className="h-8 w-auto"
              src={RegisteredPharmacy}
              alt="Registered pharmacy"
            />
            <Image className="h-8 w-auto" src={NSH} alt="NHS" />
            <Image className="h-8 w-auto" src={secureSSL} alt="Secure SSL" />
          </div>

          <div className="flex items-center gap-3">
            <Link href="#">
            <FacebookIcon />
            </Link>
            <Link href="#">
             <TwitterIcon />
            </Link>

            <Link href="#">
             <InstagramIcon />
            </Link>
            
           <Link href="#">
            <LinkedIn />
            </Link>
           
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
