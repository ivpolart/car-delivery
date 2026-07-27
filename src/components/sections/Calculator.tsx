export default function Calculator() {
    return(
        <form action="">
            <fieldset>
                <label htmlFor="engine_type">Year</label>
                <select name="" id=""></select>
            </fieldset>
            <fieldset>
                <label htmlFor="engine_type">Engine Type</label>
                <input type="radio" name="engine_type"/>
            </fieldset>
            <fieldset>
                <label htmlFor="engine_capacity">Engine Capacity</label>
                <input type="radio" name="engine_capacity"/>
            </fieldset>
            <fieldset>
                <label htmlFor="price">Price</label>
                <input type="number" name="price"/>
            </fieldset>
        </form>
    )
}