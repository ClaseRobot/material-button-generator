

export const useGenerateCss = ( buttonStyles = {} ) => {
  console.log('hola me estoy ejecutando')

  const generateCSS = () => {
    const background = buttonStyles.gradient
      ? `background: linear-gradient(${buttonStyles.gradientAngle}deg, ${buttonStyles.gradientColor1}, ${buttonStyles.gradientColor2});`
      : `background: ${buttonStyles.backgroundColor};`
    
    return  `  .custom-button {
      padding: ${buttonStyles.paddingY}px ${buttonStyles.paddingX}px;
      border-radius: ${buttonStyles.borderRadius}px;
      font-size: ${buttonStyles.fontSize}px;
      color: ${buttonStyles.textColor};
      ${background}
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      ${buttonStyles.shadow ? 'box-shadow: 0 4px 6px rgba(0,0,0,0.1);' : ''}
    }
  
  .custom-button:hover {
      transform: translateY(-2px);
      ${buttonStyles.shadow ? 'box-shadow: 0 6px 8px rgba(0,0,0,0.15);' : ''}
    }`
  }
  console.log(generateCSS())
  return { generateCSS }
}