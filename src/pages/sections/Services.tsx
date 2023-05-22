import React, { FunctionComponent, ReactElement, useState, MouseEvent, Fragment } from 'react';
import { Section } from '../../components/Section/Section';
import { Card } from '../../components/Card/Card';
import styles from './Services.module.css';
import { Box, Button, InputAdornment, Modal, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { useIsMobile } from '../../utils/isMobile';
import { services } from '../../locales/es';

export const Services: FunctionComponent = (): ReactElement => {
  const isMobile = useIsMobile();
  const [ openModal, setOpenModal ] = useState(false);
  const [ shape, setShape ] = useState('rectangular');
  const [ length, setLength ] = useState(0);
  const [ width, setWidth ] = useState(0);
  const [ diameter, setDiameter ] = useState(0);
  const [ base, setBase ] = useState(0);
  const [ height, setHeight ] = useState(0);
  const [ depth1, setDepth1 ] = useState(0);
  const [ depth2, setDepth2 ] = useState(0);
  const [ volume, setVolume ] = useState(0);

  const triggerModal = () => {
    setOpenModal(!openModal);
  };

  const handleChange = (
    event: MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setShape(newAlignment);
  };

  const calculateVolume = (
    _shape: string,
    _depth1: number,
    _length?: number,
    _width?: number,
    _depth2?: number,
    _diameter?: number,
    _base?: number,
    _height?: number,
  ) => {
    if (_shape === 'rectangular' && _length && _width) {
      if (_depth2) {
        return setVolume(_length * _width * ((_depth1 + _depth2) / 2) * 7.5);
      };
      return setVolume(_length * _width * _depth1 * 7.5);
    } else if (_shape === 'circular' && _diameter) {
      const radius = _diameter / 2;
      if (_depth2) {
        return setVolume(Math.PI * (radius * radius) * ((_depth1 + _depth2) / 2) * 7.5);
      };
      return setVolume(Math.PI * (radius * radius) * _depth1 * 7.5);
    } else if (_shape === 'triangular' && _base && _height) {
      const cubicVolume = !_depth2 ? (_base * _height * _depth1) / 2 : (_base * _height * (_depth1 + _depth2) / 2) / 2;
      return setVolume(cubicVolume * 7.5);
    }
    setLength(0);
    setWidth(0);
    setDepth1(0);
    setDepth2(0);
    setDiameter(0);
    setBase(0);
    setHeight(0);
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
                    <ToggleButton value="triangular">Triangular</ToggleButton>
                  </ToggleButtonGroup>
                  <div className={styles.modalContent}>
                    { shape === 'rectangular' && (
                      <Fragment>
                        <TextField
                          id="outlined-number"
                          label="Largo de la piscina"
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
                        <TextField
                          id="outlined-number"
                          label="Ancho de la piscina"
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
                      </Fragment>
                    )}
                    { shape === 'circular' && (
                      <TextField
                        id="outlined-number"
                        label="Diametro de piscina"
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
                    { shape === 'triangular' && (
                      <Fragment>
                        <TextField
                          id="outlined-number"
                          label="Base de la piscina"
                          type="number"
                          value={base}
                          onChange={(e) => setBase(parseInt(e.target.value))}
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
                          label="Altura de la piscina"
                          type="number"
                          value={height}
                          onChange={(e) => setHeight(parseInt(e.target.value))}
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
                    <TextField
                      id="outlined-number"
                      label="Profundidad 1"
                      helperText="*Profundidad de la parte menos profunda de la piscina"
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
                      helperText="*Profundidad de la parte más profunda de la piscina"
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
                        length > 0 ? length : undefined,
                        width > 0 ? width : undefined,
                        depth2 > 0 ? depth2 : undefined,
                        diameter > 0 ? diameter : undefined,
                        base > 0 ? base : undefined,
                        height > 0 ? height : undefined,
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