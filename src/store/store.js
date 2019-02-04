import { observable, action } from 'mobx';
import { loadState } from "~/helpers/localStorage";

class Store {
    @observable userId = loadState('user_id');
    @observable pointType = loadState('point_type');
    @action setUserId(id) {
        return this.userId = id;
    }
    @action setPointType(type) {
        return this.pointType = type;
    }
}

export default new Store();