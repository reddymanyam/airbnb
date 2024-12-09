// import * as React from 'react';
// import Accordion, { accordionClasses } from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails, {
//   accordionDetailsClasses,
// } from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Fade from '@mui/material/Fade';

// const Accordions = () => {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpansion = () => {
//     setExpanded((prevExpanded) => !prevExpanded);
//   };

//   return (
//     <div>
//       <Accordion
//         expanded={expanded}
//         onChange={handleExpansion}
//         slots={{ transition: Fade }}
//         slotProps={{ transition: { timeout: 400 } }}
//         sx={[
//           expanded
//             ? {
//                 [`& .${accordionClasses.region}`]: {
//                   height: 'auto',
//                 },
//                 [`& .${accordionDetailsClasses.root}`]: {
//                   display: 'block',
//                 },
//               }
//             : {
//                 [`& .${accordionClasses.region}`]: {
//                   height: 0,
//                 },
//                 [`& .${accordionDetailsClasses.root}`]: {
//                   display: 'none',
//                 },
//               },
//         ]}
//       >
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1-content"
//           id="panel1-header"
//         >
//           <Typography>Do I have to host a home to host an experience?
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//           No. You don’t have to host guests overnight in your home or space to be an experience host.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel2-content"
//           id="panel2-header"
//         >
//           <Typography>What’s the time commitment?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//           You can host as often as you like – feel free to adjust your dates and times until you find what works best for you.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel3-content"
//           id="panel3-header"
//         >
//           <Typography>Do I need a business licence?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//           Depending on activities involved, certain experiences may require a business licence. Make sure to check local laws in your area to determine which licences may be required for your experience, especially if there is food, alcohol or transport involved.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel4-content"
//           id="panel4-header"
//         >
//           <Typography>
// Is my place right for Airbnb?
// Do I have to host all the time?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//           Not at all – you control your calendar. You can host once a year, a few nights a month or more often.

//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//       <Accordion>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel5-content"
//           id="panel5-header"
//         >
//           <Typography>Any tips on being a great Airbnb Host?</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>
//           Getting the basics down goes a long way. Keep your place clean, respond to guests promptly and provide necessary amenities like fresh towels. Some Hosts like adding a personal touch such as putting out fresh flowers or sharing a list of local places to explore – but it’s not required.
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
      
//     </div>
//   );
// }

// export default Accordions;