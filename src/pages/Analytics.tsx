import React from 'react'
import styled from 'styled-components'

const AnalyticsText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
    background : red;
`

const Analytics: React.FunctionComponent = () => {
    return (
        <AnalyticsText>
            <div className="container">
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control-plaintext" id="staticEmail" value="email@example.com">
                    </input>
                </div>
            </div>
            <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword">

                    </input>
                </div>
            </div>
            </div>
        </AnalyticsText>
    )
}

export default Analytics