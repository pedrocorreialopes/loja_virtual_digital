async function checkout() {
  const response = await fetch("https://SEU_BACKEND/api/create-payment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      items: JSON.parse(localStorage.getItem("cart"))
    })
  });

  const data = await response.json();
  window.location.href = data.payment_url;
}
