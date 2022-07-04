import { Avatar }  from '../uikit/Avatar/';
import { HeaderComponent } from './Header.style'
import avatar from 'components/uikit/Avatar/avatar.jpeg';

const Header = () => {
    return (
        <HeaderComponent>
            <Avatar
                size={42}
                image={avatar} 
                className={'test'}
                title={'test'}
                status={'warning'}
            />
        </HeaderComponent>
    )
}

export default Header