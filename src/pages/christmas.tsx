import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Text, Box, Flex } from '../components/SS';
import Layout from '../components/Layout';
import Link from '../components/Link';
import ChristmasItem from '../components/ChristmasItem';

export function Head() {
	return <title>Jon's Christmas List 2022</title>;
}

function Christmas() {
	return (
		<Layout title="Christmas List 2022">
			<Flex flexDirection="column">
				<Text fontSize={5} color="cyan">
					Christmas 2022
				</Text>
			</Flex>

			<ChristmasItem
				name="MeUndies Lounge Pants"
				link="https://www.meundies.com/products/the-lounge-pant?pc=FXX"
			>
				<Text>Medium size, For Fox Sake pattern</Text>
				<Box width={['100%', '350px']} my={2}>
					<StaticImage src="../../static/for-fox-sake.png" alt="Pattern" />
				</Box>
			</ChristmasItem>

			<ChristmasItem
				name="Bombas Merino Wool Slope Sock"
				link="https://bombas.com/products/mens-merino-wool-slope-sock-4-pack?variant=black-pine-charcoal&size=m"
			>
				<Text>Medium size, Black Pine Charcoal color</Text>
				<Box width={['100%', '350px']} my={2}>
					<StaticImage
						src="../../static/black-pine-charcoal.png"
						alt="Pattern"
					/>
				</Box>
			</ChristmasItem>

			<ChristmasItem
				name="Puma IGNITE Fasten8 Spikeless Golf Shoes"
				link="https://www.pumagolf.com/products/ignite-fasten8-shoes?variant=40217983418441"
			>
				<Text>Size 8.5, Quiet Shade / Gold / Puma Black color</Text>
				<Box width={['100%', '350px']} my={2}>
					<StaticImage src="../../static/puma-golf-shoes.png" alt="Pattern" />
				</Box>
			</ChristmasItem>

			<ChristmasItem
				name="Puma CLOUDSPUN Progress Golf Hoodie"
				link="https://www.pumagolf.com/products/cloudspun-progress-golf-hoodie?variant=40218570129481"
			>
				<Text>Size Small, Warm Chestnut color</Text>
				<Box width={['100%', '350px']} my={2}>
					<StaticImage src="../../static/golf-hoodie.png" alt="Pattern" />
				</Box>
			</ChristmasItem>

			<ChristmasItem
				name="Sun Mountain 2023 3.5 LS STAND BAG"
				link="https://shop.sunmountain.com/2023-3-5-ls-28921-detail"
			>
				<Text>Pecan Spruce White color</Text>
				<Box width={['100%', '350px']} my={2}>
					<StaticImage src="../../static/golf-bag.png" alt="Pattern" />
				</Box>
			</ChristmasItem>

			<ChristmasItem
				name="Calphalon Classic Stainless Steel 10-Piece Cookware Set"
				link="https://www.calphalon.com/cookware/cookware-by-product-type/cookware-sets/calphalon-classic-stainless-steel-10-piece-cookware-set/SAP_2095338.html"
			>
				<Text>Stainless type</Text>
				<Box width={['100%', '350px']} my={2}>
					<StaticImage src="../../static/cookware.png" alt="Pattern" />
				</Box>
			</ChristmasItem>
		</Layout>
	);
}

export default Christmas;
