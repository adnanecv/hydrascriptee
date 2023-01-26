import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Workflow that just works',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container" >
      <h2 className='sh2'  id={'hydro'}>
    Le logiciel FullHydro ? 
</h2 >
        <div className={innerClasses}>
        
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
               
                <h3 className="mt-0 mb-12">
Extraction automatique des caractéristiques des BVs sur toutes les version d'autocad                  </h3>
                <p className="m-0">
              Fullhydro-plugin   Permet d'extraire la surface , la pente et la  longueur du bassin versant sur autocad  et préparer ces  données pour le reste du calcul hydrologique .
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-01.PNG')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
               
                <h3 className="mt-0 mb-12">
Préparation de base  des données des projets                  </h3>
                <p className="m-0">
                  Fullhydro vous permet d'organiser vos études via une  base de donnée intégrée bien conçue .En effet vous pouvez Sauvgarder  facilement vous dossiers avec leurs propres projets et les consulter à chaque fois vous voulez poursuivre vos études ou les modifier . 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-02.PNG')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
               
                <h3 className="mt-0 mb-12">
Calcul hydrologique et base de donnée               </h3>
                <p className="m-0">

                  La technologie du Géant Fullhydro facilite beaucoup les caluls hydrologiques ,en effet les données exataites par le Plugin sont importés automatiquement sur la plateforme et vous pouvez ajouter manuellement autre bassin versant.Le calcul se fait par le choix de Bv et la méthode de calcul ensuite le logiciel focuse automatiquement sur les paramètres du méthode à calculer, le button 'Calculer' affiche automatiquement la valuer du débit . Fullhydro recalcule automatiquement les valeurs des débit après tout changement des caractéristiques des bassins versants .Les résultats des clauls sont sauvgardés sur la base de données.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.PNG')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
               
                <h3 className="mt-0 mb-12">
Navigateur des projets hydrologiques                 </h3>
                <p className="m-0">
Vous pouvez naviguer sur vos  projets étudiés ,consultez les informations sur les dossiers,projets ,les caractéristiques des Bvs les méthodes utilisées ,les valueurs des débits et les paramètres entrées de chaque méthode                 </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-04.PNG')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
               
                <h3 className="mt-0 mb-12">
Dimensionnemnt des ouvrages hydrologiques                 </h3>
                <p className="m-0">
FullHydro vous permet de dimensionner les canaux en différentes formes ,les buses et les dalots par différente méthode . En effet ,sur  la même structure des porjets et bvs sauvgardés lors les études hydrologiques  , vous pouvez facilement dimensionner les OH  par le choix du BV et le type d'ouvrage ainsi les paramètre hydraulique et en cliquant sur 'calculer '   .              </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-05.PNG')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
               
                <h3 className="mt-0 mb-12">
Navigateur des projets hydrauliques                 </h3>
                <p className="m-0">
Vous pouvez consulter facilement vos projets hydrauliques sur des tableaux bien présentable à savoir les résultats de Dimensionnemnt , les types des ouvrages choisis  ect ...
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-06.PNG')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
               
                <h3 className="mt-0 mb-12">
Note des caluls           </h3>
                <p className="m-0">
Fullhydro vous permet d'extraire automatiquement des notes de calcul personalisées en PDF et Excel    pour les  différents  calculs effectués ..               </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                   src={require('./../../assets/images/features-split-image-02.PNG')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
          </div>


          
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;