import React from 'react';
import Layout from '../components/Layout';
import { Text } from '../components/SS';

function About() {
	return (
		<Layout>
			<Text fontSize={4}>
				<Text color="white">&lt;</Text>
				<Text color="teal">Greeting</Text>
				<Text color="orange">&nbsp;type=</Text>
				<Text color="green">"texan"</Text>
				<Text color="white">&gt;</Text>
			</Text>

			<p>Howdy y'all!...erm.</p>
			<p>
				I'm a frontend web developer based out of Austin, TX. With more than 5
				years in the industry, specializing in modern web apps using
				technologies like Node, React, GraphQL, Next.js, and more.
			</p>
			<p>
				Aside from work, I like golfing, biking, gardening, and skiing (which is
				great in Texas, I know).
			</p>
		</Layout>
	);
}

export default About;
