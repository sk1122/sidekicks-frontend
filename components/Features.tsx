import { FeatureCard } from "./Card"

export const Features = () => {
    return (
        <>
            <div className="lg:flex lg:justify-between lg:pt-10 lg:space-x-20">
                <FeatureCard title="Gauranteed Safety" text={"Millions of businesses of all sizes—from startups to large enterprises—use Wagpay’s software and APIs to accept."} img='/build.png' />
                <FeatureCard title="Gauranteed Safety" text="Millions of businesses of all sizes—from startups to large enterprises—use Wagpay’s software and APIs to accept." img="/peoplesmall.png" />
                <FeatureCard title="Gauranteed Safety" text="Millions of businesses of all sizes—from startups to large enterprises—use Wagpay’s software and APIs to accept." img="/wallet.png" />
            </div>

        </>
    )
}