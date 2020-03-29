import { HomeOutlined, UserOutlined, FileSearchOutlined } from '@ant-design/icons'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import ForumList from '../pages/ForumList'
import Thread from '../pages/Thread'
import Login from '../pages/LoginRegister'
import Admin from '../pages/Admin'
import Post from '../pages/Post'

export const MinUsernameLen = 6
export const MinPasswordLen = 8

export const MenuNameEnum = Object.freeze({ home: 'home', forum: 'forum', admin: 'admin', separator: '', profile: 'profile' })
export const MenuIconEnum = Object.freeze({ home: HomeOutlined, forum: FileSearchOutlined, profile: UserOutlined })
export const MenuPathEnum = Object.freeze({ home: '/home', forum: '/forum', thread: '/thread', profile: '/profile', login: '/login', admin: '/admin', post: '/post' })
export const MenuPageEnum = Object.freeze({ home: Home, forum: ForumList, thread: Thread, profile: Profile, login: Login, admin: Admin, post: Post })

export const ExcludeSiders = [MenuNameEnum.admin]
