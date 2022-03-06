import React from 'react';
import '@styles/NotFound.scss';

const NotFound = () => {
    return (
        <div class="container">
    <div class="row">
        <div class="xs-12 md-6 mx-auto">
            <div id="countUp">
                <div class="number" data-count="404">404</div>
                <div class="text">Página no encontrada</div>
                <div class="text">Regresa al inicio.</div>
                <div class="text">Tal vez no exista esta dirección.</div>
            </div>
        </div>
    </div>
</div>
    );
};

export default NotFound;