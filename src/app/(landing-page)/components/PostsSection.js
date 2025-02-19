import Link from "next/link";
import { getPayload } from "../../../lib/payload";
import { ArrowRight } from "lucide-react";

function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

const PostsSection = async () => {
  const payload = await getPayload();
  const posts = await payload.find({
    collection: "posts",
    limit: 2,
    sort: "-createdAt",
    where: {
      includedInBlog: {
        equals: true,
      },
    },
  });

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-16 p-8 bg-white overflow-hidden rounded-xl relative">
          {/* Background gradient */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/50 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/60 rounded-full blur-2xl"></div>
            <div className="absolute top-0 right-1/3 w-48 h-48 bg-orange-400/70 rounded-full blur-xl"></div>
          </div>

          {/* Content */}
          <div className="relative">
            <div className="flex flex-col md:flex-row gap-12 sm:gap-24">
              {/* Header Section */}
              <div className="md:w-72">
                <h2 className="text-4xl font-bold text-gray-900">
                  Latest from <br /> the blog
                </h2>
                <p className="mt-4 text-xl text-gray-600">
                  Insights on product management
                </p>
              </div>

              {/* Posts Grid */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-12">
                {posts.docs.map((post) => (
                  <Link
                    href={`/posts/${post.id}`}
                    key={post.id}
                    className="group block"
                  >
                    <article className="p-6 rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-200">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-4">
                        {post.title}
                      </h3>

                      {post.excerpt && (
                        <p className="text-gray-600 line-clamp-2 mb-4">
                          {post.excerpt}
                        </p>
                      )}

                      <div className="flex items-center justify-between">
                        <time className="text-sm text-gray-500">
                          {formatDate(post.createdAt)}
                        </time>
                        <span className="text-blue-600 transform group-hover:translate-x-1 transition-all">
                          <ArrowRight className="w-5 h-5" />
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>

            {/* View All Link */}
            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-500 transition-colors"
              >
                <span>View all posts</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostsSection;
