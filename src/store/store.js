import { observable, action } from 'mobx';
import { loadState } from "~/helpers/localStorage";
import { POINTS } from '~/constants/points';

class Store {
    @observable userId = loadState('user_id');
    
    @observable pointType = POINTS[0].id;

    @action setUserId(id) {
        return this.userId = id;
    }

    @action setPointType(type) {
        return this.pointType = type;
    }
}

export default new Store();