import { Box, TextField, Slider, FormControlLabel, Switch, Typography, Grid, InputLabel } from '@mui/material'

export const StyleControls = ({ buttonStyle, setButtonStyle }) => {

  const handleChange = (property) => (event) => {
    setButtonStyle( prev => ({
      ...prev,
      [property]: event.target.value
    }))
  }

  const handleSwitchChange = (property) => (event) => {
    setButtonStyle( prev => ({
      ...prev,
      [property]: event.target.checked
    }))
  }

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Button Text"
            value={buttonStyle.text}
            onChange={handleChange('text')}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>Padding X</Typography>
          <Slider 
            value={buttonStyle.paddingX}
            onChange={(_, value) => setButtonStyle( prev => ({ ...prev, paddingX: value}))}
            min={0}
            max={50}
            valueLabelDisplay='auto'
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>Padding Y</Typography>
          <Slider 
            value={buttonStyle.paddingY}
            onChange={(_, value) => setButtonStyle( prev => ({ ...prev, paddingY: value}))}
            min={0}
            max={50}
            valueLabelDisplay='auto'
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>Border Radius</Typography>
          <Slider 
            value={buttonStyle.borderRadius}
            onChange={(_, value) => setButtonStyle( prev => ({ ...prev, borderRadius: value}))}
            min={0}
            max={50}
            valueLabelDisplay='auto'
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography gutterBottom>Font Size</Typography>
          <Slider 
            value={buttonStyle.fontSize}
            onChange={(_, value) => setButtonStyle( prev => ({ ...prev, fontSize: value}))}
            min={12}
            max={32}
            valueLabelDisplay='auto'
          />
        </Grid>

        <Grid item xs={12} >
          <FormControlLabel 
            control={
              <Switch
                checked={buttonStyle.gradient}
                onChange={handleSwitchChange('gradient')}
              />
            }
            label="Use Gradient Background"
          />
        </Grid>

        { buttonStyle.gradient ? (
          <>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label='Gradient color 1'
                type='color'
                value={buttonStyle.gradientColor1}
                onChange={handleChange('gradientColor1')}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label='Gradient color 2'
                type='color'
                value={buttonStyle.gradientColor2}
                onChange={handleChange('gradientColor2')}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography gutterBottom>Gradient Angle</Typography>
              <Slider 
                value={buttonStyle.gradientAngle}
                onChange={(_, value) => setButtonStyle( prev => ({ ...prev, gradientAngle: value}))}
                min={0}
                max={360}
                valueLabelDisplay='auto'
              />
            </Grid>
          </>
        ) : (
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Background Color'
              type='color'
              value={buttonStyle.backgroundColor}
              onChange={handleChange('backgroundColor')}
            />
          </Grid>
        )}

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label='Text Color'
            type='color'
            value={buttonStyle.textColor}
            onChange={handleChange('textColor')}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Switch
                checked={buttonStyle.shadow}
                onChange={handleSwitchChange('shadow')}
              />
            }
            label="Add Shadow"
          />
        </Grid>
      </Grid>
    </Box>
  )
}