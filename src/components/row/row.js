import React from 'react';

export default function Row({left, right}){
    return(
        <div className="row mt-3">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                {left}
            </div>
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                {right}
            </div>
        </div>
    )
}