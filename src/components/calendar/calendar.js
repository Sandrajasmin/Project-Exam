import { useState } from 'react';
import Calendar from 'react-calendar';
import '../../App.css';

function DatePicker() {
    const [date, setDate] = useState(new Date())

    return (
        <div className='flex flex-col items-center'>
            <div className='font-body w-full'>
                {date.length > 0 ? (
                    <div className='flex w-full'>
                        <div className='font-body flex flex-col items-center w-full'>
                            <span className='bg-bluegreen rounded-tl-md text-white w-full text-center py-2'>Check in</span>{' '}
                            <p className='text-center font-light py-2'>                        
                                {date[0].toDateString()}
                            </p>

                        </div>
                        <div className='font-body flex flex-col items-center w-full'>
                            <span className='bg-blue rounded-tr-md text-white w-full text-center py-2'>Check out</span>{' '}
                            <p className='text-center font-light py-2'>
                                {date[1].toDateString()}
                            </p>
                        </div>
                    </div>
                    
                ) : (
                    <div className='flex w-full'>
                        <div className=' font-body flex flex-col items-center w-full'>
                            <span className='bg-bluegreen rounded-tl-md text-white w-full text-center py-2'>Check in</span>{' '}
                            <p className='text-center font-light py-2 border-r-bluegreen border-l-bluegreen border w-full'>                        
                                {date.toDateString()}
                            </p>

                        </div>
                            <div className='font-body flex flex-col items-center w-full'>
                                <span className='bg-blue rounded-tr-md text-white w-full text-center py-2'>Check out</span>{' '}
                                <p className='text-center font-light py-2'>
                                    {date.toDateString()}
                                </p>
                            </div>
                    </div>
                )}
            </div>
            <div className='w-full'>
                <div className="flex border border-bluegreen w-full ">
                    <input
                        type="number"
                        name="maxGuests"
                        id="maxGuests"
                        placeholder='Number of guests'
                        className=" border-0 bg-transparent py-2 pl-5 font-body text-base font-light text-darkgrey focus:ring-0 sm:text-sm sm:leading-6 w-full"
                    />
                </div>
            </div>
            
            <div className='calendar-container pb-10'>
                <Calendar
                    onChange={setDate}
                    value={date}
                    selectRange={true}
                />
            </div>
            <div className='flex w-full flex-col gap-2 font-body px-2'>
                <div className='flex justify-between w-full'>
                    <div className='flex'> 
                        <p>899</p>
                        <p>x</p>
                        <p>15 nights</p>
                    </div>
                    <p>$13485</p>
                </div>
                <div className='flex justify-between'>
                    <p>Cleaning Fee</p>
                    <p>$500</p>
                </div>
                <div className='flex justify-between'>
                    <p>Tax</p>
                    <p>$100</p>
                </div>
                <div className='flex justify-between w-full border-t py-5 border-black font-bold'>
                    <h2>Total</h2>
                    <p>$14 985</p>
                </div>
            </div>
            
        </div>
    )

}

export default DatePicker;