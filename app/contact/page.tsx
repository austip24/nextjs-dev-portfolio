import Link from "next/link";
import { Container } from "../../components/container";
import { PageTitle } from "../../components/pageTitle";
import { GithubIcon } from "../../components/icons/github";
import { LinkedinIcon } from "../../components/icons/linkedin";
import { links } from "../../data/links";

const ContactPage = () => {
	return (
		<div className="h-full overflow-hidden w-screen">
			<Container>
				<div className="text-center">
					<PageTitle>Contact</PageTitle>
				</div>
				<div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
					<div className="flex gap-12">
						<section className="flex flex-col gap-4 text-base md:text-lg lg:text-2xl">
							<div>
								<label>Email: </label>
								<span className="underline cursor-pointer select-all">
									austinpier24@gmail.com
								</span>
							</div>
							<div className="flex gap-8 items-center justify-center">
								<Link href={links.github}>
									<GithubIcon
										className="w-8 md:w-10 aspect-square hover:fill-white transition-colors"
										label="link to github"
									/>
								</Link>
								<Link href={links.linkedin}>
									<LinkedinIcon
										className="w-8 md:w-10 aspect-square hover:fill-white transition-colors"
										label="link to linkedin"
									/>
								</Link>
							</div>
						</section>
						<section></section>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default ContactPage;
