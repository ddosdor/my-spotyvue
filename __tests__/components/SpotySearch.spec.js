/* eslint-disable */
import { shallow, createLocalVue } from '@vue/test-utils';
import { Container, Navbar, NavbarCollapse, NavbarItem, Row, Column, Btn,
  Fa,
} from 'mdbvue';

// HACK: unfortunately, not all components are available
import MdInput from 'mdbvue/src/components/MdInput';
import NavbarNav from 'mdbvue/src/components/NavbarNav';

import SpotySearch from '@/components/SpotySearch';

describe('SpotySearch Component', () => {
  let component;

  beforeEach(() => {
    component = shallow(SpotySearch, {

    })
  })

  it('should clear search input after click submit', () => {
    console.log(component.html());
  });
});
