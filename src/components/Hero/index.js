import PropTypes from 'prop-types';


export function Hero({title, content, theme}){

    return (
        <section className={`hero is-fullheight ${theme}`}>
            <div className="hero-body">
                <div className="container">
                    <p className="title">
                        {title}
                    </p>
                    <div className="subtitle">
                        {content}
                    </div>
                </div>
            </div>

        </section>
    );
}

Hero.propTypes = {
    title: PropTypes.node,
    content: PropTypes.node,
    theme: PropTypes.oneOf([
        'is-success',
        'is-primary',
        'is-info',
        'is-danger'
    ])
}
