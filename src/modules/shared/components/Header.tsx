import { Flex, Header, Button, Burger, Text, Select, Group } from '@mantine/core';
import Image from 'next/image';
import AppLogo from '../../../public/logo.svg';
import UserIcon from '../../../public/user.svg';

const headerStyle = { 
    backgroundColor: '#FFF',
    margin: '0 70px',
    height: '100%',
    width: '1300px'
}

const buttonStyle = {
    borderRadius: '12px',
    background: 'var(--base-100, #F2F5FA)',
    color: 'var(--primary-500, #277AFF)',
    height: '44px',
    fontSize: '14px',
    padding: '16px 24px'
}

const selectStyle = {
    padding: 0,
    border: 'none'
}

const AppHeader: React.FC = () => {
    return (
        <Header height={80} style={{ display: 'flex', justifyContent: 'center' }}>
            <Group
                align={'center'}
                position={'apart'}
                style={ headerStyle }
            >
                <Group spacing={48}>
                    <Image src={AppLogo} alt="+7 Телеком" />
                    <Group
                        spacing={32}
                        align={'center'}>
                        <Burger opened={false} />
                        <a>Мобильная связь</a>
                        <a>Домашний интернет</a>
                        <a>eSim</a>
                    </Group>
                </Group>
                <Group
                    spacing={32}
                    position={'right'}
                    align={'center'}
                >
                    <Button
                        style={ buttonStyle }
                        leftIcon={
                            <Image 
                                width={16} 
                                height={16}
                                src={UserIcon} alt="" 
                            />
                        }
                    >
                        Личный кабинет
                    </Button>
                </Group>
            </Group>
        </Header>
    )
}

export default AppHeader