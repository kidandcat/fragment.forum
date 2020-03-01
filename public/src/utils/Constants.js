import { HomeOutlined, UserOutlined, FileSearchOutlined } from '@ant-design/icons'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import ForumList from '../pages/ForumList'

export const MenuNameEnum = Object.freeze({ home: 'home', forum_list: 'forum', profile: 'profile' })
export const MenuPathEnum = Object.freeze({ home: '/home', forum_list: '/forum', profile: '/profile' })
export const MenuIconEnum = Object.freeze({ home: HomeOutlined, forum_list: FileSearchOutlined, profile: UserOutlined })
export const MenuPageEnum = Object.freeze({ home: Home, forum_list: ForumList, profile: Profile })
