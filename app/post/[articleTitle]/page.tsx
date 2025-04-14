import Footer from "@/components/Footer";
import Image from "next/image";
import Posts from "@/components/Posts";
import Link from "next/link";
import allArticles from "@/constants/all";
import CreationDate from "@/components/Date";
import Breadcrumb from "@/components/Breadcrumb";
import Post3 from "@/components/Post3";
import Newsletter from "@/components/Newsletter";
import React from "react";

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

  let headingCount = 0;

  return (
    <div className="bg-white min-h-screen">
      <div className="relative mt-20 px-6 md:px-10 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-10">
        {/* Main Article Section */}
        <div>
          <div className="max-w-4xl mt-4 text-black">
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
                <Link
                  href={`/authors/${article.authorName
                    .replace(/[^A-Za-z0-9]+/g, "-")
                    .toLowerCase()}`}
                >
                  <p className="text-pink-600 hover:text-black font-medium mt-1 ml-4 text-lg">
                    {article.authorName}
                  </p>
                </Link>
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

          {/* ARTICLE CONTENT */}
          <div className="text-black/85 tracking-normal mx-auto mt-6 text-lg leading-relaxed space-y-4 max-w-3xl">
            {article.contents.map((content, index) => {
              const isHeading = content.includes("***");
              if (isHeading) headingCount++;

              return (
                <React.Fragment key={index}>
                  {/* Show Trending Around the Web after 3rd heading */}
                  {headingCount === 3 && isHeading && (
                    <div className="mt-12 mb-10 p-6 rounded-xl bg-orange-100 shadow-md">
                      <h3 className="text-2xl uppercase font-bold text-orange-800 mb-4">
                        🔥 Trending Around the Web
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {allArticles
                          .filter(
                            (post) =>
                              post.section === article.section &&
                              post.title !== article.title
                          )
                          .slice(0, 4)
                          .map((item, idx) => (
                            <Link
                              key={idx}
                              href={`/post/${item.title.replace(
                                /[^A-Za-z0-9]+/g,
                                "-"
                              )}`}
                              className="hover:bg-orange-200 rounded-lg p-3 transition"
                            >
                              <p className="text-md font-semibold text-orange-900">
                                {item.title}
                              </p>
                            </Link>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* Show Discover More from Section after 5th heading */}
                  {headingCount === 4 && isHeading && (
                    <div className="mt-12 mb-10 p-5 rounded-xl bg-purple-50 shadow-md">
                      <h3 className="text-xl uppercase font-semibold text-purple-900 mb-4">
                        💡 Discover More from {article.section}
                      </h3>
                      <div className="flex flex-col sm:flex-row items-center gap-4">
                        {allArticles
                          .filter(
                            (post) =>
                              post.section === article.section &&
                              post.title !== article.title
                          )
                          .slice(4, 5)
                          .map((item, index) => (
                            <Link
                              key={index}
                              href={`/post/${item.title.replace(
                                /[^A-Za-z0-9]+/g,
                                "-"
                              )}`}
                              className="flex items-center gap-4 w-full hover:bg-purple-100 transition rounded-lg p-2"
                            >
                              <Image
                                src={`/articles/${item.imgUrl}`}
                                alt={item.title}
                                width={100}
                                height={80}
                                className="rounded-md object-cover w-[100px] h-[80px] shrink-0"
                              />
                              <div className="text-left">
                                <p className="text-sm uppercase text-purple-600 font-medium mb-1">
                                  {item.section}
                                </p>
                                <p className="text-base text-gray-800 font-semibold">
                                  {item.title}
                                </p>
                              </div>
                            </Link>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* Main Content Rendering */}
                  {/\.(jpg)$/i.test(content) ? (
                    <Image
                      width={600}
                      height={400}
                      src={`/articles/${content}`}
                      alt="Image"
                      className="mt-4 w-full rounded-lg"
                    />
                  ) : isHeading ? (
                    <strong className="block text-2xl sm:text-3xl mt-8">
                      {content.replace(/\*\*\*/g, "")}
                    </strong>
                  ) : (
                    <p>{content}</p>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="sticky top-44 self-start h-fit bg-orange-100 rounded-xl shadow-lg px-6 py-6 overflow-y-auto">
          <h2 className="text-black mt-2 hover:text-pink-500 hover:cursor-pointer text-left font-bold tracking-wide text-3xl sm:text-xl mb-6">
            Popular Articles
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {allArticles.slice(0, 3).map((post, index) => (
              <Link
                key={index}
                href={`/post/${post.title.replace(/[^A-Za-z0-9]+/g, "-")}`}
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
        <Newsletter />
      </div>

      {/* About Author */}
      <div className="max-w-4xl lg:mx-36 mx-6 mt-20 bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 rounded-3xl p-8 shadow-lg">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          About Author
        </h2>
        <div className="flex flex-col mt-4 sm:flex-row items-start sm:items-center gap-6">
          <Image
            src={`/authors/${article.authorName}.jpg`}
            alt={article.authorName}
            width={100}
            height={100}
            className="rounded-full object-cover size-24 shadow-md"
          />
          <div className="flex flex-col justify-center text-gray-800">
            <h3 className="text-2xl font-semibold mb-2">
              {article.authorName}
            </h3>
            <p className="text-md mb-4 leading-relaxed">
              With a passion for storytelling and a deep understanding of the
              subject, the author brings insightful, engaging content to life.
              Their writing blends clarity with creativity, making complex
              topics approachable.
            </p>
            <Link
              href={`/authors/${article.authorName
                .replace(/[^A-Za-z0-9]+/g, "-")
                .toLowerCase()}`}
              className="inline-block w-fit bg-purple-700 text-white font-semibold px-4 py-2 rounded-lg hover:bg-purple-800 transition"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* Related Articles Section */}
      <div className="mt-20">
        <h2 className="text-black ml-6 lg:ml-28 hover:text-blue-700 hover:cursor-pointer text-left font-bold tracking-wide text-3xl sm:text-4xl lg:text-4xl mb-8">
          You Might Also Like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center max-w-7xl mx-auto">
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
              >
                <div className="bg-grey-200 w-[330px]">
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
