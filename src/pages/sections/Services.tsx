import React, { FunctionComponent, ReactElement, useState } from 'react';
import { Section } from '../../components/Section/Section';
import { Card } from '../../components/Card/Card';
import styles from './Services.module.css';
import { Box, Button, Modal, Typography } from '@mui/material';
import { useIsMobile } from '../../utils/isMobile';
import { services } from '../../locales/es';

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
    width: '80%',
    bgcolor: 'ghostwhite',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
  };

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