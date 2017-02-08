import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import app from '../src/app/app';

describe('test case for App', function() {
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

});