import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Invoice = () => {
  let { id } = useParams();
  const [invoice, setInvoice] = useState();
  const navigate = useNavigate();

  const getInvoice = async () => {
    const response = await (
      await fetch(`http://localhost:4000/invoices/${id}`)
    ).json();

    setInvoice(response.data);
  };

  useEffect(() => {
    getInvoice();
  }, []);

  const onPay = async () => {
    await fetch(`http://localhost:4000/invoices/${id}/payment`, {
      method: "POST",
    });

    navigate("/invoices/payments/success");
  };

  return (
    <>
      {!invoice ? (
        <div className="container center" test-id="loader">
          Loading...
        </div>
      ) : (
        <div className="container" test-id="invoice">
          <h1>{invoice.name}</h1>
          <button onClick={onPay}>Pay</button>
        </div>
      )}
    </>
  );
};

export { Invoice };
