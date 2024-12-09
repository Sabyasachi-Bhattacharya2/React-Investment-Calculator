import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Results({ userInput }) {
    console.log(userInput);

    const annualData = calculateInvestmentResults(userInput);
    return(
        <table id='result'>
           <thead>
            <tr>
               <th>Year</th>
               <th>Interest</th>
               <th>Investment at end Year</th>
               <th>Annual Investment</th>
            </tr>
           </thead>
           <tbody>
            {annualData.map((item, index) => (
                <tr key={index}>
                    <td>{item.year}</td>
                    <td>{formatter.format(item.interest)}</td>
                    <td>{formatter.format(item.valueEndOfYear)}</td>
                    <td>{item.annualInvestment}</td>
                </tr>
            ))}
           </tbody>
        </table>
    )
}