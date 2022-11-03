function submitting() {
    const searchingValue = document.querySelector(".searching-city").value;
    rimer(`${searchingValue}`);
}

document.querySelector(".submitting").addEventListener("click", submitting);