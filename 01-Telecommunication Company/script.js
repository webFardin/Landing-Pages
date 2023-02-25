/* eslint-disable require-jsdoc */
'use strict';

const ipAddressElem = document.getElementById('ipAddressElem');
const ipIcon = document.getElementById('ipIcon');

async function getIpReq() {
  const req = await fetch('https://api.ipify.org?format=json');
  const reqObj = await req.json();

  req.ok ?
  ipAddressElem.textContent = reqObj.ip :
  ipAddressElem.textContent = 'Error!';
}

window.addEventListener('DOMContentLoaded', async (e) => {
  await getIpReq();
  ipIcon.style.color = navigator.onLine? 'lightgreen' : 'red';

  window.addEventListener('online', async (e) => {
    ipAddressElem.textContent = 'Checking';
    await getIpReq();
    ipIcon.style.color = 'lightgreen';
  });

  window.addEventListener('offline', (e) => {
    ipAddressElem.textContent = 'Offline';
    ipIcon.style.color = 'red';
  });
});

