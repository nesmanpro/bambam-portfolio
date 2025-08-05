import { IconGit } from "../components/icons/IconGit"
import { IconJS } from "../components/icons/IconJS"
import { IconMongo } from "../components/icons/IconMongo"
import { IconReact } from "../components/icons/IconReact"
import { IconTailwind } from "../components/icons/IconTailwind"

export const NewHero = () => {
    return (
        <div className="h-svh w-full flex justify-center items-center gap-6 bg-gray-950">

            <header>
                <h1>BamBam Dev</h1>
                <p></p>
            </header>
            <IconJS />
            <IconGit />
            <IconReact />
            <IconMongo />
            <IconTailwind />
        </div>
    )
}
