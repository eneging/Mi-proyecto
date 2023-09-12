import { useState } from 'react';

export const useTitle = () => {

    const [titulo, setTitulo] = useState('Whole,Finland');

    const cambiarTitulo = (nuevoTitulo) =>
    {
        setTitulo(nuevoTitulo);
    }

return ([titulo,cambiarTitulo])
};