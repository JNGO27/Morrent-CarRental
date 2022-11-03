import styled from 'styled-components';

const Icon = styled.svg`
  cursor: pointer;
`;

const BellIcon = () => {
  return (
    <Icon
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M29.3399 24.49L28.3399 22.83C28.1299 22.46 27.9399 21.76 27.9399 21.35V18.82C27.9399 16.47 26.5599 14.44 24.5699 13.49C24.0499 12.57 23.0899 12 21.9899 12C20.8999 12 19.9199 12.59 19.3999 13.52C17.4499 14.49 16.0999 16.5 16.0999 18.82V21.35C16.0999 21.76 15.9099 22.46 15.6999 22.82L14.6899 24.49C14.2899 25.16 14.1999 25.9 14.4499 26.58C14.6899 27.25 15.2599 27.77 15.9999 28.02C17.9399 28.68 19.9799 29 22.0199 29C24.0599 29 26.0999 28.68 28.0399 28.03C28.7399 27.8 29.2799 27.27 29.5399 26.58C29.7999 25.89 29.7299 25.13 29.3399 24.49Z"
      fill="#3D5278"
    />
    <path
      d="M24.8299 30.01C24.4099 31.17 23.2999 32 21.9999 32C21.2099 32 20.4299 31.68 19.8799 31.11C19.5599 30.81 19.3199 30.41 19.1799 30C19.3099 30.02 19.4399 30.03 19.5799 30.05C19.8099 30.08 20.0499 30.11 20.2899 30.13C20.8599 30.18 21.4399 30.21 22.0199 30.21C22.5899 30.21 23.1599 30.18 23.7199 30.13C23.9299 30.11 24.1399 30.1 24.3399 30.07C24.4999 30.05 24.6599 30.03 24.8299 30.01Z"
      fill="#3D5278"
    />
    <rect
      opacity="0.8"
      x="0.5"
      y="0.5"
      width="43"
      height="43"
      rx="21.5"
      stroke="#C3D4E9"
      stroke-opacity="0.4"
    />
    <circle cx="36.5" cy="7.5" r="5.5" fill="#FF4423" />
  </Icon>
  )
}
export default BellIcon;