import * as React from 'react'
import { Fragment, useEffect, useState } from 'react'

import {
     motion,
     useViewportScroll,
     useSpring,
     useTransform
} from 'framer-motion'
import { useTheme, makeStyles } from '@material-ui/core'

const Menu = ({ Y_position_Percentage, scrollYProgress, windowDimensions, goTo_Home, goTo_About, goTo_Pro }) => {

     const theme = useTheme()
     const classes = useStyles()

     const [pathColor, setPathColor] = useState(theme.palette.primary.menu)


     // const Y = useTransform(scrollYProgress, [-0.2, 1.3], [0.1, 1.2263])
     const Y = useTransform(scrollYProgress, [-0.294, 1], [0, 1.2])

     const pathLength = useSpring(Y, { stiffness: 400, damping: 90 })

     useEffect(() => {
          if (windowDimensions.width < 440) {

               if (Y_position_Percentage <= 0) {
                    setPathColor(theme.palette.primary.menu)
               }
     
               if (Y_position_Percentage > 0) {
                    setPathColor(theme.palette.primary.menu)
               }
     
               if (Y_position_Percentage > 0.01) {
                    setPathColor(theme.palette.secondary.menu)
               }
     
               if (Y_position_Percentage > 0.59) {
                    setPathColor(theme.palette.tertiary.menu)
               }
               
          } else {
               if (Y_position_Percentage <= 0) {
                    setPathColor(theme.palette.primary.menu)
               }
     
               if (Y_position_Percentage > 0) {
                    setPathColor(theme.palette.primary.menu)
               }
     
               if (Y_position_Percentage > 0.48) {
                    setPathColor(theme.palette.secondary.menu)
               }
     
               if (Y_position_Percentage > 0.99) {
                    setPathColor(theme.palette.tertiary.menu)
               }
          }

         


     }, [Y_position_Percentage])




     return (
          <Fragment>
               <svg
                    className={classes.root}
                    style={{ backgroundColor: 'darkgreen'}}

                    version='1.1' x='0' y='0' width='150' height='150' viewBox='0, 0, 105, 73'>
                    <g id='Lines'>
                         <motion.path
                              fill='none'
                              strokeWidth='2.5'
                              stroke={pathColor}

                              style={{'backdrop-filter': 'blur(1px)'}}

                              d="M5.268,21.473 C3.387,18.652 2.889,15.555 3.482,12.263 C4.388,7.225 8.352,3.779 13.474,3.578 C15.336,3.504 17.201,3.486 19.065,3.484 C42.894,3.469 66.724,3.46 90.553,3.458 C91.554,3.458 92.562,3.484 93.556,3.591 C96.622,3.921 99.174,5.249 100.892,7.843 C103.399,11.63 103.63,15.675 101.798,19.796 C100.484,22.751 98.179,24.651 95.031,25.401 C93.818,25.69 92.538,25.819 91.289,25.82 C87.174,25.824 83.059,25.826 78.944,25.828 C57.95,25.816 36.957,25.808 15.963,25.806 C14.962,25.806 13.954,25.833 12.96,25.939 C9.893,26.269 7.342,27.597 5.624,30.192 C3.117,33.979 2.886,38.024 4.718,42.145 C6.032,45.1 8.337,47 11.485,47.749 C12.698,48.038 13.978,48.167 15.227,48.168 C24.38,48.177 33.534,48.179 42.687,48.178 C58.806,48.169 74.924,48.165 91.043,48.18 C92.292,48.181 93.572,48.31 94.785,48.599 C97.933,49.349 100.238,51.249 101.552,54.204 C103.384,58.325 103.153,62.37 100.646,66.157 C98.928,68.751 96.377,70.079 93.31,70.409 C92.316,70.516 91.308,70.542 90.307,70.542 C66.478,70.54 42.648,70.531 18.819,70.516 C16.955,70.514 15.091,70.496 13.228,70.422 C8.107,70.221 4.142,66.775 3.236,61.737 C2.643,58.445 3.141,55.348 5.022,52.527" fillOpacity='0'


                              style={{ pathLength }}
                         />


                    </g>


                    <g id="Let">
                         <g>
                              <path d="M25.642,29.005 C26.397,29.005 27.05,29.005 27.807,29.005 C27.826,29.354 27.86,29.683 27.861,30.013 C27.865,33.366 27.863,36.72 27.863,40.073 C27.863,40.302 27.86,40.532 27.864,40.761 C27.89,41.999 28.285,42.391 29.537,42.396 C30.97,42.402 32.404,42.404 33.837,42.395 C35.002,42.389 35.403,42.002 35.415,40.866 C35.427,39.777 35.428,38.687 35.414,37.599 C35.401,36.554 34.992,36.139 33.955,36.126 C32.751,36.11 31.547,36.124 30.343,36.119 C30.063,36.118 29.783,36.095 29.454,36.08 C29.454,35.327 29.454,34.622 29.454,33.913 C29.493,33.881 29.537,33.816 29.58,33.816 C31.185,33.805 32.793,33.726 34.392,33.813 C36.309,33.917 37.581,35.2 37.706,37.124 C37.796,38.494 37.8,39.878 37.716,41.248 C37.58,43.456 36.163,44.721 33.933,44.737 C32.357,44.748 30.78,44.762 29.204,44.732 C27.466,44.699 26.133,43.716 25.717,42.194 C25.628,41.867 25.591,41.517 25.59,41.177 C25.581,37.336 25.582,33.495 25.585,29.655 C25.585,29.461 25.618,29.267 25.642,29.005 z" fill={pathColor} />
                              <path d="M46.32,44.739 C45.546,44.739 44.772,44.748 43.998,44.737 C41.484,44.7 40.155,42.917 40.237,40.948 C40.285,39.775 40.235,38.598 40.249,37.422 C40.274,35.347 41.636,33.879 43.715,33.801 C45.49,33.735 47.271,33.742 49.047,33.801 C50.929,33.863 52.301,35.256 52.389,37.183 C52.453,38.585 52.446,39.994 52.391,41.396 C52.314,43.327 50.857,44.663 48.814,44.733 C47.983,44.761 47.151,44.738 46.32,44.738 C46.32,44.738 46.32,44.738 46.32,44.739 z M46.273,42.393 C47.131,42.393 47.989,42.414 48.846,42.387 C49.665,42.361 50.053,41.981 50.07,41.16 C50.097,39.903 50.095,38.644 50.072,37.387 C50.056,36.551 49.684,36.15 48.875,36.136 C47.189,36.109 45.501,36.11 43.814,36.134 C42.994,36.146 42.602,36.542 42.585,37.356 C42.558,38.613 42.558,39.872 42.584,41.13 C42.601,41.983 43.003,42.364 43.872,42.389 C44.672,42.412 45.473,42.394 46.273,42.393 z" fill={pathColor} />
                              <path d="M19.046,37.685 C19.046,38.355 19.046,39.021 19.046,39.742 C18.722,39.758 18.443,39.783 18.164,39.785 C17.046,39.79 15.929,39.783 14.811,39.79 C14.555,39.791 14.292,39.796 14.045,39.856 C13.415,40.01 13.035,40.524 13.03,41.176 C13.026,41.791 13.369,42.278 13.974,42.46 C14.189,42.525 14.425,42.538 14.652,42.54 C16.142,42.546 17.632,42.552 19.121,42.54 C20.198,42.531 20.664,42.102 20.69,41.049 C20.72,39.846 20.719,38.642 20.69,37.439 C20.665,36.434 20.194,35.989 19.183,35.979 C17.664,35.965 16.145,35.975 14.627,35.975 C14.315,35.975 14.002,35.975 13.62,35.975 C13.62,35.259 13.62,34.588 13.62,33.845 C13.805,33.826 14.022,33.785 14.24,33.784 C15.873,33.779 17.507,33.769 19.139,33.79 C19.564,33.795 19.999,33.856 20.409,33.967 C21.833,34.354 22.802,35.557 22.843,37.041 C22.883,38.473 22.892,39.907 22.846,41.338 C22.782,43.3 21.398,44.682 19.451,44.729 C17.762,44.769 16.069,44.779 14.381,44.728 C11.842,44.65 10.302,42.507 11.029,40.085 C11.423,38.774 12.286,37.815 13.679,37.716 C15.438,37.591 17.211,37.685 19.046,37.685 z" fill={pathColor} />
                              <path d="M55,33.817 C55.792,33.817 56.468,33.817 57.232,33.817 C57.247,34.143 57.273,34.447 57.274,34.75 C57.279,36.298 57.27,37.846 57.281,39.393 C57.284,39.763 57.304,40.141 57.38,40.501 C57.602,41.543 58.417,42.329 59.467,42.362 C61.21,42.418 62.955,42.378 64.809,42.378 C64.861,41.407 64.829,40.471 64.835,39.537 C64.84,38.592 64.836,37.646 64.836,36.7 C64.836,35.761 64.836,34.821 64.836,33.832 C65.621,33.832 66.325,33.832 67.087,33.832 C67.109,34.048 67.153,34.269 67.153,34.491 C67.158,37.385 67.156,40.279 67.156,43.174 C67.156,43.288 67.16,43.404 67.148,43.517 C67.068,44.311 66.671,44.724 65.871,44.731 C63.779,44.749 61.683,44.814 59.597,44.71 C57.041,44.583 54.973,42.801 54.997,39.922 C55.013,37.919 55,35.915 55,33.817 z" fill={pathColor} />
                              <path d="M69.352,33.765 C70.59,33.765 71.699,33.765 72.908,33.765 C72.908,32.541 72.908,31.383 72.908,30.161 C73.73,30.161 74.452,30.161 75.245,30.161 C75.245,31.355 75.245,32.493 75.245,33.759 C76.067,33.766 76.827,33.776 77.587,33.779 C78.355,33.783 79.123,33.78 79.955,33.78 C79.955,34.579 79.955,35.301 79.955,36.115 C78.394,36.115 76.89,36.115 75.304,36.115 C75.304,39.001 75.304,41.797 75.304,44.666 C74.5,44.666 73.776,44.666 72.937,44.666 C72.937,41.862 72.937,39.045 72.937,36.151 C71.72,36.151 70.613,36.151 69.43,36.151 C69.28,35.354 69.384,34.625 69.352,33.765 z" fill={pathColor} />
                              <path d="M84.539,44.695 C83.788,44.695 83.086,44.695 82.326,44.695 C82.326,39.464 82.326,34.266 82.326,29.022 C83.082,29.022 83.783,29.022 84.539,29.022 C84.539,34.238 84.539,39.414 84.539,44.695 z" fill={pathColor} />
                              <path d="M86.174,36.122 C86.174,35.297 86.174,34.592 86.174,33.78 C86.633,33.78 87.054,33.78 87.475,33.78 C88.591,33.781 89.708,33.761 90.825,33.786 C92.529,33.825 93.825,34.757 94.273,36.248 C94.355,36.518 94.412,36.808 94.414,37.089 C94.427,39.493 94.425,41.899 94.424,44.304 C94.424,44.414 94.391,44.524 94.365,44.685 C93.653,44.685 92.956,44.685 92.15,44.685 C92.15,44.343 92.15,44.038 92.15,43.732 C92.15,41.842 92.15,39.952 92.149,38.063 C92.149,37.834 92.159,37.603 92.139,37.376 C92.06,36.511 91.691,36.144 90.819,36.129 C89.617,36.108 88.414,36.122 87.211,36.122 C86.9,36.121 86.589,36.122 86.174,36.122 z" fill={pathColor} />
                         </g>
                         <g>
                              <path d="M60.865,12.327 C60.94,11.932 60.986,11.688 61.037,11.418 C62.42,11.418 63.77,11.318 65.099,11.443 C66.741,11.598 67.978,12.884 68.037,14.542 C68.125,17.031 68.058,19.525 68.052,22.017 C68.052,22.067 68.005,22.117 67.949,22.231 C67.28,22.231 66.58,22.231 65.75,22.231 C65.75,21.898 65.75,21.594 65.75,21.29 C65.749,19.285 65.754,17.28 65.748,15.274 C65.743,14.033 65.405,13.688 64.174,13.665 C63.407,13.651 62.64,13.662 61.867,13.662 C61.867,16.56 61.867,19.355 61.867,22.223 C61.15,22.223 60.456,22.223 59.677,22.223 C59.657,21.892 59.625,21.588 59.625,21.283 C59.62,19.392 59.624,17.501 59.62,15.61 C59.619,15.296 59.608,14.979 59.568,14.668 C59.501,14.158 59.202,13.81 58.692,13.744 C57.329,13.569 55.966,13.68 54.513,13.684 C54.513,16.586 54.513,19.38 54.513,22.234 C53.747,22.234 53.072,22.234 52.301,22.234 C52.273,21.999 52.219,21.756 52.218,21.512 C52.213,18.618 52.206,15.725 52.219,12.832 C52.224,11.736 52.585,11.388 53.664,11.38 C54.896,11.37 56.128,11.402 57.36,11.37 C58.584,11.337 59.764,11.428 60.865,12.327 z" fill={pathColor} />
                              <path d="M43.511,11.378 C44.285,11.378 45.061,11.412 45.832,11.371 C47.483,11.283 49.296,12.338 49.463,14.818 C49.555,16.188 49.533,17.571 49.464,18.944 C49.369,20.815 48.124,22.131 46.242,22.233 C44.357,22.336 42.457,22.34 40.573,22.235 C38.587,22.125 37.353,20.705 37.325,18.712 C37.308,17.451 37.307,16.189 37.325,14.929 C37.356,12.857 38.76,11.443 40.845,11.385 C41.733,11.36 42.622,11.381 43.511,11.381 C43.511,11.38 43.511,11.379 43.511,11.378 z M43.387,19.991 C44.188,19.991 44.99,20.009 45.79,19.986 C46.735,19.958 47.136,19.552 47.151,18.6 C47.17,17.428 47.169,16.254 47.152,15.081 C47.137,14.116 46.767,13.699 45.809,13.678 C44.208,13.641 42.605,13.643 41.003,13.676 C40.038,13.696 39.659,14.094 39.635,15.06 C39.606,16.232 39.606,17.406 39.635,18.579 C39.66,19.582 40.066,19.965 41.07,19.988 C41.842,20.005 42.614,19.991 43.387,19.991 z" fill={pathColor} />
                              <path d="M74.551,18.403 C74.551,17.672 74.551,17.047 74.551,16.326 C74.879,16.308 75.183,16.277 75.487,16.275 C76.719,16.268 77.952,16.286 79.185,16.264 C80.029,16.248 80.455,15.885 80.584,15.155 C80.73,14.324 80.258,13.683 79.418,13.574 C79.304,13.559 79.189,13.555 79.074,13.555 C77.555,13.554 76.035,13.542 74.516,13.558 C73.41,13.569 72.955,14.026 72.938,15.132 C72.921,16.25 72.924,17.368 72.936,18.486 C72.949,19.631 73.405,20.094 74.569,20.117 C75.715,20.14 76.862,20.123 78.009,20.124 C78.318,20.124 78.628,20.124 78.992,20.124 C78.992,20.866 78.992,21.511 78.992,22.151 C78.88,22.202 78.805,22.266 78.729,22.266 C77.153,22.269 75.573,22.337 74.002,22.243 C72.119,22.129 70.876,20.843 70.777,18.964 C70.706,17.592 70.721,16.211 70.772,14.837 C70.815,13.706 71.239,12.716 72.193,12.019 C72.713,11.638 73.289,11.392 73.942,11.391 C75.805,11.385 77.67,11.35 79.532,11.401 C81.079,11.444 82.394,12.567 82.699,13.979 C83.067,15.682 82.35,17.353 80.915,18.085 C80.638,18.226 80.327,18.384 80.03,18.388 C78.231,18.417 76.432,18.403 74.551,18.403 z" fill={pathColor} />
                              <path d="M26.349,13.661 C26.349,12.865 26.349,12.189 26.349,11.523 C26.408,11.478 26.452,11.416 26.496,11.416 C28.155,11.406 29.817,11.33 31.47,11.418 C33.308,11.516 34.56,12.926 34.599,14.869 C34.644,17.157 34.612,19.446 34.61,21.734 C34.61,21.873 34.576,22.011 34.549,22.22 C33.832,22.22 33.137,22.22 32.326,22.22 C32.326,21.896 32.326,21.591 32.326,21.286 C32.326,19.369 32.326,17.452 32.326,15.536 C32.326,15.335 32.334,15.134 32.318,14.935 C32.252,14.129 31.894,13.749 31.078,13.68 C30.595,13.64 30.106,13.662 29.62,13.661 C28.563,13.66 27.506,13.661 26.349,13.661 z" fill={pathColor} />
                              <path d="M22.587,6.595 C23.298,6.595 23.953,6.595 24.603,6.595 C24.798,7.196 24.85,21.115 24.653,22.25 C24.338,22.265 24.004,22.286 23.67,22.294 C23.329,22.302 22.987,22.296 22.719,22.296 C22.628,22.208 22.607,22.19 22.587,22.169 C22.567,22.149 22.535,22.128 22.532,22.105 C22.51,21.935 22.479,21.765 22.479,21.595 C22.48,16.699 22.485,11.804 22.493,6.908 C22.493,6.828 22.539,6.749 22.587,6.595 z" fill={pathColor} />
                         </g>
                         <g>
                              <path d="M37.284,64.096 C37.284,63.33 37.284,62.654 37.284,61.917 C37.565,61.893 37.812,61.855 38.06,61.853 C39.263,61.846 40.467,61.861 41.671,61.846 C42.88,61.831 43.252,61.447 43.261,60.232 C43.269,59.2 43.269,58.168 43.261,57.136 C43.252,55.915 42.876,55.525 41.682,55.516 C40.22,55.505 38.759,55.504 37.297,55.516 C36.107,55.526 35.71,55.926 35.706,57.138 C35.696,60.291 35.702,63.443 35.702,66.596 C35.702,66.933 35.702,67.27 35.702,67.656 C34.916,67.656 34.218,67.656 33.466,67.656 C33.45,67.337 33.424,67.058 33.424,66.778 C33.422,63.568 33.418,60.358 33.428,57.149 C33.429,56.693 33.428,56.219 33.545,55.785 C33.924,54.367 34.916,53.587 36.321,53.293 C36.544,53.247 36.777,53.23 37.005,53.229 C38.696,53.225 40.388,53.193 42.077,53.239 C44.034,53.292 45.348,54.448 45.501,56.395 C45.624,57.96 45.604,59.548 45.491,61.114 C45.374,62.737 44.137,63.974 42.527,64.072 C40.817,64.177 39.096,64.096 37.284,64.096 z" fill={pathColor} />
                              <path d="M50.582,64.095 C49.771,64.095 49.089,64.095 48.352,64.095 C48.32,63.899 48.264,63.711 48.264,63.524 C48.258,61.26 48.241,58.997 48.267,56.733 C48.29,54.798 49.57,53.368 51.494,53.275 C53.494,53.179 55.503,53.244 57.508,53.244 C57.586,53.244 57.664,53.298 57.789,53.345 C57.789,54.014 57.789,54.689 57.789,55.459 C57.52,55.477 57.247,55.51 56.974,55.51 C55.427,55.515 53.88,55.512 52.333,55.514 C52.104,55.514 51.871,55.507 51.647,55.543 C50.974,55.655 50.655,56.009 50.596,56.699 C50.574,56.955 50.582,57.214 50.582,57.472 C50.581,59.334 50.582,61.197 50.582,63.059 C50.582,63.37 50.582,63.681 50.582,64.095 z" fill={pathColor} />
                              <path d="M65.737,64.199 C64.963,64.199 64.189,64.208 63.415,64.197 C60.902,64.16 59.572,62.378 59.654,60.409 C59.703,59.235 59.652,58.058 59.666,56.883 C59.691,54.807 61.053,53.34 63.132,53.261 C64.908,53.195 66.688,53.202 68.464,53.261 C70.346,53.323 71.718,54.716 71.806,56.643 C71.87,58.045 71.864,59.454 71.808,60.856 C71.732,62.787 70.274,64.123 68.231,64.193 C67.401,64.221 66.569,64.198 65.737,64.198 C65.737,64.198 65.737,64.198 65.737,64.199 z M65.69,61.853 C66.548,61.853 67.407,61.874 68.264,61.847 C69.082,61.822 69.47,61.441 69.488,60.62 C69.515,59.363 69.513,58.104 69.489,56.847 C69.474,56.011 69.101,55.61 68.292,55.596 C66.606,55.569 64.918,55.57 63.232,55.594 C62.412,55.606 62.019,56.002 62.002,56.816 C61.975,58.074 61.976,59.333 62.001,60.59 C62.018,61.443 62.42,61.824 63.289,61.849 C64.089,61.872 64.89,61.854 65.69,61.853 z" fill={pathColor} />
                         </g>
                    </g>


                    <g id="Touch" style={{ cursor: 'pointer' }}>
                         <path d="M15.277,2.554 L90.723,2.554 C97.503,2.554 103,7.479 103,13.554 L103,14.354 C103,20.429 97.503,25.354 90.723,25.354 L15.277,25.354 C8.497,25.354 3,20.429 3,14.354 L3,13.554 C3,7.479 8.497,2.554 15.277,2.554 z"
                              fill-opacity="0"
                              stroke="#6D00FF"
                              stroke-width={0}
                              onClick={goTo_Home}
                         />



                         <path d="M0.875,25.044 L105.25,25.044 L105.25,48.831 L0.875,48.831 L0.875,25.044 z"
                              fill-opacity="0"
                              stroke="#175262"
                              stroke-width={0}
                              onClick={goTo_About}

                         />

                         <path d="M0.875,49.088 L105.25,49.088 L105.25,72.875 L0.875,72.875 L0.875,49.088 z"
                              fill-opacity="0"
                              stroke="#00FF25"
                              stroke-width={0}
                              onClick={goTo_Pro}
                         />
                    </g>
               </svg>
               <div className={ classes.background}/>
          </Fragment >
     )
}


export default Menu

const useStyles = makeStyles((theme) => ({

     root: {
          width: 90,
          height: 90,
          position: 'fixed',
          bottom: 6,
          left: 16,
          zIndex: 20,
          

          '@media (min-width : 440px)': {
               width: 66,
               height: 66,
               top: -2,
               left: 8,
          },
     },
     background: {
          
          zIndex: 10,
          borderRadius: 10,
          backdropFilter: 'blur(0.7px)',

          position: 'fixed',

          width: 86,
          left: 18,

          height: 59,
          bottom: 21,
          '@media (min-width : 440px)': {
               borderRadius: 6,
               backdropFilter : 'blur(0.5px)',

               width: 62,
               left: 10,

               height: 42,
               top: 10,
     }}
}))


