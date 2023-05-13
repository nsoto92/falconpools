import React, { FunctionComponent, ReactElement, useState } from 'react';
import { Section } from '../../components/Section/Section';
import { Card } from '../../components/Card/Card';
import styles from './Services.module.css';
import { Box, Button, Modal, Typography } from '@mui/material';
import { useIsMobile } from '../../utils/isMobile';

export const Services: FunctionComponent = (): ReactElement => {
  const isMobile = useIsMobile();
  const [ openModal, setOpenModal ] = useState(false);

  const triggerModal = () => {
    setOpenModal(!openModal);
  };

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    bgcolor: 'ghostwhite',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const services = [
    {
      title: 'Diseño 3D',
      image: '/assets/3dDesign.jpg',
      description: `
      En Falcón Pools, ofrecemos servicio de diseño 3D a través del programa Pool Studio para que nuestros clientes puedan visualizar cómo quedará su piscina, cocina exterior o terraza antes de comenzar la construcción. Gracias a esta herramienta, los clientes pueden hacer cambios y ajustes antes de comenzar la construcción, lo que permite ahorrar tiempo y dinero. Creamos diseños personalizados que se adaptan a las necesidades y gustos de nuestros clientes.
      `
    },
    {
      title: 'Construcción de Piscinas',
      image: '/assets/construccion.jpg',
      description: `
      Nos especializamos en la construcción de piscinas personalizadas que se ajustan a las necesidades y gustos de nuestros clientes. Nos aseguramos de utilizar los materiales de la más alta calidad y los últimos avances en tecnología para garantizar que las piscinas que construimos sean duraderas y estén equipadas con las mejores características. Nuestro equipo de profesionales altamente capacitados se encarga de cada etapa de la construcción para garantizar que todo se haga con la máxima calidad.
      `
    },
    {
      title: 'Remodelación de Piscinas',
      image: '/assets/remodelacion.jpg',
      description: `
      Si ya tienes una piscina, pero necesitas modernizar, ya sea que necesites una renovación completa o simplemente quieras añadir características nuevas, nuestro equipo de profesionales se encargará de cada detalle para que tu piscina se vea como nueva.
      `
    },
    {
      title: 'Cocinas de Exterior',
      image: '/assets/cocina.jpg',
      description: `
      Nos especializamos en cocinas personalizadas que se ajustan a las necesidades y gustos de nuestros clientes para que  puedan disfrutar de la vida al aire libre. Trabajamos accesorios como: BBQ, horno de pizza, fregadero, receptáculos, nevera, vinera, hielera, tope de barra, gavetas, etc.
      `
    },
    {
      title: 'Terrazas',
      image: '/assets/terrazas.jpg',
      description: `
      Trabajamos estrechamente con nuestros clientes para entender sus visiones y deseos. Nuestra amplia experiencia en la industria de la construcción, combinada con nuestra dedicación a la excelencia en el servicio al cliente, nos convierte en la elección ideal para su proyecto de terraza.
      `
    },
    {
      title: 'Venta e instalaciones de equipos',
      image: '/assets/equipo.jpg',
      description: `
      Ofrecemos soluciones confiables, trabajamos con marcas reconocidas y ofrecemos una amplia gama de productos de alta calidad para asegurar el funcionamiento eficiente de su piscina. Nos enorgullecemos de brindar un servicio al cliente excepcional, con asesoramiento personalizado y cumplimiento de los códigos y regulaciones aplicables.
      `
    },
  ];

  return (
    <Section color={'white'}>
      <div className={styles.wrapper}>
        <Typography
          variant={isMobile ?'h4' : 'h3'}
          align={'center'}
          sx={{ marginBottom: '25px' }}
        >
          {'Servicios'}
        </Typography>
        <div className={styles.services}>
          {services.map((service, index) => {
            return (
              <Card key={index} index={index}>
                <Typography
                  variant={isMobile ?'h5' : 'h4'}
                  align={'center'}
                >
                  {service.title}
                </Typography>
                <img
                  className={styles.cardImg}
                  src={service.image}
                  alt={'headerImage'}
                />
                <Typography
                  variant={'body1'}
                  align={'center'}
                  sx={{ whiteSpace: 'pre-line'}}
                >
                  {service.description}
                </Typography>
              </Card>
            )
            })}
          <div className={styles.servicesCTA}>
            <Typography
              variant={isMobile ?'h5' : 'h4'}
              align={'center'}
              sx={{ marginBottom: '25px' }}
            >
              {'Sacar cita'}
            </Typography>
            <Button
              size={isMobile ? 'small' : 'medium'}
              variant="contained"
              href={'https://falconpoolsprhablaclaro.as.me/'}
            >
              {'Estimados Aquí'}
            </Button>
            <Button
              size={isMobile ? 'small' : 'medium'}
              variant="contained"
              onClick={triggerModal}
            >
              {'Calculadora de Galones'}
            </Button>
            <Modal
              open={openModal}
              onClose={triggerModal}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box sx={{...style}}>
                <h2 id="parent-modal-title">Text in a modal</h2>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </Section>
  );
};