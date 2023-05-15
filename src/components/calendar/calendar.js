// import { useEffect, useState } from 'react';
// import Calendar from 'react-calendar';
// import '../../App.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { bookVenue, fetchSingleVenue } from '../../store/modules/VenueSlice';

// const DatePicker = () => {
//     const [date, setDate] = useState(new Date())
//     const dispatch = useDispatch();
//     const {booking} = useSelector((state) => state.venues.bookVenue)

//     useEffect(() => {
//         dispatch(bookVenue());
//     }, [dispatch]);

//     if (!booking) {
//         return (
//             <div className="flex h-screen items-center justify-center">
//                 <div>Loading...</div>
//             </div>
//         );
//     }

//     const calculatePrice = (dateFrom, dateTo, pricePerNight) => {
//         if (!dateFrom || !dateTo) {
//             return 0;
//         }

//         const start = new Date(dateFrom);
//         const end = new Date(dateTo);

//         if (isNaN(start) || isNaN(end)) {
//             return 0;
//         }

//         const timeDiff = Math.abs(end - start);
//         const numberOfNights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
//         const totalPrice = numberOfNights * pricePerNight;
//         return totalPrice;
//     };

//     return (
//         <div className='flex flex-col items-center'>
//             <div className='font-body w-full'>
//                 {date.length > 0 ? (
//                     <div className='flex w-full'>
//                         <div className='font-body flex flex-col items-center w-full'>
//                             <span className='bg-bluegreen rounded-tl-md text-white w-full text-center py-2'>Check in</span>{' '}
//                             <p className='text-center font-light py-2'>
//                                 {date[0].toDateString()}
//                             </p>

//                         </div>
//                         <div className='font-body flex flex-col items-center w-full'>
//                             <span className='bg-blue rounded-tr-md text-white w-full text-center py-2'>Check out</span>{' '}
//                             <p className='text-center font-light py-2'>
//                                 {date[1].toDateString()}
//                             </p>
//                         </div>
//                     </div>

//                 ) : (
//                     <div className='flex w-full'>
//                         <div className=' font-body flex flex-col items-center w-full'>
//                             <span className='bg-bluegreen rounded-tl-md text-white w-full text-center py-2'>Check in</span>{' '}
//                             <p className='text-center font-light py-2 border-r-bluegreen border-l-bluegreen border w-full'>
//                                 {date.toDateString()}
//                             </p>

//                         </div>
//                             <div className='font-body flex flex-col items-center w-full'>
//                                 <span className='bg-blue rounded-tr-md text-white w-full text-center py-2'>Check out</span>{' '}
//                                 <p className='text-center font-light py-2'>
//                                     {date.toDateString()}
//                                 </p>
//                             </div>
//                     </div>
//                 )}
//             </div>
//             <div className='w-full'>
//                 <div className="flex border border-bluegreen w-full ">
//                     <input
//                         type="number"
//                         name="maxGuests"
//                         id="maxGuests"
//                         placeholder='Number of guests'
//                         className=" border-0 bg-transparent py-2 pl-5 font-body text-base font-light text-darkgrey focus:ring-0 sm:text-sm sm:leading-6 w-full"
//                     />
//                 </div>
//             </div>

//             <div className='calendar-container pb-10'>
//                 <Calendar
//                     onChange={setDate}
//                     value={date}
//                     selectRange={true}
//                 />
//             </div>
//             <div className='flex w-full flex-col gap-2 font-body px-2'>
//                 <div className='flex justify-between w-full'>
//                     {/* <div className='flex'>
//                         <p>{pricePerNight}</p>
//                         <p>x</p>
//                         <p>{numNights} nights</p>
//                     </div>
//                     <p>${totalPrice}</p> */}
//                 </div>
//                 <div className='flex justify-between'>
//                     <p>Cleaning Fee</p>
//                     <p>$500</p>
//                 </div>
//                 <div className='flex justify-between'>
//                     <p>Tax</p>
//                     <p>$100</p>
//                 </div>
//                 <div className='flex justify-between w-full border-t py-5 border-black font-bold'>
//                     <h2>Total</h2>
//                     <p>$14985</p>
//                 </div>
//             </div>
//             <div className=' flex justify-center md:my-1'>
//                 <button className="w-full rounded-md bg-blue px-10 py-2 font-body font-bold text-white drop-shadow-md hover:bg-bluegreen hover:text-black md:w-48">
//                     Book now!
//                 </button>
//             </div>

//         </div>
//     )

// }

// export default DatePicker;
