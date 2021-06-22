import { CgLogOut, CgProfile } from 'react-icons/cg';

import { FaRegNewspaper } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { MdWeb } from 'react-icons/md';

export const navTabs = [
  { id: 0, title: 'Profile', icon: <CgProfile />, role: 'ADMIN', active: true },
  {
    id: 1,
    title: 'Posts',
    icon: <FaRegNewspaper />,
    role: 'ADMIN',
    active: false,
  },
  { id: 2, title: 'Preview', icon: <MdWeb />, role: 'ADMIN', active: false },
  {
    id: 3,
    title: 'Users',
    icon: <FiUsers />,
    role: 'SUPER_ADMIN',
    active: false,
  },
  {
    id: 4,
    title: 'Logout',
    icon: <CgLogOut />,
    role: 'ADMIN',
    active: false,
  },
];
