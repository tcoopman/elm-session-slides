// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  S,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  elmLogo: require("../assets/elm-logo.png"),
  elmTesting: require("../assets/elm-testing.png"),
  brainstorm: require("../assets/brainstorm.jpg"),
  gol: require("../assets/gol.png"),
  examples: require("../assets/examples.png"),
  hoogle: require("../assets/hoogle.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
	jeep: require("../assets/jeep.png")
};

preloader(images);

const theme = createTheme({
  primary: "#60B4CC",
  secondary: "rgb(92, 238, 102)",
  text: "black",
  flash: "rgb(240, 28, 28)"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["slide"]} bgColor="white" notes="">
            <Image src={images.elmLogo.replace("/", "")} margin="0px auto 40px" height="400px"/>
            <Text>
              A very brief introduction to <S type="bold">Elm</S>
            </Text>
            <Text>by <Link href="https://twitter.com/tcoopman">@tcoopman</Link></Text>
            <Text><Link href="https://thomascoopman.eu">https://thomascoopman.eu</Link></Text>
          </Slide>
					<Slide notes="A Quick show of hands, how many heard of Elm, how many used it? Haskell?">
					<Text>Little time, much to talk about</Text>
					</Slide>
          <Slide transition={["fade"]} bgColor="secondary" notes="Because our time is very short, I'm going to some TDD">
              <Appear><Text padding="10px" textSize="4rem">You already love functional</Text></Appear>
              <Appear><Text padding="10px" textSize="4rem">And very little time</Text></Appear>
              <Appear><Text padding="10px" textSize="4rem">So...</Text></Appear>
              <Appear><Text padding="10px" textSize="4rem">What is Elm</Text></Appear>
              <Appear><Text padding="10px" textSize="4rem">The bowling kata</Text></Appear>
              <Appear><Text padding="10px" textSize="4rem">Questions</Text></Appear>
          </Slide>
					<Slide notes="Who heard of Babel? - Elm compiles to javascript">
						<Heading size="2">Elm?</Heading>
              <Appear><Text padding="10px" textSize="4rem">Haskell in the browser</Text></Appear>
              <Appear><Text padding="10px" textSize="4rem">Simplified Haskell in the browser</Text></Appear>
              <Appear><Text padding="10px" textSize="4rem">Compiles to javascript</Text></Appear>
              <Appear><Text padding="10px" textSize="4rem">No runtime errors</Text></Appear>
					</Slide>
					<Slide notes="How many know the bowling kata?">
						<Text>Lets try the bowling Kata</Text>
					</Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="Maybe..">
						<Heading size="3">No null</Heading>
            <CodePane
              lang="haskell"
              source={require("raw!../assets/maybe.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="Clean partial application">
						<Heading size="3">Clean partial application</Heading>
    <Text>A function that takes a function with multiple parameters and returns a function with fewer parameters.</Text>
            <CodePane
              lang="haskell"
              source={require("raw!../assets/partial.elm")}
              margin="20px auto"
            />
          </Slide>
          <Slide notes="compiler, enforced semantic versioning of libraries" bgColor="primary" textColor="text">
            <Heading>Why should you care?</Heading>
            <List>
              <Appear><ListItem>A really nice language</ListItem></Appear>
              <Appear><ListItem>A nice introduction into functional programming</ListItem></Appear>
              <Appear><ListItem>Nice and helping community</ListItem></Appear>
            </List>
          </Slide>
          <Slide textColor="text">
            <Heading>Any reason why not?</Heading>
            <List>
              <Appear><ListItem>It's rather new (version 0.17 just (to be) released)</ListItem></Appear>
              <Appear><ListItem>This means there are some quirks</ListItem></Appear>
              <Appear><ListItem>And that things are still changing</ListItem></Appear>
              <Appear><ListItem>You have to find out things for yourself</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="white" notes="">
            <Image src={images.elmLogo.replace("/", "")} margin="0px auto 40px" height="400px"/>
            <Heading textColor="black">
              <S type="bold">Elm</S>
            </Heading>
            <Text>created by Evan Czaplicki <Link href="https://twitter.com/czaplic">@czaplic</Link></Text>
          </Slide>
          <Slide>
            <Link href="http://tcoopman.github.io/game-of-life/">
              <Image src={images.gol.replace("/", "")} margin="0px auto 40px" height="400px"/>
            </Link>
          </Slide>
          <Slide>
            <Link href="http://www.ruslans.com/lunar-viz/">
              <Image src={images.jeep.replace("/", "")} margin="0px auto 40px" height="400px"/>
            </Link>
          </Slide>
          <Slide>
            <Link href="http://klaftertief.github.io/package.elm-lang.org/">
              <Image src={images.hoogle.replace("/", "")} margin="0px auto 40px" height="400px"/>
            </Link>
          </Slide>
          <Slide>
            <Heading>Resources</Heading>
            <List>
              <ListItem><Link href="http://elm-lang.org/">Elm</Link></ListItem>
              <ListItem><Link href="https://github.com/rtfeldman/elm-css/">Elm-css</Link></ListItem>
              <ListItem><Link href="https://github.com/isRuslan/awesome-elm">awesome-elm resources</Link></ListItem>
              <ListItem><Link href="http://www.elm-tutorial.org/">elm tutorial</Link></ListItem>
              <ListItem><Link href="https://github.com/tcoopman/elm-session-slides">source to slides</Link></ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
