import { Linkedin, Youtube } from "lucide-react";
const Footer = () => {
  return (
    <footer className="w-full bg-black rounded-t-3xl mt-30">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center py-16">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center">
            Let&apos;s talk about your project:
          </h3>
          <a
            href="mailto:maheshwari7004@gmail.com"
            className="text-xl md:text-2xl text-white transition-colors duration-200 font-thin tracking-wide hover:scale-105 transform mb-6"
          >
            maheshwari7004@gmail.com
          </a>

          <div className="flex items-center space-x-4 pl-8">
              <a
                href="https://www.linkedin.com/in/rishabhmaheshwari30/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href=" https://www.youtube.com/watch?v=u1rnt69HbmI"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg transition-colors duration-200"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;