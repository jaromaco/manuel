// Contents.jsx
import React from 'react';

function Contents({ photo, title, text }) { 
    return (
        <article>
            <img src={photo} alt={title} />
            <h2>{title}</h2>
            <p>{text}</p>
        </article>
    );
}
export default Contents;