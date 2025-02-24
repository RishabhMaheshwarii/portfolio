import Link from "next/link";
import { getPayload } from "../../../lib/payload";
import { ArrowRight } from "lucide-react";

const POSTS_PER_PAGE = 10;

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// Helper function to extract text from Lexical content
function extractTextFromLexical(content) {
  if (!content || !content.root || !content.root.children) {
    return '';
  }

  return content.root.children
    .map(node => {
      if (node.type === 'paragraph' && node.children) {
        return node.children
          .map(child => child.text || '')
          .join('')
      }
      return '';
    })
    .join(' ')
    .slice(0, 150) + '...';
}

export default async function PostsPage({ searchParams }) {
  const currentPage = Number(searchParams?.page) || 1;
  const skip = (currentPage - 1) * POSTS_PER_PAGE;

  const payload = await getPayload();
  
  const posts = await payload.find({
    collection: "posts",
    limit: POSTS_PER_PAGE,
    skip,
    sort: "-createdAt",
    where: {
      includedInBlog: {
        equals: true,
      },
    },
  });

  const totalPages = Math.ceil(posts.totalDocs / POSTS_PER_PAGE);

  return (
    <div className="max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8 py-16">
      {/* <h1 className="text-4xl font-bold text-gray-900 mb-8">Posts</h1> */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.docs.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id} className="group">
            <article className="p-6 rounded-2xl border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-200">
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-4">
                {post.title}
              </h2>

              {post.content && (
                <p className="text-gray-600 line-clamp-3 mb-4">
                  {extractTextFromLexical(post.content)}
                </p>
              )}

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
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

      {/* Pagination section remains the same */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => {
            const page = i + 1;
            const isCurrentPage = page === currentPage;

            return (
              <Link
                key={page}
                href={`/posts?page=${page}`}
                className={`px-4 py-2 rounded-md ${
                  isCurrentPage
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {page}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}