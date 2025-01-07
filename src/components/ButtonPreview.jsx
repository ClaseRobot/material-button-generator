
import { Box, Paper } from '@mui/material'

export const ButtonPreview = ({ buttonStyle }) => {
  return (
    <Paper elevation={3} sx={{ p: 4, bgcolor: '#f8f9fa', minHeight: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button style={{
        padding: `${buttonStyle.paddingY}px ${buttonStyle.paddingX}px`,
        borderRadius: `${buttonStyle.borderRadius}px`,
        fontSize: `${buttonStyle.fontSize}px`,
        fontWeight: `${buttonStyle.fontWeight}`,
        border: `${buttonStyle.border}`,
        background: buttonStyle.gradient
          ? `linear-gradient(${buttonStyle.gradientAngle}deg, ${buttonStyle.gradientColor1}, ${buttonStyle.gradientColor2})`
          : buttonStyle.backgroundColor,
        color: buttonStyle.textColor,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: buttonStyle.shadow ? '0 4px 6px rgba(0,0,0,0.1)' : 'none',
      }}>
        { buttonStyle.text || 'Button text'}
      </button>
    </Paper>
  )
}