import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useSelectDate} from './utils';
import {Spinner} from '../Spinner';


export function DateSelector() {
    const [selectDate, state] = useSelectDate();
    const {data, isLoading, error} = state;

    console.log(state);

    if (error) {
        return (
            <div>Failed to load dates.</div>
        );
    }

    if (isLoading) {
        return (
            <Spinner color={'#fff'}/>
        );
    }

    return (
        <Wrapper>
            {data.map((row, index) => (
                <Row key={row.date} isSelected={!!row.selected}>
                    <Column>
                        {(new Date(row.date)).toISOString().slice(0, 10)}
                    </Column>
                    <Column isCentered={true}>
                        {row.selected ? 'Vald!' : (
                            <button
                                className={'button is-small'}
                                disabled={!!row.selected}
                                onClick={selectDate.bind(null, index + 1)}
                            >
                                Välj
                            </button>
                        )}
                    </Column>
                </Row>
            ))}
        </Wrapper>
    );
}


const Wrapper = styled.div`
    margin: 20px auto;
    font-size: 80%;
`;

const Row = styled.div`
    display: flex;
    padding: 4px 0;
    margin: 4px 0;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    :first-child {
        border-top: 1px solid rgba(255,255,255, 0.1);
    }
    ${({isSelected}) => isSelected ? `
        color: #85e485;
        font-weight: bold;
    ` : ''};
`;

Row.propTypes = {
    isSelected: PropTypes.bool
}

const Column = styled.div`
    flex: 1;
    padding-right: 20px;
    ${(props) => props.isCentered ? `
        text-align: center;
    ` : ``};
`;

Column.propTypes = {
    isCentered: PropTypes.bool
}
