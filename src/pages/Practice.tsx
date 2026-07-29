import { useState } from "react";
import Container from "@/components/ui/Container";

export default function Practice() {
  const [price, setPrice] = useState(0);

  return (
    <Container>
      <div>
        <h1>Practice</h1>
        <input type="number" name="price" value={price === 0 ? "" : price}
          onChange={(event) => {
            setPrice(Number(event.target.value));
          }}
        />
        <p>You entered: {price}</p>
      </div>
    </Container>
  );
}