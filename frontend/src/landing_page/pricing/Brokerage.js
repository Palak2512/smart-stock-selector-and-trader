import React from 'react';
function Brokerage() {
    return ( 
        <div className='container mb-5 p-5 mt-5'>
            <div className='row table-responsive ' style={{ width: '600px' }} >
                <h1 className='fs-3 mt-5 mb-4 '>Intraday and F/O Trading</h1>
                <table className='min-w-full border border-gray-400 border-collapse'>
                    <thead>
                        <th className="border border-gray-400 px-4 py-2">Segment </th>
                        <th className="border border-gray-400 px-4 py-2">Brokerage</th>
                    </thead>
                   <tbody>
                    <tr>
                        <td className=" px-4 py-2 ">Intraday</td>
                        <td className="px-4 py-2 ">₹20 or 0.03% (whichever is lower)</td>
                    </tr>
                     <tr>
                        <td className=" px-4 py-2 ">Future(All segments)</td>
                        <td className=" px-4 py-2 ">₹20 or 0.03% (whichever is lower)</td>
                    </tr>
                     <tr>
                        <td className=" px-4 py-2 ">Options(All segments)</td>
                        <td className=" px-4 py-2 ">Flat ₹20 per executed order</td>
                    </tr>
                   </tbody>
                </table>
            </div>

            <div className='row table-responsive mt-5' style={{ width: '600px' }} >
                <h1 className='fs-3 mt-5 '>AI-Driven Features</h1>
                <p className='mb-4'>(First 3 months free for all new users)</p>
                <table className='min-w-full border border-gray-400 border-collapse'>
                    <thead>
                        <th className="border border-gray-400 px-4 py-2">Feature </th>
                        <th className="border border-gray-400 px-4 py-2">Price after Trial</th>
                    </thead>
                   <tbody>
                    <tr>
                        <td className=" px-4 py-2 ">Smart Stock Recommendations</td>
                        <td className="px-4 py-2 ">₹99/month</td>
                    </tr>
                     <tr>
                        <td className=" px-4 py-2 ">Personalized AI Advisor</td>
                        <td className=" px-4 py-2 ">₹149/month</td>
                    </tr>
                     <tr>
                        <td className=" px-4 py-2 ">Risk Analyzer & Auto Alerts	</td>
                        <td className=" px-4 py-2 ">₹49/month</td>
                    </tr>
                     <tr>
                        <td className=" px-4 py-2 ">All AI Features Bundle</td>
                        <td className=" px-4 py-2 ">₹249/month</td>
                    </tr>
                   </tbody>
                </table>
            </div>

            <div className='row mt-5  p-5 my-5'>
                <div className='col-6   p-5'>
                <h1 className='fs-3 mb-4'>Margin Trading Facility (MTF)</h1>
                    <ul>
                        <li>Interest: ₹40/day per ₹1 lakh (i.e., 0.04% daily)</li>
                        <li>Brokerage on MTF orders: ₹20 or 0.3%, whichever is lower</li>
                        <li>Pledge Charges: ₹15 + GST per requestPledge Charges: ₹15 + GST per request</li>
                    </ul>
                </div>

                <div className='col-6   p-5'>
                <h1 className='fs-3 mb-4'>Account Opening Charges</h1>
                    <ul>
                        <li>Online Demat Account- Free</li>
                        <li>Corporate/NRI Accounts- ₹500 one-time</li>
                    </ul>
                </div>
            </div>

            <div className='row  mb- 5 text-center'>
                <h1 className='fs-4'>Calculate Costs Easily</h1>
                <p className='mb-4 text-muted'>
Use our AI-powered cost calculator to estimate your brokerage, taxes, and total charges in real-time. (Coming Soon)

</p>

            </div>
        </div>
    );
}

export default Brokerage;
