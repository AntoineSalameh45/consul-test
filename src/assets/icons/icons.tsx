import appointmentSvg from "./appointmentSvg.svg?url";
import emailSvg from "./emailSvg.svg?url";
import faxSvg from "./faxSvg.svg?url";
import locationSvg from "./locationSvg.svg?url";
import paperworkSvg from "./paperworkSvg.svg?url";
import passportSvg from "./passportSvg.svg?url";
import phoneSvg from "./phoneSvg.svg?url";
import visaSvg from "./visaSvg.svg?url";
import arrowSvg from "./arrowupSvg.svg?url";

type IconProps = {
  className?: string;
  alt?: string;
};

export const AppointmentIcon = ({
  className,
  alt = "Appointment",
}: IconProps) => (
  <img src={appointmentSvg} alt={alt} className={className} draggable={false} />
);

export const LocationIcon = ({ className, alt = "Location" }: IconProps) => (
  <img src={locationSvg} alt={alt} className={className} draggable={false} />
);

export const EmailIcon = ({ className, alt = "Email" }: IconProps) => (
  <img src={emailSvg} alt={alt} className={className} draggable={false} />
);

export const FaxIcon = ({ className, alt = "Fax" }: IconProps) => (
  <img src={faxSvg} alt={alt} className={className} draggable={false} />
);

export const PaperworkIcon = ({ className, alt = "Paperwork" }: IconProps) => (
  <img src={paperworkSvg} alt={alt} className={className} draggable={false} />
);

export const PassportIcon = ({ className, alt = "Passport" }: IconProps) => (
  <img src={passportSvg} alt={alt} className={className} draggable={false} />
);

export const PhoneIcon = ({ className, alt = "Phone" }: IconProps) => (
  <img src={phoneSvg} alt={alt} className={className} draggable={false} />
);

export const VisaIcon = ({ className, alt = "Visa" }: IconProps) => (
  <img src={visaSvg} alt={alt} className={className} draggable={false} />
);

export const ArrowUpIcon = ({ className, alt = "ArrowUp" }: IconProps) => (
  <img src={arrowSvg} alt={alt} className={className} draggable={false} />
);
