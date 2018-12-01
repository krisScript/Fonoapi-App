'use strict';
import './style/index.scss';
import getData from './app/getData/getData';
import createDeviceCard from './app/createDeviceCard/createDeviceCard';
import displayError from './app/displayError/displayError';
const searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', e => {
  e.preventDefault();
 
  const brand = e.target.elements.brand.value;
  const model = e.target.elements.model.value;
   //Put your key here
  const key = '';
  const url = `https://fonoapi.freshpixl.com/v1/getdevice?brand=${brand}&device=${model}&token=${key}`;
  getData(url)
    .then(data => {
      if (data.status === 'error') {
        displayError(data.message);
      } else {
        const devicesSection = document.querySelector('.devices-section');
        if (devicesSection.childElementCount > 0) {
          Array.from(devicesSection.children).forEach(child => child.remove());
        }
        data.forEach(device =>
          devicesSection.appendChild(createDeviceCard(device))
        );
      }

      e.target.reset();
    })
    .catch(error => {
      displayError(error);
    });
});
