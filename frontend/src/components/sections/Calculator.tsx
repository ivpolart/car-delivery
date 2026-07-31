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
                <div className="calculator-wrapper flex flex-col max-sm:items-center gap-10 justify-center lg:flex lg:flex-row ">
                    <form className="lg:w-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,#2D2B2B_0%,#1B1A1A_100%)] rounded-lg lg:p-10 p-5 text-white flex flex-col grow" action="">
                        <fieldset className="flex flex-col row mb-7">
                            <label className="block mb-2" htmlFor="car-year">Year</label>
                            <select className="bg-[#2D2B2B] text-white p-4 rounded-lg appearance-none" name="select-year" value={calculator.year} onChange={(event) => {
                                handleChange("year", Number((event.target.value)))
                            }}>
                                {years.map((year) => (
                                     <option className="p-4" key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </fieldset>
                        <fieldset className="row flex flex-wrap gap-5 mb-7">
                            <legend className="w-full mb-5">Engine Type</legend>
                                {engineTypes.map((type) => (
                                    <div className="relative" key={type}>
                                        <input type="radio" id={type} name="engine_type" value={type} checked={calculator.engineType === type} onChange={() => {
                                            handleChange("engineType", type)
                                        }}
                                        className="appearance-none absolute"
                                        /> 
                                        <label htmlFor={type} className={`cursor-pointer rounded-lg p-3 transition
                                            ${calculator.engineType === type
                                                ? "bg-orange-500"
                                                : "bg-[#2D2B2B]"
                                            }`}>{type}
                                        </label>
                                    </div>
                                ))}
                        </fieldset>
                        <fieldset className="row flex flex-wrap gap-5 mb-7 grow">
                            <legend className="w-full mb-5">Engine Capacity</legend>
                                {engineCapacities.map((capacity) => (
                                    <div className="relative" key={capacity}>
                                        <input id={capacity} type="radio" name="engine_capacity" value={capacity} checked={calculator.engineCapacity === Number(capacity)}  onChange={() => {
                                            handleChange("engineCapacity", Number(capacity))
                                        }} 
                                        className="appearance-none absolute"
                                        /> 
                                        <label htmlFor={capacity} className={`cursor-pointer rounded-lg p-3 transition
                                            ${calculator.engineCapacity === Number(capacity)
                                                ? "bg-orange-500"
                                                : "bg-[#2D2B2B]"
                                            }`}>{capacity}
                                        </label>
                                    </div>
                                ))}
                        </fieldset>
                        <fieldset className="row mb-7 w-full">
                            <label className="block mb-2" htmlFor="price">Price</label>
                            <input className="bg-[#2D2B2B] text-white p-4 w-full rounded-lg [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="number" name="price" value={calculator.price === 0 ? "" : calculator.price} onChange={(event) => {
                                const price = Number(event.target.value);
                                handleChange("price", price)
                            }}/>
                        </fieldset>
                    </form>
                    <div className="result lg:w-1/2">
                        <ul className="payments-list bg-[radial-gradient(50%_50%_at_50%_50%,#FF7904_0%,#B25009_100%)] rounded-lg lg:p-10 p-5 mb-5">
                            <li className="pb-3 mb-3 border-b border-color-black">
                                <div className="text-2xl font-bold uppercase">IMPORT DUTY: {importDuty}$</div>
                                <div>Tax for importing a car into the territory of Ukraine.</div>
                            </li>
                            <li className="pb-3 mb-3 border-b border-color-black">
                                <div className="text-2xl font-bold uppercase">EXCISE: {excise}$</div>
                                <div>A fee that depends on the type of engine and volume.</div>
                            </li>
                            <li className="pb-3 mb-3 border-b border-color-black">
                                <div className="text-2xl font-bold uppercase">VAT: {vat}$</div>
                                <div>Value added tax charged upon import.</div>
                            </li>
                            <li className="pb-3 mb-3 border-b border-color-black">
                                <div className="text-2xl font-bold uppercase">PENSION FEE: {pensionFee}$</div>
                                <div>Mandatory payment during the first registration of a car.</div>
                            </li>
                             <li>
                                <div className="text-2xl font-bold uppercase">REGISTRATION: {registration}$</div>
                                <div>Payment for car registration and paperwork.</div>
                            </li>
                        </ul>
                        <div className="bg-[radial-gradient(50%_50%_at_50%_50%,#FF7904_0%,#B25009_100%)] rounded-lg p-10">
                            <p className="text-2xl font-bold uppercase">Full cost car: {total}$</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}