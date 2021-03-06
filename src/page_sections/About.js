import React, { Fragment, useState, useEffect } from 'react'

import { makeStyles, Typography } from '@material-ui/core'
// import {
//      motion,
//      useViewportScroll,
//      AnimatePresence,
//      useSpring,
//      useTransform
// } from 'framer-motion'


import Skills_Vertc from './SVG_s/Skills_Vertc'
import Skills_Horiz from './SVG_s/Skills_Horiz'
import { theme } from '../theme'



const About = ({ windowDimensions, Y_position_Percentage, pathLength, landscape_Mode }) => {

     const classes = useStyles()
     const [pageOrientation, setPageOrientation] = useState('portraitMode');

     const [SW, setSW] = useState(1)

     useEffect(() => {
          setSW(windowDimensions.width > 600 ? 0.7 : 1.1)
     }, [windowDimensions])

     useEffect(() => {
          if (windowDimensions) {
               if (windowDimensions.height > windowDimensions.width) {
                    setPageOrientation('portraitMode')
               }
               if (windowDimensions.height < windowDimensions.width) {
                    setPageOrientation('landscapeMode')
               }
          }
     }, [windowDimensions]);

     const result_PortraitMode = () => {
          if (pageOrientation === 'portraitMode') {
               return (<div style={{
                    display: 'flex',
                    fontSize: 0,
                    flexWrap: 'wrap',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
               }}
               >
                    .<Skills_Vertc
                         SW={SW}
                         pathLength={pathLength}
                         Y_position_Percentage={Y_position_Percentage}
                         color={theme.palette.diagram.color} 
                         color_Text={theme.palette.diagram.color_Text}
                         color_circle_IN={theme.palette.diagram.color_circle_IN}
                         color_circle_OUT={theme.palette.diagram.color_circle_OUT}
                         color_Text_Secondary={theme.palette.diagram.color_Text_Secondary}

                    />
               </div>)
          } else {
               return (<div style={{ display: 'none' }}>
                    . <Skills_Vertc />
               </div>)
          }
     }

     const result_LandscapeMode = () => {

          if (pageOrientation === 'landscapeMode') {
               return (<div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    // margin: '5vh 0', 
                    // fontSize: 0, border: '1px solid'
               }}>
                    .<Skills_Horiz
                         SW={SW}
                         pathLength={pathLength}
                         Y_position_Percentage={Y_position_Percentage}
                         color={theme.palette.diagram.color} 
                         color_Text={theme.palette.diagram.color_Text}
                         color_circle_IN={theme.palette.diagram.color_circle_IN}
                         color_circle_OUT={theme.palette.diagram.color_circle_OUT}
                         color_Text_Secondary={theme.palette.diagram.color_Text_Secondary}
                    />
               </div>)
          } else {
               return (<div style={{ display: 'none' }}>
                    . <Skills_Horiz />
               </div>)
          }
     }

     // useEffect(() => {
     //      console.log(scroll_Y)
     // }, [scroll_Y]);

     useEffect(() => {


          console.log(Y_position_Percentage)

     }, [Y_position_Percentage])



     return (
          <div className={classes.root}
               style={{
                    backgroundImage: `url('pictures/BG_about.svg')`,
                    // backgroundRepeat: 'repeat',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize:  landscape_Mode ?  windowDimensions.height + 120 : 'auto 100vh' ,
                    height: '100vh'
               }}
          >
               <div className={classes.title_Container}>
                    <Typography variant="h1" align="center">
                         about
                    </Typography>
               </div>
               <div style={{ marginTop: Y_position_Percentage > 0.13 ? -Y_position_Percentage * 25 : 0 }} >
                    { result_PortraitMode()}

                    { result_LandscapeMode()}
               </div>
               {
               Y_position_Percentage > 0.3 &&
                    <div className={classes.downPageText_Container}>
                              front end developer
                    </div>
                    
               }
          </div>
     )

}

export default About



const useStyles = makeStyles((theme) => ({
     root: {
          backgroundColor: '#BFD336',
          // border: '1px solid',
          backgroundRepeat: 'no-repeat',
          // backgroundSize: 221,
          // backgroundPosition: 'center 30px',

          '@media (min-width : 820px)': {
               // backgroundSize: 560,
          },
     },
     title_Container: {

          height: '10vh',

          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'center',

          color: theme.palette.secondary.title,

          '@media (min-width : 370px)': {
               // fontSize: 18,
          },
     },
     downPageText_Container: {

          height: '10vh',

          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '20px 8vw',
          fontSize: 21,
          color: theme.palette.secondary.paragraph,
         

          '@media (min-width : 370px)': {
               // fontSize: 18,
          },
     }
}))