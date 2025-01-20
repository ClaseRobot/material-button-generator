import { Box, IconButton, Link } from "@mui/material"
import { SiBuymeacoffee } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box componet="footer" sx={{ mt: 6, pb: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <Box>
        <Link 
            href="https://cafecito.app/YOUR_USERNAME" 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: '#FF813F',
              textDecoration: 'none',
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-2px)'
              }
          }}
        >
          <SiBuymeacoffee size={24} />
          Buy me a coffee
        </Link>
      </Box>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Box title="LinkedIn">
          <IconButton 
            component={Link}
            href="https://linkedin.com/in/gunterCode"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ 
              color: '#0A66C2',
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-2px)'
              }
            }}
          >
            <FaLinkedin size={24} />
          </IconButton>
        </Box>

        <Box title="GitHub">
          <IconButton
            component={Link}
            href="https://github.com/ClaseRobot"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ 
              color: '#24292F',
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-2px)'
              }
            }}
          >
            <FaGithub size={24} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer