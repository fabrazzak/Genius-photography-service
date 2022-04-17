import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='py-5'>Q1: Difference between authorization and authentication </h1>
            <table className='col-12 mb-4'>
                <tr >
                    <th className='text-center fs-3 py-2'>Authentication</th>
                    <th className='text-center fs-3 py-2'>Authorization</th>
                </tr>
                <tr  >
                    <td className='fs-4 py-2'>Authentication verifies who the user is.</td>
                    <td className='fs-4 py-2'>	Authorization determines what resources a user can access.</td>

                </tr>
                <tr >
                    <td className='fs-4 py-2 '>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</td>
                    <td className='fs-4 py-2'>Authorization works through settings that are implemented and maintained by the organization.</td>

                </tr>
                <tr >
                    <td className='fs-4 py-2 '>Authentication is the first step of a good identity and access management process.</td>
                    <td className='fs-4 py-2'>Authorization always takes place after authentication.</td>

                </tr>
                <tr >
                    <td className='fs-4 py-2'>Authentication is visible to and partially changeable by the user.</td>
                    <td className='fs-4 py-2'>Authorization isn’t visible to or changeable by the user.</td>

                </tr>

            </table>
            <h1>Q2: Why are you using firebase?What other options do you have to implement authentication? </h1>
            <p className='fs-5'>Ans:Firebase is a toolkit and infrastructure that aims at supporting the process of building better applications and growing a successful business. This technique continues to innovate and dominate the BaaS (Backend as a Service) market. Along with the time, it has grown so much that it has become a key component of Google’s mobile strategy. It was bought by Google and now it is being constantly improved in order to make the user experience much more convenient and productive.

                According to Firebase console, the application SDKs provided by this toolkit, directly interact with backend services.Therefore, there is no need to establish any connection between the app and the service.So, if you operate one of the Firebase database options, you typically write code to query the database in the app.This is distinct from traditional app development.The traditional app development process requires writing both frontend and backend software.The frontend code just implements the API endpoints exposed by the backend, and the backend code actually does the work.However, with Firebase products, traditional backend development is bypassed, putting the work into the client. </p>
            <h5>Firebase competitors</h5>
            <o className="fs-5"><li>Parse – Open Source Backend Platform;</li>
            <li>Back4app – Parse Hosting Platform;</li>
            <li>Kinvey – Mobile Backend as a Service (mBaaS) for the Enterprise;</li>
            <li>Deployd – Simple core library, with a modular API for your application;</li>
            </o>
            <h1 className='pt-4'>Q3: What other services does firebase provide other than authentication? </h1>
            
            <ol className="fs-5 pb-4"><li> Cloud Firestore</li>
                <li>Analytics</li>
                <li>Hosting Options</li>
                <li>Firebase Pricing</li>
            </ol>

        </div>
    );
};

export default Blogs;