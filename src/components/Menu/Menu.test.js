import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Menu />', () => {

    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Menu />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('matches snapshots', () => {
        const wrapper = shallow(<Menu/>);
        expect(wrapper).toMatchSnapshot();
    });
})
