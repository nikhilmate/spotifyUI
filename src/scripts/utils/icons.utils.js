import React from 'react'

export const LoaderIcon = ({ width, height, className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width ? width : '60'}
        height={height ? height : '60'}
        className={className ? className : ''}
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 100 100"
    >
        <g>
            <circle cx="84.908" cy="76.786" r="6" fill="#f3722c">
                <animateTransform
                    attributeName="transform"
                    begin="0s"
                    calcMode="spline"
                    dur="1.4925373134328357s"
                    keySplines="0.5 0 0.5 1"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 50 50;360 50 50"
                ></animateTransform>
            </circle>
            <circle cx="76.786" cy="84.908" r="6" fill="#f3722c">
                <animateTransform
                    attributeName="transform"
                    begin="-0.062s"
                    calcMode="spline"
                    dur="1.4925373134328357s"
                    keySplines="0.5 0 0.5 1"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 50 50;360 50 50"
                ></animateTransform>
            </circle>
            <circle cx="66.838" cy="90.651" r="6" fill="#f3722c">
                <animateTransform
                    attributeName="transform"
                    begin="-0.125s"
                    calcMode="spline"
                    dur="1.4925373134328357s"
                    keySplines="0.5 0 0.5 1"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 50 50;360 50 50"
                ></animateTransform>
            </circle>
            <circle cx="55.743" cy="93.624" r="6" fill="#f3722c">
                <animateTransform
                    attributeName="transform"
                    begin="-0.187s"
                    calcMode="spline"
                    dur="1.4925373134328357s"
                    keySplines="0.5 0 0.5 1"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 50 50;360 50 50"
                ></animateTransform>
            </circle>
            <circle cx="44.257" cy="93.624" r="6" fill="#f3722c">
                <animateTransform
                    attributeName="transform"
                    begin="-0.25s"
                    calcMode="spline"
                    dur="1.4925373134328357s"
                    keySplines="0.5 0 0.5 1"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 50 50;360 50 50"
                ></animateTransform>
            </circle>
            <circle cx="33.162" cy="90.651" r="6" fill="#f3722c">
                <animateTransform
                    attributeName="transform"
                    begin="-0.312s"
                    calcMode="spline"
                    dur="1.4925373134328357s"
                    keySplines="0.5 0 0.5 1"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 50 50;360 50 50"
                ></animateTransform>
            </circle>
            <animateTransform
                attributeName="transform"
                calcMode="spline"
                dur="1.4925373134328357s"
                keySplines="0.5 0 0.5 1"
                repeatCount="indefinite"
                type="rotate"
                values="0 50 50;0 50 50"
            ></animateTransform>
        </g>
    </svg>
)

export const PlayerMenu = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="6" viewBox="0 0 20 6">
        <path fill="#fff" d="M5.2 3A2.4 2.4 0 11.4 3a2.4 2.4 0 014.8 0zm7.2 0a2.4 2.4 0 11-4.8 0 2.4 2.4 0 014.8 0zm4.8 2.4a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8z"></path>
    </svg>
)
export const PlayerSound = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="16"
      viewBox="0 0 20 16"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M9.314.478c.203.083.377.222.499.4.122.18.187.39.187.605V14.53c0 .215-.065.426-.187.604a1.106 1.106 0 01-.499.4 1.134 1.134 0 01-1.21-.235l-4.12-4.03H1.111c-.295 0-.577-.115-.786-.319A1.076 1.076 0 010 10.181V5.832c0-.288.117-.565.325-.769.209-.204.491-.318.786-.318h2.873l4.12-4.03c.155-.153.353-.257.568-.299.216-.042.44-.02.642.062zm5.86-.16c.209-.203.491-.318.786-.318.295 0 .577.115.786.318a10.83 10.83 0 012.41 3.527A10.64 10.64 0 0120 8.007a10.64 10.64 0 01-.843 4.161 10.831 10.831 0 01-2.411 3.527 1.125 1.125 0 01-1.558-.014 1.074 1.074 0 01-.014-1.524 8.657 8.657 0 001.93-2.82 8.505 8.505 0 00.674-3.33c0-2.403-.994-4.576-2.604-6.151a1.076 1.076 0 01-.325-.769c0-.288.117-.565.325-.769zm-3.143 3.075a1.113 1.113 0 01.786-.319 1.132 1.132 0 01.786.32 6.497 6.497 0 011.447 2.115c.335.792.507 1.64.506 2.498a6.387 6.387 0 01-.506 2.497 6.498 6.498 0 01-1.447 2.116 1.124 1.124 0 01-.786.319c-.295 0-.577-.115-.786-.32a1.076 1.076 0 01-.325-.768c0-.289.117-.566.325-.77.414-.403.742-.882.965-1.41a4.25 4.25 0 00.337-1.664c.001-.572-.113-1.137-.337-1.665a4.326 4.326 0 00-.965-1.41 1.086 1.086 0 01-.326-.77 1.067 1.067 0 01.326-.769z"
        clipRule="evenodd"
      ></path>
    </svg>
)
export const PlayerPrevious = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="16"
      viewBox="0 0 25 17"
    >
      <path
        fill="#fff"
        d="M21.712.39A1.6 1.6 0 0124.2 1.72v12.8a1.601 1.601 0 01-2.488 1.332L13 10.044v4.477a1.601 1.601 0 01-2.488 1.33l-9.6-6.4a1.6 1.6 0 010-2.662l9.6-6.4A1.6 1.6 0 0113 1.721v4.476L21.712.39z"
      ></path>
    </svg>
)
export const PlayerTrack = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      viewBox="0 0 48 49"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M24 48.12a24 24 0 100-48 24 24 0 000 48zm-1.335-32.495A2.999 2.999 0 0018 18.12v12a3 3 0 004.665 2.497l9-6a3 3 0 000-4.992l-9-6z"
        clipRule="evenodd"
      ></path>
    </svg>
)
export const PlayerNext = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="15"
      viewBox="0 0 25 17"
    >
      <path
        fill="#fff"
        d="M3.288.39A1.6 1.6 0 00.8 1.72v12.8a1.6 1.6 0 002.488 1.332L12 10.044v4.477a1.601 1.601 0 002.488 1.33l9.6-6.4a1.6 1.6 0 000-2.662l-9.6-6.4A1.6 1.6 0 0012 1.721v4.476L3.288.39z"
      ></path>
    </svg>
)
export const MenuToggle = () => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 224 134"
  >
    <path fill="#FFF"
      d="M28 64a12 12 0 0112-12h176a12 12 0 010 24H40a12 12 0 01-12-12zm12 76h120a12 12 0 000-24H40a12 12 0 000 24zm72 40H40a12 12 0 000 24h72a12 12 0 000-24zm139.494-52.552a12 12 0 01-14.942 8.046L212 128.128V192a36.018 36.018 0 11-24-33.936V112a12 12 0 0115.448-11.494l40 12a12 12 0 018.046 14.942zM188 192a12 12 0 10-12 12 12.013 12.013 0 0012-12z"
      transform="translate(-28 -74)"
    ></path>
  </svg>
)