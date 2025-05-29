import React from 'react'
import contactImg from "../../assets/contactImg.png"

const Contact = () => {
    const data = [
        {
            title: "PulseConnect Support", body: [
                "TDI City",
                "Mohali, Punjab, India, 140307",
                "+91 8755743400",
                "support@gmail.com"
            ]
        },
        {
            title: "Administrative Inquiries", body: [
                "Satpuli",
                "Rithakhal, Uttarakhand, India, 246172",
                "+91 7017212764",
                "support@gmail.com"
            ]
        },
        {
            title: "Other Administrative Queries", body: [
                "Najibabad",
                "Bijnor, Uttara Pradesh, India, 246763",
                "+91 7060226162",
                "admin@pulseconnect.com"
            ]
        }
    ];

    return (
        <div className='px-64'><br />
            <h1 className='text-center text-3xl font-bold'>Contact Details</h1><br />
            <div className='flex justify-around'>
                <div>
                    {
                        data.map((e) => {
                            return (
                                <>
                                    <p className='text-xl font-bold underline'>{e.title}</p><br />
                                    <code>
                                        {e.body.map((k) => {
                                            return <p className='text-md'>{k}</p>
                                        })}
                                    </code><br />
                                </>
                            )
                        })
                    }
                </div>
                <div>
                    <img src={contactImg} draggable={false} width="80%" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact