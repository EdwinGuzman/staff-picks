import {
  isArray as _isArray,
  isEmpty as _isEmpty,
  isObject as _isObject,
  map as _map,
} from 'underscore';
import PickItem from './PickItemModel.js';

function PicksModel() {
  this.build = data => {
    if (!data) {
      return;
    }

    if (_isArray(data) && data.length > 0) {
      return _map(data, this.picksModel);
    } else if (_isObject(data) && !_isEmpty(data)) {
      return this.pickModel(data);
    } else {
      return;
    }
  };

  this.picksModel = data => {
    const pick = {};

    if (!data) {
      return pick;
    }

    pick.id = data.id;
    pick.type = data.type;
    pick.text = data.attributes.text;
    pick.location = data.attributes.location;
    pick.picker = data.attributes['picker-name'];

    pick.item = PickItem.build(data.item);
    pick.age = data.age ? this.age(data.age) : {};

    return pick;
  };

  this.age = data => {
    const age = {};

    if (!data) {
      return age;
    }

    age.id = data.id;
    age.type = data.type;
    age.age = data.attributes ? data.attributes.age : 'Adult';

    return age;
  };
}

export default new PicksModel();
