import styled from 'styled-components';
import {DateSelector} from './DateSelector';


export function Gift() {

    return (
        <Wrapper>
            <p className={'content'}>
                Ni är bäst! Som ett litet tack för att ni låtit oss vara en del av världens finaste bröllopshelg så vill vi bjuda tillbaka på en helkväll i Stockholm.
            </p>
            <p className={'content'}>
                Nedan finns några förslag på datum. Välj de som passar
            </p>

            <hr/>
            <DateSelector/>
            <hr/>
            <p className={'content'}>
                Varma hälsningar ❣️<br/>
                <i>
                    Olga, Mårten, Maria, Carl och Joel
                </i>
            </p>
        </Wrapper>
    );
}


const Wrapper = styled.div`
  max-width: 480px;
`;
