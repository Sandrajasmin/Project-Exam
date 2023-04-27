import React from 'react';

export default function HeroSection() {
    return (
        <div className="flex flex-col lg:flex-row gap-10 py-24 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className='flex flex-col items-center gap-3 lg:w-1/3'>
                <div className=''>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACpElEQVR4nO2ZT4gPURzAP3azPz8RyZ8sy1GJhBzVRqE2inaVHNg2f8pt4yaUE4lEifyrPWj3wMke2OKwyQH5szhJTk5LqxXL2qdXT72m92bezLz5zUvzqe/lN/Pe+35m3nzfm/lBRUVFxf/ADKAD6AosOlRuzgwBItAYcpWYBvwIIGFhie8qRyeOAeMBJC0iIXM6mmZqVVQUQAtwCLgFDAQWfcBhoJ4kIWv0cAAPtUiIYXXBrRwIIEnhGPLOWOmzNPpT4nSatOR0O06k39JohPIYseQkJVOL7Kc8uvOKyOn0VnVUNt3AO5VTapHYExOYDhwBngBf1dbiKbAPaM7Rb38jRZYBr2OqzXNgYegic4EPDqVTTtlZIYtcT7EOnMnQ/3lgomiRJcCvhOSngDfAZWAn2WgB1gEbs4r0AmPAIFAztD0Ys5jeBfYA82kQ/TEiY9qxLYa2lwwSE5ZzbZWuDVgPbAM6gXZgFbDIp8ig+l2W01bH7c3VmLGWAz3ANeAZ8DNhWo4CD4GzwPakYhEnUlNX1yQhuWAYXK4bOouBc8D7lBtEYQj5PD5W61Wzz4e9xzDYbu143bE0iwxx0afIAkPV0kW2FiQhgG8+RVBXxibSVaCI8C0yJ7LtDkLkI3BCLXRpaNU+cbaFICK0crua/JQuIlT9zsuuAiUmo4PdsZw4nvHr+Uqt700FioxGRU57HuCm1veKAkVeRkWWRvZUeeOV1neT576FFjdMc3kN8MBhS+4SU+ri/GOgIJFOGsyOgp6PeqNFmmK+U2WNU5REu5pyPiQ+ZXz398YVT2vHZkqmpt4l8oj0EggzgUcZJY4TGLOB+ykEfod0J0yV7GTM3wdCxWdVKIJnA/DCICArnNzqzCs7wTTIu7NXfR/+AtwD1rq0/AuV0MmJ6+jttgAAAABJRU5ErkJggg==" />
                </div>
                <h2 className='font-subheading text-2xl'>Booking Protection Guarantee</h2>
                <p className='font-body font-light text-base text-center'>In the unlikely event a Host needs to cancel your booking within 30 days of check-in, we’ll find you a similar or better home, or we’ll refund you.</p>
            </div>

            <div className='flex flex-col items-center gap-3 lg:w-1/3'>
                <div className=''>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC+0lEQVR4nNWZW4hNURiAvxnMGZRbCfEit1xySZ7kwbxPYjwiUhhTpomiRE1eRkoNkkle5lVJkRQPlGtoIkqTDM1QIjMlZlzObK1ap6bdOmf/a+219j7z1V+n017r/7+z99rrciAcs4GDwF0dLfq7ccMcoAP4CUSx+A10A4uoYmYCncCIQcAkdAGYRRVRC+wCvggE4vEdaAUm5C2xHnjuIBCPF7qvzJmix8E/DxKlKAJdwLSsHqOdQL9HgXj0Azt0riAC24GegAKmx63Jh9B8oAE4DfRlKBDF4r1+jDfrmsSo4gdyLDxKiAFdYyLvqqDYKCF6JSI+30Sh4o9E5FsVFBolhJp8E+nNoaiiZZu3EpEnGUqoCbAGWAu8tGj3UCJyLSOJXr1CKFEHnBe2vSoR6cxAQr1QNhpyTxa2PysROZKByJkyufcI27dJRLYFlngD1BvyLgAGhX1skYgsDyjxF9hgyKkG/C2LfpZIRCbpHVwIkfYyOQ9Y9DFssxF7ZdHxiC6wK+G6Hv1mirMQ+GG5KhZzWdipunONY9odrnDdakMetUS/Z3lXL8o1YK+gw2JMosRRw7XHy+RpdXg8d9uISAb8pwrtx8o8BSYarlkG/HIQWYolku1sc4LMsP5R4qjB+thBog8Hrgg6HgX2VehjZZnvjzlIRMAlFxHpxJgkE2eV8BAvMoRpTCaiZt8hCxl1zpuEGivPHCUGgQKOdFskksi0O0pE+lF3psEyWSWZdXqL6iqyiZS89iBTsFwtRIaFplqPpaLFIfGoXmrX6JCuFKIysR8PqM3OZ8cCPgIfPJxj1eOJtpTFpIlDeKQuh9OVSB8WersbJbbmINJIIG5mKHGdgMzL6CTyKzCXwDTp12soiVHp4YIPOgKKnCJD1H7iRqBxUUvGqInyvkeJR7Ej1EyZoQtIK/EAmE7OTAXupJC4needMG2YzjlIdJU568qdZn3gkCQw7GtFG5IVCf/Hq/3NGsYJBeBk7O6ozyfS7LvJkcX6vxAV6nMw/gOq2/0NCVSBegAAAABJRU5ErkJggg==" />
                </div>
                <h2 className='font-subheading text-2xl'>Get-What-You-Booked</h2>
                <p className='font-body font-light text-base text-center'>If at any time during your stay you find your listing isnt as advertised</p>
            </div>

            <div className='flex flex-col items-center gap-3 lg:w-1/3'>
                <div className=''>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAByElEQVR4nO2ZTyhEQRzHP8i/Nom4SAknsnJSbo5SEhcnFwfKRdQ+Lg4c5LJXxY38qb0sF8RJlItclJycLDcODkRZTf3Utu3orX3zmtZ863vY99udmc/+Zn7vzTxwcnJyMqRe4Bg4/aPHsURdwC6QAPaBNHAhnxNZTuaID2Gh6mSgusHVSnwYy+VAbJPLiG1yGbFNRZORamAV6NDEqyTeiUWaAs6BqwB8CSwBpWFDRIEvmSZBejRskBEDEGkgViwgngMJKCOfwBhQ7vP3JbKPeQoiI81SeeY1npXO/IAkpeKsafYhiSzvAA3AcqEgLcAL8A48a/wqlWnSB4gCiOS5HnqAuUJBPAFRd1qd1D+8DdzYDLIC3Pr43gKQKmaQKHAg0y80kBp5mMt0O9Cd43q2W6XDXDFVedqAO9MgEeDM0I1L+UEG028aZMIgxI/3gDIgbhLECwFEHbApLQIV8oju1002gmwCjT7WXF2G64EN20BSAbXnORBcRnBTC4vXyL1UrXxUCVzbWLXUu5H1PLwFvNkI4sov/yUjsRBATqSvR5PnWgMhgMTl5OQjoPYGdSVuGjgs4NXxb47Lpq0vgLaOgBkdhJOTUxHrG1j8x/KaaYbUAAAAAElFTkSuQmCC" />
                </div>
                <h2 className='font-subheading text-2xl'>Check-In Guarantee</h2>
                <p className='font-body font-light text-base text-center'>If you can’t check into your home and the Host cannot resolve the issue, we’ll find you a similar or better home for the length of your original stay, or we’ll refund you.</p>
            </div>
        </div>
    );
}
