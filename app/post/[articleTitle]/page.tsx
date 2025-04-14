import Footer from "@/components/Footer";
import Image from "next/image";
import Posts from "@/components/Posts";
import Link from "next/link";
import allArticles from "@/constants/all";
import CreationDate from "@/components/Date";
import Breadcrumb from "@/components/Breadcrumb";
import Post3 from "@/components/Post3";
import Newsletter from "@/components/Newsletter";

const formatTitle = (title: string) => title.replace(/[^A-Za-z0-9]+/g, "-");

export function generateStaticParams(): { articleTitle: string }[] {
  return allArticles.map(({ title }) => ({
    articleTitle: formatTitle(title),
  }));
}

const PostPage = async ({
  params,
}: {
  params: Promise<{ articleTitle: string }>;
}) => {
  const { articleTitle } = await params;
  const article = allArticles.find(
    ({ title }) => formatTitle(title) === articleTitle
  );

  if (!article) return <h1>Post not found</h1>;

  return (
    <div className="bg-white">

      <div className="relative mt-20 px-6 md:px-10 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-10">
        {/* Main Article Section */}
        <div>
        <div className="max-w-4xl mt-4 text-black  ">
        <Breadcrumb />
        </div>
          <h1 className="text-3xl mt-10 max-w-4xl mx-auto text-gray-800 sm:text-4xl lg:text-4xl font-extrabold mb-6">
            {article.title}
          </h1>


          <Image
            src={`/articles/${article.imgUrl}`}
            width={1000}
            height={1000}
            alt={article.title}
            className="w-full max-w-4xl mt-12 mx-auto rounded-lg"
          />

          <div className="flex flex-col mt-8 max-w-3xl mx-auto sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mb-6">
            <div className="text-gray-800 w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3">
              {/* Author Info */}
              <div className="flex items-center gap-2">
                <Image
                  src={`/authors/${article.authorName}.jpg`}
                  alt={article.authorName}
                  width={50}
                  height={50}
                  className="rounded-full object-cover object-center size-8"
                />
                <p className="text-lg lg:text-md">{article.authorName}</p>
              </div>

              {/* Date + Read Time */}
              <div className="w-full flex justify-between items-center lg:pr-1 lg:w-auto lg:justify-start gap-4 text-sm lg:text-base text-gray-500">
                <p>
                  <CreationDate articleNumber={article.articleNumber} />
                </p>
                <p>Read Time: {article.readTime}</p>
              </div>
            </div>
          </div>

          <div className="text-black/85 tracking-normal mx-auto mt-6 text-lg leading-relaxed space-y-4 max-w-3xl">
            {article.contents.map((content, index) =>
              /\.(jpg)$/i.test(content) ? (
                <Image
                  key={index}
                  width={600}
                  height={400}
                  src={`/articles/${content}`}
                  alt="Image"
                  className="mt-4 w-full rounded-lg"
                />
              ) : (
                <p key={index}>
                  {content.includes("***") ? (
                    <strong className="block text-2xl sm:text-3xl mt-8">
                      {content.replace(/\*\*\*/g, "")}
                    </strong>
                  ) : (
                    content
                  )}
                </p>
              )
            )}
          </div>
        </div>

        {/* Sidebar: Sticky Popular Articles */}
        <div className="sticky top-44 self-start h-fit  bg-orange-100 rounded-xl shadow-lg px-6 py-6 overflow-y-auto">
          <h2 className="text-black mt-2 hover:text-pink-500 hover:cursor-pointer text-left font-bold tracking-wide text-3xl sm:text-xl mb-6">
            Popular Articles
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {allArticles.slice(0, 3).map((post, index) => (
              <Link
                key={index}
                href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
                passHref
              >
                <div className="bg-grey-200 mt-2 w-full">
                  <Post3
                    pimg={`/articles/${post.imgUrl}`}
                    pheading={post.title}
                    pcontent={post.contents}
                    articleNumber={post.articleNumber}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl lg:mx-36 mt-20">
        <Newsletter/>
      </div>

      {/* Related Articles Section */}
      <div className=" mt-20">
          <h2 className="text-black ml-6 lg:ml-28 hover:text-blue-700 hover:cursor-pointer 
          text-left  font-bold tracking-wide text-3xl  sm:text-4xl lg:text-4xl mb-8">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center max-w-7xl mx-auto ">
            {allArticles
              .filter(
                (post) =>
                  post.section === article.section &&
                  post.title !== article.title
              )
              .slice(15, 19)
              .map((post, index) => (
                <Link
                  key={index}
                  href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
                  passHref
                >
                  <div className="bg-grey-200  w-[330px]">
                    <Posts
                      pimg={`/articles/${post.imgUrl}`}
                      pheading={post.title}
                      pcontent={post.contents}
                      articleNumber={post.articleNumber}
                    />
                  </div>
                </Link>
              ))}
          </div>
        </div>

      <div className="h-20 bg-white"></div>
      <Footer />
    </div>
  );
};

export default PostPage;
