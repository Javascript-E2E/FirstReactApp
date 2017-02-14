import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Content from '../src/app/templates/home/components/content';
jest.dontMock('../src/app/templates/home/components/content.js');

describe('test case for button text', function() {
    let contentDom;
    let content
    beforeEach(() => {
         content = TestUtils.renderIntoDocument(
        <Content saveDetailsProp = {this.saveDetails} 
 			changeFirstNameProp = {this.changeFirstName} changeLastNameProp = {this.changeLastName} />
        )
        contentDom = ReactDOM.findDOMNode(content);
    });

    it('Test button Name', function(){
       expect(contentDom.querySelector('button').textContent).toEqual('SAVE')
    })

    it('Test Presence of two input fields', function(){
        expect(TestUtils.scryRenderedDOMComponentsWithTag(content,'input').length).toEqual(2)
    })

    it('Test the button click event',function() {
        var testing = true;
        var input = content.refs.saveButton;
        TestUtils.Simulate.click(ReactDOM.findDOMNode(input));
        expect(testing).toBe(true);
    })
});


