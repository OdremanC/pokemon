import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Footer />', () => {

    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Footer />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('matches snapshots', () => {
        const wrapper = shallow(<Footer/>);
        expect(wrapper).toMatchSnapshot();
    });
})
