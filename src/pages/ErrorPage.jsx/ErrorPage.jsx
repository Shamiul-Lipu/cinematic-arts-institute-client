import { Link, useRouteError } from 'react-router-dom'
import PrimaryBtn from '../../components/Buttons/PrimaryBtn'
import Lottie from "lottie-react";
import err from '../../assets/wired-lineal-1140-error.json'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section className='flex items-center p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <div className='w-2/4'>
                    <Lottie className="" animationData={err} />
                </div>
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-5xl text-gray-600'>
                        <span className=''>Error</span> {status || 404}
                    </h2>
                    <p className='mb-8 font-extrabold text-2xl text-orange-600'>
                        {error?.message}
                    </p>
                    <Link
                        to='/'
                        className=''
                    >
                        <PrimaryBtn label={'Back To Homepage'}></PrimaryBtn>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage