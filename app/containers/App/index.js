/**
 *
 * App.js
 *
 */
import React from 'react';

// On importe ici les composants qu'on veut afficher
import Machine from '../../components/Machine.js';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import Toggle from '../../components/Toggle.js';

// On peut aussi importer du CSS de la meme facon.
import '../../css/styles.css';

export default function App() {
  return (
    <div>

    <Toggle title="1" abcde"machine1" isToggleOn/>
    <Toggle title="2" abcde"machine2" isToggleOn/>
    <Toggle title="3" abcde"machine3" isToggleOn/>
    </div>
  );
}
    // Un return doit retourner un seul élément du DOM
    // Si on veut afficher plusieurs éléments adjacents,
    // On devra donc les encapsuler dans une DIV parente.