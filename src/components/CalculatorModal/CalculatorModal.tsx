import React, { Fragment, FunctionComponent, MouseEvent, ReactElement } from 'react';
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography 
} from '@mui/material';
import { useIsMobile } from '../../utils/isMobile';
import CloseIcon from '@mui/icons-material/Close';

import styles from './CalculatorModal.module.css';

export type PoolShapes = 'rectangular' | 'circular' | 'irregular';

export interface CalculatorModalProps {
  shape: PoolShapes;
  open: boolean;
  triggerModal: () => void;
  depth1: number,
  setDepth1: (depth: number) => void,
  depth2: number,
  setDepth2: (depth: number) => void,
  length: number,
  setLength: (length: number) => void,
  width: number,
  setWidth: (width: number) => void,
  diameter: number,
  setDiameter: (diameter: number) => void,
  largeDiameter: number,
  setLargeDiameter: (diameter: number) => void,
  smallDiameter: number,
  setSmallDiameter: (diameter: number) => void,
  base: number,
  setBase: (base: number) => void,
  height: number,
  setHeight: (height: number) => void,
  volume: number,
  handleChange: (
    event: MouseEvent<HTMLElement>,
    newAlignment: PoolShapes,
  ) => void,
  onCalculateVolume: (
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
  ) => void;
}

const CalculatorModal: FunctionComponent<CalculatorModalProps> = (props): ReactElement => {
  const isMobile = useIsMobile();
  
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
    maxHeight:  isMobile ? '80dvh' : '85vh',
    overflowY: 'scroll' as 'scroll',
  };

  const getShapeImage = () => {
    switch (props.shape) {
      case 'rectangular':
        return (
          <img
            className={styles.modalPicture}
            src={'/assets/PoolShape_Rectangle.png'}
            alt={'rectangular pool'}
          />
        );
      case 'circular':
        return (
          <img
            className={styles.modalPicture}
            src={'/assets/PoolShape_Circular.png'}
            alt={'circular pool'}
          />
        );
      case 'irregular':
        return (
          <img
            className={styles.modalPicture}
            src={'/assets/PoolShape_Oblong.png'}
            alt={'oblong pool'}
          />
        );
      default:
        return;
    }
  };
 return (
  <Modal
    open={props.open}
    onClose={props.triggerModal}
    aria-labelledby="parent-modal-title"
    aria-describedby="parent-modal-description"
  >
    <Box sx={{...style}}>
      <div className={styles.modalWrapper}>
        <div className={styles.modalHeader}>
          <Typography
            variant={isMobile ?'h5' : 'h4'}
            align={'center'}
            sx={{ marginBottom: '25px' }}
          >
            {'Calculadora de Galones'}
          </Typography>
          <IconButton
            onClick={props.triggerModal}
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              mr: 2,
              position: 'absolute',
              right: isMobile ? '-45px' : '-35px',
              bottom: '45px'
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <ToggleButtonGroup
          color="primary"
          value={props.shape}
          exclusive
          onChange={props.handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="rectangular">Rectangular</ToggleButton>
          <ToggleButton value="circular">Circular</ToggleButton>
          <ToggleButton value="irregular">Habichuela</ToggleButton>
        </ToggleButtonGroup>
        {getShapeImage()}
        <div className={styles.modalContent}>
          {props.shape === 'irregular' && (
            <Fragment>
              <TextField
                id="outlined-number"
                label="Diámetro mayor (A)"
                type="number"
                value={props.largeDiameter}
                onChange={(e) => props.setLargeDiameter(parseInt(e.target.value))}
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
                value={props.smallDiameter}
                onChange={(e) => props.setSmallDiameter(parseInt(e.target.value))}
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
          {(props.shape === 'rectangular' || props.shape === 'irregular') && (
            <TextField
              id="outlined-number"
            label={`Largo de la piscina ${props.shape === 'irregular' ? '(C)' : '(A)'}`}
              type="number"
              value={props.length}
              onChange={(e) => props.setLength(parseInt(e.target.value))}
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
          { props.shape === 'rectangular' && (
            <TextField
              id="outlined-number"
              label="Ancho de la piscina(B)"
              type="number"
              value={props.width}
              onChange={(e) => props.setWidth(parseInt(e.target.value))}
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
          { props.shape === 'circular' && (
            <TextField
              id="outlined-number"
              label="Radio de piscina (R)"
              type="number"
              value={props.diameter}
              onChange={(e) => props.setDiameter(parseInt(e.target.value))}
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
            value={props.depth1}
            required
            onChange={(e) => props.setDepth1(parseInt(e.target.value))}
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
            value={props.depth2}
            onChange={(e) => props.setDepth2(parseInt(e.target.value))}
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
            onClick={() => props.onCalculateVolume(
              props.shape,
              props.depth1,
              props.length,
              props.width,
              props.depth2,
              props.diameter,
              props.largeDiameter,
              props.smallDiameter,
              props.base,
              props.height,
            )}
          >
            {'Calcular'}
          </Button>
          {
            props.volume > 0 &&
            <Typography
              variant={'body1'}
              align={'center'}
              sx={{ marginTop: '15px' }}
            >
              {`El volumen de su piscina es de ${props.volume} galones`}
            </Typography>
          }
        </div>
      </div>
    </Box>
  </Modal>
    )
};

export default CalculatorModal;