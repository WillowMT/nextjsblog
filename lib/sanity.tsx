import Image from "next/image";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { config } from "./config";
import SyntaxHighlighter from "react-syntax-highlighter";
import CopyToClipboard from "react-copy-to-clipboard";

if (!config.projectId) {
    throw Error("The Project ID is not set. Check your environment variables.");
}

export const client = createClient(config);

export const posts = client.fetch(`*[_type=="post"]`);

export default client;

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}

const mycomponent = {
    types: {
        image: ({ value }: any) => {
            return (
                <Image
                    width={1000}
                    height={300}
                    src={urlFor(value).url()}
                    alt=""
                />
            );
        },
        code: ({ value }: any) => {
            return (
                <SyntaxHighlighter
                    className="rounded-lg relative"
                    language={value.language}
                >
                    {value.code}
                    <CopyToClipboard text="gola">
                        <button className="absolute px-4 py-1 bg-red-100 top-0 left-0">
                            Gola
                        </button>
                    </CopyToClipboard>
                </SyntaxHighlighter>
            );
        },
    },
    block: {
        h2: ({ value, children }: any) => {
            return (
                <h2
                    style={{
                        fontSize: "3rem",
                        marginTop: "2rem",
                        marginBottom: "1rem",
                    }}
                    className="text-4xl mt-8"
                >
                    {children}
                </h2>
            );
        },
        h4: ({ value, children }: any) => {
            return (
                <h4
                    style={{
                        marginTop: "2rem",
                        marginBottom: "1rem",
                        fontSize: "2rem",
                    }}
                >
                    {children}
                </h4>
            );
        },
        code: ({ value, children }: any) => {
            return (
                <SyntaxHighlighter
                    className="rounded-lg relative"
                    language={value.language}
                >
                    {value.code}
                </SyntaxHighlighter>
            );
        },
    },
};

export const PortableTextComponent = ({ body }: any) => {
    return <PortableText value={body} components={mycomponent} />;
};
