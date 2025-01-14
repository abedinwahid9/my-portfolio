"use clients";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { motion } from "framer-motion";

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
    { id: 5, link: "mailto:abedinwahid9@gmail.com", icon: MdAlternateEmail },
  ];

  // icon shadow animation

  //

  return (
    <div className="md:py-5 py-2 flex gap-2">
      {links.map(({ id, link, icon: Icon }) => (
        <motion.div
          key={id}
          className="md:w-8 md:h-8 w-5 h-5 dark:text-lg-button hover:text-dr-link text-dr-button  drop-shadow-[0px_0px_10px_rgba(30,136,168,0.8)] "
        >
          <Link target="_blank" href={link}>
            <Icon className="w-full h-full" />
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default SocialLinks;
