import { useContext, useEffect } from 'react';
import { Link, json, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import axios from 'axios';
import Navbars from '../../../Ccomponents/Header/Navbar/Navbars';
import Footer from '../../../Ccomponents/Footer/Footer';
import DashNavbar from '../../../Ccomponents/Header/DashboardNavbar/DashNavbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



const Negativeattrition = () => {

  const [openDialog, setOpenDialog] = useState(false);

  const retentionStrategies = [
    'Competitive Compensation and Benefits',
    'Career Development and Training',
    'Positive Work Environment',
    'Work-Life Balance',
    'Recognition and Rewards',
    'Employee Involvement and Empowerment',
    'Strong Leadership and Management',
    'Additional Perks and Incentives',
    'Exit Interviews and Feedback',
    'Employee Well-being Programs'
  ];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, red, white)',
  };
      const handleDialogOpen = () => {
        setOpenDialog(true);
      };
    
      const handleDialogClose = () => {
        setOpenDialog(false);
      };
    
      const divStyle = {
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        backgroundColor: '#f44336', // Red background for warning
        color: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
        width: '80%',
        maxWidth: '600px',
        fontSize: '50px',
        animation: 'shake 1s infinite',
      };
    
      const animationKeyframes = `
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-5px) rotate(-5deg); }
          50% { transform: translateX(5px) rotate(5deg); }
          75% { transform: translateX(-5px) rotate(-5deg); }
          100% { transform: translateX(0); }
        }
      `;
    
      const mediaQuery = `
        @media (max-width: 768px) {
          ${divStyle} {
            fontSize: '40px';
            padding: '10px';
            maxWidth: '80%';
          }
        }
    
        @media (max-width: 480px) {
          ${divStyle} {
            fontSize: '30px';
          }
        }
      `;



    return(
        
        <>
      <Navbars />
      <div style={containerStyle}>
        <style>{animationKeyframes}</style>
        <style>{mediaQuery}</style>
        <div style={divStyle}>
          <p>Upss... Seems like your employee is about to switch!!</p>
        </div>
      </div>

      <div className='rootcontainer2' style={{
          background: 'white',
          padding: '20px 0', // Adjust padding as needed
          textAlign: 'center',
        }}>
      
      <Button
  variant="contained"
  color="primary"
  style={{
    marginBottom: '20px',
    backgroundColor: '#4CAF50', // Change the background color
    color: 'white', // Change the text color
    borderRadius: '25px', // Increase border radius for a rounded shape
    padding: '12px 24px', // Adjust padding for better size
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
    transition: 'background-color 0.3s ease-in-out', // Add transition for hover effect
    fontWeight: 'bold', // Increase font weight
  }}
  onClick={handleDialogOpen}
>
  Show Retention Strategies
</Button>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Retention Strategies</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              {retentionStrategies.map((strategy, index) => (
                <li key={index}>{strategy}</li>
              ))}
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

    

            <Link to="/Attrition" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary" style={{ marginBottom: '20px' }}>
                        Get back
                    </Button>
                </Link>
            </div>
      <Footer />
    </>


       

    )

}

export default Negativeattrition