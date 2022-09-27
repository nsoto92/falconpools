import React, { FunctionComponent, ReactElement } from 'react';
import { Section } from '../../components/Section/Section';

import styles from './Services.module.css';

export const Services: FunctionComponent = (): ReactElement => {

  return (
    <Section color={'gray'}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{'Services'}</h1>
        <p className={styles.content}>
          {'Somos una compañía localizada en Puerto Rico que se dedica a la construcción y servicio para piscinas.   Luego de trabajar 7 años en la ruta de mantenimiento de su padre, Omar Falcon, propietario de Falcon Pools decide inscribir el nombre que fundó su padre José Falcón y decide emprender en la industria de las piscinas.  Desde el año 2008 hasta el 2020 trabajamos en el servicio de mantenimiento, instalaciones y remodelaciones de piscina. Desde enero  de 2020 hasta la actualidad ofrecemos servicio de diseño 3D y construcción de piscina, cocinas de exterior y terrazas.  Nos gusta elevar la experiencia a la que el cliente está acostumbrado para que así nos recuerden por siempre.'}
        </p>
      </div>
    </Section>
  );
};