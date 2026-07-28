import Container from "@/components/ui/Container";
import Title from "@/components/ui/Title"

export default function Calculator() {
    const currentYear = new Date().getFullYear();
    const years = Array.from(
        { length: currentYear - 1999 },
        (_, index) => currentYear - index        
    );
    
    return(
        <section className="calculator-section">
            <Container>
                <Title
                    title="COST CALCULATOR"
                    subtitle="Calculate the delivery of your car"
                />
                <div className="calculator-wrapper w-full lg:flex">
                    <form className="w-1/2" action="">
                        <fieldset className="row">
                            <label htmlFor="car-year">Year</label>
                            <select name="select-year" id="">
                                {years.map((year) => (
                                     <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </fieldset>
                        <fieldset className="row flex flex-wrap gap-4">
                            <legend className="w-full">Engine Type</legend>
                            <div>
                                <input type="radio" id="gas" name="engine_type" value="Gas" checked />
                                <label htmlFor="gas">Gas</label>
                            </div>
                            <div>
                                <input type="radio" id="diesel" name="engine_type" value="Diesel" checked />
                                <label htmlFor="diesel">Diesel</label>
                            </div>
                            <div>
                                <input type="radio" id="electric" name="engine_type" value="Electric" checked />
                                <label htmlFor="electric">Electric</label>
                            </div>
                        </fieldset>
                        <fieldset className="row flex flex-wrap gap-4">
                            <legend className="w-full">Engine Capacity</legend>
                            <div>
                                <input type="radio" name="engine_capacity" value="1.2" checked />
                                <label htmlFor="1.2">1.2</label>
                            </div>
                            <div>
                                <input type="radio" name="engine_capacity" value="1.6" checked />
                                <label htmlFor="1.6">1.6</label>
                            </div>
                            <div>
                                <input type="radio" name="engine_capacity" value="1.8" checked />
                                <label htmlFor="1.8">1.8</label>
                            </div>
                            <div>
                                <input type="radio" name="engine_capacity" value="2.0" checked />
                                <label htmlFor="2.0">2.0</label>
                            </div>
                            <div>
                                <input type="radio" name="engine_capacity" value="2.5" checked />
                                <label htmlFor="2.5">2.5</label>
                            </div>
                            <div>
                                <input type="radio" name="engine_capacity" value="3.0" checked />
                                <label htmlFor="3.0">3.0</label>
                            </div>
                            <div>
                                <input type="radio" name="engine_capacity" value="3.5" checked />
                                <label htmlFor="3.5">3.5</label>
                            </div>
                        </fieldset>
                        <fieldset className="row">
                            <label htmlFor="price">Price</label>
                            <input type="number" name="price"/>
                        </fieldset>
                    </form>
                    <div className="result w-1/2">
                        <ul className="payments-list">
                            <li>
                                <div>IMPORT DUTY</div>
                                <div>Tax for importing a car into the territory of Ukraine.</div>
                            </li>
                            <li>
                                <div>EXCISE</div>
                                <div>A fee that depends on the type of engine and volume.</div>
                            </li>
                            <li>
                                <div>VAT</div>
                                <div>Value added tax charged upon import.</div>
                            </li>
                            <li>
                                <div>PENSION FEE</div>
                                <div>Mandatory payment during the first registration of a car.</div>
                            </li>
                             <li>
                                <div>REGISTRATION</div>
                                <div>Payment for car registration and paperwork.</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}