import React from 'react';
import styled from 'styled-components';

import replyActive from './img/reply_active.svg';
import replyInactive from './img/reply_inactive.svg';

import likeActive from './img/like_active.svg';
import likeInactive from './img/like_inactive.svg';

export const ReplyIcon = styled.img.attrs({ src: ({ inactive }) => (!inactive ? replyActive : replyInactive) })``;
export const LikeIcon = styled.img.attrs({ src: ({ inactive }) => (!inactive ? likeActive : likeInactive) })``;

export const socialColors = {
  facebook: '#4167b2',
  twitter: '#1CA1F2',
  instagram: '#F41476',
  github: '#24292e',
  discord: '#7289DA',
  telegram: '#0088cc',
};

export const socialIcons = {
  github: (props) => <GithubIcon color={socialColors.github} {...props} />,
  twitter: (props) => <TwitterIcon color={socialColors.twitter} {...props} />,
  instagram: (props) => <InstagramIcon color={socialColors.instagram} {...props} />,
  facebook: (props) => <FacebookIcon color={socialColors.facebook} {...props} />,
  discord: (props) => <DiscordIcon color={socialColors.discord} {...props} />,
  telegram: (props) => <TelegramIcon color={socialColors.telegram} {...props} />,
};

export const FacebookIcon = styled.svg.attrs({
  width: '18px',
  height: '28px',
  version: '1.1',
  viewBox: '0 0 18 28',
  children: (
    <g fill="#4167b2" fillRule="nonzero">
      <path d="M5.441274,28 L5.4,15.75 L0,15.75 L0,10.5 L5.4,10.5 L5.4,7 C5.4,2.2764 8.408718,0 12.742884,0 C14.818986,0 16.603308,0.1502725 17.123292,0.2174375 L17.123292,5.1538725 L14.117328,5.1552025 C11.760174,5.1552025 11.303766,6.244175 11.303766,7.84217 L11.303766,10.5 L18,10.5 L16.2,15.75 L11.303748,15.75 L11.303748,28 L5.441274,28 Z" />
    </g>
  ),
})`
  max-width: 100%;
  max-height: 100%;
`;

export const GithubIcon = styled.svg.attrs({
  width: '25px',
  height: '24px',
  version: '1.1',
  viewBox: '0 0 25 24',
  children: (
    <g fill="#222222" fillRule="evenodd">
      <path d="M12.2352941,0 C5.50588235,0 0,5.4 0,12 C0,17.25 3.51764706,21.75 8.41176471,23.4 C9.02352941,23.55 9.17647059,23.1 9.17647059,22.8 C9.17647059,22.5 9.17647059,21.75 9.17647059,20.7 C5.81176471,21.45 5.04705882,19.2 5.04705882,19.2 C4.43529412,17.85 3.67058824,17.4 3.67058824,17.4 C2.6,16.65 3.82352941,16.65 3.82352941,16.65 C5.04705882,16.8 5.65882353,17.85 5.65882353,17.85 C6.72941176,19.8 8.56470588,19.2 9.17647059,18.9 C9.32941176,18.15 9.63529412,17.55 9.94117647,17.25 C7.18823529,16.95 4.43529412,15.9 4.43529412,11.25 C4.43529412,9.9 4.89411765,8.85 5.65882353,8.1 C5.50588235,7.8 5.04705882,6.6 5.81176471,4.95 C5.81176471,4.95 6.88235294,4.65 9.17647059,6.15 C10.0941176,5.85 11.1647059,5.7 12.2352941,5.7 C13.3058824,5.7 14.3764706,5.85 15.2941176,6.15 C17.5882353,4.65 18.6588235,4.95 18.6588235,4.95 C19.2705882,6.6 18.9647059,7.8 18.8117647,8.1 C19.5764706,9 20.0352941,10.05 20.0352941,11.25 C20.0352941,15.9 17.1294118,16.8 14.3764706,17.1 C14.8352941,17.7 15.2941176,18.45 15.2941176,19.5 C15.2941176,21.15 15.2941176,22.35 15.2941176,22.8 C15.2941176,23.1 15.4470588,23.55 16.2117647,23.4 C21.1058824,21.75 24.6235294,17.25 24.6235294,12 C24.4705882,5.4 18.9647059,0 12.2352941,0 Z" />
    </g>
  ),
})`
  max-width: 100%;
  max-height: 100%;
`;

export const InstagramIcon = styled.svg.attrs({
  width: '24px',
  height: '24px',
  version: '1.1',
  viewBox: '0 0 24 24',
  children: (
    <g fill="#F41476" fillRule="evenodd">
      <path d="M12,18 C8.691,18 6,15.309 6,12 C6,8.691 8.691,6 12,6 C15.309,6 18,8.691 18,12 C18,15.309 15.309,18 12,18 Z M12,9 C10.3455,9 9,10.3455 9,12 C9,13.6545 10.3455,15 12,15 C13.6545,15 15,13.6545 15,12 C15,10.3455 13.6545,9 12,9 Z" />
      <path d="M18,24 L6,24 C2.916,24 0,21.084 0,18 L0,6 C0,2.916 2.916,0 6,0 L18,0 C21.084,0 24,2.916 24,6 L24,18 C24,21.084 21.084,24 18,24 Z M6,3 C4.5975,3 3,4.5975 3,6 L3,18 C3,19.4295 4.5705,21 6,21 L18,21 C19.4025,21 21,19.4025 21,18 L21,6 C21,4.5975 19.4025,3 18,3 L6,3 Z" />
    </g>
  ),
})`
  max-width: 100%;
  max-height: 100%;
`;

