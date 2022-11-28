import React, { ReactNode } from 'react';
import Layout from '../components/Layout';
import { Box, Text } from '../components/SS';
import Link from '../components/Link';

interface AboutSectionProps {
	children: ReactNode;
	title: string;
	[_: string]: any;
}

export function Head() {
	return <title>About</title>;
}

function AboutSection({ children, title, ...rest }: AboutSectionProps) {
	return (
		<Box {...rest}>
			<Text fontSize={[3, 4, 4]}>
				<Text color="white">&lt;</Text>
				<Text color="teal">{title}</Text>
				<Text color="white">&gt;</Text>
			</Text>
			<Box>{children}</Box>
			<Text fontSize={[3, 4, 4]}>
				<Text color="white">&lt;/</Text>
				<Text color="teal">{title}</Text>
				<Text color="white">&gt;</Text>
			</Text>
		</Box>
	);
}

function About() {
	return (
		<Layout title="About - jonathanballands.me">
			<AboutSection title="Welcome" mb={5}>
				<p>Howdy!</p>
				<p>
					I'm a frontend web developer at Indeed based out of Austin, TX. I have
					more than 7 years of experience in web development, specializing in
					modern web apps using technologies like Node, React, GraphQL, Next.js,
					and more.
				</p>
				<p>
					In my spare time, I like golfing, biking, gardening, and skiing (which
					is great in Texas, I know).
				</p>
			</AboutSection>

			<AboutSection title="JunkDrawer">
				<Box>
					<p>
						<Text fontSize={3} color="pink" fontStyle="italic">
							wordart.cool
						</Text>
					</p>
					<p>
						Messing around with three.js via react-three-fiber. Create goofy
						wordart like it's 1999 and it's computer lab time.
					</p>
					<p>
						<Text mr={2}>
							<Link external to="https://wordart-cool.vercel.app/">
								Website
							</Link>
						</Text>
						<Link external to="https://github.com/jballands/wordart.cool">
							Github
						</Link>
					</p>
				</Box>
				<Box>
					<p>
						<Text fontSize={3} color="pink" fontStyle="italic">
							What Can I Catch Now?
						</Text>
					</p>
					<p>
						A small web app using React and Apollo that tells you what critters
						you can catch in Animal Crossing: New Horizons.
					</p>
					<p>
						<Text mr={2}>
							<Link external to="https://what-can-i-catch-now.vercel.app/">
								Website
							</Link>
						</Text>
						<Link
							external
							to="https://github.com/jballands/what-can-i-catch-now"
						>
							Github
						</Link>
					</p>
				</Box>
				<Box>
					<p>
						<Text fontSize={3} color="pink" fontStyle="italic">
							jb.me 4.1
						</Text>
					</p>
					<p>The newest version of my website written in Gatsby.</p>
					<p>
						<Link external to="https://github.com/jballands/jb.me">
							Github
						</Link>
					</p>
				</Box>
			</AboutSection>
		</Layout>
	);
}

export default About;
