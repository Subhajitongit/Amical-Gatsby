import React from "react"
import { graphql, Link } from "gatsby"
import BlogCard from "../../components/BlogCard"
import { Layout } from "../../components/layout"

export default function Blog({ data }) {
  return (
    <div>
      {/* Navbar for blogs screen */}
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" class="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Amical
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {/* Navbar for blog screen ends */}

      {/* Title section begins */}
      <div className="px-20">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl mt-10 ">
          Reading{" "}
          <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500 ">
            blogs
          </mark>{" "}
          make you smarter!
        </h1>
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Here at Amical we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
      </div>
      {/* Title section ends */}

      <div className="pt-10 flex justify-around">
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, slug }) => (
          <Layout key={id}>
            <BlogCard
              title={frontmatter.title}
              fwd={`${frontmatter.slug}`}
              src="https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg"
            />
          </Layout>
        ))}
      </div>
    </div>
  )
}

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
        }
        id
      }
    }
  }
`
