import React from 'react';

interface Props{
  id: string;
}

function GlobalSvgSelector({ id }: Props) {
  switch (id) {
    case 'header-logo':
      return (
        <svg width="256px" height="256px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
              <stop stopColor="#0091E6" offset="0%" />
              <stop stopColor="#0079BF" offset="100%" />
            </linearGradient>
          </defs>
          <g>
            <g>
              <rect fill="url(#linearGradient-1)" x="0" y="0" width="256" height="256" rx="25" />
              <rect fill="#FFFFFF" x="144.64" y="33.28" width="78.08" height="112" rx="12" />
              <rect fill="#FFFFFF" x="33.28" y="33.28" width="78.08" height="176" rx="12" />
            </g>
          </g>
        </svg>
      );
    case 'change-theme':
      return (
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 207.628 207.628"
          xmlSpace="preserve"
        >
          <circle cx="103.814" cy="103.814" r="45.868" />
          <path d="M103.814,157.183c-29.427,0-53.368-23.941-53.368-53.368s23.941-53.368,53.368-53.368s53.368,23.941,53.368,53.368S133.241,157.183,103.814,157.183z M103.814,65.446c-21.156,0-38.368,17.212-38.368,38.368s17.212,38.368,38.368,38.368s38.368-17.212,38.368-38.368S124.97,65.446,103.814,65.446z" />
          <path d="M103.814,39.385c-4.142,0-7.5-3.358-7.5-7.5V7.5c0-4.142,3.358-7.5,7.5-7.5s7.5,3.358,7.5,7.5v24.385C111.314,36.027,107.956,39.385,103.814,39.385z" />
          <path d="M103.814,207.628c-4.142,0-7.5-3.358-7.5-7.5v-24.385c0-4.142,3.358-7.5,7.5-7.5s7.5,3.358,7.5,7.5v24.385C111.314,204.271,107.956,207.628,103.814,207.628z" />
          <path d="M200.128,111.314h-24.385c-4.142,0-7.5-3.358-7.5-7.5s3.358-7.5,7.5-7.5h24.385c4.142,0,7.5,3.358,7.5,7.5S204.271,111.314,200.128,111.314z" />
          <path d="M31.885,111.314H7.5c-4.142,0-7.5-3.358-7.5-7.5s3.358-7.5,7.5-7.5h24.385c4.142,0,7.5,3.358,7.5,7.5S36.027,111.314,31.885,111.314z" />
          <path d="M154.676,60.452c-1.919,0-3.839-0.732-5.303-2.197c-2.929-2.929-2.929-7.678,0-10.606l17.243-17.242c2.929-2.929,7.678-2.93,10.606,0c2.929,2.929,2.929,7.678,0,10.606l-17.243,17.242C158.515,59.72,156.595,60.452,154.676,60.452z" />
          <path d="M35.709,179.419c-1.919,0-3.839-0.732-5.303-2.197c-2.929-2.929-2.929-7.678,0-10.606l17.243-17.243c2.929-2.929,7.678-2.929,10.606,0c2.929,2.929,2.929,7.678,0,10.606l-17.243,17.243C39.548,178.687,37.629,179.419,35.709,179.419z" />
          <path d="M171.918,179.419c-1.919,0-3.839-0.732-5.303-2.197l-17.243-17.243c-2.929-2.929-2.929-7.678,0-10.606c2.929-2.929,7.678-2.929,10.606,0l17.243,17.243c2.929,2.929,2.929,7.678,0,10.606C175.757,178.687,173.838,179.419,171.918,179.419z" />
          <path d="M52.952,60.452c-1.919,0-3.839-0.732-5.303-2.197L30.406,41.013c-2.929-2.929-2.929-7.677,0-10.606c2.929-2.929,7.678-2.93,10.606,0l17.243,17.242c2.929,2.929,2.929,7.677,0,10.606C56.791,59.72,54.872,60.452,52.952,60.452z" />
        </svg>
      );
    default:
      return null;
  }
}

export default GlobalSvgSelector;
