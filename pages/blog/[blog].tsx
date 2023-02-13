import Nav from "@/components/Blog/Nav";
import { posts } from "@/lib/sanity";
import Head from "next/head";
import Content from "@/components/Blog/Content";
import { urlFor } from "@/lib/sanity";
import Footer from "@/components/Blog/Footer";

export default function Blog({ blog }: any) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <title>{blog.title}</title>
            </Head>
            <div className="max-w-3xl m-auto p-5">
                <Nav />
                <Content blog={blog} imgUrl={urlFor(blog.mainImage).url()} />
                <Footer />
            </div>
        </>
    );
}

export async function getStaticPaths() {
    const myPosts = await posts;

    return {
        paths: myPosts.map((p: any) => {
            return { params: { blog: p.slug.current } };
        }),
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: { blog: string } }) {
    const myPosts = await posts;
    const { blog } = params;
    const post = myPosts.filter((p: any) => {
        if (blog == p.slug.current) {
            return p;
        }
    });

    return {
        props: { blog: post[0] },
    };
}
