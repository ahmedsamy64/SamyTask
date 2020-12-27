import { observable, action } from 'mobx'

class AppStore {
    @observable title = 'hoop'
    @observable CartArray = ['Fish', 'Crab']
    @action setTitle = () => {
        this.title = 'yrab'
    }
}

export default AppStore