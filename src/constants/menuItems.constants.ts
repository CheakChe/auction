import SettingsIcon from '@material-ui/icons/Settings';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HelpIcon from '@material-ui/icons/Help';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import { MenuItem } from '../models/common.model';
import { ReactComponent as AuctionSvg } from '../assets/icons/auction.svg';
import { ReactComponent as WheelSvg } from '../assets/icons/wheel.svg';
import ROUTES from './routes.constants';

const MENU_ITEMS: MenuItem[] = [
  { title: 'Аукцион', IconComponent: AuctionSvg, path: ROUTES.HOME },
  { title: 'Настройки', IconComponent: SettingsIcon, path: ROUTES.SETTINGS },
  { title: 'Колесо рандома', IconComponent: WheelSvg, path: ROUTES.WHEEL },
  { title: 'Статистика', IconComponent: EqualizerIcon, path: ROUTES.STATISTIC },
  { title: 'История', IconComponent: AssignmentIcon, path: ROUTES.HISTORY },
  { title: 'Гайд', IconComponent: HelpIcon, path: ROUTES.HELP }
];

export default MENU_ITEMS;
