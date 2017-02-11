import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Content from '../src/app/templates/home/components/content';

/*describe('test case for App', function() {
  it('testing initial React component with shallow', function() {
        const data = shallow(
            <app data="data:{firstName:'111',lastName:'22'}" />
        );
        expect(data.text()).toEqual('');
    });
    it('testing initial React component', function() {
        const dataObject = {
            data:{firstName:'testFirstName',lastName:'testLastName'}
        };
        expect(dataObject.data.firstName).toEqual('testFirstName');
        expect(dataObject.data.lastName).toEqual('testLastName');
    });
});*/
 
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
});
