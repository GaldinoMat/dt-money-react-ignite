import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
  useEffect(() => {
    api.get("transactions").then((resp) => console.log(resp));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Website development</td>
            <td className="deposit">$12,000</td>
            <td>Development</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="withdrawal">$500</td>
            <td>Fees</td>
            <td>17/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
