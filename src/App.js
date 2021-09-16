import {useEffect, useState} from 'react';
import {Hero} from './components/Hero';
import {PasswordForm} from './PasswordForm';
import {Spinner} from './components/Spinner';
import {Gift} from './components/Gift';


export function App() {
    const [password, setPassword] = useState('');
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (password === 'om') {
            window.setTimeout(() => {
                setLoading(false);
            }, 1500);
        }
    }, [password]);

    if (password === 'om' && isLoading) {
        return (
            <Hero
                title={' '}
                theme={'is-danger'}
                content={ <Spinner color={'#fff'}/>}
            />

        );
    }

    if (password === 'om' ) {
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
