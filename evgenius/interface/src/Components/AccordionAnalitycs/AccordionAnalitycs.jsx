import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DateTimePickers from "../DateTimePickers/DateTimePickers";
import AllTagsList from "./AllTagsList/AllTagsList";
import SelectedTagsList from "./SelectedTagsList/SelectedTagsList";


const AccordionAnalitycl = () => {

    return (
        <>
          {/* <Accordion sx={{ boxShadow: 5, mt: 1, ml: 1, mr: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Please, select a tags from list</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <AllTagsList />
            </AccordionDetails>
          </Accordion> */}
          {/* <Accordion sx={{ boxShadow: 5, mt: 1, ml: 1, mr: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Selected tags</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <SelectedTagsList />
            </AccordionDetails>
          </Accordion> */}
              <DateTimePickers />
        </>
  )        
}

export default AccordionAnalitycl
