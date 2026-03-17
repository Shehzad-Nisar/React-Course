export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="./src/assets/virat3.jpeg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Passion, discipline, and an unbreakable mindset — Kohli.
                        </h2>
                        <p className="mt-6 text-gray-600">
                           Virat Kohli is known for his incredible dedication, aggressive playing style, and unmatched consistency in cricket. His commitment to fitness and continuous improvement has made him one of the greatest modern-day cricketers. With every match, he inspires millions through his hard work, confidence, and hunger to achieve more.


                        </p>
                        <p className="mt-4 text-gray-600">
                           His story reflects determination and resilience, showing how strong belief and relentless effort can lead to extraordinary success. From chasing big targets to leading his team under pressure, Kohli represents the true spirit of excellence and never giving up.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}