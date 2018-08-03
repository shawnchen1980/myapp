//本文件用于设置enzyme环境，文件名必须写成setupTests.js

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});