import React from 'react';

function Footer() {
  return (
    <>
      <div className="hidden md:block px-6 py-6 bg-gray-900">
        <div className="flex justify-center items-center">
          <div className="px-4 flex justify-center items-center gap-4">
            <div className="font-[Poppins] font-semibold text-xl text-[#f7407d]">YoungArchitect.in</div>
            <div className="h-10 w-0.5 bg-slate-500"></div>
            <div className="font-[Poppins] text-sm text-slate-600">Made with <a className='text-[#f7407d]'>❤</a> by <a href='https://github.com/arpanghosh2416' target="_blank" className='text-[#f7407d] cursor-pointer hover:text-[#7CFC00]'>Arpan, </a> <a href='https://github.com/mriganka56' target="_blank" className='text-[#f7407d] cursor-pointer hover:text-[#7CFC00]'>Mriganka, </a> <a href='https://github.com/supratim531' target="_blank" className='text-[#f7407d] cursor-pointer hover:text-[#7CFC00]'>Supratim</a> <br/> 
            Copyright © 2023 YoungArchitect.in</div>
            
          </div>
        </div>
      </div>

      <div className="md:hidden px-8 py-6 bg-black">
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="px-4 flex justify-center items-center gap-4">
            <div className="font-[Poppins] font-semibold text-xl text-[#f7407d]">YoungArchitect.in</div>
          </div>
          <div className="font-[Poppins] whitespace-nowrap text-sm text-slate-600">Copyright © 2023 YoungArchitect.in</div>
        </div>
      </div>
    </>
  );
}

export default Footer;