import { useState } from 'react'
import { Container, Paper, Typography, Box, ThemeProvider, createTheme, Button } from '@mui/material'
import { Code, Wand2 } from 'lucide-react'
import { ButtonPreview, CodeOutput, StyleControls } from './components'

const theme = createTheme ({
  palette: {
    mode: 'light',
    primary: {
      main: '#2196f3'
    }
  },
  typography: {
    h4: {
      fontWeight: 600,
    }
  }
})


function App() {
  
  const [buttonStyle, setButtonStyle] = useState({
    text: 'Click Me',
    paddingX: 20,
    paddingY: 10,
    borderRadius: 8,
    fontSize: 16,
    fontWeight: 500,
    backgroundColor: '#2196f3',
    textColor: '#ffffff',
    gradient: false,
    gradientColor1: '#2196f3',
    gradientColor2: '#21cbf3',
    gradientAngle: 45,
    shadow: true,
    border: 'none',
  })

  return (
    <ThemeProvider theme={theme}>
     <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
          <Wand2 size={32} />
          <Typography variant="h4">Button Generator</Typography>
        </Box>

        <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
          <ButtonPreview buttonStyle={buttonStyle}/>
        </Paper>

        <Paper elevation={2}>
          <StyleControls buttonStyle={buttonStyle} setButtonStyle={setButtonStyle}/>
        </Paper>

        <CodeOutput buttonStyle={buttonStyle}/>

     </Container>
    </ThemeProvider>
  )
}

export default App
