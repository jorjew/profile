export default function Home() {
  return (
    <>
       <div className="bg-purple-700 h-32"></div>
       
        <div className="max-w-4xl mx-auto -mt-16"> 
        <div className="bg-white shadow-lg rounded-lg p-4">
        <div className="flex items-center"></div>
           
          <div className="w-24 h-24">
            <img
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/466657307_1574267493459544_4022526027368134532_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=cjOegaUMd6EQ7kNvgE8hWhV&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1gHI7-WMdKc8Nsq90AwIVFiCp4n8pRU2gcLu6_zxg_gqBQ&oe=67A0DF33"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
                />
           </div>
            <div className="ml-6">
              <h1 className="text-2xl font-semibold">Phongsakron Chuaichoenpradit </h1>
              <p className="text-black">Jew</p>
              <p className="text-gray-500">Front-End Developer</p>
            </div>
            </div>
            <p className="mt-6 text-lg">
            I`m <span className="font-bold">Jew</span>. I`m currently 
            <span className="italic">student</span> passionate about learning
            and developing new skills. I`m particularly interested in front-end
            development, as I enjoy creating visually appealing and
            user-friendly websites and applications.
          </p>
          </div>
         
        <div className="max-w-4xl mx-auto mt-6 grid grid-cols-3 gap-6">
  
           <div className="bg-white shadow-md rounded-lg p-6 border border-gray-300">
              <h2 className="text-lg font-semibold">CONTACT</h2>
              <ul className="mt-2 text-gray-700 space-y-1">
              <li>Email: 66022792@up.ac.th</li>
              <li>Github: https://github.com/jorjew</li>
             <li>FB:Phongsakron J.Chuaichoengpradit</li>
        </ul>

            <h2 className="text-lg font-semibold mt-6">SKILL</h2>
            <ul className="mt-2 text-gray-700 space-y-1">
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind CSS</li>
            <li>Next.js</li>
            <li>Vue.js</li>
        </ul>
  </div>

      <div className="bg-purple-600 text-white shadow-md rounded-lg p-6">
         <h2 className="text-lg font-semibold">Education</h2>
          <p className="mt-2">
              Bachelor of Engineering in<br />
              Software Engineering<br />
              University of Phayao, Thailand<br />
              <span className="italic">Expected Graduation: [2.2]</span>
    </p>
    </div>

       <div className="bg-purple-600 text-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold">Experience</h2>
          <ul className="mt-2 space-y-2">
         <li>Website selling IT equipment (UX/UI)</li>
         <li>Coffee predee restaurant (Front-End HTML/CSS)</li>
         <li>Medies (VueJS)</li>
       </ul>
  </div>
</div>





  
  
          


          
          
          
















    </>
  );
}
