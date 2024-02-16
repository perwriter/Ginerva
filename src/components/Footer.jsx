import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaSlack, FaWhatsapp } from "react-icons/fa";
// import Example from "./input";

const FooterLinks = [
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Destinations",
    link: "/destination",
  },
  {
    title: "Review",
    link: "/reviews",
  },
  {
    title: "Career",
    link: "/career",
  },
];
const HelpLinks = [
  {
    title: "Customer Support",
    link: "/support",
  },
  {
    title: "Visa Application",
    link: "/visa_details",
  },
  {
    title: "Terms & Conditions",
    link: "/terms",
  },
  {
    title: "Privacy Policy",
    link: "/#policy",
  },
];
const ResourcesLinks = [
  {
    title: "SignUp to Own NewsLetter to Get Update About Our lateste Improvement",
    link: "/#",
  },
  // {
  //   title: "Worldwide",
  //   link: "#",
  // },
  {

  },
];
const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <section className="container py-10">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              Ginerva
            </h1>
            <p className="text-sm">
            Ginerva Visa Consultancy : We Get You{" "}
              <span className="text-primary font-semibold">Visa</span> and{" "}
              <span className=" font-semibold text-primary">You Pack The Bags</span>{" "}
              Depart.
            </p>
            <br />
            {/* Social Handle */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#">
                <FaSlack className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaWhatsapp className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-2xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Pages
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Help
                </h1>
                <ul className="flex flex-col gap-3">
                  {HelpLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  NewsLetter
                </h1>
                <ul className="flex flex-col gap-3">
                  {ResourcesLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
                {/* <Example/> */}
                {/* <input type="text" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
