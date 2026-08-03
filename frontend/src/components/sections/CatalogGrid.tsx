import { useState } from "react";
import Container from "@/components/ui/Container";
import Title from "@/components/ui/Title"


export default function CatalogGrid() {
    const cars = [
        {
            id: 1,
            name: "BMW M3",
            price: 50000
        },
        {
            id: 2,
            name: "Toyota Camry",
            price: 25000
        },
        {
            id: 3,
            name: "Toyota Land Cruiser Prado",
            price: 50000
        },
        {
            id: 4,
            name: "Lexus RX 350",
            price: 30000
        },
    ]
    const [car, setCar] = useState(null);

    return(
        <section className="catalog">
            <Container>
                <Title
                    title="Catalog auto"
                    subtitle="Choose you car now."
                />
                <div className="catalog__grid grid grid-cols-3 gap-4">
                    {cars.map((car) => {
                        return (
                            <div className="catalog__card border border-gray-300 p-4 rounded-lg" key={car.id}>
                                <h3 className="catalog__card-title">{car.name}</h3>
                                <p className="catalog__card-price">{car.price} $</p>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}