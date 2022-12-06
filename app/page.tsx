import Image from "next/image";
import Link from "next/link";
import { ClientImage } from "../components/ClientImage";
import { Container } from "../components/container";
import {
	Hero,
	HeroSectionTitle,
	HeroSubtitle,
	HeroTitle,
} from "../components/hero";
import { HorizontalSeparator } from "../components/separator";
import { useWindowSize } from "../hooks/useWindowSize";

const Homepage = () => {
	return (
		<div className="flex flex-col gap-4">
			<Hero>
				<HeroSectionTitle>Design</HeroSectionTitle>
				<HeroTitle>Austin Pierson</HeroTitle>
				<HeroSubtitle>Software Engineer / Web Developer</HeroSubtitle>

				<div className="flex items-center gap-2 md:gap-4">
					<Link href="">
						<Image src="/Github.svg" alt="github" width="35" height="35" />
					</Link>
					<Link href="">
						<Image src="/Linkedin.svg" alt="github" width="35" height="35" />
					</Link>
				</div>
			</Hero>

			<section className="relative h-[284px]">
				{/* <Image src="/horizontal_separator.svg" alt="separator" fill />

				<Image
					src="/CoverPhoto.png"
					alt="photo of me"
					width={582}
					height={653}
					className="absolute right-[11.9rem] -top-80"
				/> */}

				<div className="relative">
					<HorizontalSeparator />
					<ClientImage
						src="/CoverPhoto.png"
						alt="photo of me"
						width={582}
						height={653}
					/>
				</div>

				<Container>
					<section className="absolute top-12 text-xl max-w-xl flex flex-col gap-2">
						<p className="font-semibold">
							Steve Jobs, co-founder of Apple, Inc.
						</p>
						<q className="text-neutral italic">
							Be a yardstick of quality. Some people aren&apos;t used to an
							environment where excellence is expected.
						</q>
					</section>
				</Container>
			</section>
		</div>
	);
};

export default Homepage;