export const TwitterIcon = styled.svg.attrs({
  width: '30px',
  height: '26px',
  version: '1.1',
  viewBox: '0 0 30 26',
  children: (
    <g fill="#1CA1F2" fillRule="evenodd">
      <path d="M30,3.75 C28.875,4.3125 27.75,4.5 26.4375,4.6875 C27.75,3.9375 28.6875,2.8125 29.0625,1.3125 C27.9375,2.0625 26.625,2.4375 25.125,2.8125 C24,1.6875 22.3125,0.9375 20.625,0.9375 C17.4375,0.9375 14.625,3.75 14.625,7.125 C14.625,7.6875 14.625,8.0625 14.8125,8.4375 C9.75,8.25 5.0625,5.8125 2.0625,2.0625 C1.5,3 1.3125,3.9375 1.3125,5.25 C1.3125,7.3125 2.4375,9.1875 4.125,10.3125 C3.1875,10.3125 2.25,9.9375 1.3125,9.5625 C1.3125,9.5625 1.3125,9.5625 1.3125,9.5625 C1.3125,12.5625 3.375,15 6.1875,15.5625 C5.625,15.75 5.0625,15.75 4.5,15.75 C4.125,15.75 3.75,15.75 3.375,15.5625 C4.125,18 6.375,19.875 9.1875,19.875 C7.125,21.5625 4.5,22.5 1.5,22.5 C0.9375,22.5 0.5625,22.5 0,22.5 C2.8125,24.1875 6,25.3125 9.375,25.3125 C20.625,25.3125 26.8125,15.9375 26.8125,7.875 C26.8125,7.6875 26.8125,7.3125 26.8125,7.125 C28.125,6.1875 29.25,5.0625 30,3.75 Z" />
    </g>
  ),
})`
  max-width: 100%;
  max-height: 100%;
`;

export const DiscordIcon = styled.svg.attrs({
  width: '30px',
  height: '26px',
  version: '1.1',
  viewBox: '0 0 245 240',
  children: (
    <g fill="#7289DA" fillRule="evenodd">
      <path
        className="st0"
        d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
      />
      <path
        className="st0"
        d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"
      />
    </g>
  ),
})`
  max-width: 100%;
  max-height: 100%;
`;

export const TelegramIcon = styled.svg.attrs({
  width: '30px',
  height: '26px',
  version: '1.1',
  viewBox: '0 0 100 100',
  children: (
    <g>
      <circle cx="50" cy="50" fill="#139BD0" r="45" />
      <path
        clipRule="evenodd"
        d="M51.474,60.754c-1.733,1.688-3.451,3.348-5.153,5.021   c-0.595,0.586-1.264,0.91-2.118,0.865c-0.583-0.031-0.909-0.287-1.088-0.84c-1.304-4.047-2.627-8.084-3.924-12.135   c-0.126-0.393-0.312-0.584-0.71-0.707c-3.072-0.938-6.138-1.898-9.199-2.871c-0.471-0.15-0.946-0.346-1.353-0.623   c-0.629-0.426-0.721-1.121-0.157-1.621c0.521-0.461,1.143-0.863,1.789-1.119c3.755-1.488,7.53-2.928,11.299-4.381   c9.565-3.693,19.13-7.383,28.696-11.076c1.819-0.703,3.217,0.287,3.028,2.254c-0.121,1.258-0.447,2.496-0.71,3.738   c-2.077,9.807-4.156,19.615-6.244,29.42c-0.496,2.328-2.131,2.936-4.047,1.523c-3.209-2.365-6.415-4.738-9.622-7.107   C51.808,60.984,51.649,60.877,51.474,60.754z M44.271,63.732c0.036-0.01,0.072-0.02,0.108-0.029   c0.02-0.092,0.049-0.182,0.057-0.273c0.206-2.223,0.424-4.445,0.603-6.672c0.04-0.496,0.21-0.848,0.583-1.182   c2.958-2.645,5.898-5.307,8.844-7.963c3.261-2.941,6.523-5.879,9.772-8.832c0.201-0.182,0.285-0.492,0.423-0.744   c-0.306-0.033-0.634-0.156-0.912-0.084c-0.379,0.098-0.738,0.318-1.076,0.531c-7.197,4.533-14.388,9.074-21.59,13.598   c-0.407,0.256-0.483,0.473-0.328,0.92c0.531,1.525,1.014,3.064,1.515,4.6C42.937,59.646,43.604,61.689,44.271,63.732z"
        fill="#FFFFFF"
        fillRule="evenodd"
      />
    </g>
  ),
})`
  max-width: 100%;
  max-height: 100%;
`;

