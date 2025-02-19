import { getPayload } from "../../../../lib/payload";
import { RichText as SerializedRichText } from "@payloadcms/richtext-lexical/react";
import { CalendarDays, Clock, User } from "lucide-react";
import Image from "next/image";
import { format } from "date-fns";

const Page = async ({ params }) => {
  const { postId } = await params;
  const payload = await getPayload();
  let post = await payload.find({
    collection: "posts",
    where: {
      id: {
        equals: postId,
      },
    },
  });

  if (!post) {
    return <div>Post not found</div>;
  }

  let data = post.docs[0];

  return (
    <section className="w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-24 mb-32">
          {/* Header Section */}
          <div className="relative mb-16 text-center">
            {/* Background gradient */}
            <div className="absolute inset-0 opacity-10 -z-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/50 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/60 rounded-full blur-2xl"></div>
            </div>

            {/* Category Tag */}
            <div className="inline-block mb-6">
              <span className="px-4 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                {data.category || "Blog Post"}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
              {data.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center justify-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="text-sm">
                  {data.author || "Rishabh Maheshwari"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                <span className="text-sm">
                  {format(new Date(data.createdAt), "MMMM d, yyyy")}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{data.readTime || "5 min read"}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          {data.featuredImage && (
            <Image
              src={data.featuredImage}
              alt={data.title}
              width={800}
              height={400}
              className="w-full h-[400px] object-cover"
            />
          )}

          {/* Content */}
          <article className="prose prose-lg max-w-none">
            <SerializedRichText
              className="payload-richtext 
      [&>*]:text-gray-900
      [&>p]:text-gray-900 
      [&>h1]:text-gray-900 
      [&>h2]:text-gray-900 
      [&>h2]:text-2xl 
      [&>h2]:font-bold 
      [&>h2]:mt-12 
      [&>h2]:mb-6
      [&>h3]:text-gray-900
      [&>h4]:text-gray-900
      [&>ul]:text-gray-900
      [&>ol]:text-gray-900
      [&>li]:text-gray-900
      [&>blockquote]:text-gray-900"
              data={data.content}
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Page;
