"use clients";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

interface arr {
  id: number;
  link: string;
  icon: React.ElementType;
}

const SocialLinks: React.FC = () => {
  // Array of links with icon components
  const links: arr[] = [
    { id: 1, link: "https://github.com/abedinwahid9", icon: FiGithub },
    {
      id: 2,

      link: "https://linkedin.com/abedinwahid",
      icon: FiLinkedin,
    },
    {
      id: 3,
      link: "https://www.facebook.com/abedin.wahid.0",
      icon: FiFacebook,
    },
    { id: 4, link: "https://wa.me/+8801716893200", icon: FaWhatsapp },
    { id: 4, link: "mailto:abedinwahid9@gmail.com", icon: MdAlternateEmail },
  ];

  return (
    <div className="py-5 flex gap-2">
      {links.map(({ id, link, icon: Icon }) => (
        <div
          key={id}
          className="w-8 h-8 dark:text-lg-button text-dr-button drop-shadow-[0px_0px_10px_rgba(30,136,168,0.8)] hover:drop-shadow-[0px_0px_10px_rgba(226,183,54,0.8)]"
        >
          <Link target="_blank" href={link}>
            <Icon className="w-full h-full" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
