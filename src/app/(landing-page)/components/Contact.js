import { Linkedin, Youtube } from "lucide-react";

const Contact = () => {
    return (
        <section className="min-h-screen max-w-7xl mx-auto rounded-2xl flex items-center justify-start bg-white px-6 py-12">
            <div className="max-w-2xl text-left  ml-5">
                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
                    Let's work together!
                </h2>

                {/* Subtitle */}
                <p className="text-gray-400 mb-6 text-2xl">
                    Let's begin by discussing the details of the project to <br />
                    make sure we are on the same page.
                </p>

                {/* Email */}
                <div>
                    <a
                        href="mailto: maheshwari7004@gmail.com"
                        className="text-2xl font-semibold text-gray-900"
                    >
                        maheshwari7004@gmail.com
                    </a>
                    <div className="border-t-2 w-80 mt-2 border-black"></div>
                </div>

                {/* Social Icons */}
                <div className="flex items-center  justify-start mt-6 space-x-4 ">
                    <a
                        href="https://www.linkedin.com/in/rishabhmaheshwari30/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-black transition-colors duration-200"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href=" https://www.youtube.com/watch?v=u1rnt69HbmI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-black transition-colors duration-200"
                    >
                        <Youtube className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
