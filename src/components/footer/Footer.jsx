import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-[#101727] text-base-content p-10 ">
        <div className='text-[#FFFFFF]'>
          <h1 className=' text-2xl font-semibold text-[#FFFFFF]'>DigiTools</h1>
          <p>Premium digital tools for creators, <br></br> professionals, and businesses. Work smarter <br></br> with our suite of powerful tools.</p>
        </div>
        <nav className='text-[#FFFFFF]'>
          <h6 className="text-2xl font-semibold text-[#FFFFFF]">Product</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Templates</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav className='text-[#FFFFFF]'>
          <h6 className="text-2xl font-semibold text-[#FFFFFF]">Company</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
        </nav>
        <nav className='text-[#FFFFFF]'>
          <h6 className="text-2xl font-semibold text-[#FFFFFF]">Resources</h6>
          <a className="link link-hover">Documentation</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Community</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className='text-[#FFFFFF]'>
          <h6 className="text-2xl font-semibold text-[#FFFFFF]">Social Links</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns={"http://www.w3.org/2000/svg"}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>

      </footer>
      <footer className='bg-[#101727] text-[#FFFFFF] mx-auto'>
        {/* <div className="divider"></div> */}
        <div className='flex justify-between p-10'>
          <div>
            <p className='text-[#FFFFFF]'>© 2026 Digitools. All rights reserved.</p>
          </div>
          <div className='flex gap-4'>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;



// const Footer = () => {
//   return (
//     <footer className="bg-zinc-950 border-t border-red-900/50 pt-16 pb-10">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
//           {/* Logo & Description */}
//           <div className="md:col-span-5">
//             <div className="flex items-center gap-3 mb-6">

//               <h2 className="text-3xl font-bold tracking-tighter text-white">
//                 DigiTools
//               </h2>
//             </div>

//             <p className="text-zinc-400 text-lg max-w-md">
//               Premium digital tools for creators, <br></br> professionals, and businesses. Work smarter <br></br> with our suite of powerful tools.
//             </p>

//             {/* <div className="mt-8 flex gap-6 text-2xl text-zinc-500">
//                             <a href="#" className="hover:text-red-500 transition-colors"><FaTwitter /></a>
//                             <a href="#" className="hover:text-red-500 transition-colors"><FaGithub /></a>
//                             <a href="#" className="hover:text-red-500 transition-colors"><FaLinkedin /></a>
//                             <a href="#" className="hover:text-red-500 transition-colors"><FaDiscord /></a>
//                             <a href="#" className="hover:text-red-500 transition-colors"><FaYoutube /></a>
//                         </div> */}
//           </div>

//           {/* Quick Links */}
//           <div className="md:col-span-2">
//             <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
//             <ul className="space-y-4 text-zinc-400">
//               <li>
//                 <a href="#" className="hover:text-white transition">
//                   Models
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white transition">
//                   Pricing
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white transition">
//                   Features
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white transition">
//                   API
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="md:col-span-2">
//             <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
//             <ul className="space-y-4 text-zinc-400">
//               <li>
//                 <a href="#" className="hover:text-white transition">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white transition">
//                   Blog
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white transition">
//                   Careers
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white transition">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="md:col-span-3">
//             <h3 className="text-white font-semibold mb-6 text-lg">Legal</h3>
//             <ul className="space-y-4 text-zinc-400">
//               <li>
//                 <a href="#" className="hover:text-white transition">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white transition">
//                   Terms of Service
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white transition">
//                   Cookie Settings
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className='text-[#FFFFFF]'>
//             <h6 className="text-2xl font-semibold text-[#FFFFFF]">Social Links</h6>
//             <div className="grid grid-flow-col gap-4">
//               <a>
//                 <svg
//                   xmlns={"http://www.w3.org/2000/svg"}
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   className="fill-current">
//                   <path
//                     d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
//                 </svg>
//               </a>
//               <a>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   className="fill-current">
//                   <path
//                     d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
//                 </svg>
//               </a>
//               <a>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   className="fill-current">
//                   <path
//                     d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
//           <div>© {new Date().getFullYear()} AI Hub. All rights reserved.</div>

//           <div className="flex gap-6">
//             <a href="#" className="hover:text-red-400 transition">
//               Made with ❤️ for AI enthusiasts
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;