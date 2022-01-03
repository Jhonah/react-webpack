import React from "react";
import "./result-show-detail.view.scss";

const ResultShowDetail = ({ name, type, value, error }) => {
    
    return (
        <div className="result-show-detail">
        <input  
            className="result-show-detail_item result-show-detail_btn" 
            data-show-error-message={error}
            data-call-reg-type={name}
            type={type}
            placeholder={name} 
            defaultValue={value}
        />
        </div>
    );   
}

export default ResultShowDetail;