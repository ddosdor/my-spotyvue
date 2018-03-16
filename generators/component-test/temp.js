/* eslint-disable */
import { shallow } from '@vue/test-utils';
import <%= upCaseName %> from '../../src/components/<%= upCaseName %>';

describe('<%= upCaseName %> Component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<%= upCaseName %>, {
      // add any component options
    })
  })

}); 