export const ExternalLink = styled.svg.attrs({
  width: '12px',
  height: '12px',
  version: '1.1',
  viewBox: '0 0 12 12',
  children: (
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" transform="translate(-729.000000, -70.000000)">
      <g transform="translate(729.000000, 70.000000)" fill="currentColor" fillRule="nonzero">
        <path d="M6,0 L6,1.5 L9.4395,1.5 L5.46975,5.46975 L6.53025,6.53025 L10.5,2.5605 L10.5,6 L12,6 L12,0.75 C12,0.336 11.664,0 11.25,0 L6,0 Z" />
        <path d="M12,12 L0.75,12 C0.336,12 0,11.664 0,11.25 L0,0 L1.5,0 L1.5,10.5 L12,10.5 L12,12 Z" />
      </g>
    </g>
  ),
})`
  max-width: 100%;
  max-height: 100%;
`;

export const DiscoverIcon = styled.svg.attrs({
  width: '24px',
  height: '24px',
  version: '1.1',
  viewBox: '0 0 24 24',
  children: (
    <g fill="#264DD9" fillRule="nonzero">
      <path d="M12,0 C5.4,0 0,5.4 0,12 C0,18.6 5.4,24 12,24 C18.6,24 24,18.6 24,12 C24,5.4 18.6,0 12,0 Z M12,21 C7.05,21 3,16.95 3,12 C3,7.05 7.05,3 12,3 C16.95,3 21,7.05 21,12 C21,16.95 16.95,21 12,21 Z" />
      <path d="M15.3,7.2 L10.8,9.3 C10.2,9.75 9.75,10.2 9.45,10.8 L7.35,15.3 C6.9,16.2 7.8,17.1 8.7,16.65 L13.2,14.55 C13.8,14.25 14.4,13.8 14.55,13.2 L16.65,8.7 C17.1,7.8 16.2,6.9 15.3,7.2 Z" />
    </g>
  ),
})`
  max-width: 100%;
  max-height: 100%;
`;

export const AddIcon = styled.svg.attrs({
  width: '32px',
  height: '32px',
  version: '1.1',
  viewBox: '0 0 32 32',
  children: (
    <g fill="#78818c" fill-rule="nonzero">
      <g id="circle-add">
        <path d="M16,0 C7.2,0 0,7.2 0,16 C0,24.8 7.2,32 16,32 C24.8,32 32,24.8 32,16 C32,7.2 24.8,0 16,0 Z M24,18 L18,18 L18,24 L14,24 L14,18 L8,18 L8,14 L14,14 L14,8 L18,8 L18,14 L24,14 L24,18 Z" />
      </g>
    </g>
  ),
})`
  max-width: 100%;
  max-height: 100%;
`;

export const ExclamationMark = styled.svg.attrs({
  width: '48px',
  height: '48px',
  version: '1.1',
  viewBox: '0 0 48 48',
  children: (
    <path
      d="M45,0 L3,0 C1.2,0 0,1.2 0,3 L0,45 C0,46.8 1.2,48 3,48 L45,48 C46.8,48 48,46.8 48,45 L48,3 C48,1.2 46.8,0 45,0 Z M24,36 C22.2,36 21,34.8 21,33 C21,31.2 22.2,30 24,30 C25.8,30 27,31.2 27,33 C27,34.8 25.8,36 24,36 Z M27,27 L21,27 L21,12 L27,12 L27,27 Z"
      id="Shape"
    />
  ),
})`
  max-width: 100%;
  max-height: 100%;
`;

export const SwitcherIcon = styled.svg.attrs({
  width: '48px',
  height: '48px',
  version: '1.1',
  viewBox: '0 0 48 48',
  children: (
    <g id="direction-53">
      <path d="M3,15 L37.8,15 L33.9,18.9 C32.7,20.1 32.7,21.9 33.9,23.1 C34.5,23.7 35.1,24 36,24 C36.9,24 37.5,23.7 38.1,23.1 L47.1,14.1 C48.3,12.9 48.3,11.1 47.1,9.9 L38.1,0.9 C36.9,-0.3 35.1,-0.3 33.9,0.9 C32.7,2.1 32.7,3.9 33.9,5.1 L37.8,9 L3,9 C1.2,9 0,10.2 0,12 C0,13.8 1.2,15 3,15 Z" />
      <path d="M45,33 L10.2,33 L14.1,29.1 C15.3,27.9 15.3,26.1 14.1,24.9 C12.9,23.7 11.1,23.7 9.9,24.9 L0.9,33.9 C-0.3,35.1 -0.3,36.9 0.9,38.1 L9.9,47.1 C10.5,47.7 11.1,48 12,48 C12.9,48 13.5,47.7 14.1,47.1 C15.3,45.9 15.3,44.1 14.1,42.9 L10.2,39 L45,39 C46.8,39 48,37.8 48,36 C48,34.2 46.8,33 45,33 Z" />
    </g>
  ),
})`
  max-width: 100%;
  max-height: 100%;
`;
