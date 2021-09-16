import styled from 'styled-components';
import {DateSelector} from './DateSelector';


export function Gift() {

    return (
        <Wrapper>
            <p className={'content'}>
                Stort grattis på eran bröllopsdag!
            </p>
            <p className={'content'}>
                Då vi vill spendera mer tid med er så vill vi bjuda er på en helkväll i Stockholm.
                Nedan finns några förslag på datum.
            </p>
            <hr/>
            <DateSelector/>
            <hr/>
            <p className={'content'}>
                Varma lyckoönskningar ❣<br/>
                <i>
                Björn, Hanna, Tom och Jeanna
                </i>
            </p>
        </Wrapper>
    );
}


const Wrapper = styled.div`
    max-width: 480px;
`;
