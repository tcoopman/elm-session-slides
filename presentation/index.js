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
  markdown: require("../assets/markdown.png")
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
              An introduction to <S type="bold">Elm</S>
            </Text>
            <Text>by <Link href="https://twitter.com/tcoopman">@tcoopman</Link></Text>
          </Slide>
          <Slide transition={["zoom"]} bgColor="white">
            <Image src={images.brainstorm.replace("/", "")} margin="-200px auto" height="800px"/>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary">
              <Appear><Text padding="10px" textSize="4rem">Some examples</Text></Appear>
              <Appear><Text padding="10px" textSize="4rem">Why should I care?</Text></Appear>
              <Appear><Text padding="10px" textSize="4rem">What is Elm</Text></Appear>
              <Appear><Text padding="10px" textSize="4rem">Introduction and examples</Text></Appear>
              <Appear><Text padding="10px" textSize="4rem">Questions, discussions,...</Text></Appear>
          </Slide>
          <Slide transition={["zoom"]} bgColor="white">
            <Link href="http://elm-lang.org/"><Image src={images.examples.replace("/", "")} margin="0px auto" height="500px"/></Link>
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
              <Appear><ListItem>It's new (version 0.16)</ListItem></Appear>
              <Appear><ListItem>This means there are some quirks</ListItem></Appear>
              <Appear><ListItem>But these are things being worked on (for example in 0.17)</ListItem></Appear>
              <Appear><ListItem>You have to find out things for yourself</ListItem></Appear>
            </List>
          </Slide>
          <Slide>
            <Heading>So should you care?</Heading>
            <Appear><Heading caps textColor="black" margin="40px" textSize="10rem">yes!</Heading></Appear>
            <Appear><Heading caps textColor="flash" margin="40px" textSize="10rem">of course!</Heading></Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="white" notes="">
            <Image src={images.elmLogo.replace("/", "")} margin="0px auto 40px" height="400px"/>
            <Heading textColor="black">
              <S type="bold">Elm</S>
            </Heading>
            <Text>created by Evan Czaplicki <Link href="https://twitter.com/czaplic">@czaplic</Link></Text>
          </Slide>
          <Slide>
            <Heading>Why are we doing slides?</Heading>
            <Appear><Heading caps textColor="black" margin="40px" textSize="10rem">Show me the code!</Heading></Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="haskell"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Link href="http://elm-lang.org/examples/binary-tree">
              <CodePane
                lang="haskell"
                source={require("raw!../assets/binary-trees.example")}
                margin="20px auto"
              />
            </Link>
          </Slide>
          <Slide>
            <Link href="http://tcoopman.github.io/game-of-life/">
              <Image src={images.gol.replace("/", "")} margin="0px auto 40px" height="400px"/>
            </Link>
          </Slide>
          <Slide>
            <Link href="http://klaftertief.github.io/package.elm-lang.org/">
              <Image src={images.hoogle.replace("/", "")} margin="0px auto 40px" height="400px"/>
            </Link>
          </Slide>
          <Slide>
            <Link href="http://recordit.co/gi7U8GyK7C">
              <Image src={images.elmTesting.replace("/", "")} margin="0px auto 40px" height="400px" />
            </Link>
          </Slide>
          <Slide>
            <Heading>Resources</Heading>
            <List>
              <ListItem><Link href="http://elm-lang.org/">Elm</Link></ListItem>
              <ListItem><Link href="https://github.com/rtfeldman/elm-css/">Elm-css</Link></ListItem>
              <ListItem><Link href="https://github.com/isRuslan/awesome-elm">awesome-elm resources</Link></ListItem>
              <ListItem><Link href="http://www.elm-tutorial.org/">elm tutorial</Link></ListItem>
              <ListItem><Link href="https://github.com/brendan-jefferis/test-runner">Test runner</Link></ListItem>
              <ListItem><Link href="https://github.com/tcoopman/elm-session-slides">source to slides</Link></ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
