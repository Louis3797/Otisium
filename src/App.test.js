import { render } from "@testing-library/react";
import { App } from "./App";
import { Text1 } from "./components/Text";

import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Imprint } from "./pages/Imprint";
import { NoMatch } from "./pages/NoMatch";
import { Privacy } from "./pages/Privacy";
import { Trainer } from "./pages/Trainer";

test("Renders App", () => {
  const container = render(<App />);
  expect(container).toBeDefined;
});

test("Renders Home", () => {
  const container = render(<Home />);
  expect(container).toBeDefined;
});

test("Renders Text", () => {
  const container = render(<Text1 />);
  expect(container).toBeDefined;
});

test("Renders About", () => {
  const container = render(<About />);
  expect(container).toBeDefined;
});

test("Renders Trainer", () => {
  const container = render(<Trainer />);
  expect(container).toBeDefined;
});

test("Renders Contact", () => {
  const container = render(<Contact />);
  expect(container).toBeDefined;
});

test("Renders NoMatch", () => {
  const container = render(<NoMatch />);
  expect(container).toBeDefined;
});

test("Renders Imprint", () => {
  const container = render(<Imprint />);
  expect(container).toBeDefined;
});

test("Renders Privacy", () => {
  const container = render(<Privacy />);
  expect(container).toBeDefined;
});
