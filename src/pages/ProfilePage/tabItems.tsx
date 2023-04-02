import {MenuProps} from "antd";
import {Link} from "react-router-dom";

const tabItems: MenuProps['items'] = [
  {
    label: <Link to="/profile">User Information</Link>,
    key: 'userDetails',
  },
  {
    label: <Link to="/profile/billing">Billing</Link>,
    key: 'billing',
  },
];

export default tabItems;
