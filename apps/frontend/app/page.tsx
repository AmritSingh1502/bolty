import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Prompt as PromptFont } from "next/font/google";
import { Appbar } from "@/components/Appbar";
import TemplateButton from "@/components/TemplateButton";
import { Prompt } from "@/components/Prompt";

const prompt = PromptFont({
    weight: "400",
    subsets: ["latin"],
});

export default function Home() {
    return (
        <div className={prompt.className}>
            <Appbar />
            <div className="max-w-2xl mx-auto pt-32">
                <div className="text-2xl font-bold text-center">
                    What do you want to build?
                </div>
                <div className="text-sm text-muted-foreground text-center p-2">
                    Prompt, click generate and watch your app come to life
                </div>
                <div className="pt-4">
                    <Prompt />
                </div>
            </div>
            <div className="max-w-2xl mx-auto pt-4">
                <TemplateButton />
            </div>
        </div>
    );
}
