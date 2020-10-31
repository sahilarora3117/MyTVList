import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


import {arrayRemove} from './Added';

describe('arrayRemove', () =>{
    it ('should remove the item of the array on call', () => {
        expect(arrayRemove([1,2,3,4,5,6],3)).toStrictEqual([1,2,4,5,6]);
    })
})