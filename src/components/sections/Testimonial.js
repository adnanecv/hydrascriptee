import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
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
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Customer testimonials',
    paragraph: 'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
      id='dise'
    >
      <div className="container">
      <h2 className='sh2' >
    Qui disent sur nous ? ? 
</h2 >
        <div className={innerClasses}>
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                  Bonjour, vraiment c'est un très utile logiciel pour la gestion de mes projets, du coup ça m'a aidé à organisé professionnellement mes dossiers même à moults détails malgré l'entassement incessant des informations,. à vrai dire c'est un géant logiciel qui me semble le meilleur sans doute pour plusieurs raisons, d'abord sa maniabilité et convivialité, ensuite c'est facile à comprendre et enfin par sa simplicité et son contenu
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Digbeu</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">FullHydro</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                  Hello, c'est une bonne application qui fait bien son travail avec précision et exactude, honnêtement c'est un logiciel que j'ai cherché et j'attendais depuis longtemps, du coup je l'ai trouvé finalement, il m'a beaucoup aidé à classer mes dossiers et je le trouve fluide en terme de calcul et fiable par rapport aux résultats obtenus, merci pour la découverte et bon courage à vous !                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Abel</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">FullHydro</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                  C'est top 👍 je le trouve un logiciel très intéressant  car il me permet de gérer efficacement mes travaux grâce à ses fonctionnalités maniable et facile. franchement  depuis que j'ai ce véritable conception inédit je suis devenu soulagé et je travaille paisiblement et tranquille ce que m'offre un temps précieux pour travailler autre chose, c'est la raison pour laquelle je l'ai beaucoup aimé et je l'ai bien apprécié, en fin merci infiniment pour ce genial travail et talentueuse créativité. c'est super !
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Rachid</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">FullHydro</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;