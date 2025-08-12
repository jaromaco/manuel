// Contents.jsx
import React from 'react';

function Contents({ photo, title, text, list }) {
    return (
        <>
            <div className='content-div'>
                <img className="photo-l" src={photo} alt={title} />
                <article>

                    <h2>{title}</h2>
                    <hr />
                    <p>{text}</p>
                    <ul>
                        {list.map((item, index) => (
                            <li key={index}>{item}</li>
                        )
                        )}
                    </ul>
                </article>
            </div>
        </>
    );
}
export default Contents;