import { FC } from 'react'

import { LocationSwitcherWrapper } from './styles';
import { usePickUpDropOffContext } from '../../contexts/PickUpDropOffContext';

const LocationSwitcher: FC = () => {
  const { state, locationOneChange, locationTwoChange } = usePickUpDropOffContext();
   
  const swapLocations = (): void => {
    locationOneChange(state.location2);
    locationTwoChange(state.location1);
  };

  return (
    <LocationSwitcherWrapper onClick={swapLocations}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.83584 16.8396H17.4536" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.93188 20.9172L3.83522 16.8394L7.93188 12.7617" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20.1672 6.91109L6.54946 6.91109" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.0711 2.83344L20.1677 6.91121L16.0711 10.989" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.83584 16.8396H17.4536" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.93188 20.9172L3.83522 16.8394L7.93188 12.7617" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20.1672 6.91109L6.54946 6.91109" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.0711 2.83344L20.1677 6.91121L16.0711 10.989" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </LocationSwitcherWrapper>
  )
}

export default LocationSwitcher;