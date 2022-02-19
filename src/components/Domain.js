import React, { Component } from "react";

import { debounce, throttle } from "lodash";

import Test from "./Test";

class Domain extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        domain
        <Test />
        <div>
          <button
            onClick={debounce(() => {
              console.log(122222);
            }, 2000)}
          >
            aaasd
          </button>
        </div>
      </div>
    );
  }
}

export default Domain;
