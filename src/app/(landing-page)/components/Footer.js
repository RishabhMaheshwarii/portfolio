const Footer = () => {
  return (
    <footer className="w-full bg-black rounded-t-3xl mt-30">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center py-16">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center">
            Let&apos;s talk about your project:
          </h3>
          <a
            href="mailto:elizaveta.malash@gmail.com"
            className="text-xl md:text-2xl text-white transition-colors duration-200 font-thin tracking-wide hover:scale-105 transform"
          >
            maheshwari7004@mechanic.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;