// Contents.jsx
import React from 'react';

function Contents({ photo, title, text }) {
    return (
        <>
            <img className="photo-l" src={photo} alt={title} />
            <article>

                <h2>{title}</h2>
                <p>{text}</p>
            </article>
        </>
    );
}
export default Contents;