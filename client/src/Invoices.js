import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);

  const getInvoices = async () => {
    const response = await (
      await fetch(`http://localhost:4000/invoices`)
    ).json();

    setInvoices(response.data);
  };

  useEffect(() => {
    getInvoices();
  }, []);

  return (
    <>
      {!invoices.length ? (
        <div className="container center" test-id="loader">
          Loading...
        </div>
      ) : (
        <div className="container">
          <h1>Invoices</h1>
          <div test-id="invoices-list">
            {invoices.map((invoice) => (
              <Link
                key={invoice.id}
                to={`/invoices/${invoice.id}`}
                className="invoice-item"
              >
                <div test-id="invoice-item">{invoice.name}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export { Invoices };
