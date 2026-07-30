import { useState } from "react";
import Container from "@/components/ui/Container";
import Title from "@/components/ui/Title"

type EngineType = "gas" | "diesel" | "hybrid" | "electric";

interface CalculatorData {
    price: number;
    year: number;
    engineType: EngineType;
    engineCapacity: number;
    brokerFee: number;
}

export default function Calculator() {
    const currentYear = new Date().getFullYear();
    const years = Array.from(
        { length: currentYear - 1999 },
        (_, index) => currentYear - index        
    );

    const engineTypes = ["gas", "diesel", "hybrid", "electric"] as const;
    const engineCapacities = ["1.2", "1.6", "1.8", "2.0", "2.5", "3.0", "3.5"] as const;

    const [calculator, setCalculator] = useState<CalculatorData>({
        price: 0,
        year: currentYear,
        engineType: "gas",
        engineCapacity: 2.0,
        brokerFee: 250
    });

    function handleChange<K extends keyof CalculatorData>(key: K, value: CalculatorData[K]) {
        setCalculator(prev => ({
            ...prev, 
            [key]: value
        }));
    }


    function calculateImportDuty(price: number) {
        return price * 0.1;
    }
    function calculateExcise(
        year: number,
        engineType: EngineType,
        engineCapacity: number
    ) {
        
        if(engineType === 'electric') {
            return 0
        }

        const baseRate:number = engineType === 'diesel' ? 70 : 50
        const age = Math.max(1, currentYear - year);

        return baseRate * engineCapacity * age;
    }
    function calculateVat(
        price: number,
        importDuty: number,
        excise: number
    ) {
        return (price + importDuty + excise) * 0.20;
    }
    function calculatePensionFee(pensionFeeValue: number) {
        if(pensionFeeValue < 12200) {
            return pensionFeeValue * 0.03
        }
        
        if(pensionFeeValue > 12200 && pensionFeeValue < 21550) {
            return pensionFeeValue * 0.04
        }

        return pensionFeeValue * 0.5;

    }
    function calculateRegistration() {
        return 1300;
    }
    function calculateTotal(
        price: number,
        importDuty: number,
        excise: number,
        vat: number,
        pensionFee: number,
        registration: number,
        brokerFee: number
    ) {
        return price + importDuty + excise + vat + pensionFee + registration + brokerFee;
    }

    const importDuty = calculateImportDuty(calculator.price);
    const excise = calculateExcise(
        calculator.year,
        calculator.engineType,
        calculator.engineCapacity
    );
    const vat = calculateVat(
        calculator.price,
        importDuty,
        excise
    );
    const pensionFee = calculatePensionFee(
        calculator.price + importDuty + excise + vat
    );
    const registration = calculateRegistration();
    const total = calculateTotal(
        calculator.price,
        importDuty,
        excise,
        vat,
        pensionFee,
        registration,
        calculator.brokerFee
    );
    
    return(
        <section className="calculator pt-24 pb-24 ">
            <Container>
                <Title
                    title="COST CALCULATOR"
                    subtitle="Calculate the delivery of your car"
                />
                <div className="calculator-wrapper w-full lg:flex lg:gap-10">
                    <form className="w-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,#2D2B2B_0%,#1B1A1A_100%)] rounded-lg p-10 text-white" action="">
                        <fieldset className="row mb-7">
                            <label htmlFor="car-year">Year</label>
                            <select name="select-year" value={calculator.year} onChange={(event) => {
                                handleChange("year", Number((event.target.value)))
                            }}>
                                {years.map((year) => (
                                     <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </fieldset>
                        <fieldset className="row flex flex-wrap gap-4 mb-7">
                            <legend className="w-full">Engine Type</legend>
                                {engineTypes.map((type) => (
                                    <div key={type}>
                                        <input type="radio" id={type} name="engine_type" value={type} checked={calculator.engineType === type} onChange={() => {
                                            handleChange("engineType", type)
                                        }} /> 
                                        <label htmlFor={type}>{type}</label>
                                    </div>
                                ))}
                        </fieldset>
                        <fieldset className="row flex flex-wrap gap-4 mb-7">
                            <legend className="w-full">Engine Capacity</legend>
                                {engineCapacities.map((capacity) => (
                                    <div key={capacity}>
                                        <input id={capacity} type="radio" name="engine_capacity" value={capacity} checked={calculator.engineCapacity === Number(capacity)}  onChange={() => {
                                            handleChange("engineCapacity", Number(capacity))
                                        }} /> 
                                        <label htmlFor={capacity}>{capacity}</label>
                                    </div>
                                ))}
                        </fieldset>
                        <fieldset className="row mb-7">
                            <label htmlFor="price">Price</label>
                            <input type="number" name="price" value={calculator.price === 0 ? "" : calculator.price} onChange={(event) => {
                                const price = Number(event.target.value);
                                handleChange("price", price)
                            }}/>
                        </fieldset>
                    </form>
                    <div className="result bg-[radial-gradient(50%_50%_at_50%_50%,#FF7904_0%,#B25009_100%)] rounded-lg p-10 w-1/2">
                        <ul className="payments-list">
                            <li>
                                <div>IMPORT DUTY: {importDuty}</div>
                                <div>Tax for importing a car into the territory of Ukraine.</div>
                            </li>
                            <li>
                                <div>EXCISE: {excise}</div>
                                <div>A fee that depends on the type of engine and volume.</div>
                            </li>
                            <li>
                                <div>VAT: {vat}</div>
                                <div>Value added tax charged upon import.</div>
                            </li>
                            <li>
                                <div>PENSION FEE: {pensionFee}</div>
                                <div>Mandatory payment during the first registration of a car.</div>
                            </li>
                             <li>
                                <div>REGISTRATION: {registration}</div>
                                <div>Payment for car registration and paperwork.</div>
                            </li>
                        </ul>
                        <div>
                            <p>Full cost car: {total}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}