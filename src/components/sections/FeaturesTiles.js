import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
 
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Build up the whole picture',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >    <h2 className='sh2' id={'service'}>
    Service de HydraScript ? 
</h2 >
      <div className="containerse">
        <div className={innerClasses}>
         
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                 Développement des logiciel Desctop,mobile et web
                    </h4>
                  <p className="m-0 text-sm">
                   Développement des logiciels des  calculs  , traitement des  données,gestion des projets et de dessin  en génie civil, hydrologie , hydraulique et selon les besoins de nos clients , basées sur les Technologies suivantes :
                    interfaces graphiques professionnelles avec un très bon désign ,Intégration des bases de données locales et en ligne ,la génération automatique des notes de calcul personnalisées en divers formats (PDF ,Excel , Word) 
                    </p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
Formation  en hydrologie ,Hydraulique et génie civil                    </h4>
                  <p className="m-0 text-sm">
Formation théorique  en hydrologie ,hydraulique et génie civil : Délimitation des bassins versants sur Arcgis et carte topo , traitement des données des bassins versants, Estimation des débits des bassins versants , dimensionnement des ouvrages hydrauliques (buses, dalots , canals)par les différentes méthodes , traitement des données topographiques , génération des profils en long et en travers , calcul d'avant métré du projet ; dimensionnement des structures béton armé selon BAEL , préparation des plans d'éxecution ...                    </p>
                </div>
              </div>
            </div>

          

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
               Etablissement des Etudes techniques ,note de calcul et plans d'exécution
                    </h4>
                  <p className="m-0 text-sm">
Conception et Etude hydrologique  et hydraulique d'assainissement ,Etablissement des profils en long et Avant métré ,Etude des projets d'alimentation en eau potable , Traitement hydrologique des bassins versants et la réalisation des études de protection contre les inondations, Etablissment des études de Structure en béton armé ,conception et étude des projets de goute à goute                       </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Développemnt des Plug-In et des barres pour autre logiciel
                    </h4>
                  <p className="m-0 text-sm">
Développement des barres d'outils sous  le logiciel Autocad avec des interfaces graohiques qui permet de traiter les données des dessins , l'automatisation des dessins , extraire les données des dessins , controler les documents d'autocad ..               </p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-05.svg')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Formation sur les  logiciels techniques
                    </h4>
                  <p className="m-0 text-sm">
Formation sur les logiciel suivants : Autocad, covadis ,Arcgis ,Qgis ,Global mapper , Hec-Ras ,Hefran ,Revit , Robot ,Epanet , Arc Hydro                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-06.svg')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Désigne ,Montage vidéo 
                    </h4>
                  <p className="m-0 text-sm">
Service en désigne : Création des logo professionel en 2D et 3D , création des présentations annimées ,Création des affiches publicitaires et les cartes visites ,réalisation des montages vidéos  et des vidéos annimées                     </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;