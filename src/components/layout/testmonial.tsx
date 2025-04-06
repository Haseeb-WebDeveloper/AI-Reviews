import Iphone15Pro from "../magicui/iphone-15-pro";

export function Testmonial() {
    return (
        <section id="testimonials"  className="py-20 bg-foreground/5">
            <div  className="max-w-[1050px] overflow-hidden mx-auto px-6 md:px-0 space-y-12">
                <div>
                    <h2 className="text-5xl w-full text-center sm:text-6xl lg:text-7xl font-bold tracking-tight">
                        Testiminials
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                    <div className="space-y-2 relative">
                        <Iphone15Pro
                            className="size-full max-h-[80vh]"
                            videoSrc="https://www.youtube.com/embed/1zHCIsNwZvw?autoplay=1&loop=1&mute=1&playlist=1zHCIsNwZvw"
                        />
                        <div className="absolute top-0 lef-0 w-full h-full rounded-[2rem] bg-gradient-to-b from-transparent from-70% to-foreground"></div>
                        <div className=" text-background absolute bottom-[0%] py-4 rounded-b-4xl left-1/2 -translate-x-1/2 bg-primary w-full mx-auto text-center">
                            <p className="text-[2.5rem] font-semibold ">+6688%</p>
                            <p>Review in 6 Months</p>
                        </div>
                    </div>
                    <div className="space-y-2 relative">
                        <Iphone15Pro
                            className="size-full max-h-[80vh]"
                            videoSrc="https://www.youtube.com/embed/1zHCIsNwZvw?autoplay=1&loop=1&mute=1&playlist=1zHCIsNwZvw"
                        />
                        <div className="absolute top-0 lef-0 w-full h-full rounded-[2rem] bg-gradient-to-b from-transparent from-70% to-foreground"></div>
                        <div className=" text-background absolute bottom-[0%] py-4 rounded-b-4xl left-1/2 -translate-x-1/2 bg-primary w-full mx-auto text-center">
                            <p className="text-[2.5rem] font-semibold ">+6688%</p>
                            <p>Review in 6 Months</p>
                        </div>
                    </div>
                    <div className="space-y-2 relative">
                        <Iphone15Pro
                            className="size-full max-h-[80vh]"
                            videoSrc="https://www.youtube.com/embed/1zHCIsNwZvw?autoplay=1&loop=1&mute=1&playlist=1zHCIsNwZvw"
                        />
                        <div className="absolute top-0 lef-0 w-full h-full rounded-[2rem] bg-gradient-to-b from-transparent from-70% to-foreground"></div>
                        <div className=" text-background absolute bottom-[0%] py-4 rounded-b-4xl left-1/2 -translate-x-1/2 bg-primary w-full mx-auto text-center">
                            <p className="text-[2.5rem] font-semibold ">+6688%</p>
                            <p>Review in 6 Months</p>
                        </div>
                    </div>
                    <div className="space-y-2 relative">
                        <Iphone15Pro
                            className="size-full max-h-[80vh]"
                            videoSrc="https://www.youtube.com/embed/1zHCIsNwZvw?autoplay=1&loop=1&mute=1&playlist=1zHCIsNwZvw"
                        />
                        <div className="absolute top-0 lef-0 w-full h-full rounded-[2rem] bg-gradient-to-b from-transparent from-70% to-foreground"></div>
                        <div className=" text-background absolute bottom-[0%] py-4 rounded-b-4xl left-1/2 -translate-x-1/2 bg-primary w-full mx-auto text-center">
                            <p className="text-[2.5rem] font-semibold ">+6000%</p>
                            <p>Review in 6 Months</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
