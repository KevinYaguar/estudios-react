import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const CourseCard = ({id, title, image, price, professor})=> (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <Link to={`/cursos/${id}`}>
                <img src={image} alt={title} />
            </Link>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className='center'>{title}</h3>
            <div className="s-main-center">
                {`Prof.: ${professor}`}
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="https://ed.team">{price}</a>
            </div>
        </div>
    </article>
)
CourseCard.propTypes = {
    title : PropTypes.string,
    image : PropTypes.string,
    price : PropTypes.string,
    profesor : PropTypes.string
}

CourseCard.defaultProps = {
    title : 'No se encontró titulo',
    image : 'https://i.pinimg.com/originals/99/7e/2c/997e2cc2de1566d68d3b6168c62a6594.jpg',
    price : '--',
    profesor : ''
}

export default CourseCard