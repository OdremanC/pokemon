import React from 'react';
import ReactDOM from 'react-dom';
import Paginator from './Paginator';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Paginator />', () => {

    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Paginator />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('matches snapshots', () => {
        const wrapper = shallow(<Paginator/>);
        expect(wrapper).toMatchSnapshot();
    });
})
