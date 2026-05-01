import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0c575a] text-white">
      <div className="container mx-auto">
        <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
          <div className="mx-auto space-y-2">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-white/50">
              Email: support@skillsphere.com
            </p>
            <p className="text-sm text-white/50">Phone: +880 1234 567890</p>
            <p className="text-sm text-white/50">Address: Dhaka, Bangladesh</p>
          </div>

          <div className="mx-auto space-y-2">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/50">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>About Us</li>
            </ul>
          </div>

          <div className="mx-auto space-y-2">
            <p className="font-semibold text-xl mb-4">Socials Links</p>
            <div className="flex items-center justify-center gap-2 text-black">
              <div className="w-6 h-6 rounded-full bg-white flex justify-center items-center">
                <FaInstagram></FaInstagram>
              </div>
              <div className="w-6 h-6 rounded-full bg-white flex justify-center items-center">
                <FaFacebook></FaFacebook>
              </div>
              <div className="w-6 h-6 rounded-full bg-white flex justify-center items-center">
                <FaXTwitter></FaXTwitter>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-500 py-4 text-center text-sm text-white/50">
          © 2026 SkillSphere. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
