import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import { MdHeadsetMic,MdLocalPostOffice } from "react-icons/md";
import {CgMenuRound} from "react-icons/cg"
import {BiWorld,BiPackage} from "react-icons/bi"
import {RiUser2Fill} from "react-icons/ri"
import "./aside.css"
export default function Aside() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className='asideMenuContainer'>
    <List
      sx={{ width: '100%', padding:"30px 0"}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx={{background:"linear-gradient(to bottom right, #9c04bd, #7104bd)",color:"#fff",borderRadius: 1,display:"flex",alignItems:"center",paddingleft:"16px",lineheight:"1.5px"}}>
         
          <CgMenuRound style={{width: "25px",
    height: "25px"}}/><h3 style={{fontsize: "24px",letterspacing: "-1px",marginLeft:"5px",fontWeight:"normal"}}>MENU</h3>
        </ListSubheader>
      }
    >
       <ListItemButton onClick={handleClick}>
        
        <ListItemIcon>
        <RiUser2Fill style={{width:"25px", height:"25px"}} />
        </ListItemIcon>
        
        <ListItemText primary="Kurumsal" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} href="/hakkimizda">
            <ListItemIcon>
           
            </ListItemIcon>
            <ListItemText primary="Hakkımızda"  />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} href="/ekibimiz">
            <ListItemIcon>
            
            </ListItemIcon>
            <ListItemText primary="Ekibimiz" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} href="/referanslar">
            <ListItemIcon>
          
            </ListItemIcon>
            <ListItemText primary="Referanslar"  />
          </ListItemButton>

     
        </List>
      </Collapse>
  
      <ListItemButton href="/Paketlerimiz">
        <ListItemIcon>
        <BiPackage style={{width:"25px", height:"25px"}} />
        </ListItemIcon>
        <ListItemText primary="Paketlerimiz" />
      </ListItemButton>
    
      <ListItemButton href="/blog">
        <ListItemIcon>
        <BiWorld style={{width:"25px", height:"25px"}} />
        </ListItemIcon>
        <ListItemText primary="Blog" />
      </ListItemButton>
      
      <ListItemButton  href="/iletisim">
        <ListItemIcon>
        <MdLocalPostOffice style={{width:"25px", height:"25px"}}/>
        </ListItemIcon>
        <ListItemText primary="iletişim" />
      </ListItemButton>
      <Box
      sx={{
        height: "auto",
        marginTop:"30px"
      }}
    ><a href="https://wa.me/05415884922" className='asideContactMenu'>
      <MdHeadsetMic className='asideContactMenuIcon'/>
      <div className='asideMenuContactTable'>
        <div className='asideMenuContactTableCell'>
          <div className='asideMenuContactTableCellHeader'>TEKNİK DESTEK</div>
          <div className='asideMenuContactTableCellHeaderDesc'>7/24 Teknik Destek!</div>
        </div>
      </div>
      </a>
      </Box>
    </List>
    </div>
  );
}