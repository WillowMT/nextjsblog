export default function Hero() {
    return (
        <>
            <section className="text-center h-[70vh] text-black relative overflow-hidden">
                <div className="absolute w-full h-full top-0 left-0 z-20 flex place-content-center flex-col place-items-center">
                    <h1 className="text-5xl max-w-[90%] md:max-w-[60%] z-10 relative">
                        Welcome to my Blog!
                    </h1>
                    <p className="mt-6 text-lg max-w-[90%] md:max-w-[60%] z-10">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Temporibus, accusamus. Iure magnam inventore natus
                        saepe velit minus modi, quae odit quam, qui voluptatibus
                        obcaecati? Ipsa iure repudiandae sed ab iste.
                    </p>
                    <div className="mt-6 flex place-content-center place-items-center z-10 relative">
                        <button className="mx-1 px-6 py-2 bg-blue-800 text-white rounded-lg">
                            Join Us!
                        </button>
                        <button className="mx-1 px-6 py-2 bg-white border-blue-800 border text-blue-800 rounded-lg">
                            Browse
                        </button>
                    </div>
                </div>
                <div
                    id="scene"
                    className="absolute bottom-0 -left-10 w-[120%] h-[120%] z-10"
                >
                    <img
                        data-depth="0.3"
                        src="/doodle.svg"
                        className="absolute w-full h-full object-cover top-0 object-bottom"
                        alt="sth"
                    />
                </div>
            </section>
            <style jsx>{`
                .hero {
                    background: url("../assets/doodle.svg") no-repeat right
                        bottom;
                    background-size: cover;
                    position: relative;
                }
            `}</style>
        </>
    );
}
