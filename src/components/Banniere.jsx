import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegEye, FaCode, FaBullhorn } from "react-icons/fa";
import { CgScreen} from "react-icons/Cg";
import './Banniere.css'

const Banniere = () => {
  return (
    <div className='content-banniere'>
        <h1 className='banniere-title'>Mes Skills</h1>
        <Link to="/graphisme" className='btn-graphisme'>
          <h3><FaRegEye className='style-btn'/>Graphisme</h3>
          <p>Création d’identité graphique, logos, chartes graphiques, visuels et documents. Typographie, dessin vectoriel, retouche photo.</p>
        </Link>
        <Link to= "/graphisme" className='btn-webdesign'>
          <h3><CgScreen className='style-btn'/>Webdesign</h3>
          <p>Création de thèmes graphiques et d’interfaces web. Responsive design. Ergonomie. Développement front-end selon les standards W3C.</p>
        </Link>
        <Link to="siteWeb" className='btn-website'>
          <h3><FaCode className='style-btn'/>Développement web</h3>
          <p>Intégration des maquettes en respectant les normes des dernières technologies. Développement d’applications web dynamiques (formulaires, API’s…) avec gestion des contenus en base de données.</p>
        </Link>
        <Link to="/graphisme" className='btn-logo'>
          <h3><FaBullhorn className='style-btn'/>Communication</h3>
          <p>Création de newsletters, bannières et visuels pour les réseaux sociaux. Création de gabarits de documents de communication en ligne ou imprimables (brochures, cartes de visite …).</p>
        </Link>
    </div>
  )
}

export default Banniere;
