import * as React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import Component from "../../src/lib/component/Component";

describe("lang/index", () => {
    it("chai", () => {
        expect(true).to.be.true;
    });
    it("enzyme-test-html", () => {
        let wrapper = mount(<div><div id="example">Hello</div></div>);
        expect(wrapper.find('#example')).to.have.length(1);
    })
    it("enzyme-test-component", () => {
        class ExampleComponent extends Component<any> {
            public render(){
                return (
                    <div id="example">Hello</div>
                )
            }
        }
        let wrapper = mount(<ExampleComponent />);
        expect(wrapper.find(ExampleComponent)).to.have.length(1);
        console.log("result");
    })
});