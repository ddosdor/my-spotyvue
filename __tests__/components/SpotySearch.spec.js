/* eslint-disable */
import { shallow, createLocalVue } from '@vue/test-utils';

import SpotySearch from '@/components/SpotySearch';

describe('SpotySearch Component', () => {
  let component;
  const vue = createLocalVue();

  beforeEach(() => {
    component = shallow(SpotySearch);
    component.vm.searchAlbums = jest.fn();
  })

  it('should clear search input after click submit', () => {
    const button = component.find('button');
    component.vm.artist = 'some artist';
    button.trigger('click');
    vue.nextTick(() => {
      expect(component.find('input').element.value).toBe("")    
    })
  });

  it('should called searchAlbums mapped vuex actions after button click', () => {
    const button = component.find('button');
    button.trigger('click');
    expect(component.vm.searchAlbums).toBeCalledWith(component.vm.artist)
  })

});
