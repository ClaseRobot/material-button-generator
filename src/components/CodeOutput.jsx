import { useState } from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material"
import { FaRegCopy, FaCheck } from "react-icons/fa";
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { useGenerateCss } from "../hooks/useGenerateCss";


export const CodeOutput = ({ buttonStyle }) => {

  const [isCopied, setIsCopied] = useState(false)
  console.log('buttonStyle', buttonStyle)
  const  { generateCSS } = useGenerateCss( buttonStyle )

  // const generateCSS = () => {
  //   const background = buttonStyle.gradient
  //     ? `background: linear-gradient(${buttonStyle.gradientAngle}deg, ${buttonStyle.gradientColor1}, ${buttonStyle.gradientColor2});`
  //     : `background: ${buttonStyle.backgroundColor};`
    
  //   return `  .custom-button {
  //     padding: ${buttonStyle.paddingY}px ${buttonStyle.paddingX}px;
  //     border-radius: ${buttonStyle.borderRadius}px;
  //     font-size: ${buttonStyle.fontSize}px;
  //     color: ${buttonStyle.textColor};
  //     ${background}
  //     border: none;
  //     cursor: pointer;
  //     transition: all 0.3s ease;
  //     ${buttonStyle.shadow ? `box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);` : ''}
  //   }
      
  // .custom-button:hover {
  //     transform: translateY(-2px);
  //     ${buttonStyle.shadow ? `box-shadow: 0 6px 8px rgba(0,0,0,0.15);` : ''}
  //   }`;
  // };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generateCSS())
      console.log('Texto copiado al portapapeles')
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 3000)
    }
      catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Generate CSS Code</Typography>
      <Paper elevation={3} sx={{ bgcolor: '#1e1e1e', position: 'relative' }}>
        <SyntaxHighlighter language="css" style={atomOneDark} customStyle={{ margin: 0, padding: '20px'}} >
          {generateCSS()}
        </SyntaxHighlighter>
        
          <IconButton onClick={handleCopy} sx={{ position: 'absolute', top: '8px', right: '8px' }}>
            { isCopied ? (
              <FaCheck size={20} className="text-green-500" style={{ transition: 'all 0.2s ease-in-out', color: 'grey' }} />
            ) : (
              <FaRegCopy size={20} style={{ transition: 'all 0.2s ease-in-out', color: 'grey' }} />
            )}
          </IconButton>
      </Paper>
    </Box>
  )
}