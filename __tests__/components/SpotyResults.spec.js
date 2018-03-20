/* eslint-disable */
import { shallow } from '@vue/test-utils';
import SpotyResults from '@/components/SpotyResults';

describe('SpotyResults Component', () => {
  let component;

  beforeEach(() => {
    component = shallow(SpotyResults)
  })

  it('Should show loading info only when props isLoading is true', () => {
    component.setProps({ isLoading: true });
    expect(component.contains('.SpotyResults__loading')).toBe(true);

    component.setProps({ isLoading: false });
    expect(component.contains('.SpotyResults__loading')).toBe(false);
  })

}); 