import React, { FunctionComponent, ReactElement, useState, MouseEvent, useEffect } from 'react';
import { Section } from '../../components/Section/Section';
import { Card } from '../../components/Card/Card';
import styles from './Services.module.css';
import { Button, Typography } from '@mui/material';
import { useIsMobile } from '../../utils/isMobile';
import { services } from '../../locales/es';
import CalculatorModal, { PoolShapes } from '../../components/CalculatorModal/CalculatorModal';

export const Services: FunctionComponent = (): ReactElement => {
  const isMobile = useIsMobile();
  const [ openModal, setOpenModal ] = useState(false);
  const [ shape, setShape ] = useState('rectangular' as PoolShapes);
  const [ length, setLength ] = useState(0);
  const [ width, setWidth ] = useState(0);
  const [ diameter, setDiameter ] = useState(0);
  const [ largeDiameter, setLargeDiameter ] = useState(0);
  const [ smallDiameter, setSmallDiameter ] = useState(0);
  const [ base, setBase ] = useState(0);
  const [ height, setHeight ] = useState(0);
  const [ depth1, setDepth1 ] = useState(0);
  const [ depth2, setDepth2 ] = useState(0);
  const [ volume, setVolume ] = useState(0);

  useEffect(() => {
    resetValues();
  }, [shape, openModal]);

  const resetValues = () => {
    setLength(0);
    setWidth(0);
    setDepth1(0);
    setDepth2(0);
    setDiameter(0);
    setBase(0);
    setHeight(0);
    setLargeDiameter(0);
    setSmallDiameter(0);
  };

  const triggerModal = () => {
    setOpenModal(!openModal);
    if (!openModal) {
      setVolume(0);
    }
  };

  const handleChange = (
    event: MouseEvent<HTMLElement>,
    newAlignment: PoolShapes,
  ) => {
    if (newAlignment === null) {
      return;
    };
    setShape(newAlignment);
    setVolume(0);
  };

  const calculateVolume = (
    _shape: string,
    _depth1: number,
    _length?: number,
    _width?: number,
    _depth2?: number,
    _diameter?: number,
    _largeDiameter?: number,
    _smallDiameter?: number,
    _base?: number,
    _height?: number,
  ) => {
    if (_shape === 'rectangular' && _length && _width) {
      if (_depth2) {
        return setVolume(Math.floor(_length * _width * ((_depth1 + _depth2) / 2) * 7.5));
      };
      return setVolume(Math.floor(_length * _width * _depth1 * 7.5));
    } else if (_shape === 'circular' && _diameter) {
      const radius = _diameter;
      if (_depth2) {
        return setVolume(Math.floor(Math.PI * (radius * radius) * ((_depth1 + _depth2) / 2) * 7.5));
      };
      return setVolume(Math.floor(Math.PI * (radius * radius) * _depth1 * 7.5));
    } else if (_shape === 'irregular' && _largeDiameter && _smallDiameter && _length) {
      const cubicVolume = !_depth2 ? (
        0.45 * (_largeDiameter + _smallDiameter) * _length * _depth1 
      ) : ( 
        0.45 * (_largeDiameter + _smallDiameter) * _length * (_depth1 + _depth2) / 2
      );
      return setVolume(Math.floor(cubicVolume * 7.5));
    }
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
              <Card key={index}>
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
              sx={{ marginBottom: '15px' }}
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
          </div>
        </div>
        <CalculatorModal
          shape={shape}
          open={openModal}
          triggerModal={triggerModal}
          depth1={depth1}
          setDepth1={setDepth1}
          depth2={depth2}
          setDepth2={setDepth2}
          length={length}
          setLength={setLength}
          width={width}
          setWidth={setWidth}
          diameter={diameter}
          setDiameter={setDiameter}
          largeDiameter={largeDiameter}
          setLargeDiameter={setLargeDiameter}
          smallDiameter={smallDiameter}
          setSmallDiameter={setSmallDiameter}
          base={base}
          setBase={setBase}
          height={height}
          setHeight={setHeight}
          volume={volume}
          handleChange={handleChange}
          onCalculateVolume={calculateVolume}
        />
      </div>
    </Section>
  );
};