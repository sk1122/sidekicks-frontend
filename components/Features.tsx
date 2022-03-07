import { FeatureCard } from "./Card"

export const Features = () => {
    return (
        <>
            <div className="lg:flex lg:justify-between lg:pt-10 lg:space-x-20">
                <FeatureCard title="Buidl to Earn" text="Helping you to earn on your side projects and keep the motivation on to build again and again" img='/build.png' />
                <FeatureCard title="Kicks by Believers" text="EASIEST way for mentors peers and advisors and believers to support your building and leave comments on projects" img="/peoplesmall.png" />
                <FeatureCard title="Best Project Launcher" text="Sidekicks is simple way to launch your project and get a eye of bounty givers , investors on an intresting project and get in touch" img="/wallet.png" />
            </div>

        </>
    )
}