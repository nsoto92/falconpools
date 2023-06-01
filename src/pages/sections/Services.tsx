import React, { FunctionComponent, ReactElement, useState, MouseEvent, Fragment, useEffect } from 'react';
import { Section } from '../../components/Section/Section';
import { Card } from '../../components/Card/Card';
import styles from './Services.module.css';
import { Box, Button, InputAdornment, Modal, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { useIsMobile } from '../../utils/isMobile';
import { services } from '../../locales/es';

export type PoolShapes = 'rectangular' | 'circular' | 'irregular';


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

  const getShapeImage = () => {
    switch (shape) {
      case 'rectangular':
        return (
          <img className={styles.modalPicture} src={'/assets/PoolShape_Rectangle.png'} alt={'rectangular pool'}/>
        );
      case 'circular':
        return (
          <img className={styles.modalPicture} src={'/assets/PoolShape_Circular.png'} alt={'circular pool'}/>
        );
      case 'irregular':
        return (
          <img className={styles.modalPicture} src={'/assets/PoolShape_Oblong.png'} alt={'oblong pool'}/>
        );
      default:
        return;
    }
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
    maxWidth: '900px',
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
              sx={{ marginBottom: '15px'}}
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
                <div className={styles.modalWrapper}>
                  <Typography
                    variant={isMobile ?'h5' : 'h4'}
                    align={'center'}
                    sx={{ marginBottom: '25px' }}
                  >
                    {'Calculadora de Galones'}
                  </Typography>
                  <ToggleButtonGroup
                    color="primary"
                    value={shape}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                  >
                    <ToggleButton value="rectangular">Rectangular</ToggleButton>
                    <ToggleButton value="circular">Circular</ToggleButton>
                    <ToggleButton value="irregular">Habichuela</ToggleButton>
                  </ToggleButtonGroup>
                  {getShapeImage()}
                  <div className={styles.modalContent}>
                    {shape === 'irregular' && (
                      <Fragment>
                        <TextField
                          id="outlined-number"
                          label="Diámetro mayor (A)"
                          type="number"
                          value={largeDiameter}
                          onChange={(e) => setLargeDiameter(parseInt(e.target.value))}
                          sx={{ marginBottom: '15px', width: '80%' }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                {'ft'}
                              </InputAdornment>
                            ),
                          }}
                        />
                        <TextField
                          id="outlined-number"
                          label="Diámetro menor (B)"
                          type="number"
                          value={smallDiameter}
                          onChange={(e) => setSmallDiameter(parseInt(e.target.value))}
                          sx={{ marginBottom: '15px', width: '80%' }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                {'ft'}
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Fragment>
                    )}
                    {(shape === 'rectangular' || shape === 'irregular') && (
                      <TextField
                        id="outlined-number"
                      label={`Largo de la piscina ${shape === 'irregular' ? '(C)' : '(A)'}}`}
                        type="number"
                        value={length}
                        onChange={(e) => setLength(parseInt(e.target.value))}
                        sx={{ marginBottom: '15px', width: '80%' }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              {'ft'}
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                    { shape === 'rectangular' && (
                      <TextField
                        id="outlined-number"
                        label="Ancho de la piscina(B)"
                        type="number"
                        value={width}
                        onChange={(e) => setWidth(parseInt(e.target.value))}
                        sx={{ marginBottom: '15px', width: '80%' }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              {'ft'}
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                    { shape === 'circular' && (
                      <TextField
                        id="outlined-number"
                        label="Radio de piscina (R)"
                        type="number"
                        value={diameter}
                        onChange={(e) => setDiameter(parseInt(e.target.value))}
                        sx={{ marginBottom: '15px', width: '80%' }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              {'ft'}
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                    <TextField
                      id="outlined-number"
                      label="Profundidad 1"
                      helperText="*Parte menos profunda de la piscina"
                      type="number"
                      value={depth1}
                      required
                      onChange={(e) => setDepth1(parseInt(e.target.value))}
                      sx={{ marginBottom: '15px', width: '80%' }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            {'ft'}
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      id="outlined-number"
                      label="Profundidad 2 (Opcional)"
                      helperText="*Parte más profunda de la piscina"
                      type="number"
                      value={depth2}
                      onChange={(e) => setDepth2(parseInt(e.target.value))}
                      sx={{ marginBottom: '15px', width: '80%' }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            {'ft'}
                          </InputAdornment>
                        ),
                      }}
                    />
                    <Button
                      size={isMobile ? 'small' : 'medium'}
                      variant="contained"
                      onClick={() => calculateVolume(
                        shape,
                        depth1,
                        length,
                        width,
                        depth2,
                        diameter,
                        largeDiameter,
                        smallDiameter,
                        base,
                        height,
                      )}
                    >
                      {'Calcular'}
                    </Button>
                    {
                      volume > 0 &&
                      <Typography
                        variant={'body1'}
                        align={'center'}
                        sx={{ marginTop: '15px' }}
                      >
                        {`El volumen de su piscina es de ${volume} galones`}
                      </Typography>
                    }
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
      </div>
    </Section>
  );
};