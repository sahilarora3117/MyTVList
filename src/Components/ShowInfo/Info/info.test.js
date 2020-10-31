import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


import {youtube_parser, networkstatus} from './Info';

describe('youtube_parser', () =>{
    it ('should fetch the video refernece from a youtube reference link', () => {
        expect(youtube_parser('https://www.youtube.com/watch?v=qWt70VmuUpo')).toBe('qWt70VmuUpo');
    })
})

describe('network_status', () =>{
    it ('Generate the status and network name string for the show description', () => {
        expect(networkstatus('Disney+', 'returning series')).toBe('Disney+ (returning series)');
    })
})