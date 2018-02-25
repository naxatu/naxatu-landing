import {BaseView, IInitState} from '../Utils/BaseView';
import {HomeView as HomeViewComponent, IHomeViewProps} from '../../Client/Views/HomeView';

export interface IHomeViewInitState extends IInitState<IHomeViewProps> {
}

export class HomeView extends BaseView<IHomeViewInitState, typeof HomeViewComponent> {
    protected getComponent(): typeof HomeViewComponent {
        return HomeViewComponent;
    }
}
