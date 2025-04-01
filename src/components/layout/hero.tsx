import { Button } from "@/components/ui/button";
import { AvatarCircles } from "../magicui/avatar-circles";
import HeroVideoDialog from "../magicui/hero-video-dialog";

export function Hero() {


    const avatars = [
        {
            imageUrl: "https://avatars.githubusercontent.com/u/16860528",
            profileUrl: "https://github.com/dillionverma",
        },
        {
            imageUrl: "https://avatars.githubusercontent.com/u/20110627",
            profileUrl: "https://github.com/tomonarifeehan",
        },
        {
            imageUrl: "https://avatars.githubusercontent.com/u/106103625",
            profileUrl: "https://github.com/BankkRoll",
        },
        {
            imageUrl: "https://avatars.githubusercontent.com/u/59228569",
            profileUrl: "https://github.com/safethecode",
        },
        {
            imageUrl: "https://avatars.githubusercontent.com/u/59442788",
            profileUrl: "https://github.com/sanjay-mali",
        },
        {
            imageUrl: "https://avatars.githubusercontent.com/u/89768406",
            profileUrl: "https://github.com/itsarghyadas",
        },
    ];

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
            {/* Main Content Container */}
            <div className="max-w-4xl mx-auto text-center space-y-8">
                {/* Heading */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                    Grow Your Business With{" "}
                    <span className="text-primary">Automatic Review Requests          </span>
                </h1>


                {/* Description */}
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                    ⭐ More Reviews = More Trust = More Customers ⭐
                </p>

                {/* avatars */}
                <div className=" flex items-center justify-center">
                    <AvatarCircles numPeople={99} avatarUrls={avatars} />
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="text-lg px-8 py-6">
                        Start Totally Free
                    </Button>
                    {/* <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                        Watch Demo
                    </Button> */}
                </div>
            </div>

            {/* Video Container */}
            <div className="mt-16 w-full max-w-5xl mx-auto aspect-video overflow-hidden shadow-lg">
                <div className="relative">
                    <HeroVideoDialog
                        className="block dark:hidden"
                        animationStyle="top-in-bottom-out"
                        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                        thumbnailAlt="Hero Video"
                    />
                    <HeroVideoDialog
                        className="hidden dark:block"
                        animationStyle="top-in-bottom-out"
                        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                        thumbnailAlt="Hero Video"
                    />
                </div>
            </div>
        </section>
    );
}
