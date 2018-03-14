// import necessery MDB components and make it global
import Vue from 'vue';
import { Container, Navbar, NavbarCollapse, NavbarItem, Row, Column, Btn,
  Fa,
} from 'mdbvue';

// HACK: unfortunately, not all components are available
import MdInput from 'mdbvue/src/components/MdInput';
import NavbarNav from 'mdbvue/src/components/NavbarNav';

Vue.component('Container', Container);
Vue.component('Navbar', Navbar);
Vue.component('NavbarCollapse', NavbarCollapse);
Vue.component('NavbarNav', NavbarNav);
Vue.component('NavbarItem', NavbarItem);
Vue.component('Row', Row);
Vue.component('Column', Column);
Vue.component('Btn', Btn);
Vue.component('Fa', Fa);
Vue.component('MdInput', MdInput);
