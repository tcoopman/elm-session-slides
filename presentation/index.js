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
  brainstorm: require("../assets/brainstorm.jpg"),
  examples: require("../assets/examples.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#60B4CC"
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
            <Image src={images.brainstorm.replace("/", "")} margin="0px auto" height="700px"/>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Some examples</ListItem></Appear>
              <Appear><ListItem>What is Elm</ListItem></Appear>
              <Appear><ListItem>Basic introduction</ListItem></Appear>
              <Appear><ListItem>Why should I care?</ListItem></Appear>
              <Appear><ListItem>Questions, discussions,...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom"]} bgColor="white">
            <Link href="http://elm-lang.org/"><Image src={images.examples.replace("/", "")} margin="0px auto" height="500px"/></Link>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" >
            <Image src={images.elmLogo.replace("/", "")} margin="0px auto 40px" height="400px"/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="haskell"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <List>
              <ListItem><Link href="http://elm-lang.org/">Elm</Link></ListItem>
              <ListItem><Link href="http://tcoopman.github.io/game-of-life/">Game of Life</Link></ListItem>
              <ListItem><Link href="https://github.com/rtfeldman/elm-css/">Elm-css</Link></ListItem>
              <ListItem><Link href="https://github.com/isRuslan/awesome-elm">awesome-elm resources</Link></ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
