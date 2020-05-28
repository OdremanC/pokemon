import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Loader />', () => {

    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Loader />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('matches snapshots', () => {
        const wrapper = shallow(<Loader/>);
        expect(wrapper).toMatchSnapshot();
    });
})
