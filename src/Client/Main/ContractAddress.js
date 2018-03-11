let contract = null;
const contractDOMContainer = document.getElementById('__contract-address-container');
if (contractDOMContainer) {
    contract = contractDOMContainer.value;
}

export {
    contract
};