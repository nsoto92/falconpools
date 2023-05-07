import React, { FunctionComponent, ReactElement } from 'react';
import { Section } from '../../components/Section/Section';

import styles from './AboutUs.module.css';
import { Typography } from '@mui/material';
import { useIsMobile } from '../../utils/isMobile';

export const AboutUs: FunctionComponent = (): ReactElement => {
  const isMobile = useIsMobile();

  return (
    <Section color={'white'}>
      <div className={styles.wrapper}>
        <Typography
          variant={isMobile ?'h4' : 'h3'}
          align={'center'}
        >
          {'Nuestra Historia'}
        </Typography>
        <Typography
          variant={'body1'}
          align={!isMobile ? 'center' : 'left'}
          sx={{ whiteSpace: 'pre-line'}}
        >
          {`
            Falcón Pools es una compañía localizada en Puerto Rico que se dedica a la construcción y servicio de piscinas. Desde el año 2008 hasta el 2020, Falcón Pools se enfocó en el servicio de mantenimiento, instalaciones y remodelaciones de piscinas. Sin embargo, desde enero de 2020 hasta la actualidad, la compañía ha ampliado su oferta de servicios para incluir diseño 3D y construcción de piscinas, cocinas de exterior y terrazas.

            Falcón Pools se esfuerza por elevar la experiencia a la que el cliente está acostumbrado, para que así los clientes recuerden su experiencia con la compañía por siempre. El compromiso con la satisfacción del cliente es de suma importancia para Falcón Pools. La compañía trabaja de cerca con sus clientes para asegurarse de que sus expectativas sean cumplidas y cree en la importancia de la comunicación efectiva y transparente para que los clientes siempre se sientan informados y seguros en el proceso de construcción o remodelación.\n
          `}
        </Typography>
      </div>
    </Section>
  );
};