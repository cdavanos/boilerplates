/* eslint-disable import/no-extraneous-dependencies */
// Runs before each test and lets Jest know which enzyme config to use.
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Includes CSS rules in styled components' snapshots
import 'jest-styled-components';

configure({ adapter: new Adapter() });
