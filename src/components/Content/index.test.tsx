import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from "react-router-dom";

import Content from "./index";

let container:any = null;
const contentProps = {
  sidebarIsOpen: true, 
  toggleSidebar: () => {}
}
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Content Page", () => {
  it("renders", () => {
    act(() => {
      render(
        <Router>
          <Content sidebarIsOpen={contentProps.sidebarIsOpen} toggleSidebar={contentProps.toggleSidebar}/>
        </Router>,
        container
      );
    });
  });
});
