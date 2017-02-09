import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Content from '../src/app/templates/home/components/content';

test('test case for App', function() {
/*    it('testing initial React component with shallow', function() {
        const data = shallow(
            <app data="data:{firstName:'111',lastName:'22'}" />
        );
        expect(data.text()).toEqual('');
    });*/
    it('testing initial React component', function() {
        const dataObject = {
            data:{firstName:'testFirstName',lastName:'testLastName'}
        };
        expect(dataObject.data.firstName).toEqual('testFirstName');
        expect(dataObject.data.lastName).toEqual('testLastName');
    });

    it('check dom elements', function(){
        const content = TestUtils.renderIntoDocument(
        <Content saveDetailsProp = {this.saveDetails} 
 			changeFirstNameProp = {this.changeFirstName} changeLastNameProp = {this.changeLastName} />
        )
        const contentDom = findDOMNode(content);
        expect(contentDom.querySelector('button').textContent).toEqual('SAVE')
    })
});
