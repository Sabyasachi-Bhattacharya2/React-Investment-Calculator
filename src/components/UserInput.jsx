import {useState} from "react";


export default function UserInput({onChangeInput, userInput}) {



    return (
        <section id='user-input'>
            <div className='input-group'>
                <p>
                    <label>Initial Investment</label>
                    <input
                        type='number'
                        value={userInput.initialInvestment}
                        onChange={
                            e => onChangeInput(
                                "initialInvestment",
                                e.target.value
                            )}
                        required
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type='number'
                        value={userInput.annualInvestment}
                        onChange={
                            e => onChangeInput(
                                "annualInvestment",
                                e.target.value
                            )}
                        required
                    />
                </p>
            </div>
            <div className='input-group'>
                <p>
                    <label>Expected Returns</label>
                    <input
                        type='number'
                        required
                        value={userInput.expectedReturn}
                        onChange={
                            event => onChangeInput(
                                "expectedReturn",
                                event.target.value
                            )}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type='number'
                        required
                        value={userInput.duration}
                        onChange={
                            e => onChangeInput(
                            "duration",
                            e.target.value
                        )}
                    />
                </p>
            </div>
        </section>
    )
}