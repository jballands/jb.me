import React from 'react';
import { Text } from '../components/SS';
import Layout from '../components/Layout';
import Link from '../components/Link';

function NotFoundPage() {
	return (
		<Layout title="Not Found - jonathanballands.me">
			<Text fontSize={5} color="cyan">
				404
			</Text>
			<p>Looks like this page doesn&apos;t exist. Sorry about that.</p>
			<p>
				<Link to="/">Home</Link>
			</p>
		</Layout>
	);
}

export default NotFoundPage;
