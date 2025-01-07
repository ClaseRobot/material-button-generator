import { Box, Paper, Typography } from "@mui/material"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export const CodeOutput = ({ buttonStyle }) => {
  const generateCSS = () => {
    const background = buttonStyle.gradient
      ? `background: linear-gradient(${buttonStyle.gradientAngle}deg, ${buttonStyle.gradientColor1}, ${buttonStyle.gradientColor2});`
      : `background: ${buttonStyle.backgroundColor};`
    
    return `  .custom-button {
      padding: ${buttonStyle.paddingY}px ${buttonStyle.paddingX}px;
      border-radius: ${buttonStyle.borderRadius}px;
      font-size: ${buttonStyle.fontSize}px;
      color: ${buttonStyle.textColor};
      ${background}
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      ${buttonStyle.shadow ? `box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);` : ''}
    }
      
  .custom-button:hover {
      transform: translateY(-2px);
      ${buttonStyle.shadow ? `box-shadow: 0 6px 8px rgba(0,0,0,0.15);` : ''}
    }`;
  };


  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>Generate CSS Code</Typography>
      <Paper elevation={3} sx={{ bgcolor: '#1e1e1e' }}>
        <SyntaxHighlighter language="css" style={atomOneDark} customStyle={{ margin: 0, padding: '20px' }}>
          {generateCSS()}
        </SyntaxHighlighter>
      </Paper>
    </Box>
  )
}