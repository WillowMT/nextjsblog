import Head from "next/head";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import { useRouter } from "next/router";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity";
import MiniBlog, { MiniBlogTypes } from "@/components/MiniBlog";
import Footer from "@/components/Footer";

const query = groq`*[_type=="post"]`;

export default function Home({ postdata }: any) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Nav />
                <Hero />
                <section className="text-gray-400 bg-[#000045] body-font overflow-hidden">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="-my-8 divide-y-2 divide-gray-800">
                            {postdata.map(
                                ({
                                    categories,
                                    date,
                                    title,
                                    description,
                                    trending,
                                    slug,
                                }: MiniBlogTypes) => {
                                    return (
                                        <MiniBlog
                                            key={1}
                                            categories={categories}
                                            date={date}
                                            title={title}
                                            description={description}
                                            trending={trending}
                                            slug={slug}
                                        />
                                    );
                                }
                            )}
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    );
}

export async function getStaticProps({ params }: any) {
    const post = await client.fetch(query);

    return {
        props: {
            postdata: post,
        },
        revalidate: 10,
    };
}
