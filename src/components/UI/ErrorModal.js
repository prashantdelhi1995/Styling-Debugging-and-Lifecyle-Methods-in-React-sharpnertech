// Write your code here:
import React from "react"
import Card from "./Card.js"
import Button from "./Button.js"
import "./ErrorModal.css"
const ErrorModal = (props) => {
    return (<div>

<div onClick={props.onConfirm}  className="backdrop"></div>
        <Card className="modal">
        <header className="header">
            <h2>
            {props.title}

            </h2>

        </header>
        <div className=".content">
        <p>{props.message} </p>

        </div>
        <footer>
        <Button onClick={props.onConfirm} className="action">Okay</Button>
        </footer>

    </Card>
    </div>
    )


}
export default ErrorModal