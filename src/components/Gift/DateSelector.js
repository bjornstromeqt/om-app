import styled from 'styled-components';
import {useSheets} from './useSheets';


const AVAILABLE_DATES = [
    '2021-10-10',
    '2021-10-11',
    '2021-10-17',
    '2021-10-18',
    '2021-10-20'
];


export function DateSelector() {
    const data = useSheets();

    console.log(data);

    return (
        <Wrapper>
            {AVAILABLE_DATES.map((dateString) => (
                <Row key={dateString}>
                    <Column>
                        {(new Date(dateString)).toISOString().slice(0, 10)}
                    </Column>
                    <Column>
                        <button className={'button is-small'}>
                            Välj
                        </button>
                    </Column>
                </Row>
            ))}

        </Wrapper>
    );
}


const Wrapper = styled.div`
    margin: 20px auto;
`;

const Row = styled.div`
    display: flex;
`;

const Column = styled.div`
    flex: 1;
    padding-right: 20px;
`;

