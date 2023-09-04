import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from '../../src/components/Login'

Enzyme.configure({ adapter: new Adapter() });
describe('test login component', () => {
  beforeAll(() => {
  })
  it('render', () => {
    console.log(11111)
    // const component = renderer.create(<Login></Login>)
    const component = shallow(<Login>00</Login>)
    const tree = component.toJSON()
    console.log(2222, tree)
    expect(tree).toMatchSnapshot()
  })
})
