import styled from 'styled-components';
import {useCallback} from 'react';


export function PasswordForm({currentValue, updateValue}) {
    const handleChange = useCallback(e => {
        updateValue(e.target.value);
    }, [updateValue]);

    return (
        <Wrapper>
            <input
                className={'input'}
                type={'password'}
                value={currentValue}
                onChange={handleChange}
                autoComplete={'omasdasd'}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    max-width: 400px;
`;
