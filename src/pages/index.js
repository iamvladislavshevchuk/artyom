import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import { MdArrowDownward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://uploads.quarkly.io/603cb0ce8db767001e87b28b/images/robot_4x3_3.jpg?v=2021-03-01T09:18:21.061Z) center/cover"
			padding="64px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
			height="100vh"
			flex-direction="column"
			justify-content="center"
		>
			<Stack>
				<StackItem width="75%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
						Ти Найкращий
					</Text>
					<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
						Артьом, дуже дякую за 3D. Воно ахуєнне. Ми з тобою всіх порвемо, обіцяю!
					</Text>
				</StackItem>
			</Stack>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Тут ще більше компліментів
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Section
			padding="140px 0"
			sm-padding="40px 0"
			background="linear-gradient(0deg,rgba(0,0,0,.2) 0%,rgba(0,0,0,.2) 100%),--color-dark url(https://uploads.quarkly.io/603cb0ce8db767001e87b28b/images/SleepyCat%2059.jpg?v=2021-03-01T09:23:45.381Z) 50% 15%/cover"
			color="--light"
			font="--base"
			height="100vh"
			flex-direction="column"
			justify-content="center"
		>
			<Box>
				<Text
					as="h1"
					margin="0 0 96px 0"
					text-align="center"
					font="--headline1"
					lg-font="200 42px/1.2 --fontFamily-sans"
					lg-letter-spacing="20px"
				>
					Ти робиш кльові речі.{" "}
					<br />
					Ти робиш те, що 99% людей не можуть.
				</Text>
			</Box>
			<Stack>
				<StackItem
					width="25%"
					lg-width="50%"
					sm-width="100%"
					font="--lead"
					text-transform="uppercase"
					letter-spacing="1px"
				>
					<Text margin="0px">
						УСЕ це - твоя заслуга
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Text margin="0px">
						Усі твої роботи — це те, що я ніколи не зміг би повторити.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Text margin="0px">
						Ти знаєш про кольори більше, ніж я. Ти знаєш про світло більше, ніж я.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Text margin="0px">
						Тому ти незамінний в цій компанії. Тому без тебе я не зможу досягнути того, що можу досягнути з тобою :)
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="linear-gradient(0deg,rgba(0,0,0,.2) 0%,rgba(0,0,0,.2) 100%),url(https://uploads.quarkly.io/603cb0ce8db767001e87b28b/images/Astronaut%203_4%202.jpg?v=2021-03-01T09:41:51.905Z) 0% 0%/cover"
			display="flex"
			flex-direction="column"
			height="100vh"
		>
			<Text
				font="--base"
				text-transform="uppercase"
				letter-spacing="1px"
				max-width="850px"
				color="--light"
				margin="0px 0px 8px 0px"
			>
				Eyebrow
			</Text>
			<Stack color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<Text
						as="h1"
						margin="0px"
						font="--headline1"
						md-font="--headline2"
						color="--light"
						max-width="850px"
					>
						Я радий, що ти зі мною
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text color="--light" margin="0px">
						Разом ми зробимо дуже кльові речі. Разом ми зробимо так, щоб нам не прийшлося перейматися за гроші.
					</Text>
				</StackItem>
				<StackItem width="25%" md-width="50%" sm-width="100%">
					<Text color="--light" margin="0px">
						Ми будемо найкращими серед всіх інших!
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});