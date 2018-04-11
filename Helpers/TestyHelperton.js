import enzyme, { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

export default class TestyHelperton {
  constructor(comp){
    this.wrapper = shallow(comp);
    this.appObj = renderer.create(comp).toJSON();
    this.text = "Text";
    this.image = "Image";
    this.view = "View";
  }
}
