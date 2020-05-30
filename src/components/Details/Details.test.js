import React from 'react';
import ReactDOM from 'react-dom';
import Details from './Details';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<Details />', () => {

    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Details />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('matches snapshots', () => {
        const wrapper = shallow(<Details/>);
        expect(wrapper).toMatchSnapshot();
    });
})
