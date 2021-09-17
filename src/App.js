import {useEffect, useState} from 'react';
import {Hero} from './components/Hero';
import {PasswordForm} from './PasswordForm';
import {Spinner} from './components/Spinner';
import {Gift} from './components/Gift';


const passwords = [
    '5yRSjtQN',
    'test'
];


export function App() {
    const [password, setPassword] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [hasCorrectPassword, setCorrectPassword] = useState(false);

    useEffect(() => {
        if (passwords.find(item => item === password)) {
            setCorrectPassword(true);
            window.setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    }, [password]);

    if (hasCorrectPassword && isLoading) {
        return (
            <Hero
                title={' '}
                theme={'is-danger'}
                content={ <Spinner color={'#fff'}/>}
            />

        );
    }

    if (hasCorrectPassword) {
        return (
            <Hero
                theme={'is-info'}
                title={'🌟 Olga & Mårten 🌟'}
                content={(
                    <Gift/>
                )}
            />
        );
    }

    return (
        <>
            <Hero
                title={'Enter password'}
                content={(
                    <PasswordForm
                        currentValue={password}
                        updateValue={setPassword}
                    />
                )}
            />
        </>
    );
}
